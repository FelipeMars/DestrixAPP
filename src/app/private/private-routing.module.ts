import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'transacoes',
        loadChildren: () =>
          import('./features/transactions/transactions.module').then(
            (m) => m.TransactionsModule
          ),
      },
      {
        path: 'perfil',
        loadChildren: () =>
          import('./features/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
