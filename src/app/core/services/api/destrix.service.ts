import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, take } from 'rxjs';

// Services
import { BaseService } from './base.service';
import { AuthenticationService } from '../../authentication/authentication.service';

// Models
import { AuthSignIn } from '../../models/auth-signin.model';
import { Credentials } from '../../models/credentials.model';
import { ResponseModel } from '../../models/response.model';
import { Transaction } from '../../models/transaction.model';
import { RequestHeader } from '../../models/request-header.model';
import { Resume } from '../../models/resume.model';
import { User } from '../../models/user.model';
import { LineChart } from 'src/app/shared/models/line-chart.model';

@Injectable({
  providedIn: 'root',
})
export class DestrixService extends BaseService {
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {
    super();
  }

  protected getAuthenticatedHeaders(): RequestHeader {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: `Bearer ${this.authenticationService.getToken()}`,
      }),
    };
  }

  //#region Auth

  public signIn(credentials: Credentials): Observable<AuthSignIn> {
    return this.http
      .post<ResponseModel<AuthSignIn>>(
        `${this.destrixBaseURL}v1/auth/sign-in`,
        credentials,
        this.getHeaders()
      )
      .pipe(map(this.extractData), catchError(this.serviceError), take(1));
  }

  public signOn(user: any): Observable<any> {
    return this.http
      .post(`${this.destrixBaseURL}v1/auth/sign-on`, user, this.getHeaders())
      .pipe(map(this.extractData), catchError(this.serviceError), take(1));
  }

  //#endregion

  //#region

  public createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http
      .post<ResponseModel<Transaction>>(
        `${this.destrixBaseURL}v1/transactions`,
        transaction,
        this.getAuthenticatedHeaders()
      )
      .pipe(map(this.extractData), catchError(this.serviceError), take(1));
  }

  public updateTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http
      .put<ResponseModel<Transaction>>(
        `${this.destrixBaseURL}v1/transactions`,
        transaction,
        this.getAuthenticatedHeaders()
      )
      .pipe(map(this.extractData), catchError(this.serviceError), take(1));
  }

  public deleteTransaction(transactionReference: string): Observable<boolean> {
    return this.http
      .put<ResponseModel<boolean>>(
        `${this.destrixBaseURL}v1/transactions/${transactionReference}`,
        null,
        this.getAuthenticatedHeaders()
      )
      .pipe(map(this.extractData), catchError(this.serviceError), take(1));
  }

  public getExtract(days: number): Observable<Transaction[]> {
    return this.http
      .get<ResponseModel<Transaction[]>>(
        `${this.destrixBaseURL}v1/transactions/extract/${days}`,
        this.getAuthenticatedHeaders()
      )
      .pipe(map(this.extractData), catchError(this.serviceError), take(1));
  }

  public getResume(month: string): Observable<Resume> {
    return this.http
      .get<ResponseModel<Resume>>(
        `${this.destrixBaseURL}v1/transactions/resume/${month}`,
        this.getAuthenticatedHeaders()
      )
      .pipe(map(this.extractData), catchError(this.serviceError), take(1));
  }

  public getLastMonths(months: number): Observable<LineChart> {
    return this.http
      .get<ResponseModel<LineChart>>(
        `${this.destrixBaseURL}v1/transactions/last-months/${months}`,
        this.getAuthenticatedHeaders()
      )
      .pipe(map(this.extractData), catchError(this.serviceError), take(1));
  }

  //#endregion

  //#region Users

  public getCurrentUser(): Observable<User> {
    return this.http
      .get<ResponseModel<User>>(
        `${this.destrixBaseURL}v1/users/current-user`,
        this.getAuthenticatedHeaders()
      )
      .pipe(map(this.extractData), catchError(this.serviceError), take(1));
  }

  //#endregion
}
