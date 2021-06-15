import useTranslation from "next-translate/useTranslation"
import { toLocaleString } from "../../utils/f"
import SlotPage from "../SlotPage"
import Link from "../views/Link"

export default function SlotListItemNInfinity({number, latestActiveSlotNumber, data, buyLevel}) {
    const {t, lang} = useTranslation('dash')

    return (
        <div className="ternary">
            {
                !data.isActive? <div className="binary-root matrix-root__nonactive">
                    <i className={
                        `${latestActiveSlotNumber + 1 == number? 
                            "matrix-icon_cart matrix-icon_cart__big" : "matrix-icon_cart matrix-icon_cart__small"}`
                        }
                    onClick={latestActiveSlotNumber + 1 == number? () => buyLevel(SlotPage.TYPES.nInfinity, number) : null} title={t('buy')}></i>
                    <span className="matrix-level matrix-level__active ">
                        {number.toLocaleString(lang)}{" "}
                    </span>
                    <span className="matrix-price">{toLocaleString(data.price.displayScale, lang, 0)}</span>
                </div> : 
                <Link
                href={`/slots/n3/${data.userAddress}/${number}/`}
                className="ternary-root matrix-root__active "
                >
                    <span className="matrix-level matrix-level__active ">
                        {number.toLocaleString(lang)}{" "}
                    </span>
                    <span className="matrix-price">{toLocaleString(data.price.displayScale, lang, 0)}</span>
                </Link>

            }
            
            <div className="ternary-children">
                {
                    data.isActive? 
                    data.nodes.map((value, index) => {
                        return !value.isActive? <div className="matrix-children__nonactive " /> :
                        <div className="matrix-children__active">
                            <Link href={`/slots/n3/${value.userAddress}/${number}/`} title={`UID: ${value.userAddress}`}>&nbsp;</Link>
                        </div>
                        
                    })
                    :
                    <>
                        <div className="matrix-children__nonactive " />
                        <div className="matrix-children__nonactive " />
                    </>
                }
                <div className="matrix-children__nonactive " />
            </div>
            <div className="ternary-branchs">
                <div />
                <div />
                <div />
            </div>
            <div className="matrix-break" />
            <div className="matrix-info">
                <div className="matrix_partners__count">
                    <span>{data.isActive? data.partnersCount.toLocaleString(lang) : (0).toLocaleString(lang)} </span>
                    <i className="matrix-icon_users" />
                </div>
                <div className="matrix_reinvest">
                    <span>{data.isActive? data.reInvestsCount.toLocaleString(lang) : (0).toLocaleString(lang)} </span>
                    <i className="matrix-icon_sync" />
                </div>
            </div>
        </div>
    )
}