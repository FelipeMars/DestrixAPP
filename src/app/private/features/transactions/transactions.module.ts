import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsRoutingModule } from './transactions-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

// Component Pages
import { TransactionsComponent } from './transactions.component';
import { ExtractComponent } from './pages/extract/extract.component';
import { NewComponent } from './pages/new/new.component';

@NgModule({
  declarations: [TransactionsComponent, ExtractComponent, NewComponent],
  imports: [CommonModule, TransactionsRoutingModule, SharedModule],
})
export class TransactionsModule {}
