import { BehaviorSubject, Observable } from 'rxjs';

import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../modules/administrator/models/user.model';
import { environment } from './../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<UserModel>;
    public currentUser: Observable<UserModel>;
    protected apiServerPaths = environment.apiServer.paths;

  constructor(private http: HttpClient, private apiService: ApiService) {
      // @ts-ignore
        this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): UserModel {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
      return this.apiService.post(this.apiServerPaths.auth.login, { email, password }, map(user => {
        // @ts-ignore
        if (user.data) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
           // @ts-ignore
          localStorage.setItem('currentUser', JSON.stringify(user.data));
          // @ts-ignore
          this.currentUserSubject.next(user.data);
        }

        return user;
      }));
    }

    logout() {
        // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      // @ts-ignore
        this.currentUserSubject.next(null);
  }
  register(user: UserModel) {
    return this.apiService.post(this.apiServerPaths.auth.register, user, map(response => {
      console.log(response)
    }));
  }
}
