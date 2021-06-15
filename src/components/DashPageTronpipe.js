import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import PipeLayout from "./PipeLayout";

import '../../dashboard.css'
import '../../styles.css'
import '../../rev.css'
import $ from 'jquery'
import Footer from "./Footer";
import { getErrorMessage, getFromStorage, getPageUrl, getPipePrice, getQuery, getParam, goTo, initWallet, saveToStorage, sunToTron, tronToSun } from "../../utils/functions";
import Contract from "../../utils/Contract";
import tronUtil from "../wallet/utils/tronUtil";
import User from "./models/User";
import SiteStats from "./models/SiteStats";
import Pipe from "./models/Pipe";
import { ERROR_CODES, MAX_PIPE_UPGRADE_MINER_SUN_FEE, NET_ERROR, REQUEST_CODES, SIM_LOGIN, STORAGE_KEYS } from "../../utils/contants";
import AdsView from "./AdsView";
import Page from "../Page";
import Swal from "sweetalert2";

export const COMPONENT_KEY = "component"
export const COMPONENTS = {
  adsView: 0
}

//refLinkFromRefId(pipeIdToRefId(pipeId))
class Dashboard extends Page {
  constructor(props) {
    super(props)
    this.initState({fiatValue: 0, locale: "en-US"})
  }

  toLoginPage = () => {
    saveToStorage(STORAGE_KEYS.loginData, "")
    goTo(this, "/login", true)
  }

  componentDidMount() {
    const loginDataRaw = getFromStorage(STORAGE_KEYS.loginData)
    
    if(!loginDataRaw || loginDataRaw == "") {
      this.toLoginPage()

    } else {
      const loginData = JSON.parse(loginDataRaw)
      if(!loginData || !loginData.address || (!tronUtil.isValidAddress(loginData.address) && loginData.address != SIM_LOGIN)) {
        this.toLoginPage()

      } else {
        const msg = getQuery(this, "msg")
        if(msg && msg.length > 0) {
          Swal.fire('', msg, 'success')
        }
        this.setState({address: loginData.address, user: {address: loginData.address}})
        if(loginData.address != SIM_LOGIN) {
          initWallet(() => {
            this.getAccountDetails(true)
          })

        } else {
          initWallet(() => {
            this.setState({simLogin: true})
          })

        }
      }
    }
  }

  getAccountDetails = async (forceRequest) => {
    //console.log("getAccccc", (!(!forceRequest)), this.state.user, "---", !forceRequest && this.state.user)
    //if(!forceRequest && this.state.user) return 
    //console.log("ACC", "GOT hERE")
    this.setState({loading: true})
    const fiatValue = await $.get("https://min-api.cryptocompare.com/data/price?fsym=TRX&tsyms=USD")
    this.setState({fiatValue: fiatValue.USD})

    Contract.getInstance(true)
    .then(async contract => {
        //console.log("TEST", 1, contract)
        const registered = await contract.userExists(this.state.address).call()
        //console.log("TEST", 2, registered)
        if(!registered) {
            this.toLoginPage()

        } else {
          this.setSiteStats()
          this.setUser(contract)
        }
    })
    .catch(e => {
        //console.log("ContractError", getErrorMessage(e))
    })
  }

  setSiteStats = onSet => {
    Contract.getInstance(true)
    .then(async contract => {
        new SiteStats(await contract.getSiteStats().call(), (stats) => {
          console.log("SITE_STATS_DASH_INIT", stats)
          this.setState({siteStats: stats})
        })
    })
    .catch(e => {
        if(getErrorMessage(e, true) == ERROR_CODES.server_error) {
          //server error
          this.setSiteStats(onSet)
  
        } else if(getErrorMessage(e, true) == ERROR_CODES.no_internet) {
          Swal.fire('', NET_ERROR, 'error')
        }
    })
  }

  simToReal = () => {
    const loginAddress = JSON.parse(getFromStorage(STORAGE_KEYS.loginData)).address
    this.setState({address: loginAddress, user: {address: loginAddress}, simLogin: false})
    this.getAccountDetails(true)
  }

  setUser = async (contract, onSet) => {
    try {
      var user = new User(await contract.getUserExt(this.state.address).call())
      user.address = this.state.address

      this.setState({user: user})
      this.sideBar.setState({user: user})
      if(onSet) onSet()

      this.setPipes(user.largestPipeDiameter)

    } catch(e) {
      if(getErrorMessage(e, true) == ERROR_CODES.server_error) {
        //server error
        this.setUser(onSet)

      } else if(getErrorMessage(e, true) == ERROR_CODES.no_internet) {
        Swal.fire('', NET_ERROR, 'error')

      } else {
        this.toLoginPage()
      }
    }
  }

  setPipes = (pipeSize, onSet) => {
    this.getPipes(pipeSize)
    .then(pipes => {
      if(pipes == ERROR_CODES.server_error) {
        this.setPipes(pipeSize)

      } else if(pipes == ERROR_CODES.no_internet) {
        this.setState({upgrading: false})
        Swal.fire('', NET_ERROR, 'error')

      } else {
        console.log("PIPE_SIZE", pipeSize, pipes)
        this.setState({pipes: pipes, upgrading: false})
        if(onSet) onSet()
      }
    })
    .catch(e => {
      this.toLoginPage()
    })
  }


  getPipe = diameter => {
    return new Promise((resolve, reject) => {
      Contract.getInstance(true)
      .then(async contract => {
          const pipe = new Pipe(await contract.getPipeExt(this.state.address, diameter).call())
          resolve(pipe)
      })
      .catch(e => {
          reject(e)
      })
    })
  }

  getPipes = largestPipeDiameter => {
    const promises = []
    for(var i = 1; i <= largestPipeDiameter; i++) {
      promises.push(this.getPipe(i))
    }
    return Promise.all(promises)
    .then(results => {
      console.log("getPipes", results)
      return results
    })
    .catch(e => {
      console.log("getPipesError", e, getErrorMessage(e))
      if(getErrorMessage(e, true) == ERROR_CODES.server_error) {
        return ERROR_CODES.server_error//server error

      } else if(getErrorMessage(e, true) == ERROR_CODES.no_internet) {
        return ERROR_CODES.no_internet

      } else {
        return null
      }
    })
  }

  upgrade = pipeSize => {
    console.log("PIPE_SIZE", pipeSize)
    if(this.state.upgrading) return
    this.setState({upgrading: true})
    //largestPipe = await contract.largestUserPipe(this.state.address).call()
    var user = this.state.user;//new User(await contract.getUserExt(this.state.address).call())
    //user.address = this.state.address
    Contract.getInstance()
    .then(async contract => {
      const accountBalance = await Contract.getWallet().trx.getBalance(Contract.getWallet().defaultAddress.base58)
      const amount = getPipePrice(pipeSize)
      if(this.state.user.address != Contract.getWallet().defaultAddress.base58) {
        var errMsg = `You can only upgrade on this account with the wallet this account was registered with.`
        Swal.fire('', errMsg, 'error')
        this.setState({upgrading: false})

      } else if(Contract.walletType() != Contract.WALLET_TYPES.userInstalled && accountBalance < tronToSun(amount) + MAX_PIPE_UPGRADE_MINER_SUN_FEE) {
        Swal.fire({
            text: `Your account balance of ${sunToTron(accountBalance).toLocaleString(this.state.locale, {minimumFractionDigits: 2, maximumFractionDigits: 2})} TRX is too low for this transaction. ${amount.toLocaleString(this.state.locale, {minimumFractionDigits: 2, maximumFractionDigits: 2})} TRX and a miner fee of ${sunToTron(MAX_PIPE_UPGRADE_MINER_SUN_FEE).toLocaleString(this.state.locale, {minimumFractionDigits: 2, maximumFractionDigits: 2})} TRX is required. Buy some trons and try again.`,
            type: 'error',
            allowOutsideClick: false,
            showConfirmButton: true,
            confirmButtonText: "Buy Now",
            showCancelButton: true,
            cancelButtonText: "Cancel"
        })
        .then(reaction => {
            this.setState({upgrading: false})
            if(reaction.isConfirmed) {
                goTo(this, `/buy/?trx_sun=${tronToSun(amount)}&miner_sun=${MAX_PIPE_UPGRADE_MINER_SUN_FEE}&next=${encodeURIComponent(getPageUrl(this))}`)
            }
            
        })

      } else {
        const result = await contract.buyLargerPipe(pipeSize).send({
          from: Contract.getWallet().defaultAddress.base58,
          callValue: tronToSun(amount)
        })
        //console.log("BUY_P", result)
        if(result) {
            var user = this.state.user
            user.largestPipeDiameter = pipeSize

            this.setState({user: user})
            this.sideBar.setState({user: user})

            this.setSiteStats()

            this.setPipes(pipeSize, () => {
              Swal.fire('', "Upgrade successfull", 'success')
            })
        } else {
            Swal.fire('', "Upgrade failed.", 'error') 
            this.setState({upgrading: false})
        }
      }
    })
    .catch(e => {
      const errorKey = getErrorMessage(e, true)
      if(errorKey == ERROR_CODES.no_wallet) {
        Swal.fire({
          text: `You have to connect your wallet to create a pipe. To connect with Tronpipe browser wallet, click "Connect"`,
          type: "error",
          showDenyButton: true,
          denyButtonText: "Cancel",
          showConfirmButton: true,
          confirmButtonText: "Connect",
          allowOutsideClick: false
        })
        .then(reaction => {
            if(reaction.isConfirmed) {
                const next = getPageUrl(this)
                goTo(this, `/wallet/login?next=${encodeURIComponent(next)}`)

            } else {
                this.setState({upgrading: false})
            }
        })
      }
    })
  }

  render() {
    console.log("window.appWallet", window.appWallet)
    return (
      <div className="show-bg-img">
        <div className="container">
          <Header {...this.props} walletConnected={window.appWallet} />
          <div className="row">
            <SideBar {...this.props} simLogin={this.state.simLogin} ref={ref => this.sideBar = ref } user={this.state.user} fiatValue={this.state.fiatValue} />
            <div className="col-lg-9">
              <div className="border-gradient" style={{marginBottom: "5px"}}>
                Click on the <div class="status-panel_money__eth" style={{position: "unset", display: "inline"}}>
                    Green
                  </div> buttons to learn what the profits or counters they display mean.
              </div>
              <AdsView {...this.props} simLogin={this.state.simLogin} ref={ref => this.adView = ref} user={this.state.user} locale={this.state.locale} />
              <PipeLayout {...this.props} simLogin={this.state.simLogin} simToReal={this.simToReal} userRefreshHandler={this.setUser} user={this.state.user} locale={this.state.locale} upgrading={this.state.upgrading} upgradeHandler={this.upgrade} pipes={this.state.pipes} />
            </div>
          </div>
        </div>
        <Footer stats={this.state.siteStats} fiatValue={this.state.fiatValue} />
      </div>
    );
  }
}

export default Dashboard;
