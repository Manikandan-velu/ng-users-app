import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Users } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class SharingService {
  private userData = new BehaviorSubject<any>({})
  currentData = this.userData.asObservable();
  
  constructor() { }

  setData(data:Users) {
      this.userData.next(data);
  }
}
