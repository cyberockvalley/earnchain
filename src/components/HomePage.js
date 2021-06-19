import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans"
import Head from "next/head";
import React, { useEffect, useState } from "react";
import HomeHeader from "./HomeHeader";
import HomeCSS from "./jsx-styles/HomeCSSOld";
import Link, { buildLink } from "./views/Link";
import PageTitle from './PageTitle'
import { useRouter } from 'next/router'
import { copyFromText, getFromStorage, logIn } from "../utils/f";
import { AIR_DROP_ACTIVE, CONTRACT_ADDRESSES, PRESALE_ACTIVE, SEC_COLOR } from "../utils/c";
import { Flex } from "@chakra-ui/layout";
import Container from "./views/Container";
import { VStack, HStack, Text } from "@chakra-ui/layout";
import BigText from "./views/texts/BigText";
import Paragraph from "./views/texts/Paragraph";
import { Button as BTN } from "@chakra-ui/button";
import RoadMap from "../components/home/RoadMap"
import Projects from "../components/home/Projects"
import Features from "../components/home/Features"
import DistroPie from "../components/home/DistroPie"

import ectAbi from "../web3/abis/ECT.json"
import { Img } from "@chakra-ui/image";
import banner from "../images/planet.svg"//"../images/banner.png"
import staticReward from '../images/statistic-reward.svg'
import matrixLogo from '../images/team.png'
import workLogo from '../images/work.png'
import gameLogo from '../images/casino.png'
import nftLogo from '../images/nft.png'
import videoLogo from '../images/video.png'
import { Box } from "@chakra-ui/layout";

import dynamic from "next/dynamic";
import { useToast } from "@chakra-ui/react";


const StarfieldAnimation = dynamic(
  () => import('react-starfield-animation'),
  { ssr: false }
)

const HomePage = () => {
  const { t } = useTranslation('home')
  const router = useRouter()
  const toast = useToast()

  const [features, setFeatures] = useState()
  const [roadmap, setRoadmap] = useState()
  const [projects, setProjects] = useState()

  useEffect(() => {
    logIn(router)
    setView()
  }, [])

  const setView = () => {
    loadFeatures()
    loadProjects()
    loadRoadmap()
  }

  const loadFeatures = () => {
    setFeatures([
      {
        title: t("f-title-reward-tax"),
        content: <Trans i18nKey="home:f-desc-reward-tax" components={[
        <br />, <br />, 
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
        </span>]} />,
        image: staticReward
      },
      {
        title: t("f-title-reward-dapps"),
        content: t("f-desc-reward-dapps"),
        image: staticReward
      },
      {
        title: t("f-title-liq-tax"),
        content: t("f-desc-liq-tax"),
        image: staticReward
      },
      {
        title: t("f-title-liq-dapps"),
        content: t("f-desc-liq-dapps"),
        image: staticReward
      },
      {
        title: t("f-title-burn-invest"),
        content: <Trans i18nKey="home:f-desc-burn-invest" components={[<br />]} />,
        image: staticReward
      },
      {
        title: t("f-title-utility"),
        content: t("f-desc-utility"),
        image: staticReward
      }
    ])
  }

  const loadProjects = () => {
    setProjects([
      { 
        logo: matrixLogo,
        title: t("project-title-matrix"),
        description: t("project-desc-matrix"),
        active: true,
        link: "/projects/matrix",
        cta: t("start-now")
      },
      {
        logo: workLogo,
        title: t("project-title-work"),
        description: t("project-desc-work"),
        link: "/projects/work",
        cta: t("start-now")
      },
      {
        logo: gameLogo,
        title: t("project-title-game"),
        description: t("project-desc-game"),
        link: "/projects/work",
        cta: t("start-now")
      },
      {
        logo: nftLogo,
        title: t("project-title-nft"),
        description: t("project-desc-nft"),
        link: "/projects/matrix",
        cta: t("start-now")
      },
      {
        logo: videoLogo,
        title: t("project-title-video"),
        description: t("project-desc-video"),
        link: "/projects/matrix",
        cta: t("start-now")
      }
    ])
  }

  const loadRoadmap = () => {
    setRoadmap([
      {
        active: true,
        time: t("map-time-init"),
        title: t("map-title-init"),
        content: t("map-desc-init")
      },
      {
        active: true,
        time: t("map-time-matrix"),
        title: t("map-title-matrix"),
        content: t("map-desc-matrix")
      },
      {
        active: false,
        time: t("map-time-pswap"),
        title: t("map-title-pswap"),
        content: t("map-desc-pswap")
      },
      {
        active: false,
        time: t("map-time-cmc"),
        title: t("map-title-cmc"),
        content: t("map-desc-cmc")
      },
      {
        active: false,
        time: t("map-time-mkt"),
        title: t("map-title-mkt"),
        content: t("map-desc-mkt")
      },
      {
        active: false,
        time: t("map-time-work"),
        title: t("map-title-work"),
        content: t("map-desc-work")
      },
    ])
  }

  const Button = ({children, ...props}) => {
    return (
      <BTN bg={SEC_COLOR} color="#fff  !important"
      _hover={{
          bg: SEC_COLOR,
          color: "#fff !important",
          textDecoration: "none  !important",
          opacity: "0.7"
      }} 
      marginStart="0px !important" marginInlineStart="0px !important"
      mr={{base: "0px", md: "15px"}}
      mb={{base: "5px", md: "0px"}}
      {...props}>
        {children}
      </BTN>
    )
  }

  return (
    <Box w="100%">
      <Box id="home-page">
        <PageTitle title={t('common:title')} />
        <HomeHeader />
        <div className="wrapper" id="wrapper">
          <div className="section heading will-animate">
            
            <div className="section-content heading-content full">
              <div className="diamond-back"></div>
              <Box className="heading-content__cat" visibility="hidden" h="150px !important"></Box>

              <Container bg="" mt="" textAlign="left !important">
                <Flex id="about" mt={{base: "5vh", md: "15vh"}} w="100%" flexDir={{base: "column-reverse", md: "row"}}>
                  <VStack justifyContent="flex-start" alignItems="flex-start" 
                    className="translucent-bg"
                    w={{base: "100%", md: "50%"}}>
                      <BigText>
                        {t('common:sitename')}
                      </BigText>
                      <Paragraph>
                        {t('common:protocol-info')}
                      </Paragraph>
                      <Flex flexDirection={{base: "column", md: "row"}} 
                      justifyContent="flex-start"
                      alignItems={{base: "flex-start", md: "center"}}>
                        {
                          AIR_DROP_ACTIVE?
                          <Button as={Link} href={`/airdrop`} 
                          textTransform="capitalize">
                            {t('header:airdrop')}
                          </Button> : null
                        }
                        {
                          PRESALE_ACTIVE?
                          <Button as={Link} href={`/airdrop#presale`} 
                          textTransform="capitalize">
                            {t('header:presale')}
                          </Button>
                          :
                          <>
                            <Button as="a" href={`https://charts.bogged.finance/?token=${ectAbi.address}`} target="blank" 
                            textTransform="capitalize">
                              {t("header:live-chart")}
                            </Button>
                            <Button as={Link} href={`/buy`} 
                            textTransform="capitalize">
                              {t("header:buy-now")}
                            </Button>
                          </>
                        }
                        <Button as={Link} href={`/#projects`} 
                          textTransform="capitalize">
                            {t('header:start-earning')}
                        </Button>
                      </Flex>
                    </VStack>

                    <VStack justifyContent="center" alignItems="center" pb="25px"
                    w={{base: "100%", md: "50%"}}>
                      <Img as={"img"} src={banner} alt="Hero image" widthNo="528" heightNo="396" 
                      transformNo="perspective(1000px) rotateY(-13deg) rotateX(5deg) rotate(7deg) scaleY(.9) scaleX(.95) translateX(-3%) translateY(-3%)"
                      pos="absolute"
                      right="0"
                      zIndex="-1"
                      _hover={{
                        transform: "none !important"
                      }} />
                    </VStack>
                  </Flex>
              </Container>
            </div>
          </div>
        </div>
      </Box>

      <Features data={features} settings={{
        normalProps: {
          bg: "#000"
        },
        reverseProps: {
          bg: "transparent"
        }
      }} />
      
      <VStack id="projects" flexGrow="1" w="100%" minH="300px" bg="#000" pos="relative">
        <Container py={{sm: "5rem", md: "7rem"}}>
          <VStack w="100%">

            <VStack textAlign="center" w="100%" mb="1.5rem">
              <BigText textTransform="uppercase" mb="25px">
                {t("earning-platforms")}
              </BigText>

              <Projects data={projects} />
            </VStack>

          </VStack>
        </Container>
      </VStack>

      <VStack id="distro" flexGrow="1" w="100%" minH="300px" pos="relative">
        <Container py={{sm: "5rem", md: "7rem"}}>
          <VStack w="100%" justifyContent="flex-start" alignItems="center" mb="25px">
              <BigText textTransform="capitalize" mb="15px" fontSize="25px">
                {t("distros-title")}
              </BigText>
              <Paragraph fontSize="12px" textAlign="center">
                {t("distros-subtitle")}
              </Paragraph>
          </VStack>
          <Flex w="100%" flexDirection={{base: "column-reverse", md: "row"}} 
          justifyContent="flex-start" alignItems={{base: "center", md: "flex-start"}}>

            <VStack alignItems="left" textAlign="left" w="100%" mb="1.5rem">
              <DistroPie.Button>
                {t("burnt-per")}
              </DistroPie.Button>
              <DistroPie.Button>
                {t("presale-per")}
              </DistroPie.Button>
              <DistroPie.Button>
                {t("team-per")}
              </DistroPie.Button>
            
              <Paragraph>
                <Trans i18nKey="home:presale-reasons" components={[
                  <Box mb="12px" />,
                  <Link href="/#projects" />,
                  <Box mb="12px" />
                ]} />
              </Paragraph>

            </VStack>

            <DistroPie
                data={[
                  { title: t('burnt'), value: 20, color: '#E38627' },
                  { title: t('presale'), value: 50, color: '#C13C37' },
                  { title: t('team'), value: 30, color: '#6A2135' },
                ]} 
            />
          </Flex>
        </Container>
      </VStack>

      <VStack id="roadmap" bg="#000" flexGrow="1" w="100%" minH="300px" pos="relative">
        <Box as={StarfieldAnimation} numParticles={300} depth={300} alphaFactor={1} 
        pos="absolute" width="100%" height="100%" />
        <Box width="100%" h="100%">
          <Container py={{sm: "5rem", md: "7rem"}} h="100%">
            <VStack w="100%" h="100%">

              <VStack textAlign="center" w="100%" mb="1.5rem">
                <i className="fa fa-rocket fa-4x"></i>
                <BigText textTransform="uppercase">
                  {t("roadmap-title")}
                </BigText>
                <Paragraph>
                  {t("roadmap-subtitle")}
                </Paragraph>
              </VStack>

              <RoadMap data={roadmap} maxW="700px" />
            </VStack>
          </Container>
        </Box>
      </VStack>

      <HomeCSS />
    </Box>
  )
}

export default HomePage;
