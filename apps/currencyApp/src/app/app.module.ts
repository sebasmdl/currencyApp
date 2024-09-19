import { NgModule } from '@angular/core';
import { CurrencyModule } from './currency/currency.module';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const appRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () => import('auth/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'currency',
    loadChildren: () => import('./currency/currency.module').then((m) => m.CurrencyModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CurrencyModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
