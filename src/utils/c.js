import { isProduction } from "./f";

import busdAbi from '../web3/abis/BUSD.json'
import earnChainAbi from '../web3/abis/EarnChain.json'
import ectAbi from '../web3/abis/ECT.json'
import ectBNBAbi from '../web3/abis/ECTBNB.json'
import ectPresellerAbi from '../web3/abis/ECTPreseller.json'
import { utils } from "ethers";

import fbIcon from "../images/fbicon.png"
import twIcon from "../images/twitter.svg"
import tgIcon from "../images/tg.svg"

export const PRIMARY_COLOR = "#F8D12F"
export const SEC_COLOR = "rgb(14,203,129)"

export const APP_NAME = "EarnChain"
export const AIR_DROP_ACTIVE = true;
export const PRESALE_ACTIVE = true;
export const FUNDING_ACTIVE = false;
export const PROJECTS_ACTIVE = false;
export const TEAM_ACTIVE = false;
export const TITLE_SEPARATOR = " - "

export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000"

export const ECT_DECIMAL_ZEROS = "000000000"
export const CURRENCY_DECIMAL_ZEROS = "000000000000000000"
export const REG_COST_STRING = "10" + CURRENCY_DECIMAL_ZEROS
export const SITE_PROTOCOL = (() => {
    if(isProduction()) {
      return "https://"
  
    } else {
      return "http://"
    }
})()
export const SITE_DOMAIN_SLASH = (() => {
    if(isProduction()) {
      return "tronpipe.io/"
  
    } else {
      return "localhost:2000/"
    }
})()
export const REFERRAL_PATH_SLASH = "n/"

//Testnet: https://data-seed-prebsc-1-s1.binance.org:8545
//MAINNET: https://bsc-dataseed1.binance.org
export const NETWORK_URL = "https://data-seed-prebsc-1-s1.binance.org:8545"
//Testnet: 97
//MAINNET: 56
export const REACT_APP_CHAIN_ID = "97"

export const BLOCK_CHAIN_ADDRESS_SCAN_PREFIX = {
    main: "https://bscscan.com/address/",
    test: "https://testnet.bscscan.com/address/"
}
export const CONTRACT_ADDRESSES = {
    busd: busdAbi.address,
    ect: ectAbi.address,
    earnChain: earnChainAbi.address,
    ectBNB: ectBNBAbi.address,
    ectPreseller: ectPresellerAbi.address 
}

export const PRESALE = {
    tokenPerBNB: ectPresellerAbi.tokenPerBNB,
    minBNB: ectPresellerAbi.minBNB,
    maxBNB: ectPresellerAbi.maxBNB
}

export const READ_ONLY_WALLET = {
    key: "READ_ONLY",
    privateKey: "",
    address: ""
}

export const LOCAL_STORAGE = {
    web3ConnectorKey: "web3ConnectorKey",
    refId: "refId",
    refUserId: "refUserId",
    loginAddress: "loginAddress"
}

export const SOCIAL_LINKS = {
    EARNCHAIN: [
        {
            id: "twitter",
            link: `https://www.twitter.com/earnchain`,
            icon: twIcon,
            settings: {
                disabled: false,
                airdropEnabled: true
            }
        },
        {
            id: "telegram",
            link: `https://t.me/earnchain_official`,
            icon: tgIcon,
            settings: {
                disabled: false,
                airdropEnabled: true
            }
        },
        {
            id: "facebook",
            link: `https://www.facebook.com/earnchain_official`,
            icon: fbIcon,
            settings: {
                disabled: false,
                airdropEnabled: false
            }
        }
    ],
    MATRIX: [
        {
            id: "twitter",
            link: `https://www.twitter.com/earnchain_matrix`,
            icon: twIcon,
            settings: {
                disabled: false,
                airdropEnabled: true
            }
        },
        {
            id: "telegram",
            link: `https://t.me/earnchain_matrix`,
            icon: tgIcon,
            settings: {
                disabled: false,
                airdropEnabled: true
            }
        },
        {
            id: "facebook",
            link: `https://www.facebook.com/earnchain_matrix`,
            icon: fbIcon,
            settings: {
                disabled: false,
                airdropEnabled: false
            }
        }
    ],
    WORK: [
        {
            id: "twitter",
            link: `https://www.twitter.com/earnchain_work`,
            icon: twIcon,
            settings: {
                disabled: false,
                airdropEnabled: true
            }
        },
        {
            id: "telegram",
            link: `https://t.me/earnchain_work`,
            icon: tgIcon,
            settings: {
                disabled: false,
                airdropEnabled: false
            }
        },
        {
            id: "facebook",
            link: `https://www.facebook.com/earnchain_work`,
            icon: fbIcon,
            settings: {
                disabled: false,
                airdropEnabled: false
            }
        }
    ],
    MEDIA: [
        {
            id: "twitter",
            link: `https://www.twitter.com/earnchain_media`,
            icon: twIcon,
            settings: {
                disabled: false,
                airdropEnabled: true
            }
        },
        {
            id: "telegram",
            link: `https://t.me/earnchain_media`,
            icon: tgIcon,
            settings: {
                disabled: false,
                airdropEnabled: true
            }
        },
        {
            id: "facebook",
            link: `https://www.facebook.com/earnchain_media`,
            icon: fbIcon,
            settings: {
                disabled: false,
                airdropEnabled: false
            }
        }
    ]
}
export const ERROR_CODES = {
    META_MASK_TX_DECLINED: 4001
}
export const EVENTS_FILTERS = {
    busd: {
        approve: {
            address: busdAbi.address,
            topics: [
                // the name of the event, parnetheses containing the data type of each event, no spaces
                utils.id("Transfer(address,address,uint256)")
            ]
        }
    },
    earnChain: {
        reg: {
            address: earnChainAbi.address,
            topics: [
                utils.id("Registration(address,address,uint,uint)")
            ]
        },
        upgrade: {
            address: earnChainAbi.address,
            topics: [
                utils.id("Upgrade(address,address,uint8,uint8)")
            ]
        }
    }
}