
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { logOut } from "../utils/f";
import Header from "./Header";

export default function MatrixHeader({isLogin, ...props}) {
    const { t } = useTranslation()

    const router = useRouter()

    const isActive = paths => {
        return paths.includes(router.asPath)
    }
    return (
        <Header home="/">
            {
                !isLogin?
                <>
                    <Header.Text href="/register" textTransform="capitalize" 
                    active={isActive(["/register"])}>
                    {t("header:join-now")}
                    </Header.Text>
                    <Header.Text href="/login" textTransform="capitalize" 
                    active={isActive(["/login"])}>
                    {t("header:login")}
                    </Header.Text>
                </>
                :
                <>
                <Header.Text href="/dashboard" textTransform="capitalize">
                {t("header:dash")}
                </Header.Text>
                <Header.Text href="/logout" textTransform="capitalize" onClick={e => {
                    e.preventDefault()
                    logOut(router)
                }}>
                {t("header:logout")}
                </Header.Text>
                </>
            }
        </Header>
    )
}