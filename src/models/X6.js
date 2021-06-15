import SlotPage from "../components/SlotPage"

/**
 *  
    RawDataReturned.partOne sources:::

    users[userAddress].x6Matrix[level].currentReferrer:address,0
    users[userAddress].x6Matrix[level].firstLevelReferrals:address[],1
    users[userAddress].x6Matrix[level].firstLevelReferralsType:uint8[],2
    users[userAddress].x6Matrix[level].blocked:bool,3
    users[userAddress].x6Matrix[level].closedPart:address4

    RawDataReturned.partTwo:::
    users[userAddress].x6Matrix[level].secondLevelReferrals,0
    users[userAddress].x6Matrix[level].secondLevelReferralsType,1
    users[userAddress].x6Matrix[level].downlines,2
    users[userAddress].x6Matrix[level].reinvestCount3
 */
const MAX_NODES_1 = 2
const MAX_NODES_2 = 3
class X6 {

    constructor(user, id, price, rawData) {
        this.rawData = rawData
        this.isActive = !!rawData
        this.price = price
        this.userId = user?.id
        this.userAddress = user?.address
        this.currentReferrer = rawData? rawData.partOne[0] : null
        this.blocked = rawData? rawData.partOne[3] : false
        this.partnersCount = rawData? rawData.partTwo[2].toNumber() : 0
        this.reInvestsCount = rawData? rawData.partTwo[3].toNumber() : 0

        //first nodes creation start
        var referrals = rawData? rawData.partOne[1] : []
        var referralsType = rawData? rawData.partOne[2] : []
        var nodes = []

        for(var i = 0; i < referrals.length; i++) {
            nodes.push({
                isActive: true, 
                userId: -1, 
                userAddress: referrals[i], 
                type: this.getNodeType(referralsType[i])
            })
        }
        for(var i = nodes.length; i < MAX_NODES_1; i++) {
            nodes.push({isActive: false})
        }
        this.nodes1 = nodes
        //first nodes creation end

        //second nodes creation start
        referrals = rawData? rawData.partTwo[0] : []
        referralsType = rawData? rawData.partTwo[1] : []
        nodes = []

        for(var i = 0; i < referrals.length; i++) {
            nodes.push({
                isActive: true, 
                userId: -1, 
                userAddress: referrals[i], 
                type: this.getNodeType(referralsType[i])
            })
        }
        for(var i = nodes.length; i < MAX_NODES_2; i++) {
            nodes.push({isActive: false})
        }
        this.nodes2 = nodes
        //second nodes creation end
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
            nodes1: [
                {isActive: true, userId: 123, type: SlotPage.NODE_TYPES.FROM_TOP_NODE},
                {isActive: true, userId: 124, type: SlotPage.NODE_TYPES.FROM_SLOW_INVITER_NODE}
            ],
            nodes2: [
                {isActive: true, userId: 125, type: SlotPage.NODE_TYPES.FROM_BOTTOM_NODE},
                {isActive: true, userId: 126, type: SlotPage.NODE_TYPES.INVITED_NODE},
                {isActive: false}
            ],
            price: {
                displayScale: 5,//price without decimals in plain number
                contractScaleString: "5" + BUSD_DECIMALS_ZEROS,//price with decimals converted to string
                contractScaleBigNumber: BigNumber.from(5" + BUSD_DECIMALS_ZEROS),//price with decimals left in BigNumber
            }
        }
     */
}

export default X6