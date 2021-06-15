import { Box, HStack, VStack, Img } from "@chakra-ui/react"
import Container from "../views/Container"
import HText1 from "../views/texts/HText1"
import Paragraph from "../views/texts/Paragraph";


const Features = ({data, settings, ...props}) => {

    return (
        <Box w="100%" {...props}>
            {
                (data || []).map((item, index) => {
                    return (
                        <Item item={item} reverseProps={settings?.reverseProps} reverse={(index + 1) % 2 == 0} {...(settings?.normalProps || {})} />
                    )
                })
            }
        </Box>
    )
}

const Item = ({item, reverse, reverseProps, ...props}) => {
    
    return (
    <Box {...props} {...(reverse && reverseProps? reverseProps : {})}>
        <Container>
            <HStack w="100%" mb="0px"
                justifyContent="flex-start" alignItems="flex-start"
                flexDir={{base: "column-reverse", md: reverse? "row-reverse" : "row"}}>
                <VStack justifyContent="flex-start" alignItems="flex-start" h="100%"
                w={{base: "100%", md: "50%"}} mt={{base: "0px", md: "55px"}}>
                    <HText1 textTransform="capitalize">
                        {item.title}
                    </HText1>
                    <Paragraph>
                        {item.content}
                    </Paragraph>
                </VStack>
                <VStack justifyContent="center" alignItems={{base: "flex-start", md: reverse? "flex-start" : "flex-end"}} pb="0px" 
                w={{base: "100%", md: "50%"}}>
                    <Img as={"img"} src={item.image} alt={item.title} width={{base: "100%", md: "528"}} height={{base: "auto", md: "396"}} />
                </VStack>
          </HStack>
        </Container>
    </Box>
    )
}

export default Features