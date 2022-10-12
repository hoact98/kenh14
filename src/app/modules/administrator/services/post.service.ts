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
  create(post: PostModel) {
    const options = {
      title: post.title,
      description: post.description,
      shortDesc: post.shortDesc,
      categoryId: post.categoryId,
      image: post.image
    }
    return this.apiService.post(this.apiServerPaths.administrator.post.create, options, map(response => {
          console.log(response);
      })
    );
  }
  update(post: PostModel) {
    const options = {
      id: post.id,
      title: post.title,
      description: post.description,
      shortDesc: post.shortDesc,
      categoryId: post.categoryId,
      image: post.image
    }
    return this.apiService.post(this.apiServerPaths.administrator.post.update, options, map(response => {
          console.log(response);
      })
    );
  }
}
