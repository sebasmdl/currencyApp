export interface Currency {
    name: string;
    symbol: string;
  }
  
  export interface CurrenciesRates {
    [key: string]: Currency;
  }
  
  export interface Country {
    name: string;
    currencies?: CurrenciesRates; 
  }
  
  export interface CountryData {
    countries: Country[];
  }