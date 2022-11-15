import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import * as primeNgPtBrTranslate from './shared/assets/locale/pt-br.json';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService],
})
export class AppComponent implements OnInit {
  title = 'destrix';

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.primengConfig.setTranslation(primeNgPtBrTranslate);
  }
}
