import { Box, VStack } from "@chakra-ui/react"
import useTranslation from "next-translate/useTranslation"
import { CONTRACT_ADDRESSES, SOCIAL_LINKS } from "../utils/c"
import { buildLink } from "./views/Link"

export default function Footer(props) {
    const { t } = useTranslation()
    
    return (
        <Box as="footer" className="footer" borderTop="1px solid #333" pt={{base: "15px", sm: "25px"}} {...props}>
            <VStack mb="15px" justifyContent="flex-start" alignItems="center">
            <Box mb="10px" textTransform="capitalize">{t("common:ect-address")}</Box>
            <a
                href={buildLink(CONTRACT_ADDRESSES.ect, {isContractAddress: true})}
                target="_blank"
            >
                {CONTRACT_ADDRESSES.ect}
            </a>
            </VStack>
            <Box className="footer-media" justifyContent="center !important">
            {
                SOCIAL_LINKS.EARNCHAIN.map((social, index) => {
                return social.settings.disabled? null :
                <Box as="a"
                    href={social.link}
                    target="_blank"
                    className="footer-right__social"
                    mr="20px"
                >
                    <img src={social.icon} alt={t(`common:${social.id}`)} />
                </Box>
                })
            }
            </Box>
      </Box>
    )
}