import { Component } from '@angular/core';
import { Transaction } from './interfaces/transaction-interface';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css',
})
export class CurrencyComponent {
  isTransferFormVisible: boolean;
  partialTransaction: Partial<Transaction>;

   constructor(){

   }
   
  onConversionUpdated(event: Partial<Transaction>) {
    console.log('Conversion updated:', event);
    this.partialTransaction = event;
    this.isTransferFormVisible = true;
    // Aquí puedes manejar la lógica que necesites, como almacenar el historial
  }
}
