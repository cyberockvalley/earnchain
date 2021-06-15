import { VStack, Box, HStack, Text, Button, Flex } from "@chakra-ui/react"
import useTranslation from "next-translate/useTranslation"
import { useState } from "react"
import { PRIMARY_COLOR, SEC_COLOR } from "../../utils/c"
import Link from "../views/Link"
import { Img } from "@chakra-ui/image";

const Projects = ({children, data, ...props}) => {
    const { t } = useTranslation()
    
    return (
        <VStack w="100%" maxW="700px" {...props}>
            {
                (data || []).map((item, index) => {
                    return (
                        <Item key={`project-${index}`} item={item} commingSoon={t("common:comming-soon")} />
                    )
                })
            }
        </VStack>
    )
}

const Item = ({children, commingSoon, item, ...props}) => {
    return (
        <VStack w="100%" padding="15px" borderRadius="5px" border="1px solid #ced4da" {...props}>
            <Flex mb={{base: "15px", sm: "0px"}} flexDirection={{base: "column", sm: "row"}} justifyContent="flex-start" alignItems="flex-start">
            {
                item.logo? 
                <Img src={item.logo} 
                w={{base: "70px", md: "120px"}}
                h={{base: "70px", md: "120px"}}
                mr={{base: "0px", md: "15px"}} /> : null
            }
            <VStack textAlign="left" w="100%" alignItems="flex-start">
                <Text as="div" textTransform="capitalize" fontSize="21px" mb={{base: "7px", md: "15px"}}>{item.title}</Text>
                <Text lineHeight={{base: "1.3rem", md: "1.5rem"}} mb={{base: "7px", md: "15px"}}>{item.description}</Text>
                    {
                        item.active?
                        <Button as={Link} href={item.link} alignSelf="flex-end" 
                        bg={SEC_COLOR} color="#fff"
                        _hover={{
                            bg: SEC_COLOR,
                            color: "#fff",
                            opacity: "0.7"
                        }}
                        className="btn-white">{item.cta}</Button>
                        :
                        null
                    }
                </VStack>
            </Flex>
            {
                item.active? null :
                <Text color={PRIMARY_COLOR} opacity="0.7" alignSelf="center" fontStyle="italic" 
                fontSize="21px" mt="25px !important">{commingSoon}</Text>
            }
        </VStack>
    )
}

export default Projects