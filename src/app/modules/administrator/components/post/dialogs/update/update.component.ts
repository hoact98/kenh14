import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CategoryService } from './../../../../services/category.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PostService } from './../../../../services/post.service';

@Component({
  selector: 'app-administrator-post-dialog-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class AdministratorPostDialogUpdateComponent implements OnInit {
  postForm: FormGroup;
  errors: any;
  postId: Number = -1;
  image = '';
  files: any;
  categories: any = [];
  loading = false;

  constructor(
    private _formBuilder: FormBuilder,
    private postService: PostService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.postForm = this._formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      shortDesc: ['', Validators.required],
      categoryId: ['', Validators.required],
      image: ['', ]
    })
  }

  async ngOnInit() {
    await this.route.params.subscribe(params => {
      this.postId = params.id;
    });
    await this.postService.show(this.postId).subscribe(data => {

      let result = data.data
      if(result.id == undefined){
        this.router.navigate(['/administrator/posts']);
      }
      this.image = result.image
      this.postForm.setValue(
        {
          id: result.id,
          title: result.title,
          description: result.description,
          shortDesc: result.shortDesc,
          categoryId: result.categoryId,
          image: ''
        }
      )
    })
    await this.getCategoryList();
  }
  getCategoryList() {
    this.categoryService.get().subscribe(data => {
      this.categories = data.data
    })
  }
  imageUpload(event: any){
    this.files = event.target.files[0];
  }
  get f() { return this.postForm.controls }

  onSubmit() {
    if (this.postForm.invalid) {
        return;
    }
    this.loading = true
    let myFormData = new FormData();
    myFormData.append('image', this.files);
    myFormData.append('id', this.postForm.value.id);
    myFormData.append('title', this.postForm.value.title);
    myFormData.append('categoryId', this.postForm.value.categoryId);
    myFormData.append('description', this.postForm.value.description);
    myFormData.append('shortDesc', this.postForm.value.shortDesc);
    myFormData.append('_method', 'PUT');
    this.postService.update(myFormData).subscribe(data => {
      this.loading = false
        if(data.data != undefined){
            this.router.navigate(['administrator/posts'])
        }
      },
    (errorResponse: HttpErrorResponse) => {
        this.errors=errorResponse.error.errors;
      },)
  }
}
