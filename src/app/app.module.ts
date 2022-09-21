import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { SiteLayoutComponent } from './components/_layout/site-layout/site-layout.component';
import { SiteFooterComponent } from './components/_layout/site-footer/site-footer.component';
import { SiteHeaderComponent } from './components/_layout/site-header/site-header.component';
import { SiteLayoutHomeComponent } from './components/_layout/site-layout-home/site-layout-home.component';
import { SiteSidebarComponent } from './components/_layout/site-sidebar/site-sidebar.component';
import { SiteLayoutPostComponent } from './components/_layout/site-layout-post/site-layout-post.component';
import { HomeComponent } from './modules/home/home.component';
import { HomeModule } from './modules/home/components/home.module';
import { PostModule } from './modules/post/post.module';
import { PostComponent } from './modules/post/post.component';
import { TopMenuComponent } from './modules/post/components/top-menu/top-menu.component';
import { PostContentComponent } from './modules/post/components/post-content/post-content.component';
import { SameCategoryComponent } from './modules/post/components/same-category/same-category.component';
import { HotDailyComponent } from './modules/post/components/hot-daily/hot-daily.component';
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
    HotDailyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    PostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
