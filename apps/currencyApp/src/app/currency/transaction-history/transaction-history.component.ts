import { Component, OnInit } from '@angular/core';
import { Transaction } from '../interfaces/transaction-interface';
import { TransactionHistoryService } from '../../services/currency/transaction-history.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.css',
})
export class TransactionHistoryComponent implements OnInit {  
  transactions:Transaction[] = [];
  constructor(private transactionService: TransactionHistoryService){
   
  }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((transactions: Transaction[]) => {
      this.transactions = transactions;
      console.log(transactions, 'th obs')
    });
  }
}
