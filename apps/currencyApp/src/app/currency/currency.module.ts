import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxCurrencyDirective } from "ngx-currency";
import { MatDialogModule } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule  } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

import { MatSidenavModule } from '@angular/material/sidenav' 
import { MatListModule  } from '@angular/material/list' 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { Route, RouterModule } from '@angular/router';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { CurrencyComponent } from './currency.component';
import { CurrencyFormComponent } from './currency-form/currency-form.component';
import { TransactionItemComponent } from './transaction-history/transaction-item/transaction-item.component';


import { ToastrModule } from 'ngx-toastr';
import { TransactionFormComponent } from './transfer-form/transaction-form.component';
import { TransactionDetailComponent } from './transaction-history/transaction-detail/transaction-detail.component';

const matImports = [
  MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule,
  MatIconModule, MatCardModule, MatSidenavModule, MatListModule,
  MatToolbarModule, MatTableModule, MatChipsModule, MatDialogModule   ]

const components = [
  CurrencyComponent,
  CurrencyFormComponent,
  TransactionFormComponent,
  TransactionHistoryComponent,
  TransactionItemComponent,
  TransactionDetailComponent ]


const routes: Route[] = [
  {
    path: '',
    redirectTo: 'converter',
    pathMatch: 'full'
  },
  {
      path: 'converter',
      component: CurrencyComponent
  },
  {
    path: 'transactions',
    component: TransactionHistoryComponent
  },
  { 
    path: 'transactions/:id', component: TransactionDetailComponent
   },
  { 
    path: 'transactions-edit/:id', component: CurrencyComponent
   }
]


@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ToastrModule.forRoot(),
    NgxCurrencyDirective,
    ...matImports,
  ],
  exports: components,
})
export class CurrencyModule { }
