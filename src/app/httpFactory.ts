import { HttpInterceptorService } from "./services/http-interceptor.service";
import { RequestOptions, XHRBackend, Http } from "@angular/http";
import { GlobalServiceService } from "./global-service.service";

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, globalSer: GlobalServiceService): Http {
    return new HttpInterceptorService(xhrBackend, requestOptions, globalSer);
}