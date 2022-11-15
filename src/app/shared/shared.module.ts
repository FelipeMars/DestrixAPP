import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Libraries
import { PrimeNgLibrary } from './libraries/prime-ng.library';
const SHARED_LIBRARIES = [PrimeNgLibrary];

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const SHARED_FORMS_MODULES = [FormsModule, ReactiveFormsModule];

// Dependencies
import { NgxMaskModule, IConfig } from 'ngx-mask';
const maskConfig: Partial<IConfig> = {
  validation: false,
};
import { CurrencyMaskModule } from 'ng2-currency-mask';

const SHARED_DEPENDENCIES = [
  NgxMaskModule.forRoot(maskConfig),
  CurrencyMaskModule,
];

// Components
import { ButtonComponent } from './components/buttons/button/button.component';
import { LoadingBarComponent } from './components/indicators/loading-bar/loading-bar.component';
import { ProgressBarComponent } from './components/indicators/progress-bar/progress-bar.component';
import { InputComponent } from './components/inputs/input/input.component';
import { InputCurrencyComponent } from './components/inputs/currency/input-currency.component';
import { InputCalendarComponent } from './components/inputs/calendar/input-calendar.component';
import { InputDropdownComponent } from './components/inputs/dropdown/input-dropdown.component';
import { InputFileComponent } from './components/inputs/file/input-file.component';
import { LineComponent } from './components/charts/line/line.component';
import { SkeletonComponent } from './components/indicators/skeleton/skeleton.component';
import { PieComponent } from './components/charts/pie/pie.component';

const SHARED_COMPONENTS = [
  ButtonComponent,
  LoadingBarComponent,
  ProgressBarComponent,
  InputComponent,
  InputCurrencyComponent,
  InputCalendarComponent,
  InputDropdownComponent,
  InputFileComponent,
  LineComponent,
  SkeletonComponent,
  PieComponent,
];

@NgModule({
  declarations: [SHARED_COMPONENTS],
  imports: [
    CommonModule,
    SHARED_LIBRARIES,
    SHARED_FORMS_MODULES,
    SHARED_DEPENDENCIES,
  ],
  exports: [SHARED_LIBRARIES, SHARED_FORMS_MODULES, SHARED_COMPONENTS],
})
export class SharedModule {}
