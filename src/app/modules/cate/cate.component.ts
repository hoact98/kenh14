import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cate',
  templateUrl: './cate.component.html',
  styleUrls: ['./cate.component.scss']
})
export class CateComponent implements OnInit {

  constructor(private titleService:Title, private route: ActivatedRoute) {
    this.titleService.setTitle('Star - Tin tức ngôi sao, giải trí, scandal, hậu trường showbiz - Kenh14.vn');
  }
  title: any;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // this.title = params['slug'];
    console.log(params)


    });
  }

}
