import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyComponent } from './currency/currency.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule  } from '@angular/material/card';

import { FormsModule } from '@angular/forms';

const matImports = [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, MatCardModule ]


@NgModule({
  declarations: [CurrencyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ...matImports
  ],
  exports: [CurrencyComponent] 
})
export class CurrencyModule { }
