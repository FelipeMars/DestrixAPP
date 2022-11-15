import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { AuthSignIn } from 'src/app/core/models/auth-signin.model';
import { Credentials } from 'src/app/core/models/credentials.model';
import { DestrixService } from 'src/app/core/services/api/destrix.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup;
  public loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private destrixService: DestrixService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.signInForm = this.formBuilder.group({
      userId: [
        '',
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.email],
        },
      ],
      userSecret: ['', [Validators.required]],
      keepConected: [false],
    });
  }

  ngOnInit(): void {}

  public signIn(): void {
    const credentials: Credentials = this.signInForm.value;

    this.loading = true;

    this.destrixService.signIn(credentials).subscribe({
      next: (res: AuthSignIn) => this.processSuccessSignIn(res),
      error: (err: any) => this.processFailSignIn(err),
    });
  }

  private processSuccessSignIn(res: AuthSignIn): void {
    this.loading = false;
    this.authenticationService.setSession(res);
    this.router.navigate(['/']);
  }

  private processFailSignIn(err: any): void {
    console.error('An error ocurred when try sign in', err);
    this.loading = false;
  }
}
