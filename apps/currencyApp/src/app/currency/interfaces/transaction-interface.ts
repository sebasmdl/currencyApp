import { Currencie } from "./currencies-interfaces";

export interface Transaction {
    id: number;
    recipientName: string;
    recipientLastName: string;
    recipientEmail: string;
    amount: number;
    date:string;
    creditCardNumber: number;
    selectedBank: string;
    convertedAmount: number;
    status: 'Completed' | 'Pending' | 'Failed';
    currencies: Currencie[];
  }
  