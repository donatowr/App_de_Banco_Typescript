import { BankAcount } from "./banckAccount";

 export class CompanyAccount extends BankAcount {
    
    constructor(name: string, acountNumber: number) {
        super(name, acountNumber)
    }
    
    getloan = (loan: number): void => {        
        if (this.validatestatus()){
        this.balance = this.balance + loan
        } 
    }        

}
