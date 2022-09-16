import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { SiteLayoutComponent } from './components/_layout/site-layout/site-layout.component';
import { Kenh14Component } from './modules/home/components/kenh14/kenh14.component';
const routes: Routes = [
  {
    path : '',
    component : SiteLayoutComponent,
    children: [
      {
        path: '',  // child route path
        component: Kenh14Component,  // child route component that the router renders
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
