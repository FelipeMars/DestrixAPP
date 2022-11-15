import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignOnRoutingModule } from './sign-on-routing.module';
import { SignOnComponent } from './sign-on.component';


@NgModule({
  declarations: [
    SignOnComponent
  ],
  imports: [
    CommonModule,
    SignOnRoutingModule
  ]
})
export class SignOnModule { }
