import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-charts-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
})
export class PieComponent implements OnInit {
  // Inputs
  @Input() public data: any | undefined = undefined;

  // Charts Variables
  public lineChartData: any;
  public options: any;

  constructor() {}

  ngOnInit(): void {
    this.lineChartData = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
          hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D'],
        },
      ],
    };

    this.options = {
      plugins: {
        legend: {
          display: false,
        },
      },
    };
  }
}
