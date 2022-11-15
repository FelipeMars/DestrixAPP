import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtractComponent } from './pages/extract/extract.component';
import { NewComponent } from './pages/new/new.component';
import { TransactionsComponent } from './transactions.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionsComponent,
    children: [
      {
        path: 'extrato',
        component: ExtractComponent,
      },
      {
        path: 'novo',
        component: NewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionsRoutingModule {}
