import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { CurrencyRates } from '../../currency/interfaces/currency-rates-interfaces';
import { Country } from '../../currency/interfaces/countries-interfaces';
import { Currencie } from '../../currency/interfaces/currencies-interfaces';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiCurrencyUrl = 'https://open.er-api.com/v6/latest/USD';
  private apiCountriesUrl = 'https://restcountries.com/v3.1/all?fields=currencies'

  constructor(private http: HttpClient) {}


  getCurrencyRates(): Observable<CurrencyRates> {
    return this.http.get<CurrencyRates>(this.apiCurrencyUrl); // API countries rates
  }
  getCountriesFullNames(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiCountriesUrl); // API countries full names
  }

  getCountriesAndCurrencies(): Observable<{ countries: Country[], currencies: CurrencyRates }> {
    return forkJoin({
      countries: this.getCountriesFullNames(),
      currencies: this.getCurrencyRates(),
    });
  }
  mapCountriesAndCurrencies(countries: Country[], rates: CurrencyRates): Currencie[] {
    return countries.map((country) => {
      const currencies = country.currencies || {}; 
      const currencyKey = Object.keys(currencies)[0]; 
      const currency = currencyKey ? currencies[currencyKey] : null; 
  
      return {
        countryName: currency ? currency.name : null,
        code: currencyKey,
        rate: currencyKey ? rates.rates[currencyKey] : null, 
        symbol: currency ? currency.symbol : null 
      } as Currencie;
    }).sort((a, b) => {
      if (a.code < b.code) return -1;
      if (a.code > b.code) return 1;
      return 0;
    });
  } 
}
