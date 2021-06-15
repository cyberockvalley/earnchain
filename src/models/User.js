import { BigNumber } from "@ethersproject/bignumber"
import { CURRENCY_DECIMAL_ZEROS, ECT_DECIMAL_ZEROS } from "../utils/c"
import { refLinkFromUserId } from "../utils/f"

const currencyDecimal = BigNumber.from("1" + CURRENCY_DECIMAL_ZEROS)
const ectDecimal = BigNumber.from("1" + ECT_DECIMAL_ZEROS)
class User {
    
    constructor(address, rawData) {
        this.rawData = rawData
        this.id = rawData.id.toNumber()
        this.address = address
        this.affLink = refLinkFromUserId(this.id)
        this.referrer = rawData.referrer
        this.partnersCount = rawData.partnersCount.toNumber()
        this.biggestX3Slot = rawData.biggestX3Slot
        this.biggestX6Slot = rawData.biggestX6Slot
        
        this.x3BUSDEarned = rawData.x3BUSDEarned.div(currencyDecimal).toNumber()
        this.x3ECTEarned = rawData.x3ECTEarned.div(ectDecimal).toNumber()

        this.x6BUSDEarned = rawData.x6BUSDEarned.div(currencyDecimal).toNumber()
        this.x6ECTEarned = rawData.x6ECTEarned.div(ectDecimal).toNumber()

        //to be fetched from coinmarketcap
        var busdToUSDFactor = 1
        var ectToUSDFactor = 0
        //false if ect conversion is not available
        this.ectPriceIncluded = ectToUSDFactor > 0 || this.x3ECTEarned + this.x6ECTEarned == 0

        this.x3BUSDEarnedUSDValue = this.x3BUSDEarned * busdToUSDFactor;
        this.x3ECTEarnedUSDValue = this.x3ECTEarned * ectToUSDFactor
        this.x3TotalEarnedInUSD = this.x3BUSDEarnedUSDValue + this.x3ECTEarnedUSDValue

        this.x6BUSDEarnedUSDValue = this.x6BUSDEarned * busdToUSDFactor;
        this.x6ECTEarnedUSDValue = this.x6ECTEarned * ectToUSDFactor
        this.x6TotalEarnedInUSD = this.x6BUSDEarnedUSDValue + this.x6ECTEarnedUSDValue

        this.totalEarnedInUSD = this.x3TotalEarnedInUSD + this.x6TotalEarnedInUSD
    }
}

export default User