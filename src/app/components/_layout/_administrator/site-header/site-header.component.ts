import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-administrator-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class AdministratorSiteHeaderComponent implements OnInit {
  language: string = 'vi';
  constructor(private translate: TranslateService) {
  // language
    translate.setDefaultLang('vi');
    translate.use('vi')
  }

  ngOnInit() {
  }
  useLanguage(language: string): void {
    this.translate.use(language);
    this.language = language;
  }
}
