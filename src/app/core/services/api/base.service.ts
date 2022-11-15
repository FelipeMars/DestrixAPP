import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestHeader } from '../../models/request-header.model';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  protected destrixBaseURL: string = environment.baseUrls.destrixAPI;

  constructor() {}

  protected getHeaders(): RequestHeader {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  protected extractData(response: any) {
    return response.result || response;
  }

  protected serviceError(response: Response | any) {
    let customError: string[] = [];

    if (response instanceof HttpErrorResponse) {
      if (response.statusText === 'Unknown Error') {
        customError.push('Ocorreu um erro desconhecido');
      }
    }

    return throwError(response);
  }
}
