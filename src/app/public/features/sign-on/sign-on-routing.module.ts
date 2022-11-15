import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignOnComponent } from './sign-on.component';

const routes: Routes = [
  {
    path: '',
    component: SignOnComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignOnRoutingModule {}
