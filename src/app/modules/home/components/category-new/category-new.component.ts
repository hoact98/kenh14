import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Keyboard, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Keyboard, Pagination, Navigation]);
@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CategoryNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
