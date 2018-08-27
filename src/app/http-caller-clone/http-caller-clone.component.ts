import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import { GlobalServiceService } from '../global-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-http-caller-clone',
  templateUrl: './http-caller-clone.component.html',
  styleUrls: ['./http-caller-clone.component.css']
})
export class HttpCallerCloneComponent implements OnInit, AfterViewInit {

  theResponse: string;
  showLoader: boolean = true;
  constructor(private http: Http, private globalService: GlobalServiceService, private router: Router) { }

  ngOnInit() {
    //this.globalService.showSpinner1.subscribe(val => this.showLoader = val);
  }

  ngAfterViewInit(): void {

    this.globalService.showSpinner1.subscribe(val => this.showLoader = val);
    //https://jsonplaceholder.typicode.com/posts/1
    this.http.get('https://jsonplaceholder.typicode.com/posts?userId=1')
      .subscribe(s => {
        this.theResponse = JSON.stringify(s.json())
      },
        err => { }
      );
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
