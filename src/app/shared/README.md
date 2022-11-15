# Módulo compartilhado

Sempre importar em todo módulo que for utilizar.

---

## Para instalar o módulo em sua aplicação siga o passo a passo abaixo:

## Adicione os seguintes trechos de código ao arquivo tsconfig.json

```
"compilerOptions": {
  ...
  "resolveJsonModule": true,
}
```

---

## Rode os comandos em seu terminal:

```
npm install primeng --save
npm install primeicons --save
npm install @angular/animations --save
npm install ngx-mask --save
npm install ng2-currency-mask --save
npm install chart.js --save
```

---

## Adicione os seguintes trechos de código ao arquivo app.module.ts

```
...
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);
...

@NgModule({
  ...
  imports: [
    ...
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    ...
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  ...
})
```

---

## Adicione os seguintes trechos de código ao arquivo angular.json

```
...
"styles": [
  "node_modules/primeicons/primeicons.css",
  "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
  "node_modules/primeng/resources/primeng.min.css",
  ...
]
...
"scripts": [
    "node_modules/chart.js/dist/chart.js",
    ...
],
```

OBS: para mais temas consultar a referência do PrimeNG.

---

## Adicione os seguinte trecho de código ao arquivo app.component.ts

```
...
import { PrimeNGConfig } from 'primeng/api';
import * as primeNgPtBrTranslate from './shared/assets/locale/pt-br.json';
...

export class AppComponent implements OnInit {
  ...
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.primengConfig.setTranslation(primeNgPtBrTranslate);
  }
  ...
}
```

---

# Referências

PrimeNG - https://www.primefaces.org/primeng/setup
NgMask - https://www.npmjs.com/package/ngx-mask
CurrencyMask - https://www.npmjs.com/package/ng2-currency-mask
