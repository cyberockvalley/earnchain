
class Stats {
    constructor(rawData) {
        this.rawData = rawData

        this.totalUsers = rawData[0].toNumber()
        this.totalBUSDEarned = rawData[1].toNumber()
        this.totalECTEarned = rawData[2].toNumber()
    }

    async setUsersPerDay() {
        //await we be used to get the number of users from 
        this.usersPerDay = -1//-1 means users per day was not fetched
    }
}

export default Stats