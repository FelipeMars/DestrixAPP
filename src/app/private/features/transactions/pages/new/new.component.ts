import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TransactionType } from 'src/app/core/models/enums/transaction.enum';
import { Transaction } from 'src/app/core/models/transaction.model';
import { DestrixService } from 'src/app/core/services/api/destrix.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  providers: [CurrencyPipe],
})
export class NewComponent implements OnInit {
  // consts
  public readonly TRANSACTION_TYPE_STEP: number = 0;
  public readonly DETAILS_STEP: number = 1;
  public readonly SUBMIT_STEP: number = 1;
  public TRANSACTION_TYPE = TransactionType;

  // Transaction Form & Dynamic
  public transactionForm: FormGroup;
  public currentStep: number = 0;

  // Control Variables
  public sendingTransaction: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private destrixService: DestrixService,
    private router: Router,
    private currencyPipe: CurrencyPipe
  ) {
    this.transactionForm = this.getResetedTransactionForm();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      if (params.type) this.setTransactionType(Number(params.type));
    });
  }

  private getResetedTransactionForm(): FormGroup {
    return this.formBuilder.group({
      transactionType: [TransactionType.undefined, [Validators.required]],
      transactionDate: [new Date(), [Validators.required]],
      amount: [0],
      description: [''],
    });
  }

  public previousStep(): void {
    if (this.currentStep > 0) this.currentStep -= 1;

    if (this.currentStep === 0)
      this.transactionForm = this.getResetedTransactionForm();
  }

  public nextStep(): void {
    this.currentStep += 1;
  }

  public setTransactionType(type: TransactionType): void {
    this.transactionForm.patchValue({ transactionType: type });
    this.nextStep();
  }

  public submitTransaction(): void {
    const transaction: Transaction = this.transactionForm.value;

    if (transaction.amount === 0) {
      this.messageService.add({
        severity: 'error',
        summary: 'Transação sem valor!',
        detail: 'Informe o valor da transação.',
      });
      return;
    }

    if (transaction.transactionDate.getTime() > new Date().getTime()) {
      this.messageService.add({
        severity: 'error',
        summary: 'Data da transação inválida!',
        detail:
          'A data e hora da transação não pode ser maior do que o momento atual.',
      });
      return;
    }

    this.sendingTransaction = true;

    this.destrixService.createTransaction(transaction).subscribe({
      next: (res: Transaction) => this.processSuccessCreateTransaction(res),
      error: (err: any) => this.processFailCreateTransaction(err),
    });
  }

  private processSuccessCreateTransaction(res: Transaction): void {
    this.sendingTransaction = false;

    this.messageService.add({
      severity: 'success',
      summary: 'Transação salva com sucesso!',
      detail:
        'Nova transação de ' +
        this.currencyPipe.transform(res.amount, 'R$') +
        ' foi adicionada.',
    });

    this.router.navigate(['/']);
  }

  private processFailCreateTransaction(err: any): void {
    this.sendingTransaction = false;

    console.error('An error ocurred during creating of transaction', err);
  }
}
