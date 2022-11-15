import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const isLogged: boolean = this.authenticationService.isLogged();

    if (isLogged) return true;

    this.router.navigate(['/auth']);

    return false;
  }
}
