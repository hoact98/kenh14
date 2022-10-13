import {RouterModule, Routes} from '@angular/router';

import { AdministratorCategoryDialogCreateComponent } from './components/category/dialogs/create/create.component';
import { AdministratorCategoryDialogUpdateComponent } from './components/category/dialogs/update/update.component';
import { AdministratorPostDialogCreateComponent } from './components/post/dialogs/create/create.component';
import { AdministratorPostDialogUpdateComponent } from './components/post/dialogs/update/update.component';
import { AdministratorUserDialogCreateComponent } from './components/user/dialogs/create/create.component';
import { AdministratorUserDialogUpdateComponent } from './components/user/dialogs/update/update.component';
import { AuthGuard } from 'src/app/_helpers/auth.guard';
import { CategoryComponent } from './components/category/category.component';
import { NgModule } from '@angular/core';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'users',
    component: UserComponent,
    canActivate: [AuthGuard],
    data: { roles: 1}
  },
  {
    path: 'posts',
    component: PostComponent,
    canActivate: [AuthGuard],
    data: {roles: 1}
  },
  {
    path: 'categories',
    component: CategoryComponent,
    canActivate: [AuthGuard],
    data: {roles: 1}
  },
  {
    path: 'users/create',
    component: AdministratorUserDialogCreateComponent,
    canActivate: [AuthGuard],
    data: {roles: 1}
  },
  {
    path: 'users/update/:id',
    component: AdministratorUserDialogUpdateComponent,
    canActivate: [AuthGuard],
    data: {roles: 1}
  },
  {
    path: 'posts/create',
    component: AdministratorPostDialogCreateComponent,
    canActivate: [AuthGuard],
    data: {roles: 1}
  },
  {
    path: 'posts/update/:id',
    component: AdministratorPostDialogUpdateComponent,
    canActivate: [AuthGuard],
    data: {roles: 1}
  },
  {
    path: 'categories/create',
    component: AdministratorCategoryDialogCreateComponent,
    canActivate: [AuthGuard],
    data: {roles: 1}
  },
  {
    path: 'categories/update/:id',
    component: AdministratorCategoryDialogUpdateComponent,
    canActivate: [AuthGuard],
    data: {roles: 1}
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministratorRoutingModule { }
