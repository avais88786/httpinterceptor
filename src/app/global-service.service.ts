import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GlobalServiceService {
  private showSpinner1Subject = new BehaviorSubject(false);
  showSpinner1 = this.showSpinner1Subject.asObservable();
  private requests: string[] = [];
  constructor() { }

  setSpinner1Value(value:boolean){
    this.showSpinner1Subject.next(value);
  }

  addRequest(url:string){
    this.requests.push(url);
  }

  removeRequest(url:string){
    const i = this.requests.indexOf(url);
    this.requests.splice(i, 1);
    this.setSpinner1Value(this.requests.length > 0);
  }

  clearAllRequests(){
    this.requests = [];
    this.setSpinner1Value(false);
  }

}
