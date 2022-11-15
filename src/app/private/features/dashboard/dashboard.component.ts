import { Component, OnInit } from '@angular/core';
import { Resume } from 'src/app/core/models/resume.model';
import { DestrixService } from 'src/app/core/services/api/destrix.service';
import { lineChartNull } from 'src/app/shared/mocks/line-chart.mock';
import { LineChart } from 'src/app/shared/models/line-chart.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public lastMonths: LineChart | null = null;

  public resume: Resume | null = null;

  constructor(private destrixService: DestrixService) {}

  ngOnInit(): void {
    this.getResume();
    this.getLastMonths();
  }

  private getResume(): void {
    const date = new Date();
    const month = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}`;

    this.destrixService.getResume(month).subscribe({
      next: (res: Resume) => this.processSuccessGetResume(res),
      error: (err: any) => this.processFailGetResume(err),
    });
  }

  private processSuccessGetResume(res: Resume): void {
    this.resume = res;
  }

  private processFailGetResume(err: any): void {
    console.error('An error ocurred while trying to resume', err);
  }

  private getLastMonths(): void {
    this.destrixService.getLastMonths(6).subscribe({
      next: (res: LineChart) => this.processSuccessGetLastMonths(res),
      error: (err: any) => this.processFailGetLastMonths(err),
    });
  }

  private processSuccessGetLastMonths(res: LineChart): void {
    this.lastMonths = res;
  }

  private processFailGetLastMonths(err: any): void {
    console.error('An error ocurred while trying to last months', err);
  }
}
