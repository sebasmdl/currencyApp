import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Currencie } from '../interfaces/currencies-interfaces';
import { Bank } from '../interfaces/bank-interface';
import { CurrencyService } from '../../services/currency/currency-service.service';
import { Transaction } from '../interfaces/transaction-interface';
import { ActivatedRoute } from '@angular/router';
import { TransactionHistoryService } from '../../services/currency/transaction-history.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrl: './currency-form.component.scss',
})

export class CurrencyFormComponent implements OnInit{
  
  currencies: Currencie[] = [];
  
  @Output() conversionUpdated = new EventEmitter<Transaction>();
  @Input() updateTransaction: Partial<Transaction>;
  
  hasEmitted = false;
  
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
  
  currencyForm: FormGroup;
  result: number;
  resultFrom: string;
  resultTo: string;
  rateInfoFrom: string;
  rateInfoTo: string;

  transactionId: number;
  transaction: Transaction | undefined;
  newTransaction: boolean;

  constructor(
    private currencyService: CurrencyService, private fb: FormBuilder,
    private route: ActivatedRoute,
    private transactionService: TransactionHistoryService
  ){
    this.currencyForm = this.fb.group({
      amount: ['', Validators.required],
      fromCurrency: [<Currencie>{}, Validators.required],
      toCurrency: [<Currencie>{}, Validators.required],

    });

  }
  
  ngOnInit(): void {
    this.currencyService.getCountriesAndCurrencies().pipe(
      tap(res => {
        this.currencies = this.currencyService.mapCountriesAndCurrencies(res.countries, res.currencies);
        console.log(this.currencies);
      }),
      switchMap(() => this.route.paramMap) // Cambiamos a paramMap después de obtener las monedas
    ).subscribe({
      next: (params) => {
        const id = params.get('id');
        this.transactionId = Number(id); 
        if (!id) {
          this.currencyForm.reset(); // Resetea el formulario si no hay ID
        } else {
          this.loadTransaction(); // Carga la transacción si hay un ID
        }
      },
      error: (err) => console.log(err)
    });
  }
  

  loadTransaction(): void {
    
    this.transaction = this.transactionService.getTransactionById(this.transactionId);  
    if (this.transaction) {
      const fromCurrency = this.currencies.find(c => c.code === this.transaction?.currencies[0].code);
      const toCurrency = this.currencies.find(c => c.code === this.transaction?.currencies[1].code);

      this.currencyForm.patchValue({
        amount: this.transaction?.amount,
        fromCurrency: fromCurrency,
        toCurrency: toCurrency
      });
      console.log(this.currencyForm.value, 'checking values')
    }
  }

  exchange() {

    if (this.currencyForm.valid) {
      const { amount, fromCurrency, toCurrency } = this.currencyForm.value;
      const rateBase = toCurrency.rate / fromCurrency.rate;
      this.result = amount * rateBase;
      
      this.resultFrom = `${amount} ${fromCurrency.countryName} =`;
      this.resultTo = `${this.result.toFixed(2)} ${toCurrency.countryName}`;
      
      this.rateInfoFrom = `${(1).toFixed(2)} ${fromCurrency.code} = ${(toCurrency.rate / fromCurrency.rate).toFixed(2)} ${toCurrency.code}`;
      this.rateInfoTo = `${(1).toFixed(2)} ${toCurrency.code} = ${(fromCurrency.rate / toCurrency.rate).toFixed(2)} ${fromCurrency.code}`;

      this.conversionUpdated.emit(<Transaction>{

        amount: amount,
        currencies: [fromCurrency, toCurrency],
        convertedAmount: this.result
      });
      
      this.hasEmitted = true

    }
  }
}
