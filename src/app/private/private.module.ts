import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';

@NgModule({
  declarations: [PrivateComponent],
  imports: [CommonModule, PrivateRoutingModule, CoreModule],
})
export class PrivateModule {}
