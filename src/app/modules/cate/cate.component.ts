import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-cate',
  templateUrl: './cate.component.html',
  styleUrls: ['./cate.component.scss']
})
export class CateComponent implements OnInit {

  constructor(private titleService:Title, private route: ActivatedRoute) {}
  title: any;
  slug: any;
  id: any;
  name: any;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      // let regex = /([a-zA-Z0-9_\-.]+)*?.chn{1}$/ig;
      // let matches = params['slug'].match(regex);
      // console.log(matches)
      // this.slug = matches.replace('.chn', '')
      let cate = environment.cate.filter(element => element.slug == this.slug);
      if(cate.length>0){
        this.title = cate[0].title;
        this.name = cate[0].name;
        this.id = cate[0].id;
        this.titleService.setTitle(this.title);
      }else{

      }

    });
  }

}
