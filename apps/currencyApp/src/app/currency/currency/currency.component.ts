import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Currency {
  code: string; // The currency code, e.g., 'USD'
  name: string; // The full name of the currency, e.g., 'United States Dollar'
}

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.scss',
})

export class CurrencyComponent {
  amount = 0; // Type annotation removed
  fromCurrency = '';
  toCurrency = '';
  result: number | null = null;

  currencies: Currency[] = [
    { code: 'USD', name: 'United States Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'COP', name: 'Colombian Peso' },
    
  ];
  interchangeCurrencies(){
    console.log('x')
  }
  convert() {
    
    if (this.fromCurrency && this.toCurrency) {
      const exchangeRate = this.getExchangeRate(this.fromCurrency, this.toCurrency);
      this.result = this.amount * exchangeRate;
    }
  }

  getExchangeRate(from: string, to: string): number {
    
    return 1; 
  }
}
