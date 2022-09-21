import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Keyboard, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Keyboard, Pagination, Navigation]);

@Component({
  selector: 'app-new-stream-post',
  templateUrl: './new-stream-post.component.html',
  styleUrls: ['./new-stream-post.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewStreamPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
