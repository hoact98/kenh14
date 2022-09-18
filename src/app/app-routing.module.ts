import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { SiteLayoutHomeComponent } from './components/_layout/site-layout-home/site-layout-home.component';
import { HomeComponent } from './modules/home/home.component';
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

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
