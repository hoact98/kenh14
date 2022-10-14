import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { PostService } from './../../../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrator-post-dialog-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class AdministratorPostDialogCreateComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private postService: PostService, private router: Router) {

  }

  ngOnInit() {
  }

}
