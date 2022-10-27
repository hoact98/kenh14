import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CategoryService } from './../../../../services/category.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-administrator-category-dialog-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class AdministratorCategoryDialogUpdateComponent implements OnInit {
  categoryForm: FormGroup
  errors: any
  categoryId: Number = -1
  loading = false;

  constructor(
    private _formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute) {
    this.categoryForm = this._formBuilder.group({
      id: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  async ngOnInit() {
    await this.route.params.subscribe(params => {
      this.categoryId = params.id;
    });
    await this.categoryService.show(this.categoryId).subscribe(data => {
      let result = data.data
      this.categoryForm.setValue(
        {
          id: result.id,
          name: result.name,
        }
      )
    })
  }
  get f() { return this.categoryForm.controls }

  onSubmit() {
    if (this.categoryForm.invalid) {
        return;
    }
    this.loading = true
    this.categoryService.update(this.categoryForm.value).subscribe(data => {
      this.loading = false
        if(data != undefined){
            this.router.navigate(['administrator/categories'])
        }
      },(errorResponse: HttpErrorResponse) => {
        this.errors=errorResponse.error.errors;
      },)
    }
}
