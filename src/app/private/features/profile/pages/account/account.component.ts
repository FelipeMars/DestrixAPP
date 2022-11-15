import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { User } from 'src/app/core/models/user.model';
import { DestrixService } from 'src/app/core/services/api/destrix.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  public user: User | null = null;
  public loadingUser: boolean = false;

  // Account Form
  public accountForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private destrixService: DestrixService
  ) {
    this.accountForm = this.resetAccountForm();
  }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  private resetAccountForm(): FormGroup {
    return this.formBuilder.group({
      name: [{ value: '', disabled: true }, [Validators.required]],
      email: [{ value: '', disabled: true }, [Validators.required]],
    });
  }

  private getCurrentUser(): void {
    this.loadingUser = true;

    this.destrixService.getCurrentUser().subscribe({
      next: (res: User) => this.processSuccessGetCurrentUser(res),
      error: (err: any) => this.processFailGetCurrentUser(err),
    });
  }

  private processSuccessGetCurrentUser(res: User): void {
    this.user = res;

    const form: any = this.accountForm.value;
    const resAny: any = res;

    for (let key in form) {
      this.accountForm.patchValue({ [key]: resAny[key] || '' });
    }
    this.loadingUser = false;
  }

  private processFailGetCurrentUser(err: any): void {
    this.loadingUser = false;

    console.error('On error ocurred on getting current user', err);
  }

  public signOut(): void {
    this.authenticationService.signOut();
    this.router.navigate(['/auth']);
  }
}
