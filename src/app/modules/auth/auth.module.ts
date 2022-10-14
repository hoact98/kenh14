import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AuthGuard } from 'src/app/_helpers/auth.guard';
import { AuthLoginComponent } from './components/login/login.component';
import { AuthLogoutComponent } from './components/logout/logout.component';
import { AuthRegisterComponent } from './components/register/register.component';
import { CommonModule } from '@angular/common';
import { HttpLoaderFactory } from 'src/app/app.module';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'login', component: AuthLoginComponent },
    { path: 'register', component: AuthRegisterComponent },
    { path: 'logout', component: AuthLogoutComponent, canActivate: [AuthGuard] }
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
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
  ],
  exports: [RouterModule],
})
export class AuthModule { }
