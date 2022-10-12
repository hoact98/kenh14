import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AuthLoginComponent } from './components/login/login.component';
import { AuthLogoutComponent } from './components/logout/logout.component';
import { AuthRegisterComponent } from './components/register/register.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'auth/login', component: AuthLoginComponent },
    { path: 'auth/register', component: AuthRegisterComponent },
    { path: 'auth/logout', component: AuthLogoutComponent }
];
@NgModule({
  declarations: [
    AuthLoginComponent,
    AuthRegisterComponent,
    AuthLogoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class AuthModule { }
