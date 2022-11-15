import { Injectable } from '@angular/core';

import jwt_decode from 'jwt-decode';

// Utils
import { LocalStorageUtil } from 'src/app/shared/utils/local-storage.util';
import { AuthSignIn } from '../models/auth-signin.model';

const AUTH_LOCALSTORAGE_KEY: string = 'destrix_user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private localStorageUtil: LocalStorageUtil) {}

  public setSession(authSignIn: AuthSignIn): void {
    this.localStorageUtil.setItem(AUTH_LOCALSTORAGE_KEY, authSignIn);
  }

  public getToken(): string {
    const user: any = this.localStorageUtil.getItem(AUTH_LOCALSTORAGE_KEY);
    if (user === null) return '';

    const token: string = user.token;

    return token;
  }

  public isLogged(): boolean {
    const user: any = this.localStorageUtil.getItem(AUTH_LOCALSTORAGE_KEY);
    if (user === null) return false;

    const token: string = user.token;

    const decodedToken: any = jwt_decode(token);

    const nowTimestamp: number = Date.now();
    const expiresTimestamp: number = decodedToken.exp * 1000;

    if (nowTimestamp > expiresTimestamp) {
      this.signOut();
      return false;
    }

    return true;
  }

  public signOut(): void {
    this.localStorageUtil.removeItem(AUTH_LOCALSTORAGE_KEY);
  }
}
