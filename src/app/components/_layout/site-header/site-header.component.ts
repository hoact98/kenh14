import { Component, OnInit, HostListener  } from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  navFixed: boolean = false;
  private scrollOffset: number = 70;
  
  @HostListener('window:scroll')
  onWindowScroll() {
    this.navFixed = (window.pageYOffset 
      || document.documentElement.scrollTop 
      || document.body.scrollTop || 0
    ) > this.scrollOffset;
  }
}
