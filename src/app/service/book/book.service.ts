import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpservice:HttpService) { }
  getbooks(){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
      })
    }
    return this.httpservice.getservice('https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book',false,header)
  }
}
