import { Component, OnInit, Input } from '@angular/core';
import { LineChart } from 'src/app/shared/models/line-chart.model';

@Component({
  selector: 'shared-charts-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss'],
})
export class LineComponent implements OnInit {
  // Inputs
  @Input() public label: string = '';
  @Input() public data: LineChart | undefined = undefined;

  // Charts Variables
  private readonly lineColor: string = '#8B5CF6';
  private readonly backgroundColor: string = '#8B5CF630';
  private readonly tension: number = 0.4;
  private readonly fill: boolean = true;

  public lineChartData: any;
  public options: any;

  constructor() {}

  ngOnInit(): void {
    this.setData();
    this.setOptions();
  }

  private setData(): void {
    this.lineChartData = {
      labels: this.data?.labels,
      datasets: [
        {
          data: this.data?.values,
          fill: this.fill,
          borderColor: this.lineColor,
          tension: this.tension,
          backgroundColor: this.backgroundColor,
        },
      ],
    };
  }

  private setOptions(): void {
    this.options = {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            color: 'transparent',
          },
        },
        y: {
          ticks: {
            color: '#aaa',
          },
          grid: {
            color: '#ebedefaa',
          },
        },
      },
    };
  }
}
