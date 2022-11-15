import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/sign-in/sign-in.module').then(
            (m) => m.SignInModule
          ),
      },
      {
        path: 'cadastro',
        loadChildren: () =>
          import('./features/sign-on/sign-on.module').then(
            (m) => m.SignOnModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
