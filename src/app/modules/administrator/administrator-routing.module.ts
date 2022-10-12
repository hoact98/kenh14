import {RouterModule, Routes} from '@angular/router';

import { AdministratorCategoryDialogCreateComponent } from './components/category/dialogs/create/create.component';
import { AdministratorCategoryDialogUpdateComponent } from './components/category/dialogs/update/update.component';
import { AdministratorPostDialogCreateComponent } from './components/post/dialogs/create/create.component';
import { AdministratorPostDialogUpdateComponent } from './components/post/dialogs/update/update.component';
import { AdministratorUserDialogCreateComponent } from './components/user/dialogs/create/create.component';
import { AdministratorUserDialogUpdateComponent } from './components/user/dialogs/update/update.component';
import { CategoryComponent } from './components/category/category.component';
import { NgModule } from '@angular/core';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'users', component: UserComponent },
  { path: 'posts', component: PostComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'users/create', component: AdministratorUserDialogCreateComponent },
  { path: 'users/update/:id', component: AdministratorUserDialogUpdateComponent },
  { path: 'posts/create', component: AdministratorPostDialogCreateComponent },
  { path: 'posts/update/:id', component: AdministratorPostDialogUpdateComponent },
  { path: 'categories/create', component: AdministratorCategoryDialogCreateComponent },
  { path: 'categories/update/:id', component: AdministratorCategoryDialogUpdateComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministratorRoutingModule { }
