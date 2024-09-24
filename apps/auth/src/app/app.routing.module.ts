import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PublicGuard } from './auth/guards/public.guard';

const appRoutes: Route[] = [
    {
      path: 'auth',
      loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
      canActivate: [ PublicGuard ],
      canMatch: [ PublicGuard ]
    },
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}