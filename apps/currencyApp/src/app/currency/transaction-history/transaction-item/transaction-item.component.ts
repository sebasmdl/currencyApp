import { Component, Input } from '@angular/core';
import { Transaction } from '../../interfaces/transaction-interface';
import { TransactionHistoryService } from '../../../services/currency/transaction-history.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrl: './transaction-item.component.css',
})
export class TransactionItemComponent {
  @Input() conversionHistory: Transaction;
  constructor(private transactionService: TransactionHistoryService, private router: Router){}
  detailTransaction(transactionId: number){
    if (transactionId !== null) {
      this.router.navigate(['/transactions', transactionId]);
    }
  }
  deleteTransaction(transaction: Transaction){
    this.transactionService.deleteTransaction(transaction);
  }
}
