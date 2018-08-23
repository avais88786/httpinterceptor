import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, Request, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { tap, delay } from 'rxjs/operators';
import { GlobalServiceService } from '../global-service.service';

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

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    this.globalService.setSpinner1Value(true);
    if (url == 'https://jsonplaceholder.typicode.com/posts/1') {
      return super.get(url, options).pipe(
        delay(4000),
        tap(() => {
          this.globalService.setSpinner1Value(false);
        })
      );
    } else {
      return super.get(url, options).pipe(
        delay(1000),
        tap(() => {
          this.globalService.setSpinner1Value(false);
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
