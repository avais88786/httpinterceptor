import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-http-caller-new',
  templateUrl: './http-caller-new.component.html',
  styleUrls: ['./http-caller-new.component.css']
})
export class HttpCallerNewComponent implements OnInit {

  theResponse: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  callHttpNew(){
    this.http.get('https://jsonplaceholder.typicode.com/posts/1')
    .subscribe(s => this.theResponse = JSON.stringify(s));
  }
}
