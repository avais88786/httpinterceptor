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
  private requests: string[] = [];
  
  constructor(_backend: ConnectionBackend, _defaultOptions: RequestOptions, globalServ: GlobalServiceService) {
    super(_backend, _defaultOptions);
    this.globalService = globalServ;
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, options);
  }

  removeRequest(url:string) {
    const i = this.requests.indexOf(url);
    this.requests.splice(i,1);
    this.globalService.setSpinner1Value(this.requests.length > 0);
  }

  private handleError<T> (url, result?: T) {
    return (error: any): Observable<T> => {
   
      console.log(error.message);
      this.removeRequest(url);   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    this.globalService.setSpinner1Value(true);
    this.requests.push(url);

    if (url == 'https://reqres.in/api/users/23') {
      return super.get(url, options).pipe(
        delay(4000),
        tap(() => {
          this.removeRequest(url);
        }),
        catchError((err, caught) => {
          //return Observable.throw(this.handleError<Response>(url));
          //return of(caught. as Response);
          this.removeRequest(url);
          caught;
          //return this.handleError<Response>(url, null);
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
          return this.handleError<Response>(url);
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
