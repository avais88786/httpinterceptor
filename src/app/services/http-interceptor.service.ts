import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, Request, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { tap, delay, catchError } from 'rxjs/operators';
import { GlobalServiceService } from '../global-service.service';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HttpInterceptorService extends Http {
  counter: number = 1;
  globalService: GlobalServiceService;
  

  constructor(_backend: ConnectionBackend, _defaultOptions: RequestOptions, globalServ: GlobalServiceService) {
    super(_backend, _defaultOptions);
    this.globalService = globalServ;
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, options);
  }

  removeRequest(url: string) {
    this.globalService.removeRequest(url);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    this.globalService.setSpinner1Value(true);
    this.globalService.addRequest(url);

    if (url == 'https://jsonplaceholder.typicode.com/posts/1') {
      return super.get(url, options).pipe(
        delay(6000),
        tap(() => {
          this.removeRequest(url);
          //alert("Got");
        }),
        catchError((err, caught) => {
          //alert("Error");
          this.removeRequest(url);
          return Observable.of(err);
        })
      );
    } else if (url == 'https://jsonplaceholder.typicode.com/posts?userId=1') {
      return super.get(url, options).pipe(
        delay(1000),
        tap(() => {
          this.removeRequest(url);
        }),
        catchError((err, caught) => {
          this.removeRequest(url);
          return Observable.of(err);
        })
      );
    } else {
      return super.get(url, options).pipe(
        delay(1000),
        tap(() => {
          this.removeRequest(url);
        }),
        catchError((err, caught) => {
          this.removeRequest(url);
          return Observable.of(err);
        })
      );

    }
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.post(url, body, options);
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.put(url, body, options);
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.delete(url, options);
  }
}
