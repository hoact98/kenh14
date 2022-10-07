import {ApiService} from "../../../_services/api.service";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from "../models/user.model";
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
  get(queries: []) {
        const options = {
            params: [],
            headers: {
                Accept: 'application/json'
            }
        };
        // tslint:disable-next-line:forin
        for (const i in queries) {
            options.params[i] = queries[i];
        }
        return this.apiService.get(this.apiServerPaths.administrator.user.list, options, map(response => {
                const users = [];
                // @ts-ignore
                const data = response.data.users;
                // tslint:disable-next-line:forin
                for (const i in data) {
                    users.push(this._getModel(data[i]));
                }
                return {
                    data: users,
                    // @ts-ignore
                    count: response.data.count
                };
            })
        );
    }
}
