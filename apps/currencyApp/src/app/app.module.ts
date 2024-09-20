import { NgModule } from '@angular/core';
import { CurrencyModule } from './currency/currency.module';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './home/home.module';

const matImportsNavBar = [MatSidenavModule, MatListModule, ]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CurrencyModule,
    HomeModule,
    ...matImportsNavBar,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
