import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { TITLE_SEPARATOR } from "../utils/c";

export default function PageTitle({title}) {
    const { t } = useTranslation("common")

    return (
        <Head>
            <title>{t("sitename")}{TITLE_SEPARATOR}{title}</title>
        </Head>
    )
    
}