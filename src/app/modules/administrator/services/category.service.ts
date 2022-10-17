import {ApiService} from "../../../_services/api.service";
import { CategoryModel } from './../models/category.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
protected apiServerPaths = environment.apiServer.paths;

  constructor(private http: HttpClient, private apiService: ApiService) { }

  private _getModel(item: any) {
      return new CategoryModel(item);
  }
  get() {
    const options = {
        params: [],
        headers: {
            Accept: 'application/json'
        }
    };
    return this.apiService.get(this.apiServerPaths.administrator.category.list, options, map(response => {
            const categories = [];
            // @ts-ignore
            const data = response.data;
            // tslint:disable-next-line:forin
            for (const i in data) {
                categories.push(this._getModel(data[i]));
            }
            return {
                data: categories,
                // @ts-ignore
                // count: response.data.count
            };
        })
    );
  }
  create(category: CategoryModel) {
    const options = {
      name: category.name
    };
    return this.apiService.post(this.apiServerPaths.administrator.category.create, options, map(response => {
      console.log(response);
      return response
      })
    );
  }
  show(id: any) {
    const options = {
        params: {},
        headers: {Accept: 'application/json'}
      }
      let path = this.apiServerPaths.administrator.category.show
      path = path.replace('{id}', id)
      return this.apiService.get(path, options, map(response => {
        return response
      }))
  }
  update(category: CategoryModel) {
    const options = {
      id: category.id,
      name: category.name
    }
    let path = this.apiServerPaths.administrator.category.update
      // @ts-ignore
    path = path.replace('{id}', category.id)
    return this.apiService.put(path, options, map(response => {
      console.log(response);
      return response;
      })
    );
  }
  remove(id: any) {
        const options = {
            params: {},
            headers: {Accept: 'application/json'}
        }
        let path = this.apiServerPaths.administrator.category.delete
        path = path.replace('{id}', id)
      return this.apiService.delete(path, options, map(response => {
          return response
      }))
    }
}
