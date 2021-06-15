import SlotPage from "../components/SlotPage"


class XInfinity {

    constructor(user, id, price, rawData) {
    }

    getNodeType(refType) {
        if(!refType) return SlotPage.NODE_TYPES.INVITED_NODE
        return refType
    }
}

export default XInfinity