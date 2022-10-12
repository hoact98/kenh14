import { Component, OnInit } from '@angular/core';

import { UserModel } from './../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: UserModel[];

  constructor(private userService: UserService) {
    this.users = [];
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.userService.get().subscribe(result => {
      this.users = result.data.length > 0 ? result.data : [];
    })
  }
}
