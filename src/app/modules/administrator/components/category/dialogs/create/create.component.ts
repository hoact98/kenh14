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
  errors: any;
  loading = false
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
    this.loading = true

    this.categoryService.create(this.categoryForm.value).subscribe(data => {
      this.loading = false
        if(data.data.id != undefined){
            this.router.navigate(['administrator/categories'])
        }
      },(errorResponse: HttpErrorResponse) => {
        this.errors=errorResponse.error.errors;
      },)
  }
}
