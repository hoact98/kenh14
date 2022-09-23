import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CateServiceGuard implements CanActivate {
  constructor( private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // console.log(route.params);
      let regex = /([a-zA-Z0-9_\-.]+)*?.chn{1}$/ig;
      let matches = route.params['slug'].match(regex);
      // console.log(matches)

      if(!matches){
        this.router.navigate(['']);
        return false;
      }
      return true;
  }

}
