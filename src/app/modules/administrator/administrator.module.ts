import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdministratorCategoryDialogCreateComponent } from './components/category/dialogs/create/create.component';
import { AdministratorCategoryDialogUpdateComponent } from './components/category/dialogs/update/update.component';
import { AdministratorPostDialogCreateComponent } from './components/post/dialogs/create/create.component';
import { AdministratorPostDialogUpdateComponent } from './components/post/dialogs/update/update.component';
import {AdministratorRoutingModule} from "./administrator-routing.module";
import { AdministratorUserDialogCreateComponent } from './components/user/dialogs/create/create.component';
import { AdministratorUserDialogUpdateComponent } from './components/user/dialogs/update/update.component';
import { CategoryComponent } from './components/category/category.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostComponent } from './components/post/post.component';
import { TranslateModule } from '@ngx-translate/core';
import { UserComponent } from "./components/user/user.component";

@NgModule({
  declarations: [
    UserComponent,
    PostComponent,
    CategoryComponent,
    AdministratorUserDialogCreateComponent,
    AdministratorUserDialogUpdateComponent,
    AdministratorPostDialogCreateComponent,
    AdministratorPostDialogUpdateComponent,
    AdministratorCategoryDialogCreateComponent,
    AdministratorCategoryDialogUpdateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdministratorRoutingModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministratorModule { }
