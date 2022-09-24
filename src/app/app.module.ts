import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SiteLayoutComponent } from './components/_layout/site-layout/site-layout.component';
import { SiteFooterComponent } from './components/_layout/site-footer/site-footer.component';
import { SiteHeaderComponent } from './components/_layout/site-header/site-header.component';
import { SiteLayoutHomeComponent } from './components/_layout/site-layout-home/site-layout-home.component';
import { SiteSidebarComponent } from './components/_layout/site-sidebar/site-sidebar.component';
import { SiteLayoutPostComponent } from './components/_layout/site-layout-post/site-layout-post.component';
import { HomeComponent } from './modules/home/home.component';
import { HomeModule } from './modules/home/home.module';
import { PostModule } from './modules/post/post.module';
import { PostComponent } from './modules/post/post.component';
import { TopMenuComponent } from './modules/post/components/top-menu/top-menu.component';
import { PostContentComponent } from './modules/post/components/post-content/post-content.component';
import { SameCategoryComponent } from './modules/post/components/same-category/same-category.component';
import { HotDailyComponent } from './modules/post/components/hot-daily/hot-daily.component';
import { CateComponent } from './modules/cate/cate.component';
import { MenuCateComponent } from './modules/cate/components/menu-cate/menu-cate.component';
import { NewStreamCateComponent } from './modules/cate/components/new-stream-cate/new-stream-cate.component';
import { FeaturedCateComponent } from './modules/cate/components/featured-cate/featured-cate.component';
import { SiteLayoutCateComponent } from './components/_layout/site-layout-cate/site-layout-cate.component';
import { CateModule } from './modules/cate/cate.module';
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
    SiteLayoutCateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    CateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
