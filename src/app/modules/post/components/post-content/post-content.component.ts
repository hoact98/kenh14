import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss']
})
export class PostContentComponent implements OnInit {

  constructor(private titleService:Title, private route: ActivatedRoute) { }

  slug: any;
  title: any;
  content: any;
  voice: any;
   ngOnInit(): void {
      this.voice = false;
     this.route.params.subscribe(params => {
      this.slug = params['slug'];
      let regex = /\d+/g;
      let matches = params['slug'].match(regex);
      alert(matches)
      console.log(matches.toString());
      // console.log(matches);
      let post = environment.data.filter(element => element.slug == this.slug)[0];
      this.title = post.title;
      this.content = post.content;
      this.titleService.setTitle(this.title);

    });
  }

}
