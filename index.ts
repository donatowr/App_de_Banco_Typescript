
import { PeapleAccount } from "./class/peopleAccount";
import { CompanyAccount } from "./class/companyAccount";
import { Admin } from "./class/adminAccount";


const peapleAccount: PeapleAccount = new PeapleAccount(1, 'Donato', 130114);
peapleAccount.deposit(100)
console.log(peapleAccount)
peapleAccount.withdraw(50)
console.log(peapleAccount);
peapleAccount.withdraw(20);
console.log(peapleAccount);

const companyAccount: CompanyAccount = new CompanyAccount('Donatos S/A', 5878542);
companyAccount.deposit(5000);
companyAccount.getloan(10000);
console.log(companyAccount);

const admin:Admin = new Admin('Financeiro', 524586);
admin.deposit(90);
console.log(admin);








