import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, Request, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {tap} from 'rxjs/operators';

@Injectable()
export class HttpInterceptorService extends Http {

  constructor(_backend: ConnectionBackend, _defaultOptions: RequestOptions) {
    super(_backend, _defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, options);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    alert('calling');
    return super.get(url, options).pipe(
      tap(() => { alert('called old')})
    );
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
