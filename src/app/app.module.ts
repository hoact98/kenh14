import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { SiteLayoutComponent } from './components/_layout/site-layout/site-layout.component';
import { SiteFooterComponent } from './components/_layout/site-footer/site-footer.component';
import { SiteHeaderComponent } from './components/_layout/site-header/site-header.component';
import { SiteLayoutHomeComponent } from './components/_layout/site-layout-home/site-layout-home.component';
import { SiteSidebarComponent } from './components/_layout/site-sidebar/site-sidebar.component';
import { CategoryNewComponent } from './modules/home/components/category-new/category-new.component';
import { HomeComponent } from './modules/home/home.component';
import { HomeModule } from './modules/home/components/home.module';
@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    SiteFooterComponent,
    SiteHeaderComponent,
    SiteLayoutHomeComponent,
    SiteSidebarComponent,
    CategoryNewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
