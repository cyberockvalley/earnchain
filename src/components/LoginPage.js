import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { useWeb3React } from "@web3-react/core";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { logIn } from "../utils/f";
import { isAddress } from "../web3/utils";
import MatrixHeader from "./MatrixHeader";
import AuthCSS from "./jsx-styles/AuthCSS";
import PageTitle from "./PageTitle";
import LoadingView from "./status/LoadingView";
import Link from "./views/Link";
import WalletWrapper from "./wallet/WalletWrapper";

const LoginPage = () => {
  const {t, lang} = useTranslation("login")
  const { account, library } = useWeb3React()

  const [loginData, setLoginData] = useState()
  const router = useRouter()
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [loadingMsg, setLoadingMsg] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  

  const autoEnter = async () => {
    if(!account) {
      onOpen()

    } else {
      enter(account)
    }
  }

  const USER_ADDRESS_STATUS = {
    exists: 1,
    invalid: 2
  }
  const enter = async (address) => {
    let userAddressInfo
    if(address && isAddress(address)) {
      userAddressInfo = await getAddressInfo(address)

    } else {
      if(!loginData) {
        toast({
          description: t("empty-login-data"),
          duration: 4000,
          isClosable: true,
          status: "error"
        })
  
      } else {
        userAddressInfo = await getAddressInfo(loginData)
      }
    }

    if(userAddressInfo) {
      switch (userAddressInfo.status) {
        case USER_ADDRESS_STATUS.exists:
          logIn(router, userAddressInfo.address)
          break;
        case USER_ADDRESS_STATUS.invalid:
          toast({
            description: t("invalid-login-data"),
            duration: 4000,
            isClosable: true,
            status: "error"
          })
          break;
        default:
          break;
      }
    }
    
  }

  const getAddressInfo = addressOrId => {
    //if is not a valid id and not a valid address return:
    //return {status: USER_ADDRESS_STATUS.invalid}
    //if is address verify if it extsts
    //if is id get the address from idToAddress in the contract, and check if the 
    // return value is address zero.
    if(!isAddress(addressOrId)) addressOrId = "0xEbF96fE1cdB1698043e89faab4f4AEAFF24d08e3"
    return {status: USER_ADDRESS_STATUS.exists, address: addressOrId}
  }

  return (
    <WalletWrapper as="div" id="login-page" isOpen={isOpen} onClose={onClose} onConnected={enter}>
      <LoadingView msg={loadingMsg} isLoading={isLoading} /> 
      <PageTitle title={t('log-title')} />
      <MatrixHeader />
      <Box as="div" className="wrapper" id="wrapper">
        
        <Box as="div" py="15px" bg="#fff" className="container logincontainer">
          <div className="default-title revealator-slideleft revealator-once revealator-within">
            <Text as="h2" className="text-center" d="none">{t("page-title")}</Text>
          </div>
          
          <div className="auth-form">
            <div className="auth-form-col">
              <button
                type="button"
                onClick={autoEnter}
                id="auth_btn"
                className="def-btn def-blue"
              >
                {t("login-wallet")}
              </button>
            </div>
            <div className="auth-form-col">
              <Text as="label" className="auth-label" color="#9e9e9e !important">
               {t("view-title")}
              </Text>
              <div>
                <Text as="input"
                  type="text"
                  name="address"
                  id="address"
                  className="auth-form-input"
                  background="#dfdfdf !important"
                  borderRadius="5px !important"
                  border="1px solid #efefef !important"
                  _focus={{
                    border: "1px solid #efefef !important"
                  }}
                  placeholder={t("view-title-placeholder")}
                  outline="none !important"
                  required
                  pattern="^0x[a-f0-9A-F]{40}$|[0-9]{1,10}$"
                  onKeyUp={e => {
                    e.target.value.replace(/[^0-9a-z]/i, '')
                  }}
                  onChange={e => setLoginData(e.target.value)}
                />
              </div>
              <button onClick={enter} type="button" id="login-btn" className="def-btn def-purple">
                {t("login-view")}
              </button>
            </div>
            <Box className="auth-reg-link">
              <Text as="p" color="gray.400">{t("quest-no-account")}</Text>
              <Text as={Link} href="/register">
                {t("register")}
              </Text>
            </Box>
          </div>
        </Box>
      </Box>
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

export default LoginPage;
