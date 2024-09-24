import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionHistoryService } from '../../services/currency/transaction-history.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router, } from '@angular/router';
import { Transaction } from '../interfaces/transaction-interface';
import { Bank } from '../interfaces/bank-interface';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.css',
})
export class TransactionFormComponent implements OnInit{

  transactionForm: FormGroup;
  transferResult: number | null = null

  banks: Bank[] = [
    { name: 'Bank of America', code: 'BOA' },
    { name: 'Chase Bank', code: 'CHASE' },
    { name: 'Wells Fargo', code: 'WF' },
    { name: 'Citibank', code: 'CITI' },
    { name: 'PNC Bank', code: 'PNC' },
    { name: 'US Bank', code: 'USB' },
    { name: 'Capital One', code: 'CO' },
    { name: 'HSBC', code: 'HSBC' },
  ];
  
  @Output() transferSubmitted = new EventEmitter<any>();  
  @Input() currencyFormInput: Partial<Transaction>;

  transactionId: number;
  transaction: Transaction | undefined;
  newTransaction: boolean;

  constructor(private fb: FormBuilder, private transactionService: TransactionHistoryService, private toastr: ToastrService, private router: Router,private route: ActivatedRoute){
    this.transactionForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      creditCard: ['', Validators.required],
      email: ['', Validators.required],
      selectedBank: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.checkTransaction();
  }

  onSubmit(): void {
    const { name, lastname, creditCard, email, selectedBank } = this.transactionForm.value;

    if (this.transactionForm.valid) {
      const transaction: Transaction = {
        recipientName: name,
        recipientLastName: lastname,
        creditCardNumber: creditCard,
        recipientEmail: email,
        amount: this.currencyFormInput.amount || 0,
        currencies: this.currencyFormInput.currencies || [],
        selectedBank: selectedBank || '',
        status: 'Pending',
        date: new Date().toISOString(),
        convertedAmount: this.currencyFormInput.convertedAmount || 0,
        id: this.transactionId || 0 
      };

      if (this.newTransaction) {
        // New transaction
        this.transactionService.addTransaction(transaction);
        console.log('Transaction data saved:', transaction);
      } else {
        // Update transaction
        this.transactionService.updateTransaction(transaction);
        console.log('Transaction data updated:', transaction);        
      }
      this.router.navigate(['/transactions']);
    }
  }

  checkTransaction(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.transactionId = +id;
        this.transaction = this.transactionService.getTransactionById(this.transactionId);

        if (!this.transaction) {
          console.error('Transaction not found');
          return;
        }

        // Loading data for existing transaction
        this.transactionForm.patchValue({
          name: this.transaction.recipientName,
          lastname: this.transaction.recipientLastName,
          creditCard: this.transaction.creditCardNumber,
          email: this.transaction.recipientEmail,
          selectedBank: this.transaction.selectedBank,
        });

        this.newTransaction = false; 
      } else {
        this.transactionForm.reset();
        this.newTransaction = true; 
      }
    });
  }
  
}
