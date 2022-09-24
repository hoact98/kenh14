import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit {

  constructor(private translate: TranslateService) {
    // language
    translate.setDefaultLang('vi');
    translate.use('vi');
  }

  ngOnInit(): void {
  }
  useLanguage(language: string): void {
    this.translate.use(language);
}
}
