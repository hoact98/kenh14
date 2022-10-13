import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './../../../../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class AuthLogoutComponent implements OnInit {

  constructor(
      private authenticationService: AuthenticationService,
      private router: Router
  ) { }

  ngOnInit() {
    this.authenticationService.logout();
    this.router.navigate(['/auth/login']);
  }

}
