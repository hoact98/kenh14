import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { SiteLayoutComponent } from './components/_layout/site-layout/site-layout.component';
import { SiteFooterComponent } from './components/_layout/site-footer/site-footer.component';
import { SiteHeaderComponent } from './components/_layout/site-header/site-header.component';
import { SiteLayoutHomeComponent } from './components/_layout/site-layout-home/site-layout-home.component';
import { Kenh14Component } from './modules/home/components/kenh14/kenh14.component';
import { SiteSidebarComponent } from './components/_layout/site-sidebar/site-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    SiteFooterComponent,
    SiteHeaderComponent,
    SiteLayoutHomeComponent,
    Kenh14Component,
    SiteSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
