import {} from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class AuthLoginComponent implements OnInit {
loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    errors: any = {};
    result: any = [];
    language: string = 'vi';
  constructor(private titleService: Title,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private translate: TranslateService
  ) {
     // language
    translate.setDefaultLang('vi');
    translate.use('vi')

    this.titleService.setTitle('Login page');

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
  }

  ngOnInit() {}
 // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

    this.loading = true;
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
      this.authenticationService.login(this.f.email.value, this.f.password.value)
          // .pipe(first())
        .subscribe(data => {
              this.loading = false
              this.router.navigate([this.returnUrl]);
        },(errorResponse: HttpErrorResponse) => {
            this.errors = errorResponse.error.errors;
            var data= [];
            for (let index = 0; index < this.errors.length; index++) {
              data[this.errors[index].param] = this.errors[index].msg
              this.result.push(this.errors[index].msg)
            }
            this.errors = data
            this.loading = false
        });
  }
  useLanguage(language: string): void {
    this.translate.use(language);
    this.language = language;
  }
}
