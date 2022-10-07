import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { SiteLayoutHomeComponent } from './components/_layout/site-layout-home/site-layout-home.component';
import { SiteLayoutPostComponent } from './components/_layout/site-layout-post/site-layout-post.component';
import { SiteLayoutCateComponent } from './components/_layout/site-layout-cate/site-layout-cate.component';
import { HomeComponent } from './modules/home/home.component';
import { PostComponent } from './modules/post/post.component';
import { CateComponent } from './modules/cate/cate.component';
import { PostServiceGuard } from './post-service.guard';
import { CateServiceGuard } from './cate-service.guard';
import { SiteLayoutComponent } from './components/_layout/site-layout/site-layout.component';
const routes: Routes = [
  {
    path : '',
    component : SiteLayoutHomeComponent,
    children: [
      {
        path: '',  // child route path
        component: HomeComponent,  // child route component that the router renders
      },
    ],
  },
  {
    path : '123',
    component : SiteLayoutComponent,
  },
  {
    path : ':id/:slug',
    component : SiteLayoutPostComponent,
    canActivate: [PostServiceGuard],
    children: [
      {
        path: '',  // child route path
        component: PostComponent,  // child route component that the router renders
      },
    ],
  },
  {
    path : ':slug',
    component : SiteLayoutCateComponent,
    children: [
      {
        path: '',  // child route path
        component: CateComponent,  // child route component that the router renders
        canActivate: [CateServiceGuard],
      },
    ],
  },

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule],
  providers: [
    PostServiceGuard,
    CateServiceGuard
  ]
})
export class AppRoutingModule { }
