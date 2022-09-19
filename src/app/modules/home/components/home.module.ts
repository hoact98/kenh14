import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { FeaturedComponent } from './featured/featured.component';
import { NewStreamComponent } from './new-stream/new-stream.component';
import { CategoryNewComponent } from './category-new/category-new.component';

@NgModule({
  declarations: [
    FeaturedComponent,
    NewStreamComponent,
    CategoryNewComponent],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports:[
    FeaturedComponent,
    NewStreamComponent,
    CategoryNewComponent
  ]
})
export class HomeModule { }
