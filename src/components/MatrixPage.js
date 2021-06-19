import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans"
import Head from "next/head";
import React, { useEffect, useState } from "react";
import MatrixHeader from "./MatrixHeader";
import Link, { buildLink } from "./views/Link";
import PageTitle from './PageTitle'
import { useRouter } from 'next/router'
import { copyFromText, getFromStorage, logIn, toLocaleString } from "../utils/f";
import { CONTRACT_ADDRESSES, LOCAL_STORAGE, SOCIAL_LINKS } from "../utils/c";
import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/image";
import { VStack } from "@chakra-ui/layout";
import bnbLogo from "../images/logo-big-bnb.svg"
import logoIcon from "../images/tigericon.png"

import earnChainAbi from '../web3/abis/EarnChain.json'
import { useDappContract } from "../web3/hooks/useContract";
import ContractData from "../models/ContractData";
import LoadingOrView from "./status/LoadingOrView";
import { HStack } from "@chakra-ui/layout";
import Accordion from "./views/Accordion";
import { useToast } from "@chakra-ui/toast";

const FAQ_PER_LOAD = 3
const MatrixPage = () => {
  const { t, lang } = useTranslation('matrix')
  const router = useRouter()
  const toast = useToast()

  
  const earnChainContract = useDappContract(earnChainAbi.address, earnChainAbi.abi)

  //view data start
  const [contractData, setContractData] = useState()
  const [viewSetting, setViewSetting] = useState(false)
  const [maxFaqShown, setMaxFaqShown] = useState(FAQ_PER_LOAD)
  const [faqs, setFaqs] = useState()
  //view data end

  useEffect(() => {
    logIn(router)
    loadFaqs()
  }, [])

  const moreFaq = () => {
    var max = maxFaqShown + FAQ_PER_LOAD
    if((faqs || []).length >= max - 1) setMaxFaqShown(max)
  }

  useEffect(() => {
    if(earnChainContract && !viewSetting) {
      setViewSetting(true)
      setView()
    }
  }, [earnChainContract])

  const setView = () => {
    getContractData(cData => {
      if(cData) {
        setContractData(cData)
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
  
  const loadFaqs = () => {
    setFaqs([
      {
        title: t("faq-title-1"),
        content: t("faq-desc-1")
      },
      {
        title: t("faq-title-2"),
        content: t("faq-desc-2")
      },
      {
        title: t("faq-title-3"),
        content: t("faq-desc-3")
      },
      {
        title: t("faq-title-4"),
        content: t("faq-desc-4")
      },
      {
        title: t("faq-title-5"),
        content: t("faq-desc-5")
      },
      {
        title: t("faq-title-6"),
        content: <Trans i18nKey="matrix:faq-desc-6" components={[
          <b />, 
          <span>
            <a
            href={buildLink(CONTRACT_ADDRESSES.ectBNB, {isContractAddress: true})}
            target="_blank"
          >
            {CONTRACT_ADDRESSES.ectBNB}{" "}
          </a>
          <Box as="span" textTransform="uppercase"
            className="status-panel_partners_copy fa fa-copy"
            onClick={() => {
              copyFromText(CONTRACT_ADDRESSES.ectBNB || "", () => {
                toast({
                  description: t("common:addr-copied"),
                  duration: 3000,
                  status: "success",
                  isClosable: true
                })
              },
              () => {
                toast({
                  description: t("common:addr-not-copied"),
                  duration: 3000,
                  status: "error",
                  isClosable: true
                })
              })
            }}
          >
          </Box>
        </span>
        ]} />
      },
      {
        title: t("faq-title-7"),
        content: t("faq-desc-7")
      },
    ])
  }
  
  const StatBox = ({className, children, ...props}) => {
    return (
      <Box w="100%" className={className} textAlign="center" pt="86px" 
      bg={`url(${logoIcon}) no-repeat top center`} {...props}>
        {children}
      </Box>
    )
  }

  return (
    <div id="home-page">
      <PageTitle title={t('common:title')} />
      <MatrixHeader />
      <div className="wrapper" id="wrapper">
        <VStack flexGrow="1" className="section heading will-animate" zIndex="1">
          <div className="section-content heading-content full">
            <div className="diamond-back"></div>
            <div className="heading-content__cat"></div>
            <div className="heading-content__title">
              <Text as="h1" className="global-title" textTransform="uppercase">{t("start-earning")}</Text>
            </div>
            <div className="heading-content__subtitle">
              <Text as="h2" className="global-subtitle">
                {t("earn")} 
              </Text>
              <Text as="h5" className="global-subtitle" maxW="700px" mx="15px">
                {t("pitch")}
              </Text>
            </div>
            <div className="heading-content__btns flex social_btns">
              {
                SOCIAL_LINKS.MATRIX.map((social, index) => {
                  return social.settings.disabled? null :
                  <div className="btn-wrap">
                    <a
                      href={social.link}
                      target="_blank"
                      className="def-btn def-blue"
                      style={{
                        whiteSpace: "nowrap"
                      }}
                    >
                      <img src={social.icon} alt={t(`common:${social.id}`)} />
                      {t(`common:${social.id}`)}
                    </a>
                  </div>
                })
              }
            </div>
          </div>
          <div className="section-titling heading-titling">{t("common:sitename")} </div>
        </VStack>
        <Box zIndex="1" className="section participants will-animate">
          <div className="container">
            <HStack justifyContent="space-between" flexWrap="wrap">
              <Box className="col-md-3">
                <StatBox className="participant_in">
                  <div className="stats-top_sum">
                    <LoadingOrView as={HStack} justifyContent="center" isLoading={!contractData?.stats?.totalUsers}>
                      {toLocaleString(contractData?.stats?.totalUsers, lang, 0)}
                    </LoadingOrView>
                  </div>
                  <Box className="stats-top_subject" textTransform="uppercase">{t("all-members")}</Box>
                </StatBox>
              </Box>
              <Box className="col-md-3" mt={{base: "15px !important", md: "0px"}} d={contractData?.stats?.usersPerDay && contractData?.stats?.usersPerDay > 0? "block" : "none"}>
                <StatBox className="participant_in">
                  <div className="stats-top_sum">
                    {toLocaleString(contractData?.stats?.usersPerDay, lang, 0)}
                  </div>
                  <Box className="stats-top_subject" textTransform="uppercase">{t("users-per-day")}</Box>
                </StatBox>
              </Box>
              <Box className="col-md-3" mt={{base: "15px !important", md: "0px"}}>
                <StatBox className="participant_in">
                  <div className="stats-top_sum">
                    <LoadingOrView as={HStack} justifyContent="center" isLoading={!contractData?.stats?.totalBUSDEarned}>
                      {toLocaleString(contractData?.stats?.totalBUSDEarned, lang, 2)}
                    </LoadingOrView>
                  </div>
                  <Box className="stats-top_subject" textTransform="uppercase">
                    {t("total-busd-earned")}
                  </Box>
                </StatBox>
              </Box>
              <Box className="col-md-3" mt={{base: "15px !important", md: "0px"}}>
                <StatBox className="participant_in">
                  <div className="stats-top_sum">
                    <LoadingOrView as={HStack} justifyContent="center" isLoading={!contractData?.stats?.totalECTEarned}>
                      {toLocaleString(contractData?.stats?.totalECTEarned, lang, 2)}
                    </LoadingOrView>
                  </div>
                  <Box className="stats-top_subject" textTransform="uppercase">
                    {t("total-ect-earned")}
                  </Box>
                </StatBox>
              </Box>
            </HStack>
          </div>
        </Box>
        <Box pos="relative" className="section advantages will-animate">
          <div className="section-content advantages-content">
            <div className="advantages-list">
              <div className="advantages-list-block">
                <div className="advantage revealator-zoomin revealator-once revealator-within">
                  <div className="advantage-title">{t("adv-title-1")}</div>
                  <div className="advantage-text">
                    {t("adv-desc-1")}
                  </div>
                </div>
                <div className="advantage revealator-zoomin revealator-once revealator-within">
                  <div className="advantage-title">{t("adv-title-2")}</div>
                  <div className="advantage-text">
                    {t("adv-desc-2")}
                  </div>
                </div>
                <div className="advantage revealator-zoomin revealator-once revealator-within">
                  <div className="advantage-title">{t("adv-title-3")}</div>
                  <div className="advantage-text">
                    {t("adv-desc-3")}
                  </div>
                </div>
                <div className="advantage revealator-zoomin revealator-once revealator-within">
                  <div className="advantage-title">
                    {t("adv-title-4")}
                  </div>
                  <div className="advantage-text">
                    {t("adv-desc-4")}
                  </div>
                </div>
                <div className="advantage revealator-zoomin revealator-once revealator-within">
                  <div className="advantage-title">
                    {t("adv-title-5")}
                  </div>
                  <div className="advantage-text">
                    {t("adv-desc-5")}
                  </div>
                </div>
                <div className="advantage revealator-zoomin revealator-once revealator-within">
                  <div className="advantage-title">
                    {t("adv-title-6")}
                  </div>
                  <div className="advantage-text">
                    {t("adv-desc-6")}
                  </div>
                </div>
              </div>
              <div
                className="advantages-list__subtitle smalldown revealator-slidedown revealator-once container revealator-partially-above revealator-within"
                align="right"
              >
              </div>
            </div>
          </div>
          <div className="section-bg advantages-bg" />
          <div className="section-shadow advantages-shadow1" />
          <div className="section-shadow advantages-shadow2" />
          <div className="section-shadow advantages-shadow3" />
          <div className="section-shadow advantages-shadow4" />
          
          <VStack pos="absolute" justifyContent="center" alignItems="center"
          top="0" left="0" right="0" bottom="0">
            <Img src={bnbLogo} alt={t("common:sitename")} />
          </VStack>
        </Box>
        <Box className="section examples will-animate">
          <div className="section-content examples-content">
            <div className="examples-title">
              <div className="default-title revealator-slideleft revealator-once revealator-within">
                <h2>
                  <span>{t("how-it-works")}</span> {t("how-it-works-explained")}
                </h2>
              </div>
            </div>
            <div className="examples-blocks">
              <div className="example">
                <div className="example-title" />
              </div>
              <div className="example">
                <div className="example-title" />
              </div>
              <Box className="examples-more">
                <div className="examples-more__text revealator-slideleft revealator-once revealator-within">
                  <Trans i18nKey="matrix:explained" components={[
                    <span />,<span />
                  ]} />
                </div>
                <div className="examples-more__btn revealator-fade revealator-zoomin revealator-once revealator-within">
                  <Link href="/register" className="def-btn def-purple pulse">
                    {t("join-cta")}
                  </Link>
                </div>
              </Box>
            </div>
          </div>
        </Box>
        <div className="section faqq will-animate">
          <div className="section-content faq-content">
            <div className="faq-container">
              <div className="faq-title">
                <div className="default-title revealator-slideleft revealator-once revealator-within">
                  <h2>{t("common:faq")}</h2>
                </div>
              </div>
              <Accordion maxShown={maxFaqShown} items={faqs} />
              <div id="loadMore" onClick={moreFaq}>{t("common:load-more")}</div>
            </div>
            <footer className="footer">
              <div className="footer-wrap">
                <div className="footer-left">
                  <div className="footer-left__address">
                    <span>{t("common:smart-contract")}:</span>
                    <span>
                      <a
                        href={buildLink(CONTRACT_ADDRESSES.earnChain, {isContractAddress: true})}
                        target="_blank"
                      >
                        {CONTRACT_ADDRESSES.earnChain}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="footer-media">
                {
                  SOCIAL_LINKS.MATRIX.map((social, index) => {
                    return social.settings.disabled? null :
                    <a
                      href={social.link}
                      target="_blank"
                      className="footer-right__social"
                    >
                      <img src={social.icon} alt={t(`common:${social.id}`)} />
                    </a>
                  })
                }
              </div>
            </footer>
          </div>
          <div className="section-bg faq-bg" />
          <div className="section-shadow faq-shadow1" />
          <div className="section-shadow faq-shadow2" />
        </div>
      </div>
    </div>
  )
}

export default MatrixPage;
