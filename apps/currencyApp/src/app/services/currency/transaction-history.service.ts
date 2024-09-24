import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Transaction } from '../../currency/interfaces/transaction-interface';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TransactionHistoryService {
  private transactions: Transaction[] = [];
  private transactionsSubject = new BehaviorSubject<Transaction[]>(this.transactions);
  private nextId = 0; 
  constructor(private toastr: ToastrService) {

  }

  getTransactions() {
    return this.transactionsSubject.asObservable();
  }

  addTransaction(transaction: Transaction) {
    transaction.id = this.nextId++; 
    if (transaction) {
      this.transactions = [...this.transactions, transaction];
      this.transactionsSubject.next(this.transactions);
      this.toastr.success('¡Check the status!', 'Transaction sent');
    }    
  }

  deleteTransaction(transaction: Transaction) {
    this.transactions = this.transactions.filter(el => el.id !== transaction.id);
    this.transactionsSubject.next(this.transactions);
    this.toastr.warning('Transaction deleted')
  }

  getTransactionById(id: number): Transaction | undefined {
    return this.transactions.find(transaction => transaction.id === id);
  }

  updateTransaction(updatedTransaction: Transaction): void {
    const exists = this.transactions.some(transaction => transaction.id === updatedTransaction.id);
  
    if (exists) {
      this.transactions = this.transactions.map(transaction =>
        transaction.id === updatedTransaction.id ? updatedTransaction : transaction
      );

      this.transactionsSubject.next(this.transactions);
      this.toastr.success('Transaction updated successfully!', 'Success');
    } else {
      this.toastr.error('Transaction not found!', 'Error');
    }
  }
}
