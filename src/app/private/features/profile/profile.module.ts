import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

// Component Pages
import { ProfileComponent } from './profile.component';
import { AccountComponent } from './pages/account/account.component';

@NgModule({
  declarations: [ProfileComponent, AccountComponent],
  imports: [CommonModule, ProfileRoutingModule, SharedModule],
})
export class ProfileModule {}
