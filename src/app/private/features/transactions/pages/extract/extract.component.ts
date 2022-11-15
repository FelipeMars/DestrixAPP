import { Component, OnInit } from '@angular/core';
import { Period } from 'src/app/core/models/period.model';
import { Resume } from 'src/app/core/models/resume.model';
import { Transaction } from 'src/app/core/models/transaction.model';
import { DestrixService } from 'src/app/core/services/api/destrix.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
})
export class ExtractComponent implements OnInit {
  public resume: Resume | null = null;
  public extract: Transaction[] = [];

  public periods: Period[] = [];
  public selectedPeriod: number = 7;

  public loadingExtract: boolean = false;

  constructor(private destrixService: DestrixService) {}

  ngOnInit(): void {
    this.getResume();
    this.loadPeriods();
    this.getExtract();
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

  private loadPeriods(): void {
    this.periods = [
      {
        label: '7 dias',
        value: 7,
      },
      {
        label: '1 mês',
        value: 30,
      },
      {
        label: '3 meses',
        value: 90,
      },
      {
        label: '6 meses',
        value: 180,
      },
      {
        label: '1 ano',
        value: 365,
      },
      {
        label: 'Total',
        value: 0,
      },
    ];
  }

  public choosePeriod(period: Period): void {
    this.selectedPeriod = period.value;
    this.getExtract();
  }

  private getExtract(): void {
    this.loadingExtract = true;

    this.destrixService.getExtract(this.selectedPeriod).subscribe({
      next: (res: Transaction[]) => this.processSuccessGetExtract(res),
      error: (err: any) => this.processFailGetExtract(err),
    });
  }

  private processSuccessGetExtract(res: Transaction[]): void {
    this.loadingExtract = false;
    this.extract = res;
  }

  private processFailGetExtract(err: any): void {
    this.loadingExtract = false;
    console.error('An error occurred while get extract', err);
  }

  public trackByTransaction(index: number, item: Transaction): number {
    return index;
  }
}
