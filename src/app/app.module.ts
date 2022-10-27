import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

import { AdministratorSiteHeaderComponent } from './components/_layout/_administrator/site-header/site-header.component'
import { AdministratorSiteLayoutComponent } from './components/_layout/_administrator/site-layout/site-layout.component'
import { AdministratorSiteSideBarComponent } from './components/_layout/_administrator/site-sidebar/site-sidebar.component'
import { AngularMaterialModule } from './angular-material.module'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CateComponent } from './modules/cate/cate.component';
import { CateModule } from './modules/cate/cate.module';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { FeaturedCateComponent } from './modules/cate/components/featured-cate/featured-cate.component';
import { HomeComponent } from './modules/home/home.component';
import { HomeModule } from './modules/home/home.module';
import { HotDailyComponent } from './modules/post/components/hot-daily/hot-daily.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { MenuCateComponent } from './modules/cate/components/menu-cate/menu-cate.component';
import { NewStreamCateComponent } from './modules/cate/components/new-stream-cate/new-stream-cate.component';
import { NgModule } from '@angular/core';
import { PostComponent } from './modules/post/post.component';
import { PostContentComponent } from './modules/post/components/post-content/post-content.component';
import { PostModule } from './modules/post/post.module';
import { SameCategoryComponent } from './modules/post/components/same-category/same-category.component';
import { SiteFooterComponent } from './components/_layout/site-footer/site-footer.component';
import { SiteHeaderComponent } from './components/_layout/site-header/site-header.component';
import { SiteLayoutCateComponent } from './components/_layout/site-layout-cate/site-layout-cate.component';
import { SiteLayoutComponent } from './components/_layout/site-layout/site-layout.component';
import { SiteLayoutHomeComponent } from './components/_layout/site-layout-home/site-layout-home.component';
import { SiteLayoutPostComponent } from './components/_layout/site-layout-post/site-layout-post.component';
import { SiteSidebarComponent } from './components/_layout/site-sidebar/site-sidebar.component';
import { TopMenuComponent } from './modules/post/components/top-menu/top-menu.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// import ngx-translate and the http loader
@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    SiteFooterComponent,
    SiteHeaderComponent,
    SiteLayoutHomeComponent,
    SiteSidebarComponent,
    SiteLayoutPostComponent,
    HomeComponent,
    PostComponent,
    TopMenuComponent,
    PostContentComponent,
    SameCategoryComponent,
    HotDailyComponent,
    CateComponent,
    MenuCateComponent,
    NewStreamCateComponent,
    FeaturedCateComponent,
    SiteLayoutCateComponent,
    AdministratorSiteLayoutComponent,
    AdministratorSiteSideBarComponent,
    AdministratorSiteHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    HomeModule,
    PostModule,
    CateModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
