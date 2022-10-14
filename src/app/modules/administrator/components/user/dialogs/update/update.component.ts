import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from './../../../../services/user.service';

@Component({
  selector: 'app-administrator-dialog-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class AdministratorUserDialogUpdateComponent implements OnInit {
  userForm: FormGroup;
  errors: any;
  userId: Number = -1;

  constructor(
    private _formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // this.userForm = this.createForm();
    this.userForm = this._formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  async ngOnInit() {
    await this.route.params.subscribe(params => {
      this.userId = params.id;
    });
    await this.userService.show(this.userId).subscribe(data => {
      let result = data.data
      this.userForm.setValue(
        {
          id: result.id,
          name: result.name,
        }
      )
    })
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
    this.userService.update(this.userForm.value).subscribe(data => {
        if(data.data != undefined){
            this.router.navigate(['administrator/users'])
        }
      },
    (errorResponse: HttpErrorResponse) => {
        this.errors=errorResponse.error.errors;
      },)
  }

}
