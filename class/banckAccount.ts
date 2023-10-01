

export abstract class BankAcount {
    private name: string
    private readonly acountNumber: number
    balance: number = 0
    private status: boolean = true

    constructor(name: string, acountNumber: number) {
        this.name = name
        this.acountNumber = acountNumber
    }    

    getBalance = (): number => {
        return this.balance
    }    

    deposit = (value: number): void => {
        if (this.validatestatus()) {
            this.balance = this.balance + value
        }

    }

    withdraw = (value: number): void => {

        if (value > this.balance) {
            console.log('Saldo Insuficiente')
            this.balance = this.balance
        } else {
            this.balance = this.balance - value
        }
    }

    validatestatus = (): boolean => {
        if (this.status) {
            return this.status
        }
        throw new Error("Conta Desabilitada")
    }

}