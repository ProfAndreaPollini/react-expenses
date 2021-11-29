export default class Expense {
    constructor({ description = "", amount = 0.0, date = new Date(), category = "" }) {
        this.description = description
        this.amount = parseFloat(amount)
        this.date = date
        this.category = category
    }

    // toJSON() {
    //     return JSON.stringify({
    //         description: this.description,
    //         amount: this.amount,
    //         date: this.date,
    //         category: this.category
    //     })
    // }
}