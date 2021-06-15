import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React from "react";
import { APP_NAME, SOCIAL_LINKS } from "../../utils/c";
import { logOut, toLocaleString } from "../../utils/f";
import LoadingOrView from "../status/LoadingOrView";
import Link from "../views/Link";
import MatrixHeader from "../MatrixHeader";
import { Box, Flex } from "@chakra-ui/react";

const DashHeader = ({home, totalUsers, tokenEarned, coinEarned}) => {

  const { t, lang } = useTranslation("header")
  const router = useRouter()

  return (
    <div className="row">
      <div className="col-md-4 logotype-wrapper">
        <div className="logotype">
          <Link href={home || "/projects/matrix/"}>
            <img src="/resources/img/logo.png" alt={APP_NAME} />
          </Link>
        </div>
      </div>
      <div className="col-md-8 nav-wrapper">
        <div className="topheader">
          <ul className="nav">
            <li>
              <Link href="/dashboard">{t("dashboard")} </Link>
            </li>
            <li>
              <Link href="/logout" onClick={e => {
                e.preventDefault()
                logOut(router)
              }}>{t("logout")} </Link>
            </li>
          </ul>
          <div className="footer-media">
            {
              SOCIAL_LINKS.MATRIX.map((social, index) => {
                return social.settings.disabled? null :
                <a
                  href={social.link}
                  target="_blank"
                  className="footer-right__social"
                >
                  <img src={social.icon} alt={t(`common:${social.id}`)} />
                </a>
              })
            }
          </div>
        </div>
        <Flex className="stats-top d-flex" 
        flexDirection={{base: "column", md: "row"}} 
        flexWrap="wrap">
          <div className="no-gutters align-items-center">
            <div
              className="stats-top_sum"
              style={{
                color: "#F0B90B"
              }}
            >
              <LoadingOrView as="span" isLoading={!totalUsers && totalUsers != 0}>
                {toLocaleString(totalUsers, lang, 0)}
              </LoadingOrView>
            </div>
            <div className="stats-top_subject">
              {t("total-members")}
            </div>
          </div>
          <div className="no-gutters align-items-center">
            <div
              className="stats-top_sum"
              style={{
                color: "#999999"
              }}
            >
              <LoadingOrView as="span" isLoading={!coinEarned && coinEarned != 0}>
                {toLocaleString(coinEarned, lang, 2)}
              </LoadingOrView>
            </div>
            <div className="stats-top_subject">
              {t("coin-earned")}
            </div>
          </div>
          <div className="no-gutters align-items-center">
            <div
              className="stats-top_sum"
              style={{
                color: "#999999"
              }}
            >
              <LoadingOrView as="span" isLoading={!tokenEarned && tokenEarned != 0}>
                {toLocaleString(tokenEarned, lang, 2)}
              </LoadingOrView>
            </div>
            <div className="stats-top_subject">
              {t("token-earned")}
            </div>
          </div>
        </Flex>
      </div>
    </div>
  )
}

export default DashHeader;
