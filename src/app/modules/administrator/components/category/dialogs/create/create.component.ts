import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { CategoryService } from './../../../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrator-category-dialog-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class AdministratorCategoryDialogCreateComponent implements OnInit {
  categoryForm: FormGroup
  errors: any
  constructor(private _formBuilder: FormBuilder, private categoryService: CategoryService, private router: Router) {
    this.categoryForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  ngOnInit() {
  }

  get f() { return this.categoryForm.controls }

  onSubmit() {
        if (this.categoryForm.invalid) {
            return;
        }
      const headers = new HttpHeaders();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.categoryService.create(this.categoryForm.value).subscribe(data => {
          if(data.id != undefined){
              this.router.navigate(['administrator/users'])
          }
        },(errorResponse: HttpErrorResponse) => {
          this.errors=errorResponse.error.errors;
        },)
    }
}
