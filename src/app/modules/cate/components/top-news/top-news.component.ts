import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Keyboard, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Keyboard, Pagination, Navigation]);
@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TopNewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
