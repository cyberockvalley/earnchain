import { useDisclosure } from "@chakra-ui/hooks";
import { useToast } from '@chakra-ui/toast';

import DashHeader from "./dashboard/DashHeader";
import DashSideBar from "./dashboard/DashSideBar";
import CommonCSS from "./jsx-styles/CommonCSS";
import DashCSS from "./jsx-styles/DashCSS";
import SlotList from "./dashboard/SlotList";
import SlotPage from "./SlotPage";
import WalletWrapper from "./wallet/WalletWrapper";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import Swal from "sweetalert2";

import earnChainAbi from '../web3/abis/EarnChain.json'
import busdAbi from '../web3/abis/BUSD.json'
import { useDappContract, useTokenContract } from "../web3/hooks/useContract";
import useTranslation from "next-translate/useTranslation";
import { getFromStorage, logOut } from "../utils/f";
import { ERROR_CODES, LOCAL_STORAGE } from "../utils/c";
import { isAddress } from "../web3/utils";
import { useRouter } from "next/router";
import User from "../models/User";
import ContractData from "../models/ContractData";
import Stats from "../models/Stats";
import X3 from "../models/X3";
import X6 from "../models/X6";
import LoadingView from "./status/LoadingView";
import PageTitle from "./PageTitle";

const DashPage = () => {
  const { account, library } = useWeb3React()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {t, lang} = useTranslation("dash")
  const router = useRouter()
  const toast = useToast()
  
  const earnChainContract = useDappContract(earnChainAbi.address, earnChainAbi.abi)
  const busdContract = useTokenContract(busdAbi.address)

  //view data start
  const [contractData, setContractData] = useState()
  const [user, setUser] = useState()
  const [n3, setN3] = useState()
  const [n4, setN4] = useState()
  const [nInfinity, setNInfinity] = useState()
  const [viewSetting, setViewSetting] = useState(false)
  //view data end

  const [buyZoneNumber, setBuyZoneNumber] = useState()
  const [buySlotNumber, setBuySlotNumber] = useState()
  const [moveOn, setMoveOn] = useState()

  const [approveTxHash, setApproveTxHash] = useState("")
  const [upgradeTxHash, setUpgradeTxHash] = useState("")
  const [upgradeInProgress, setUpgradeInProgress] = useState(false)

  const [approved, setApproved] = useState({})
  const [loadingMsg, setLoadingMsg] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const getSlotKey = (zoneNumber, slotNumber) => {
    return `${zoneNumber}:${slotNumber}`
  }

  const logTX = []
  useEffect(() => {
    if(library) {
      if(!logTX.includes(approveTxHash) && approveTxHash && approveTxHash.length > 0) {
        logTX.push(approveTxHash)
        library.once(approveTxHash , (tx) => {
          // Emitted when reg approval txHash has been mined
          console.log("Approval:Hash", tx)
          if(tx.status == 1) {
            //log approved state of the slot so we don't have to check for the approval again
            setApproved({...approved, [getSlotKey(buyZoneNumber, buySlotNumber)]: true})
            buyLevelExtFinal(buyZoneNumber, buySlotNumber)
  
          } else {
            setIsLoading(false)
            toast({
              description: t("common:tx-fail"),
              duration: 4000,
              status: "error",
              isClosable: true
            })
            setBuyZoneNumber(null)
            setBuyZoneNumber(null)
          }
        });
      }
      if(!logTX.includes(upgradeTxHash) && upgradeTxHash && upgradeTxHash.length > 0) {
        logTX.push(upgradeTxHash)
        library.once(upgradeTxHash , (tx) => {
          // Emitted when reg approval txHash has been mined
          console.log("Reg:Hash", tx)
          if(tx.status == 1) {
            setUpgradeInProgress(false)
            setIsLoading(false)
            toast({
              description: t("upgrade-success"),
              status: "success",
              duration: 4000,
              isClosable: true
            })
            clearView()
            setView()
  
          } else {
            setUpgradeInProgress(false)
            setIsLoading(false)
            toast({
              description: t("common:tx-fail"),
              duration: 4000,
              status: "error",
              isClosable: true
            })
          }
        });
      }
    }
  }, [approveTxHash, upgradeTxHash])
  

  useEffect(() => {
    var userAddress = getFromStorage(LOCAL_STORAGE.loginAddress)
    if(!userAddress || !isAddress(userAddress)) {
      logOut(router)

    } else {
      if(earnChainContract && !viewSetting) {
        setViewSetting(true)
        setView()
      }
    }
  }, [earnChainContract])

  useEffect(() => {
    if(buyZoneNumber && buyZoneNumber) {
      buyLevel(buyZoneNumber, buySlotNumber)
    }

  }, [moveOn])

  const onConnectedWallet = () => {
    setMoveOn(!moveOn)
  }

  const clearView = () => {
    //clears the view before update so that loading indicators can be shown
    setUser(null)
    setN3(null)
    setN4(null)
    setNInfinity(null)
  }
  const setView = () => {
    getContractData(cData => {
      if(cData) {
        setContractData(cData)

        getUser(user => {
          if(user) {
            setUser(user)
            
            var n3ToFetch = []
            for(var i = 1; i <= user.biggestX3Slot; i++) {
              n3ToFetch.push(i)
            }
            getZoneSlots(SlotPage.TYPES.n3, user, cData, {}, n3ToFetch, data => {
              console.log("N3-ZONE:", data)
              setN3(data)
            })
            
            var n4ToFetch = []
            for(var i = 1; i <= user.biggestX6Slot; i++) {
              n4ToFetch.push(i)
            }
            getZoneSlots(SlotPage.TYPES.n4, user, cData, {}, n4ToFetch, data => {
              console.log("N4-ZONE:", data)
              setN4(data)
            })
            getZoneSlots(SlotPage.TYPES.nInfinity, user, cData, {}, [], data => setNInfinity(data))
            setViewSetting(false)
          }
        })
      }
    })
  }


  const getContractData = cb => {
    earnChainContract.deployed()
    .then(async instance => {
      var cData = await ContractData.getInstance(instance)
      console.log("ContractData:", cData)
      cb(cData)
    })
    .catch((error) => {
      console.log("getContractData", error)
      cb(null)
      toast({
        description: t("common:conn-error"),
        status: "error",
        duration: 4000,
        isClosable: true
      })
    })
  }
  const getUser = cb => {
    earnChainContract.deployed()
    .then(async instance => {
      const addr = getFromStorage(LOCAL_STORAGE.loginAddress)
      var u = new User(addr, await instance.users(addr))
      console.log("User:", u)
      cb(u)
    })
    .catch((error) => {
      console.log("getUser", error)
      cb(null)
      toast({
        description: t("common:conn-error"),
        status: "error",
        duration: 4000,
        isClosable: true
      })
    })
  }
  
  const getX3Slot = (instance, user, id, price, notActive) => {
    return new Promise(async resolve => {
      let s;
      if(notActive) {
        s = {
          price: price,
          isActive: false,
        }

      } else {
        var addr = getFromStorage(LOCAL_STORAGE.loginAddress)
        s = new X3(user, id, price, await (instance.usersX3Matrix(addr, id)))
      }
      resolve({
        id: id,
        data: s
      })
    })
  }

  const getX6Slot = (instance, user, id, price, notActive) => {
    return new Promise(async resolve => {
      let s;
      if(notActive) {
        s = {
          price: price,
          isActive: false,
        }

      } else {
        var addr = getFromStorage(LOCAL_STORAGE.loginAddress)
        var rawData = {
          partOne: await instance.usersX6Matrix(addr, id),
          partTwo: await instance.usersX6MatrixRest(addr, id)
        }
        s = new X6(user, id, price, rawData)
      }
      resolve({
        id: id,
        data: s
      })
    })
  }

  const getXInfinitySlot = (instance, user, id, price, notActive) => {
    return new Promise(resolve => {
      resolve({
        price: price,
        isActive: false,
      })
    })
  }
  

  const slotZoneToSlotItemGetter = {
    [SlotPage.TYPES.n3]: getX3Slot,
    [SlotPage.TYPES.n4]: getX6Slot,
    [SlotPage.TYPES.nInfinity]: getXInfinitySlot
  }

  const getZoneSlots = (slotType, user, cData, fetched, toFetch, cb) => {
    //if the slots zone is not active
    if(!SlotPage.ACTIVE_TYPES.includes(slotType)) {
      //return an inactive zone data
      cb({notActive: true, list: null})

    } else {
      //set the zone's single slot data fetcher
      const getSlot = slotZoneToSlotItemGetter[slotType]
      earnChainContract.deployed()
      .then(async instance => {
        var prices = cData.slotPrices
        var p = []

        //push all the promises of the slots to fetch into an array of promises
        for(var i = 0; i < toFetch.length; i++) {
          p.push(getSlot(instance, user, toFetch[i], prices[toFetch[i] - 1]))
        }
        
        //get all the slots' promises' results
        var results = await Promise.all(p)
        //empty the list of slots to fetch
        toFetch = []
        var error = false
        //loop through the results
        results.forEach(result => {
          //if the current slot contains data
          if(result.data) {
            //add the data to the fetched slot map
            fetched[result.id] = result.data

          } else {
            //if the slot data is empty, probably as a result of interupted internet connection
            toFetch.push(result.id)
            if(result.error) {
              error = result.error
            }
          }
        });
        if(toFetch.length == 0) {
          var data = []
          for (let index = 0; index < Object.keys(fetched).length; index++) {
          data.push(fetched[index + 1])
            
          }
          
          //crate the in active slots
          for (let index = data.length; index < prices.length; index++) {
            data.push({
              price: prices[index],
              isActive: false,
            })
            
          }
          cb({
            notActive: false,
            list: data
          })

        } else {
          if(error) {
            toast({
              description: t("common:conn-error"),
              status: "error",
              duration: 4000,
              isClosable: true
            })
            setTimeout(() => {
              getZoneSlots(slotType, cData, fetched, toFetch, cb)
            }, 3000);

          } else {
            cb(null)
          }
        }
      })
      .catch((error) => {
        console.log(error)
        cb(null)
        toast({
          description: t("common:conn-error"),
          status: "error",
          duration: 4000,
          isClosable: true
        })
      })
    }
  }

  const buyLevel = (zoneNumber, slotNumber) => {
    //buy_level(1, 11,'TPF71No2yQn4AAmLCyZRK3H7BDPkpizgda' )
    if(!account) {
      setBuyZoneNumber(zoneNumber)
      setBuySlotNumber(slotNumber)
      onOpen()

    } else {
      buyLevelExt(zoneNumber, slotNumber)
    }
  }

  const buyLevelExt = (zoneNumber, slotNumber) => {
    var approvedBUSD = approved[getSlotKey(zoneNumber, slotNumber)]
    if(approvedBUSD) {
      buyLevelExtFinal(zoneNumber, slotNumber)

    } else {
      setLoadingMsg(t("common:checking-approval"))
      setIsLoading(true)

      busdContract.deployed()
      .then(async instance => {
        //check the balance
         var balance = await instance.balanceOf(account)
         var upgradeCost = contractData.slotPrices[slotNumber - 1].contractScaleBigNumber
         //if the balance is upto the upgrade cost
         if(balance.gte(upgradeCost)) {
           //check for approval
           var allowance = await instance.allowance(account, earnChainAbi.address)
           //if the allowance is upto the registration cost
           if(allowance.gte(upgradeCost)) {
             //upgrade
             setApproved({...approved, [getSlotKey(zoneNumber, slotNumber)]: true})
             buyLevelExtFinal(zoneNumber, slotNumber)

           } else {
            //approve BUSD
            approveBUSD(upgradeCost.toString())
            
           }

         } else {
           //notify low balance
           setIsLoading(false)
            Swal.fire({
              title: t("common:low-bal-title"),
              text: t("upgrade-cost-low"),
              confirmButtonText: t("common:ok"),
              icon: "error"
            })
         }
      })
      .catch(e => {
        console.log("ALLO:", e)
        setIsLoading(false)
        toast({
          description: t("common:conn-error"),
          status: "error",
          duration: 4000,
          isClosable: true
        })
      })
    }
  }

  const approveBUSD = (amount) => {
    setIsLoading(false)
    Swal.fire({
      title: t("common:busd-approve-title"),
      text: t("upgrade-approve-text"),
      confirmButtonText: t("common:busd-approve-confirm"),
      cancelButtonText: t("common:no"),
      showCancelButton: true,
      icon: "info"
    })
    .then(ans => {
      if(!ans.isConfirmed) {
        Swal.fire({
          title: t("common:busd-approve-title"),
          text: t("upgrade-disapprove-error"),
          confirmButtonText: t("common:ok"),
          icon: "error"
        })

      } else {
        setLoadingMsg(t("common:approve-progress"))
        setIsLoading(true)
        busdContract.deployed()
        .then(async instance => {
          var approval = await instance.approve(earnChainAbi.address, amount)
          console.log("Approval:EXEC", approval)
          setApproveTxHash(approval.hash)
          setLoadingMsg(t("common:verifying-approval"))
        })
        .catch(({code}) => {
          console.log("ALLO:", code)
          setIsLoading(false)
          if(code == ERROR_CODES.META_MASK_TX_DECLINED) {
            Swal.fire({
              title: t("common:busd-approve-title"),
              text: t("upgrade-disapprove-error"),
              confirmButtonText: t("common:ok"),
              icon: "error"
            })

          } else {
            toast({
              description: t("common:conn-error"),
              status: "error",
              duration: 4000,
              isClosable: true
            })
          }
        })
      }
    })
  }

  const buyLevelExtFinal = (zoneNumber, slotNumber) => {
    if(upgradeInProgress) return
    setUpgradeInProgress(true)
    setLoadingMsg(t("upgrade-in-progress-confirm"))
    setIsLoading(true)

    earnChainContract.deployed().then(async instance => {
      var result = await instance.buyNewLevel(zoneNumber, slotNumber)
      setLoadingMsg(t("upgrade-in-progress"))
      setUpgradeTxHash(result.hash)
      setLoadingMsg(t("verifying-upgrade"))
      
    })
    .catch((error) => {
      const { code } = error
      setIsLoading(false)
      setUpgradeInProgress(false)
      if(code != ERROR_CODES.META_MASK_TX_DECLINED) {
        console.log("ERRR:upgrade", error)
        toast({
          description: t("common:conn-error"),
          status: "error",
          duration: 4000,
          isClosable: true
        })

      } else {
        Swal.fire({
          text: t("upgrade-confirm-upgrade-error"),
          confirmButtonText: t("common:ok"),
          icon: "error"
        })
      }
    })
  }
  

  return (
    <WalletWrapper id="dash-page" isOpen={isOpen} onClose={onClose} onConnected={onConnectedWallet}>
      <LoadingView msg={loadingMsg} isLoading={isLoading} />
      <PageTitle title={t("dashboard")} />
      <div className="container">
        <DashHeader 
        totalUsers={contractData?.stats?.totalUsers} 
        coinEarned={contractData?.stats?.totalBUSDEarned} 
        tokenEarned={contractData?.stats?.totalECTEarned} />
        <div className="row">
          <div className="col-lg-3 mb-4">
            <DashSideBar user={user}></DashSideBar>
          </div>
          <div className="col-lg-9">
            <SlotList name={t("zone-1-name")} type={SlotPage.TYPES.n3} data={n3} buyLevel={buyLevel} 
            latestActiveSlotNumber={user?.biggestX3Slot} />
  
            <div className="row mt-2 mb-5">
              <div className="col">
                <div className="icon-tips">
                  <div className="matrix_reinvest">
                    <i className="matrix-icon_sync" />{" "}
                    <span>NUMBER OF REOPENS</span>
                  </div>
                  <div className="matrix_partners__count">
                    <i className="matrix-icon_users" />{" "}
                    <span>PARTNERS ON THE PLATFORM</span>
                  </div>
                </div>
              </div>
            </div>
  
            <SlotList name={t("zone-2-name")} type={SlotPage.TYPES.n4} data={n4} buyLevel={buyLevel} 
            latestActiveSlotNumber={user?.biggestX6Slot} />
            <SlotList name={t("zone-3-name")} type={SlotPage.TYPES.nInfinity} data={nInfinity} 
            buyLevel={buyLevel} 
            latestActiveSlotNumber={user?.biggestXInfinitySlot} />
            
            <div className="row icon-tips text-left mt-3">
              <div className="col-md-6">
                <div>
                  <i className="matrix-single matrix-children__active" />
                  <span className="icon-tips_text">PARTNER INVITED BY YOU</span>
                </div>
                <div>
                  <i className="matrix-single matrix-children__overflow" />
                  <span className="icon-tips_text">OVERFLOW FROM UP</span>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <i className="matrix-single matrix-children__overflow_partner" />
                  <span className="icon-tips_text">BOTTOM OVERFLOW</span>
                </div>
                <div>
                  <i className="matrix-single matrix-children__advance" />
                  <span className="icon-tips_text">
                    PARTNER WHO IS AHEAD OF HIS INVITER
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DashCSS isGlobal />
      <CommonCSS isGlobal />
    </WalletWrapper>
    )
}

export default DashPage;
