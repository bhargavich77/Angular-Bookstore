// import { HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { HttpService } from '../http/http.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   token:any;
//   bookid:any;
//   constructor(private httpservice:HttpService) {
//   this.token=localStorage.getItem('token')

//    }

//   addtoCart(data:any){
//     let header={
//       headers:new HttpHeaders({
//       'Content-Type':'application/json',
//       'x-access-token':this.token
//       })

//     }
//     return this.httpservice.postservice('https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/'+data.product_id,data,true,header)
//   }
    
  
//   cartitemQuantity(data:any){
//     let header = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'x-access-token': this.token
//       })
//     }
//     return this.httpservice.getservice('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items',true,header)

//   }
//   removeItem(data:any){
//     let header = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'x-access-token': this.token
//       })
//     }
//     return this.httpservice.deleteservice('https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/'+data,true,header)
//    }
//   getCartItem(){
//     let header = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'x-access-token': this.token
//       })
//     }
//     return this.httpservice.getservice("/bookstore_user/get_cart_items",true, header)

//   }
//   quantity(bookId:any,req:any)
//   {
//     let header = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'x-access-token': this.token
//       })
//     }
//     return this.httpservice.putservice("/bookstore_user/cart_item_quantity/"+bookId, req, true, header)
//   }
// }



import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  bookid: any;
  token: any;
  constructor(private httpservice: HttpService) {
    this.token = localStorage.getItem('token')
  }

  addtoCart(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    console.log(this.token);
    return this.httpservice.postservice('https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/' + data.bookid,{}, true, header)
  }
  cartitemQuantity() {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpservice.getbook('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items',true,header)
  }
  customerdetails(data:any){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpservice.putbook('https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user',data,true,header)
   }
  
   removeItem(data:any){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpservice.deleteService('https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/'+data,true,header)
   }
   order(data:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpservice.postservice("https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order", data, true, header)
  }
  quantity(bookid:any,data:any){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
  }
  return this.httpservice.putbook("https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/"+bookid,data,true,header)
}
} 

