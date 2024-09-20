import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'currencyApp';
  conversionHistory: Array<{ fromCurrency: string, toCurrency: string, amount: number, result: number }> = [];

  updateConversionHistory(conversion: { fromCurrency: string, toCurrency: string, amount: number, result: number }) {
    this.conversionHistory.push(conversion);
  }
}
