import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {
token:any
  constructor(private httpservice:HttpService) { }
  
  
  addWish(Book:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpservice.postservice("/bookstore_user/add_wish_list/"+Book.product_id, Book, true, header)
  }
  getwishlist(){

  }
  removewish(){
    
  }
}

