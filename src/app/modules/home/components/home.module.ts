import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { FeaturedComponent } from './featured/featured.component';
import { NewStreamComponent } from './new-stream/new-stream.component';

@NgModule({
  declarations: [FeaturedComponent,NewStreamComponent],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports:[
    FeaturedComponent,
    NewStreamComponent
  ]
})
export class HomeModule { }
