import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans"
import React, { useEffect, useState } from "react";
import HomeCSS from "./jsx-styles/HomeCSSOld";
import PageTitle from './PageTitle'
import { useRouter } from 'next/router'
import { CONTRACT_ADDRESSES, PRESALE, SEC_COLOR } from "../utils/c";
import { Button as BTN } from "@chakra-ui/button";

import { Box, Text } from "@chakra-ui/layout";
import HomeHeader from "./HomeHeader";
import BigText from "./views/texts/BigText";
import Paragraph from "./views/texts/Paragraph";
import { useToast, VStack } from "@chakra-ui/react";
import Container from "./views/Container";
import dynamic from "next/dynamic";

import { buildLink } from "./views/Link";
import { copyFromText } from "../utils/f";


const StarfieldAnimation = dynamic(
  () => import('react-starfield-animation'),
  { ssr: false }
)


const AIRDROP_FORM_LINK = "https://forms.gle/qKtfEW1yBFHasQUQ7"

const AirdropPage = () => {
  const { t, lang } = useTranslation('airdrop')
  const router = useRouter()
  const toast = useToast()

  const getTitle = () => {
    if(["/airdrop", "/airdrop#index"].includes(router.asPath)) {
      return t("page-title-airdrop")

    } else if(["/airdrop#presale"].includes(router.asPath)) {
      return t("page-title-presale")

    } else {
      t("common:title")
    }
  }

  useEffect(() => {
    //logIn(router)
    setView()
  }, [])

  const setView = () => {
  }


  const Button = ({children, ...props}) => {
    return (
      <BTN bg={SEC_COLOR} color="#fff"
      _hover={{
          bg: SEC_COLOR,
          color: "#fff",
          opacity: "0.7"
      }} {...props}>
        {children}
      </BTN>
    )
  }
  

  return (
    <Box w="100%">
      <Box id="home-page">
        <PageTitle title={getTitle()} />
        <HomeHeader />
        <Box className="wrapper" id="wrapper" w="100%" pt={{base: "90px"}}>
          <Box as={StarfieldAnimation} numParticles={300} depth={300} alphaFactor={1} 
          pos="absolute" width="100%" height="100%" />

          <Box id="index" className="section will-animate" w="100%">
            <Box className="section-content" w="100%">
                  <Container>
                    <VStack justifyContent="flex-start" alignItems="center" w="100%" mb="25px">
                        <BigText textTransform="capitalize">
                          {t("title-airdrop")}
                        </BigText>
                        <Paragraph>
                          {t("subtitle-airdrop")}
                        </Paragraph>
                    </VStack>
                  </Container>
                  <Container>
                    <VStack bg="#000" p={{base: "15px", md: "25px"}} justifyContent="flex-start" w="100%" alignItems="flex-start" textAlign="left">
                      <Text as="div">
                        <Trans i18nKey="airdrop:airdrop-form" components={[
                          <a href="https://forms.gle/qKtfEW1yBFHasQUQ7" target="blank" />
                        ]} />
                      </Text>
                      
                      <Text as="div">
                        <Trans i18nKey="airdrop:airdrop-form-link" components={[
                          <Paragraph />,
                          <span>
                            <a
                              href={AIRDROP_FORM_LINK}
                              target="_blank"
                            >
                              {AIRDROP_FORM_LINK}{" "}
                            </a>
                            <Box as="span" textTransform="uppercase"
                              className="status-panel_partners_copy fa fa-2xs fa-copy"
                              onClick={() => {
                                copyFromText(AIRDROP_FORM_LINK, () => {
                                  toast({
                                    description: t("common:link-copied"),
                                    duration: 3000,
                                    status: "success",
                                    isClosable: true
                                  })
                                },
                                () => {
                                  toast({
                                    description: t("common:link-not-copied"),
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
                      </Text>
                    </VStack>
                  </Container>
            </Box>
          </Box>

          <Box id="presale" className="section will-animate" w="100%">
            <Box className="section-content" w="100%">
                <Container>
                  <VStack justifyContent="flex-start" alignItems="center" w="100%" mb="25px">
                        <BigText textTransform="capitalize">
                          {t("title-presale")}
                        </BigText>
                        <Paragraph>
                          {t("subtitle-presale")}
                        </Paragraph>
                  </VStack>
                </Container>
                <Container>
                  <VStack bg="#000" p={{base: "15px", md: "25px"}} justifyContent="flex-start" w="100%" alignItems="flex-start" textAlign="left">
                    <Paragraph>
                      <Trans i18nKey="airdrop:amount" components={[
                        <span>{PRESALE.minBNB.number.toLocaleString(lang)}</span>,
                        <span>{PRESALE.maxBNB.number.toLocaleString(lang)}</span>
                      ]} />
                    </Paragraph>
                    <Paragraph>
                      <Trans i18nKey="airdrop:rate" components={[
                        <span>{PRESALE.tokenPerBNB.number.toLocaleString(lang)}</span>
                      ]} />
                    </Paragraph>
                    <Paragraph>
                      <Trans i18nKey="airdrop:address-presale" components={[
                        <span>
                          <a
                          href={buildLink(CONTRACT_ADDRESSES.ectPreseller, {isContractAddress: true})}
                          target="_blank"
                        >
                          {CONTRACT_ADDRESSES.ectPreseller}{" "}
                        </a>
                        <Box as="span" textTransform="uppercase"
                          className="status-panel_partners_copy fa fa-2xs fa-copy"
                          onClick={() => {
                            copyFromText(CONTRACT_ADDRESSES.ectPreseller || "", () => {
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
                    </Paragraph>
                    <Paragraph>{t("failed-tx")}</Paragraph>
                    <Paragraph>{t("failed-solution")}</Paragraph>

                    
                  </VStack>
                </Container>
            </Box>

          </Box>
        </Box>
        <style jsx>
          {
          `
            @-webkit-keyframes rocket-bounce {
                0% {
                    transform: translate(0)
                }
                50% {
                    transform: translateY(35px)
                }
                to {
                    transform: translate(0)
                }
            }
            
            @keyframes rocket-bounce {
                0% {
                    transform: translate(0)
                }
                50% {
                    transform: translateY(35px)
                }
                to {
                    transform: translate(0)
                }
            }
            
            `}
        </style>
      </Box>
      <HomeCSS />
    </Box>
  )
}

export default AirdropPage;
