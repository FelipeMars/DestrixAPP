import { Component, OnInit } from '@angular/core';
import { Resume } from 'src/app/core/models/resume.model';
import { DestrixService } from 'src/app/core/services/api/destrix.service';
import { LineChart } from 'src/app/shared/models/line-chart.model';
import { DateUtil } from 'src/app/shared/utils/date.util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public lastMonths: LineChart | null = null;
  public loadingLastMonths: boolean = false;

  public resume: Resume | null = null;
  public loadingResume: boolean = false;

  public monthName: string = '';
  public year: number = 2022;

  public privateValues: boolean = false;

  constructor(
    private destrixService: DestrixService,
    private dateUtil: DateUtil
  ) {}

  ngOnInit(): void {
    this.getResume();
    this.getLastMonths();
  }

  private getResume(): void {
    this.loadingResume = true;

    const date = new Date();
    const month = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}`;

    this.monthName = this.dateUtil.getMonthName(date.getMonth());
    this.year = date.getFullYear();

    this.destrixService.getResume(month).subscribe({
      next: (res: Resume) => this.processSuccessGetResume(res),
      error: (err: any) => this.processFailGetResume(err),
    });
  }

  private processSuccessGetResume(res: Resume): void {
    this.loadingResume = false;

    this.resume = res;
  }

  private processFailGetResume(err: any): void {
    this.loadingResume = false;

    console.error('An error ocurred while trying to resume', err);
  }

  private getLastMonths(): void {
    this.loadingLastMonths = true;

    this.destrixService.getLastMonths(6).subscribe({
      next: (res: LineChart) => this.processSuccessGetLastMonths(res),
      error: (err: any) => this.processFailGetLastMonths(err),
    });
  }

  private processSuccessGetLastMonths(res: LineChart): void {
    this.loadingLastMonths = false;

    this.lastMonths = res;
  }

  private processFailGetLastMonths(err: any): void {
    this.loadingLastMonths = false;

    console.error('An error ocurred while trying to last months', err);
  }

  public setPrivateValues(): void {
    this.privateValues = !this.privateValues;
    console.log(this.privateValues);
  }
}
