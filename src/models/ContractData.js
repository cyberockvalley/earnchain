import { BigNumber } from "@ethersproject/bignumber"
import { CURRENCY_DECIMAL_ZEROS } from "../utils/c"
import Stats from "./Stats"

const currencyDecimal = BigNumber.from("1" + CURRENCY_DECIMAL_ZEROS)
class ContractData {
    constructor(rawData) {
        this.rawData = rawData
    }

    setSlotPricesFromRawData(rawData) {
        this.slotPricesRaw = rawData
        var decimals = currencyDecimal//rawData[0]
        var prices = []
        for (let index = 1; index < rawData.length; index++) {
            const rawPrice = rawData[index];
            prices.push({
                displayScale: rawPrice.div(decimals).toNumber(),//price without decimals in plain number
                contractScaleString: rawPrice.toString(),//price with decimals converted to string
                contractScaleBigNumber: rawPrice,//price with decimals left in BigNumber
            })
            
        }
        this.slotPrices = prices
    }
}

let data;
ContractData.getInstance = async (contractInterface) => {
    if(!data) {
        var cData = new ContractData()
        cData.setSlotPricesFromRawData(await contractInterface.getLevelPricesWithDecimals())
        var stats = new Stats(await contractInterface.getStatsNoDecimals())
        await stats.setUsersPerDay()
        cData.stats = stats
        data = cData
    }
    return data
}

export default ContractData