import Head from 'next/head'
import { useDisclosure } from "@chakra-ui/hooks";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useDappContract, useTokenContract } from "../web3/hooks/useContract";
import AuthCSS from "./jsx-styles/AuthCSS";
import Link from "./views/Link";
import WalletModal from "./wallet";
import WalletWrapper from "./wallet/WalletWrapper";

import earnChainAbi from '../web3/abis/EarnChain.json'
import busdAbi from '../web3/abis/BUSD.json'
import useTranslation from "next-translate/useTranslation";
import Trans from 'next-translate/Trans'
import { Text } from "@chakra-ui/layout";
import { getFromStorage, getRefUserId, saveRefUserId, saveToStorage, textIsNumber } from '../utils/f';
import MatrixHeader from './MatrixHeader';
import PageTitle from './PageTitle';
import { useWeb3React } from '@web3-react/core';
import { useToast } from '@chakra-ui/toast';
import LoadingView from './status/LoadingView';
import { ADDRESS_ZERO, ERROR_CODES, EVENTS_FILTERS, LOCAL_STORAGE, REG_COST_STRING } from '../utils/c';
import { BigNumber } from '@ethersproject/bignumber';
import { useRouter } from 'next/router'
import { Box } from '@chakra-ui/layout';

const RegPage = () => {
  const { t } = useTranslation('reg')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  const router = useRouter()

  const { account, library } = useWeb3React()

  const earnChainContract = useDappContract(earnChainAbi.address, earnChainAbi.abi)
  const busdContract = useTokenContract(busdAbi.address)

  const [loadingMsg, setLoadingMsg] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const [approved, setApproved] = useState(false)

  const [uplineId, setUplineId] = useState(getRefUserId())
  const [uplineAddress, setUplineAddress] = useState()
  const [uplineAccepted, setUplineAccepted] = useState(0)

  const [regStatusChecked, setRegStatusChecked] = useState(false)
  const [hasReg, setHasReg] = useState(false)
  const [regInProgress, setRegInProgress] = useState(false)

  const [regApproveTxHash, setRegApproveTxHash] = useState("")
  const [regTxHash, setRegTxHash] = useState("")

  const logTX = []

  useEffect(() => {
    setUplineId(getRefUserId())
    var userAddress = getFromStorage(LOCAL_STORAGE.loginAddress)
    if(userAddress && userAddress.length > 0) login()
  }, [])

  useEffect(() => {/*
    library.on(EVENTS_FILTERS.busd.approve, () => {
      // do whatever you want here
      // I'm pretty sure this returns a promise, so don't forget to resolve it
    })*/
    /*
    library.on(EVENTS_FILTERS.earnChain.reg, (log, event) => {
      // do whatever you want here
      // I'm pretty sure this returns a promise, so don't forget to resolve it
      console.log("RegEvent:", "log:", log, "event:", event)
    })*/
  }, [library])

  useEffect(() => {
    if(library) {
      if(!logTX.includes(regApproveTxHash) && regApproveTxHash && regApproveTxHash.length > 0) {
        logTX.push(regApproveTxHash)
        library.once(regApproveTxHash , (tx) => {
          // Emitted when reg approval txHash has been mined
          console.log("Approval:Hash", tx)
          if(tx.status == 1) {
            setApproved(true)
            regExt(uplineAddress)
  
          } else {
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
      if(!logTX.includes(regTxHash) && regTxHash && regTxHash.length > 0) {
        logTX.push(regTxHash)
        library.once(regTxHash , (tx) => {
          // Emitted when reg approval txHash has been mined
          console.log("Reg:Hash", tx)
          if(tx.status == 1) {
            login()
  
          } else {
            setRegInProgress(false)
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
  }, [regApproveTxHash, regTxHash])

  console.log("QUERY::", uplineId, textIsNumber(uplineId, [0]))

  const handleRegClick = () => {
    
    if(!account) {
      onOpen()

    } else if(!regStatusChecked) {
      checkRegStatus()

    } else if(hasReg) {
      login()
      
    } else {
      startRegProcess()
    }
  }

  const startRegProcess = () => {
    if(!textIsNumber(uplineId, [0])) {
      requestUplineId()
      
    } else if(!uplineAddress) {
      checkUplineId()

    } else {
      regApproveCheck(uplineAddress)
    }
  }

  const checkRegStatus = () => {
    setLoadingMsg(t("checking-reg-status"))
    setIsLoading(true)
    earnChainContract.deployed().then(async instance => {
      var status = await instance.isUserExists(account)
      setRegStatusChecked(true)
      setIsLoading(false)
      if(status) {
        setHasReg(true)
        Swal.fire({
          text: t("already-reg"),
          icon: "info",
          confirmButtonText: t("yes-sign-in"),
          cancelButtonText: t("common:cancel"),
          showCancelButton: true
        })
        .then(result => {
          if(result.isConfirmed) {
            login()
          }
        })

      } else {
        setHasReg(false)
        startRegProcess()
      }
    })
    .catch(e => {
      console.log("ADDR_OF_ID_E:", e)
      setIsLoading(false)
      toast({
        description: t("common:conn-error"),
        status: "error",
        duration: 4000,
        isClosable: true
      })
    })
  }

  const requestUplineId = () => {
    setUplineAccepted(0)
    Swal.fire({
      title: t("enter-upline-id"),
      input: "text",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
            return t("pls-enter-upline-id")

        } else if(!textIsNumber(value, [0])) {
          return t("pls-enter-valid-upline-id")

        } else {
          Swal.close()
          setUplineId(value)
          getAddressAndReg(value)
        }
      }
    })
  }

  const checkUplineId = () => {
    console.log("uplineAccpted:", uplineAccepted, "uplineId:", uplineId)
    return
    if(uplineAccepted != uplineId) {
      Swal.fire({
        title: t("upline-confirmation-title"),
        text: `${t("upline-confirmation-text")}: ${uplineId}`,
        confirmButtonText: t("common:yes-proceed"),
        cancelButtonText: t("no-change-upline"),
        showCancelButton: true,
        icon: "warning"
      })
      .then(result => {
        if(result.isConfirmed) {
          getAddressAndReg(uplineId)

        } else {
          requestUplineId()
        }
      })

    } else {
      getAddressAndReg(uplineId)

    }
  }
  

  const getAddressAndReg = (id) => {
    setLoadingMsg(t("checking-upline-id"))
    setIsLoading(true)
    earnChainContract.deployed().then(async instance => {
      var result = await instance.idToAddress(id)
      console.log(id, "ADDR_OF_ID:", result)
      setIsLoading(false)
      if(result == ADDRESS_ZERO) {
        Swal.fire({
          text: t("pls-enter-valid-upline-id"),
          icon: "error",
          confirmButtonText: t("common:ok")
        })
        .then(() => {
          requestUplineId()
        })

      } else {
        setUplineId(id)
        setUplineAccepted(id)
        saveRefUserId(id)
        setUplineAddress(result)
        regApproveCheck(result)
      }
    })
    .catch(e => {
      console.log("ADDR_OF_ID_E:", e)
      setIsLoading(false)
      toast({
        description: t("common:conn-error"),
        status: "error",
        duration: 4000,
        isClosable: true
      })
    })
  }

  const regApproveCheck = (address) => {
    if(approved) {
      regExt(address)

    } else {
      setLoadingMsg(t("common:checking-approval"))
      setIsLoading(true)

      busdContract.deployed()
      .then(async instance => {
        //check the balance
         var balance = await instance.balanceOf(account)
         //if the balance is upto the registration cost
         if(balance.gte(BigNumber.from(REG_COST_STRING))) {
           //check for approval
           var allowance = await instance.allowance(account, earnChainAbi.address)
           //if the allowance is upto the registration cost
           if(allowance.gte(BigNumber.from(REG_COST_STRING))) {
             //register
             setApproved(true)
             regExt(address)

           } else {
            //approve BUSD
            approveReg()
            
           }

         } else {
           //notify low balance
           setIsLoading(false)
            Swal.fire({
              title: t("common:low-bal-title"),
              text: t("reg-cost-low"),
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

  const approveReg = () => {
    setIsLoading(false)
    Swal.fire({
      title: t("common:busd-approve-title"),
      text: t("reg-approve-text"),
      confirmButtonText: t("common:busd-approve-confirm"),
      cancelButtonText: t("common:no"),
      showCancelButton: true,
      icon: "info"
    })
    .then(ans => {
      if(!ans.isConfirmed) {
        Swal.fire({
          title: t("common:busd-approve-title"),
          text: t("reg-disapprove-error"),
          confirmButtonText: t("common:ok"),
          icon: "error"
        })

      } else {
        setLoadingMsg(t("common:approve-progress"))
        setIsLoading(true)
        busdContract.deployed()
        .then(async instance => {
          var approval = await instance.approve(earnChainAbi.address, REG_COST_STRING)
          console.log("Approval:EXEC", approval)
          setRegApproveTxHash(approval.hash)
          setLoadingMsg(t("common:verifying-approval"))
        })
        .catch(({code}) => {
          console.log("ALLO:", code)
          setIsLoading(false)
          if(code == ERROR_CODES.META_MASK_TX_DECLINED) {
            Swal.fire({
              title: t("common:busd-approve-title"),
              text: t("reg-disapprove-error"),
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

  const login = () => {
    if(account) saveToStorage(LOCAL_STORAGE.loginAddress, account)
    router.push("/dashboard")
  }

  const regExt = (address) => {
    if(regInProgress) return
    setRegInProgress(true)
    setLoadingMsg(t("reg-in-progress-confirm"))
    setIsLoading(true)
    earnChainContract.deployed().then(async instance => {
      var result = await instance.registrationExt(address)
      setLoadingMsg(t("reg-in-progress"))
      setRegTxHash(result.hash)
      setRegStatusChecked(false)
      setLoadingMsg(t("verifying-reg"))
      
    })
    .catch(({code}) => {
      setRegInProgress(false)
      setIsLoading(false)
      if(code != ERROR_CODES.META_MASK_TX_DECLINED) {
        toast({
          description: t("common:conn-error"),
          status: "error",
          duration: 4000,
          isClosable: true
        })

      } else {
        Swal.fire({
          text: t("reg-confirm-reg-error"),
          confirmButtonText: t("common:ok"),
          icon: "error"
        })
      }
    })
  }

  return (
    <WalletWrapper as="div" id="reg-page" isOpen={isOpen} onClose={onClose} onConnected={handleRegClick}>
      <LoadingView msg={loadingMsg} isLoading={isLoading} />
      <PageTitle title={t('reg-title')} />
      <MatrixHeader />
      <div className="wrapper" id="wrapper">
        <Box as="div" py="15px" bg="#fff" className="container registercontainer">
          <div className="default-title revealator-slideleft revealator-once revealator-within">
            <Text as="h2" color="#9e9e9e !important" className="text-center" textTransform="capitalize">{t('reg-title-short')}</Text>
          </div>
          <div className="auth-form ">
            <div className="auth-form-col">
              <Text as="label"
                id="upline_lable"
                className="auth-label auth-form-label"
                color="#9e9e9e !important"
              >
                {t("upline")}: <span id="span_upline">{uplineId}</span>
              </Text>
              <br />
              <button
                className="def-btn def-purple"
                onClick={handleRegClick}
              >
                {t("register")}
              </button>
            </div>
            <div className="auth-reg-link">
              <Text as="p" color="gray.400">
                <Trans i18nKey="reg:signin-instead-msg" components={[<Link href="/login" />]} />
              </Text>
            </div>
          </div>
        </Box>
      </div>
      <div id="particles-js">
        <canvas
          className="particles-js-canvas-el"
          width={663}
          height={629}
          style={{
            width: "100%",
            height: "100%"
          }}
        />
      </div>
      <AuthCSS isGlobal />
    </WalletWrapper>
  )
}

export default RegPage;
