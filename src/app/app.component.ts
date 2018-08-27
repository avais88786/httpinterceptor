import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { GlobalServiceService } from './global-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  clonedHttpCaller = false;
  homepage = true;
  constructor(private router :Router, globalService: GlobalServiceService){
    
    router.events.forEach((event) => {
      if (event instanceof NavigationStart){
        if (event.url == '/clonedCaller'){
          this.clonedHttpCaller = true;
          this.homepage = false;
        }else{
          this.clonedHttpCaller = false;
          this.homepage = true;
        }    
      }else if (event instanceof NavigationEnd){
        globalService.clearAllRequests();
      }
    })
      
  }
  
}
