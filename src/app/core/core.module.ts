import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './components/toolbar/toolbar.component';

const CORE_COMPONENTS = [ToolbarComponent];

@NgModule({
  declarations: [CORE_COMPONENTS],
  imports: [CommonModule, RouterModule],
  exports: [CORE_COMPONENTS],
})
export class CoreModule {}
