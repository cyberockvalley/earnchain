import { useClipboard } from '@chakra-ui/hooks';
import { HStack } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { useToast } from '@chakra-ui/toast';
import useTranslation from 'next-translate/useTranslation';
import bnbLogo from '../../images/logo-big-bnb.svg'
import { CONTRACT_ADDRESSES, PRIMARY_COLOR, SEC_COLOR } from '../../utils/c';
import { copyFromText, shortenAddress, toLocaleString } from '../../utils/f';
import LoadingOrView from '../status/LoadingOrView';
import { buildLink } from '../views/Link';

const DashSideBar = ({user}) => {
  const {t, lang} = useTranslation("dash")
  const toast = useToast()

  return (
    <>
    <div className="border-gradient section-left">
        <div className="border-gradient_content status-panel">
          <div className="status-panel_id">
            <Text as="span" textTransform="uppercase"
              style={{
                color: "#EEE"
              }}
              className="status-panel__user-id"
            >
              {t("id")} <LoadingOrView as="span" title="Show/Hide" loadingW="20px" loadingH="20px" 
              isLoading={!user}>{user?.id}</LoadingOrView>
            </Text>
            <div className="status-panel_partners__top" />
          </div>
          <div className="status-panel__logo">
            <img src={bnbLogo} />
          </div>
          <Box as="div" className="status-panel_money">
            <div className="status-panel_money_total__dollars">
              <span>$</span>
              <LoadingOrView isLoading={!user} as="span">
                {toLocaleString(user?.totalEarnedInUSD, lang, 2)}
              </LoadingOrView>
              <span>{user?.ectPriceIncluded? "" : " +"}</span>
            </div>
            {/**<br /> */}
            <Box as="div" d="none" className="status-panel_money_total__eth" title="0,0000">
              BUSD 0.00{" "}
            </Box>
          </Box>
          <br />
          <div className="status-panel_money">
            <div className="border-gradient custom-border">
              <div className="border-gradient_content">
                <div className="logotypeX3">
                  <Text as="span" textTransform="capitalize">{t("zone-1-name")}</Text>
                </div>
                <div className="status-panel_money__dollars">
                  <LoadingOrView isLoading={!user} as="span">
                    {toLocaleString(user?.x3BUSDEarned, lang, 2)}
                  </LoadingOrView> <span>BUSD</span> 
                </div>
                <Text py="15px" fontSize="1.5rem" as="div" color={PRIMARY_COLOR} className="status-panel_money__dollars">
                  + 
                </Text>
                <div className="status-panel_money__dollars">
                  <LoadingOrView isLoading={!user} as="span">
                    {toLocaleString(user?.x3ECTEarned, lang, 2)}
                  </LoadingOrView> <span>ECT</span> 
                </div>
                <div className="status-panel_money__eth" title="(5675500)">
                  <span>$</span>
                  <LoadingOrView isLoading={!user} as="span" loadingColor={SEC_COLOR}>
                    {toLocaleString(user?.x3TotalEarnedInUSD, lang, 2)}
                  </LoadingOrView> 
                  <span>{user?.ectPriceIncluded? "" : " +"}</span>
                </div>
              </div>
            </div>

            <div className="border-gradient custom-border">
              <div className="border-gradient_content">
                <div className="logotypeX4">
                  <Text as="span" textTransform="capitalize">{t("zone-2-name")}</Text>
                </div>
                <div className="status-panel_money__dollars">
                  <LoadingOrView isLoading={!user} as="span">
                    {toLocaleString(user?.x6BUSDEarned, lang, 2)}
                  </LoadingOrView> <span>BUSD</span> 
                </div>
                <Text py="15px" fontSize="1.5rem" as="div" color={PRIMARY_COLOR} className="status-panel_money__dollars">
                  + 
                </Text>
                <div className="status-panel_money__dollars">
                  <LoadingOrView isLoading={!user} as="span">
                    {toLocaleString(user?.x6ECTEarned, lang, 2)}
                  </LoadingOrView> <span>ECT</span> 
                </div>
                <div className="status-panel_money__eth" title="(5675500)">
                  <span>$</span>
                  <LoadingOrView isLoading={!user} as="span" loadingColor={SEC_COLOR}>
                    {toLocaleString(user?.x6TotalEarnedInUSD, lang, 2)}
                  </LoadingOrView> 
                  <span>{user?.ectPriceIncluded? "" : " +"}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="section-right">
        <div className="border-gradient">
          <div className="border-gradient_content status-panel_partners pb-5">
            <div className="status-panel_partners__subject">
              {t("aff-link")}
              <div className="status-panel_partners__count" />
            </div>
            <div
              className="area-text status-panel_partners__link trigger_value__user-refkey"
              title="#"
            >
              <input
                type="text"
                value={user?.affLink || ""}
                id="refLink"
                onClick={() => document.getElementById('refLink').select()}
                readOnly
              />
            </div>
            <Box as="div" textTransform="uppercase"
              className="status-panel_partners_copy"
              onClick={() => {
                copyFromText(user?.affLink || "", () => {
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
              {t("copy")}
            </Box>
          </div>
        </div>
        <div className="border-gradient mt-5">
          <div className="border-gradient_content status-panel_wallets pb-4">
            <div className="status-panel_wallets__subject">{t("ur-wallet-address")}</div>
            <div className="status-panel_wallet">{user? shortenAddress(user.address) : ""}</div>
            <a
              href={buildLink(user?.address, {isContractAddress: true})}
              target="_blank"
              className="status-panel_wallets__btn"
              style={{
                left: "6px"
              }}
            >
              {t("common:scan")}{" "}
            </a>
            <Box as="div" textTransform="uppercase"
              className="status-panel_wallets__btn"
              right="6px"
              onClick={() => {
                copyFromText(user?.address || "", () => {
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
              {t("copy")}
            </Box>
          </div>
        </div>
        <div className="border-gradient mt-5">
          <div className="border-gradient_content status-panel_wallets pb-4">
            <Text as="div" textTransform="capitalize" className="status-panel_wallets__subject">
              {t("common:sca")}
            </Text>
            <div className="status-panel_wallet">{shortenAddress(CONTRACT_ADDRESSES.earnChain)}</div>
            <a
              href={buildLink(CONTRACT_ADDRESSES.earnChain, {isContractAddress: true})}
              target="_blank"
              className="status-panel_wallets__btn"
              style={{
                left: "6px"
              }}
            >
              {t("common:scan")}{" "}
            </a>
            <Box as="div" textTransform="uppercase"
              className="status-panel_wallets__btn"
              right="6px"
              onClick={() => {
                copyFromText(CONTRACT_ADDRESSES.earnChain, () => {
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
              {t("copy")}
            </Box>
          </div>
        </div>
      </div>
      </>
  )
}

export default DashSideBar;
