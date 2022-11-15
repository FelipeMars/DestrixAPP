import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG Modules
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { ChartModule } from 'primeng/chart';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';

const PRIMENG_MODULES = [
  InputTextModule,
  ButtonModule,
  MessageModule,
  MessagesModule,
  AvatarModule,
  AvatarGroupModule,
  ScrollTopModule,
  ProgressBarModule,
  ToastModule,
  MenuModule,
  ChartModule,
  CalendarModule,
  DropdownModule,
  FileUploadModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, PRIMENG_MODULES],
  exports: [PRIMENG_MODULES],
})
export class PrimeNgLibrary {}
