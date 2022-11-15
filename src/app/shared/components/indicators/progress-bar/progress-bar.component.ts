import { Component, Input, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'shared-indicator-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  providers: [CurrencyPipe],
})
export class ProgressBarComponent implements OnInit {
  // Inputs
  @Input() percentage: number = 0;
  @Input() value: number = 0;
  @Input() max: number = 100;
  @Input() showProgressValues: boolean = false;
  @Input() valueIsCurrency: boolean = false;
  @Input() simbol: string = '';

  // Control Variables
  public percentageValue: number = 0;
  public currencyValue: string = '0';
  public maxValue: string = '100';

  constructor(private currencyPipe: CurrencyPipe) {}

  ngOnInit(): void {
    this.setPercentageValue();
    this.setCurrencyValue();
    this.setMaxValue();
  }

  private setPercentageValue(): void {
    if (this.percentage !== 0) {
      this.percentageValue = this.percentage > 100 ? 100 : this.percentage;
      return;
    }

    const percentage: string = ((this.value * 100) / this.max).toFixed(2);
    this.percentageValue = Number(percentage);
  }

  private setCurrencyValue(): void {
    if (!this.valueIsCurrency) {
      this.currencyValue = this.value.toString();
      return;
    }

    const currencyValue = this.currencyPipe.transform(this.value, this.simbol);
    if (currencyValue === null) {
      this.currencyValue = this.value.toString();
      return;
    }

    this.currencyValue = this.invertCommaAndSeparator(currencyValue);
  }

  private setMaxValue(): void {
    if (!this.valueIsCurrency) {
      this.maxValue = this.max.toString();
      return;
    }

    const maxValue = this.currencyPipe.transform(this.max, this.simbol);
    if (maxValue === null) {
      this.maxValue = this.max.toString();
      return;
    }

    this.maxValue = this.invertCommaAndSeparator(maxValue);
  }

  private invertCommaAndSeparator(value: string): string {
    const valueSplit = value.split('.');
    return valueSplit[0].split(',').join('.') + ',' + valueSplit[1];
  }
}
