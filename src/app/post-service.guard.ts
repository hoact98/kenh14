import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceGuard implements CanActivate {
  constructor( private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(route.params);
      let regex = /(\/[a-zA-Z0-9_\-.]+)*?\d+.chn{1}$/ig;
      let matches = route.params['slug'].match(regex);
      if(!matches){
        this.router.navigate(
          ['cate'],
          {
            queryParams: route.params,
            skipLocationChange: true,
            queryParamsHandling:"merge"
          }
        );
        return false;
      }
      return true;
  }

}
