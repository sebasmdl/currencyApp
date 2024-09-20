import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-conversion-history',
  templateUrl: './conversion-history.component.html',
  styleUrl: './conversion-history.component.scss',
})

export class conversionHistoryComponent {
  @Input() conversionHistory: Array<{ fromCurrency: string, toCurrency: string, amount: number, result: number }> = [];
}
