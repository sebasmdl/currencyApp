import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Currency {
  code: string; // The currency code, e.g., 'USD'
  name: string; // The full name of the currency, e.g., 'United States Dollar'
}

@Component({
  selector: 'app-currency',
  templateUrl: './currency-form.component.html',
  styleUrl: './currency-form.component.scss',
})

export class CurrencyFormComponent {
  amount = 0; // Type annotation removed
  fromCurrency = '';
  toCurrency = '';
  result: number | null = null;
  @Output() conversionUpdated = new EventEmitter<{ fromCurrency: string, toCurrency: string, amount: number, result: number }>();

  currencies: Currency[] = [
    { code: 'USD', name: 'United States Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'COP', name: 'Colombian Peso' },
    
  ];
  interchangeCurrencies(){
    console.log('x')
  }
  convert() {
    // Mock conversion logic (replace with actual API or logic)
    const conversionRate = 1.2; // Example conversion rate
    this.result = this.amount * conversionRate;

    // Emit the conversion to the parent component
    this.conversionUpdated.emit({
      fromCurrency: this.fromCurrency,
      toCurrency: this.toCurrency,
      amount: this.amount,
      result: this.result
    });
  }

  getExchangeRate(from: string, to: string): number {
    
    return 1; 
  }
}
