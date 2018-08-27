import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { tap } from 'rxjs/operators';
import { GlobalServiceService } from '../global-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-http-caller',
  templateUrl: './http-caller.component.html',
  styleUrls: ['./http-caller.component.css']
})
export class HttpCallerComponent implements OnInit {

  theResponse: string;
  theResponse2: string;
  showLoader: boolean = true;
  constructor(private http: Http, private globalService: GlobalServiceService, private router: Router) { }

  ngOnInit() {
    this.globalService.showSpinner1.subscribe(val => this.showLoader = val);
  }

  callHttp() {
    //https://jsonplaceholder.typicode.com/posts/1
    //https://reqres.in/api/users/23
    this.http.get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(s => {
        this.theResponse = JSON.stringify(s.json())
      },
        err => { }
      );

    this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments')
      .subscribe(s => {
        this.theResponse2 = JSON.stringify(s.json());
        setTimeout(() => {
          this.router.navigate(['/clonedCaller']);
        }, 1000)

      });

  }
}
