import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NoAuthGuard } from './core/guards/no-auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
    canActivate: [NoAuthGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./private/private.module').then((m) => m.PrivateModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
