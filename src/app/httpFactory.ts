import { HttpInterceptorService } from "./services/http-interceptor.service";
import { RequestOptions, XHRBackend, Http } from "@angular/http";

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
    return new HttpInterceptorService(xhrBackend, requestOptions);
}