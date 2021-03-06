import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpCallerComponent } from './http-caller/http-caller.component';
import { httpFactory } from './httpFactory';
import { HttpCallerNewComponent } from './http-caller-new/http-caller-new.component';
import { HttpInterceptorNewService } from './services/http-interceptor-new.service';
import { GlobalServiceService } from './global-service.service';
import { AppRoutingModule } from './/app-routing.module';
import { HttpCallerCloneComponent } from './http-caller-clone/http-caller-clone.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpCallerComponent,
    HttpCallerNewComponent,
    HttpCallerCloneComponent
  ],
  imports: [
    BrowserModule, HttpModule,
    HttpClientModule,FormsModule, AppRoutingModule
  ],
  providers: [
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend,RequestOptions, GlobalServiceService]
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass: HttpInterceptorNewService,
      multi: true
    },
    GlobalServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
