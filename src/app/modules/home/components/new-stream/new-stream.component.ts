import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Keyboard, Pagination, Navigation } from "swiper";
import { environment } from 'src/environments/environment';
// install Swiper modules
SwiperCore.use([Keyboard, Pagination, Navigation]);
@Component({
  selector: 'app-new-stream',
  templateUrl: './new-stream.component.html',
  styleUrls: ['./new-stream.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewStreamComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  data: any;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // this.title = params['slug'];
    });
    this.data = environment.data;
  }

}
