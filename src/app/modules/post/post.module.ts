import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NewStreamPostComponent } from './components/new-stream-post/new-stream-post.component';
@NgModule({
  declarations: [
    NewStreamPostComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    AppRoutingModule
  ],
  exports: [
    NewStreamPostComponent
  ]
})
export class PostModule { }
