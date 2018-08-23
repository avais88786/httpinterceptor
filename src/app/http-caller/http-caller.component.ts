import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { tap } from 'rxjs/operators';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-http-caller',
  templateUrl: './http-caller.component.html',
  styleUrls: ['./http-caller.component.css']
})
export class HttpCallerComponent implements OnInit {

  theResponse: string;
  theResponse2: string;
  showLoader: boolean = true;
  constructor(private http: Http, private globalService: GlobalServiceService) { }

  ngOnInit() {
    this.globalService.showSpinner1.subscribe(val => this.showLoader = val);
  }

  callHttp() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(s => {
        this.theResponse = JSON.stringify(s.json())
      });

      this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments')
      .subscribe(s => {
        this.theResponse2 = JSON.stringify(s.json())
      });
      
  }
}
