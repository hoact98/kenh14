import {RouterModule, Routes} from '@angular/router';

import { CategoryComponent } from './components/category/category.component';
import { NgModule } from '@angular/core';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'post', component: PostComponent },
  { path: 'category', component: CategoryComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministratorRoutingModule { }
