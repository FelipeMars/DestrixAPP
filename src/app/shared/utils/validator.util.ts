import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidatorUtil {
  public isNullOrEmpty(value: string): boolean {
    return value === '' || value === null || value === undefined;
  }

  public someHaveValue(values: string[]): boolean {
    for (let i = 0; i < values.length; i++)
      if (!this.isNullOrEmpty(values[i])) return true;

    return false;
  }

  public email(email: string): boolean {
    return email.includes('@') && email.includes('.');
  }
}
