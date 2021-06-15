
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Header from "./Header";

export default function HomeHeader({props}) {
    const { t } = useTranslation()

    const router = useRouter()

    const isActive = paths => {
        return paths.includes(router.asPath)
    }
    return (
        <Header home="/">
            <Header.Text href="/#about" textTransform="capitalize" 
            >
            {t("header:about")}
            </Header.Text>
            <Header.Text href="/#projects" textTransform="capitalize">
            {t("header:start-earning")}
            </Header.Text>
            <Header.Text href="/#distro" textTransform="capitalize">
            {t("header:distro")}
            </Header.Text>
            <Header.Text href="/#roadmap" textTransform="capitalize">
            {t("header:roadmap")}
            </Header.Text>
            <Header.Text href="/airdrop#index" active={isActive(["/airdrop", "/airdrop#index"])}>
            {t("header:airdrop")}
            </Header.Text>
            <Header.Text href="/airdrop#presale" active={isActive(["/airdrop#presale"])}>
            {t("header:presale")}
            </Header.Text>
        </Header>
    )
}