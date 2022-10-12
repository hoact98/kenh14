import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class AuthRegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
  constructor(private formBuilder: FormBuilder,
        private router: Router,
    private authenticationService: AuthenticationService,
        private titleService: Title
  ) {
    this.titleService.setTitle('Register page');
    if (this.authenticationService.currentUserValue) {
              this.router.navigate(['/']);
    }
    this.registerForm = this.formBuilder.group({
          name: ['', [Validators.required, Validators.minLength(3)]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(8), Validators.minLength(8), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]]
      });
  }

  ngOnInit() {
  }
 // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['auth/login']);
                },
                error => {
                    this.loading = false;
                });
    }
}
