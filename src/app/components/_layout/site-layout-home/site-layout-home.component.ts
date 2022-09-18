import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-site-layout-home',
  templateUrl: './site-layout-home.component.html',
  styleUrls: ['./site-layout-home.component.scss']
})
export class SiteLayoutHomeComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Kênh tin tức giải trí - Xã hội - Kenh14.vn");
  }

  ngOnInit(): void {
  }

}
