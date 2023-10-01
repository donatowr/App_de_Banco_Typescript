import { BankAcount } from "./banckAccount"

export class Admin extends BankAcount {

    constructor(name: string, acountNumber: number) {
        super(name, acountNumber)

    }

    getbalance = () => {
        console.log(this.balance);
    }

    deposit = (value: number) => {
        if (this.validatestatus()) {
            this.balance = this.balance + value + 10
        }
    }
}

