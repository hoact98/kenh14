import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { TopNewsComponent } from './components/top-news/top-news.component';
@NgModule({
  declarations: [
    TopNewsComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [
    TopNewsComponent
  ]
})
export class CateModule { }
