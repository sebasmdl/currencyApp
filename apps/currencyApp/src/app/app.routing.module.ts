import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PublicGuard } from './guards/public.guard';
const appRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () => import('auth/AuthModule').then(m => m.AuthModule),
    canActivate: [ PublicGuard ],
    canMatch: [ PublicGuard ]
  },
    {
      path: 'currency',
      loadChildren: () => import('./currency/currency.module').then((m) => m.CurrencyModule),
      canActivate: [ AuthGuard ],
      canMatch: [ AuthGuard ]
    },
    {
      path: '',
      redirectTo: 'currency',
      pathMatch: 'full'
    },
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}