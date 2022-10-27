import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { AuthenticationService } from '../_services/authentication.service';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(catchError(err => {
            switch (err.status) {
              case 401:
              case 403:
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                 // @ts-ignore
                location.reload(true);
                break;
              case 422:
              case 400:
                // console.log("asdasdas", err.error.errors[0])
                return throwError(err)
              default:
                let data = {};
                data = {
                  reason: err && err.error.message ? err.error.message : (err && err.message ? err.message : ''),
                  status: err.status
                };
                console.log(data)
                break;
            }

          // const error = err.error.message || err.statusText;
          return throwError(err)
        }))
    }
}
