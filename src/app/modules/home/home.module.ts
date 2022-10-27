import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CategoryNewComponent } from './components/category-new/category-new.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { NewStreamComponent } from './components/new-stream/new-stream.component';

@NgModule({
  declarations: [
    FeaturedComponent,
    NewStreamComponent,
    CategoryNewComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    AppRoutingModule
  ],
  exports:[
    FeaturedComponent,
    NewStreamComponent,
    CategoryNewComponent
  ]
})
export class HomeModule { }
