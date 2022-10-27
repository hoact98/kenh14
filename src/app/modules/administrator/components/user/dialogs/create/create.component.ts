import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
import { UserService } from './../../../../services/user.service';

@Component({
  selector: 'app-administrator-user-dialog-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class AdministratorUserDialogCreateComponent implements OnInit {
  userForm: FormGroup;
  errors:any;
  loading = false;

  constructor(private _formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    // this.userForm = this.createForm();
    this.userForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['',
          [
              Validators.required,
              Validators.minLength(8),
              Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
          ]
      ],
    });
  }

  ngOnInit() {

  }
  // createForm(){
  //   return new FormGroup({
  //     name: new FormControl('', [Validators.required,Validators.minLength(4)]),
  //     email: new FormControl('', [Validators.required,Validators.email]),
  //     password: new FormControl('',
  //       [
  //         Validators.required,
  //         Validators.minLength(8),
  //         Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
  //       ]),
  //   });
  // }
  get f() { return this.userForm.controls; }

  onSubmit() {
    if (this.userForm.invalid) {
        return;
    }
    this.loading = true
    this.userService.create(this.userForm.value).subscribe(data => {
        this.loading = false
        if(data.id != undefined){
            this.router.navigate(['administrator/users'])
        }
      },(errorResponse: HttpErrorResponse) => {
        this.errors=errorResponse.error.errors;
      },)
  }
}
