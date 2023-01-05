import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private openbook = new BehaviorSubject([]);
  getbooks= this.openbook.asObservable();

  constructor() { }
  sendbookdetails(book: any) {
    this.openbook.next(book)
  }
}
