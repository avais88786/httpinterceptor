import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpSentEvent, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import 'rxjs/add/operator/do';

@Injectable()
export class HttpInterceptorNewService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    alert('Calling New');
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) 
        {
          alert('called');
        }
      }
      )
    );

    // return next.handle(req).do(() => {
    //   alert('Called New');
    // })
    // .pipe(
    //   tap(() => {alert('Called New')})
    // );
  }
}
