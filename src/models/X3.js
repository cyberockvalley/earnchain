import SlotPage from "../components/SlotPage"

/**
 *  
    RawDataReturned:::
    users[userAddress].x3Matrix[level].currentReferrer:address,0
    users[userAddress].x3Matrix[level].referrals:address[],1
    users[userAddress].x3Matrix[level].blocked:bool,2
    users[userAddress].x3Matrix[level].referralsType:uint8[],3
    users[userAddress].x3Matrix[level].downlines:uint256,4
    users[userAddress].x3Matrix[level].reinvestCount:uint256;5
 */
const MAX_NODES = 2
class X3 {

    constructor(user, id, price, rawData) {
        this.rawData = rawData
        this.isActive = !!rawData
        this.price = price
        this.userId = user?.id
        this.userAddress = user?.address
        this.currentReferrer = rawData? rawData[0] : null
        this.blocked = rawData? rawData[2] : false
        this.partnersCount = rawData? rawData[4].toNumber() : 0
        this.reInvestsCount = rawData? rawData[5].toNumber() : 0

        var referrals = rawData? rawData[1] : []
        var referralsType = rawData? rawData[3] : []
        var nodes = []

        for(var i = 0; i < referrals.length; i++) {
            nodes.push({
                isActive: true, 
                userId: -1, 
                userAddress: referrals[i], 
                type: this.getNodeType(referralsType[i])
            })
        }
        
        for(var i = nodes.length; i < MAX_NODES; i++) {
            nodes.push({isActive: false})
        }
        this.nodes = nodes
    }

    getNodeType(refType) {
        if(!refType) return SlotPage.NODE_TYPES.INVITED_NODE
        return refType
    }

    /**
     * {
          price: 10,
          isActive: true,
          userId: 2,
          reInvestsCount: 23256,
          partnersCount: 167,
          nodes: [
            {isActive: true, userId: 123, type: SlotPage.NODE_TYPES.INVITED_NODE},
            {isActive: false, userId: 124, type: SlotPage.NODE_TYPES.FROM_SLOW_INVITER_NODE}
          ],
          price: {
            displayScale: 5,//price without decimals in plain number
            contractScaleString: "5" + BUSD_DECIMALS_ZEROS,//price with decimals converted to string
            contractScaleBigNumber: BigNumber.from(5" + BUSD_DECIMALS_ZEROS),//price with decimals left in BigNumber
          }
        }
     */
}

export default X3