import { BankAcount } from "./banckAccount"

export class PeapleAccount extends BankAcount {
    private doc_id: number

    constructor(doc_id: number, name: string, acountNumber: number) {
        super(name, acountNumber)
        this.doc_id = doc_id
    }
}


