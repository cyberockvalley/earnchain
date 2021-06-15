import { Box, VStack } from "@chakra-ui/layout";

export default function Container({children, ...props}) {

    return (
        <VStack mx="auto" w="100%" justifyContent="flex-start" alignItems="flex-start" p="15px" mt="0px !important" maxW={{base: "100%", sm: "540px", md: "720px", lg: "960px", xl: "1140px"}} {...props} >
            {children}
        </VStack>
    )
}