import useTranslation from 'next-translate/useTranslation';
import L from 'next/link';

//import {Text, useColorModeValue } from "@chakra-ui/react"
import { isProduction } from '../../utils/f';
import { BLOCK_CHAIN_ADDRESS_SCAN_PREFIX } from '../../utils/c';

const linkNativeProps = ["href", "as", "passHref", "prefetch", "replace", "scroll", "shallow", "locale"]
export default function Link({href, shallow, locale, children, isButton, isContractAddress, ...props}) {
    const { lang } = useTranslation()

    //const shallow = !(shallow === undefined)? shallow : locale && locale != lang? true : false
    
    const color = "#039be5"//useColorModeValue("link.light", "link.dark")
    const colorHover = "#039be5"//useColorModeValue("linkHover.light", "linkHover.dark")

    return (
        <L href={href} locale={locale || lang} shallow={shallow}>
            <a 
            cursor="pointer"
            href={buildLink(href, {isContractAddress: isContractAddress})}
            {...props}>
                {children}
            </a>
        </L>
    )
}

export const buildLink = (href, options) => {
    if(!options?.isContractAddress) return href
    if(isProduction()) {
        return BLOCK_CHAIN_ADDRESS_SCAN_PREFIX.main + href

    } else {
        return BLOCK_CHAIN_ADDRESS_SCAN_PREFIX.test + href
    }
}