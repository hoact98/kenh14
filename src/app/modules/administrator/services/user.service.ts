import {ApiService} from "../../../_services/api.service";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from './../models/user.model';
import {environment} from "../../../../environments/environment";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  protected apiServerPaths = environment.apiServer.paths;

  constructor(private http: HttpClient, private apiService: ApiService) { }

  private _getModel(item: any) {
      return new UserModel(item);
  }
  get() {
    const options = {
        params: [],
        headers: {
            Accept: 'application/json'
        }
    };
    return this.apiService.get(this.apiServerPaths.administrator.user.list, options, map(response => {
            const users = [];
            // @ts-ignore
            const data = response.data;
            // tslint:disable-next-line:forin
            for (const i in data) {
                users.push(this._getModel(data[i]));
            }
            return {
                data: users,
                // @ts-ignore
                // count: response.data.count
            };
        })
    );
  }
    create(user: UserModel) {
        const options = {
          email: user.email,
          name: user.name,
          password: user.password,
        };
        return this.apiService.post(this.apiServerPaths.administrator.user.create, options, map(response => {
              return response
          })
        );
    }
    show(id: any) {
      const options = {
        params: {},
        headers: {Accept: 'application/json'}
      }
      let path = this.apiServerPaths.administrator.user.show
      path = path.replace('{id}', id)
      return this.apiService.get(path, options, map(response => {
        return response
      }))
    }
    update(user: UserModel) {
        const options = {
          id: user.id,
          name: user.name,
        };
      let path = this.apiServerPaths.administrator.user.update
       // @ts-ignore
        path = path.replace('{id}', user.id)
        return this.apiService.put(path, options, map(response => {
                return response
            })
        );
    }
    remove(id: any) {
        const options = {
            params: {},
            headers: {Accept: 'application/json'}
        }
        let path = this.apiServerPaths.administrator.user.delete
        path = path.replace('{id}', id)
      return this.apiService.delete(path, options, map(response => {
          return response
      }))
    }
}
