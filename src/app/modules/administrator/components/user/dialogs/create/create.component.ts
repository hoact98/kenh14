import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from './../../../../services/user.service';

@Component({
  selector: 'app-administrator-user-dialog-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class AdministratorUserDialogCreateComponent implements OnInit {
  userForm: FormGroup;
  errors:any;

  constructor(private _formBuilder: FormBuilder, private userService: UserService) {
    // this.userForm = this.createForm();
    this.userForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['',
          [
              Validators.required,
              Validators.minLength(8),
              Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
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
      const headers = new HttpHeaders();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.userService.create(this.userForm.value).subscribe(data => {
      if(data.id != undefined){

      }
    },
    (errorResponse: HttpErrorResponse) => {
      this.errors=errorResponse.error.errors;
    },)
    }
}
