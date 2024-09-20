import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CurrencyFormComponent } from './currency-form/currency-form.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule  } from '@angular/material/card';

import { MatSidenavModule } from '@angular/material/sidenav' 
import { MatListModule  } from '@angular/material/list' 
import { conversionHistoryComponent } from './conversionHistory/conversion-history.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { Route, RouterModule } from '@angular/router';

const matImports = [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, MatCardModule ]
const matImportsCHistory = [MatSidenavModule, MatListModule, MatToolbarModule, MatTableModule  ]
const components = [CurrencyFormComponent, conversionHistoryComponent]


const routes: Route[] = [
  {
    path: '',
    redirectTo: 'converter',
    pathMatch: 'full'
  },
  {
      path: 'converter',
      component: CurrencyFormComponent
  }
]


@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    FormsModule,
    ...matImports,
    ...matImportsCHistory,
    RouterModule.forChild(routes)
  ],
  exports: components
})
export class CurrencyModule { }
