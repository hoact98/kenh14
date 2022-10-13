import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AdministratorRoutingModule} from "./administrator-routing.module";
import { AdministratorUserDialogCreateComponent } from './components/user/dialogs/create/create.component';
import { AdministratorUserDialogUpdateComponent } from './components/user/dialogs/update/update.component';
import { CategoryComponent } from './components/category/category.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from "./components/user/user.component";

@NgModule({
  declarations: [
    UserComponent,
    PostComponent,
    CategoryComponent,
    AdministratorUserDialogCreateComponent,
    AdministratorUserDialogUpdateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdministratorRoutingModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministratorModule { }
