import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-http-caller',
  templateUrl: './http-caller.component.html',
  styleUrls: ['./http-caller.component.css']
})
export class HttpCallerComponent implements OnInit {

  theResponse: string;
  constructor(private http: Http) { }

  ngOnInit() {
  }

  callHttp() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1')
    .subscribe(s => this.theResponse = JSON.stringify(s.json()));
  }
}
