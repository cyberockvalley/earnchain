import { Flex, Text } from "@chakra-ui/layout"
import { HStack } from "@chakra-ui/layout"
import { Box } from "@chakra-ui/layout"
import useTranslation from "next-translate/useTranslation"
import { PRIMARY_COLOR, SEC_COLOR } from "../utils/c"
import Link from "./views/Link"

import logo from "../images/logo.png"
import { useState } from "react"
import { Button, IconButton } from "@chakra-ui/react"

const Header = ({home, children, ...props}) => {
    const { t } = useTranslation()

    const [showMenu, setShowMenu] = useState()

    return (
        <Flex as="header" className="header-wrap" 
        flexDirection={{base: "column", md: "row"}}
        justifyContent={{base: "flex-start", md: "space-between"}}
        alignItems="center"
        zIndex="200"
        bg="rgba(0,0,0,1)"
        maxW="100% !important"
        m="0px !important"
        px="15px"
        w="100%">
            <HStack w={{base: "100%", md: "65px"}}
            h={{base: "55px", md: "70px"}}
            justifyContent="space-between"
            {...props}>
                <Text as={Link} href={home || "/projects/matrix/"}
                    w={{base: "50px", md: "65px"}} h={{base: "50px", md: "65px"}} 
                    bg={`url(${logo}) no-repeat center`}
                    bgSize="100%">
                    <Text as="h2" className="logo" d="none !important">{t('common:sitename')}</Text>
                </Text>
                <Button marginStart="0px !important" marginInlineStart="0px !important"
                display="flex" justifyContent="center" alignItems="center" d={{base: "block", md: "none"}} onClick={() => setShowMenu(!showMenu)} 
                color="#fff" bg={SEC_COLOR}
                _hover={{
                    bg: `${SEC_COLOR} !important`, opacity: "0.7"
                }}>
                    <i className={`fa ${showMenu? "fa-times" : "fa-bars"}`}></i>
                </Button>
            </HStack>
            
            {
                !children? null :
                <Flex d={{base: showMenu? "flex" : "none", md: "flex"}}
                w="100%" h={{base: "auto", md: "70px"}} 
                flexDirection={{base: "column", md: "row"}}
                justifyContent={{base: "flex-start", md: "flex-end"}} 
                alignItems="center"
                py={{base: "15px", md: "0px"}}>
                    {children}
                </Flex>
            }
        </Flex>
    )
}

Header.Text = ({as, href, active, className, children, ...props}) => {
    
    return (
        <Text as={as || href? Link : "div"} href={href} 
            display="flex" flexDirection="column" justifyContent="center" 
            alignItems="center"
            marginStart="0px !important" marginInlineStart="0px !important"
            minW={{base: "100%", md: "0!important"}}
            maxW={{base: "100%", md: "auto"}} 
            mr={{base: "0px", md: "15px"}}  
            mb={{base: "7px", md: "0px"}}
            
            bg={!active? "transparent !important" : `${SEC_COLOR} !important`} 
            border={`2px solid ${SEC_COLOR} !important`}
            _hover={{
                bg: `${SEC_COLOR} !important`,
                textDecoration: "none !important"
            }}
            textAlign="center !important"

            borderRadius="25px"
            h="45px"
            p={{base: "12px 15px", md: "12px 15px"}}
            fontSize="17px"
            className={`${className || ""}`} 
            {...props}>
            {children}
        </Text>
    )
}

export default Header