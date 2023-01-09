import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {
token:any
bookid:any
  constructor(private httpservice:HttpService) { 
    this.token=localStorage.getItem('token')
  }
  
  
  addWish(Book:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpservice.postservice('https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/'+Book.bookid,Book, true, header)
  }
  getwishlist(){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpservice.getwishlist('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items', true, header)
  }
  removewish(Book:any){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpservice.deleteService('https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_wishlist_item/'+Book, true, header)
  }
}

