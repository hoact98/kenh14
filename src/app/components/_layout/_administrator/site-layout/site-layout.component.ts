import { Component, OnInit } from '@angular/core';

import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-administrator-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class AdministratorSiteLayoutComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Administrator');
  }

  ngOnInit() {
  }

}
