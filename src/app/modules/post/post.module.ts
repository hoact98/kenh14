import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { NewStreamPostComponent } from './components/new-stream-post/new-stream-post.component';

@NgModule({
  declarations: [
    NewStreamPostComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [
    NewStreamPostComponent
  ]
})
export class PostModule { }
