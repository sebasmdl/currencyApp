import { Currencie } from "./currencies-interfaces";
import { Transaction } from "./transaction-interface";

export interface CompleteTransaction {
    transactionDetails: Transaction;
    currencyDetails: Currencie[];
}