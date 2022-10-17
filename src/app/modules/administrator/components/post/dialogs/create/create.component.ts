import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { CategoryService } from './../../../../services/category.service';
import { PostService } from './../../../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrator-post-dialog-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class AdministratorPostDialogCreateComponent implements OnInit {
  postForm: FormGroup;
  errors: any;
  files: any;
  categories: any = [];
  loading = false;

  constructor(
    private _formBuilder: FormBuilder,
    private postService: PostService,
    private router: Router,
    private categoryService: CategoryService
  ) {
    this.postForm = this._formBuilder.group({
      title: ['', Validators.required],
      categoryId: ['', Validators.required],
      description: ['', Validators.required],
      shortDesc: ['', Validators.required],
      image: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.getCategoryList();
  }
  get f() { return this.postForm.controls }

  getCategoryList() {
    this.categoryService.get().subscribe(data => {
      this.categories = data.data
    })
  }
  imageUpload(event: any){
    this.files = event.target.files[0];
  }
  onSubmit() {
    if (this.postForm.invalid) {
        return;
    }
    this.loading = true
    let myFormData = new FormData();
    myFormData.append('image', this.files);
    myFormData.append('title', this.postForm.value.title);
    myFormData.append('categoryId', this.postForm.value.categoryId);
    myFormData.append('description', this.postForm.value.description);
    myFormData.append('shortDesc', this.postForm.value.shortDesc);
    this.postService.create(myFormData).subscribe(data => {
      this.loading = false
      if(data.data.id != undefined){
          this.router.navigate(['administrator/posts'])
      }
    },(errorResponse: HttpErrorResponse) => {
      this.errors=errorResponse.error.errors;
    },)
  }
}
