import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TopNewsComponent } from './components/top-news/top-news.component';
@NgModule({
  declarations: [
    TopNewsComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    AppRoutingModule
  ],
  exports: [
    TopNewsComponent
  ]
})
export class CateModule { }
