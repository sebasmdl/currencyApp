import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

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
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}