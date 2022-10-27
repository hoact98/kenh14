import {ApiService} from "../../../_services/api.service";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from './../models/post.model';
import {environment} from "../../../../environments/environment";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  protected apiServerPaths = environment.apiServer.paths;

  constructor(private http: HttpClient, private apiService: ApiService) { }

  private _getModel(item: any) {
      return new PostModel(item);
  }
  get() {
    const options = {
        params: [],
        headers: {
            Accept: 'application/json'
        }
    };
    return this.apiService.get(this.apiServerPaths.administrator.post.list, options, map(response => {
            const posts = [];
            // @ts-ignore
            const data = response.data;
            // tslint:disable-next-line:forin
            for (const i in data) {
                posts.push(this._getModel(data[i]));
            }
            return {
                data: posts,
                // @ts-ignore
                // count: response.data.count
            };
        })
    );
  }
  create(post: any) {
    return this.apiService.post(this.apiServerPaths.administrator.post.create, post, map(response => {
      return response
      })
    );
  }
  show(id: any) {
      const options = {
        params: {},
        headers: {Accept: 'application/json'}
      }
      let path = this.apiServerPaths.administrator.post.show
      path = path.replace('{id}', id)
      return this.apiService.get(path, options, map(response => {
        return response
      }))
    }
  update(post: any) {

    let path = this.apiServerPaths.administrator.post.update
    //@ts-ignore
    path = path.replace('{id}', post.get('id'))
    return this.apiService.put(path, post, map(response => {
      console.log(response);
      return response
    })
    );
  }
  remove(id: any) {
        const options = {
            params: {},
            headers: {Accept: 'application/json'}
        }
        let path = this.apiServerPaths.administrator.post.delete
        path = path.replace('{id}', id)
      return this.apiService.delete(path, options, map(response => {
          return response
      }))
    }
}
