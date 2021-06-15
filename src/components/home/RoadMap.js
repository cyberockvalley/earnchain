import { Box, HStack, Text } from "@chakra-ui/react"

import { SEC_COLOR } from "../../utils/c"

const RoadMap = ({data, ...props}) => {

    return (
        <HStack w="100%" pos="relative" {...props}>
            <Box as="ul" lineHeight="1.4em" listStyle="none" m="0px" p="0px" w="100%" pos="relative" 
            _before={{
                pos: "absolute",
                top: 0,
                left: "1rem",
                height: "100%",
                content: "''",
                borderRight: "none !important"
            }}>
                {
                    (data || []).map((item, index) => {
                        return (
                            <Item key={`road-${index}`} item={item} />
                        )
                    })
                }
            </Box>
        </HStack>
    )
}

const Item = ({children, item, ...props}) => {
    return (
        <Box as="li" color="#ced4da" pos="relative" d={{md: "table-row"}} p="0" pl={{base: "40px", md: "0px"}} {...props}>
            <Box fontSize="12px" fontWeight="700" letterSpacing="3px" 
                m="0 0 .5em" textTransform="uppercase" whiteSpace="nowrap" 
                pr={{base: "0px", md: "30px"}}>
                    {item.time}
                </Box>
                <Box w="15px" pos={{base: "absolute", md: "relative"}} 
                top="0" bottom="0" left="0" 
                d={{md: "table-cell"}}
                verticalAlign={{md: "top"}}
                _before={{
                    bg: `${item.active? SEC_COLOR : ""}`,
                    border: item.active? "3px solid transparent" : `3px solid ${SEC_COLOR}`,
                    borderRadius: "100%",
                    content: "''",
                    display: "block",
                    height: "15px",
                    pos: "absolute",
                    top: "4px",
                    left: "0",
                    w: "15px",
                    transition: "background .3s ease-in-out,border .3s ease-in-out"
                }}
                _after={{
                    content: "''",
                    w: "3px",
                    bg: "#ccd5db",
                    d: "block",
                    pos: "absolute",
                    top: "24px",
                    bottom: 0,
                    left: "6px"
                }} />
                <Box top="0" ml="0" w="100%" pb="40px" pos="relative" pt=".5rem" 
                pl={{md: "30px"}} 
                d={{md: "table-cell"}}
                verticalAlign={{md: "top"}}>
                    <Text as="h3" fontSize="1.0625rem" mb=".5rem" fontWeight="600">
                        {item.title}
                    </Text>
                    <Text as="p" textAlign="justify" fontSize="80%" 
                    lineHeight="1.7" fontWeight="400"
                    _after={{
                        display: "table",
                        clear: "both",
                        content: "''"
                    }}>
                        {item.content}
                    </Text>
                </Box>
        </Box>
    )
}

export default RoadMap