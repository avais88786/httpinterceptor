import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GlobalServiceService {
  private showSpinner1Subject = new BehaviorSubject(false);
  showSpinner1 = this.showSpinner1Subject.asObservable();
  constructor() { }

  setSpinner1Value(value:boolean){
    this.showSpinner1Subject.next(value);
  }

}
