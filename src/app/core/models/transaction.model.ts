import { TransactionType } from './enums/transaction.enum';

export interface Transaction {
  transactionReference: string;
  amount: number;
  transactionType: TransactionType;
  transactionDate: Date;
  description: string;
  createdAt: Date;
  changedAt: Date | null;
}
