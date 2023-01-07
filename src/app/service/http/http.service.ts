// import { Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http'
// @Injectable({
//   providedIn: 'root'
// })
// export class HttpService {

//   constructor(private httpclient:HttpClient) { }
//   postservice(url:any, data:any, token:boolean=false, options:any){
//     // return this.httpclient.post(url,data,token&&options)
//     return this.httpclient.post(url,data,token&&options)
//   }
//   getservice(url:any,token:boolean=false,options:any){
//     return this.httpclient.get(url,token&&options)
//   }
//   putservice(url:any,data:any,token:boolean=true,options:any){
//     return this.httpclient.put(url,data,token&&options)
//   }
//   deleteservice( url:any,token:boolean=true,options:any){
//     return this.httpclient.delete(url,token&&options)
//   }
// }



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  postservice(url: any, data: any, token: boolean = false, options: any) {

    return this.http.post(url, data, token && options)
  }
  getbook(url:any,token:boolean=false,options:any){
   return this.http.get(url,token && options)
  }
  getwishlist(url:any,token:boolean=true,options:any){
    return this.http.get(url,token && options)
   }
  putbook(url:any,data:any,token:boolean=true,options:any){
    return this.http.put(url,data,token && options)
  }
  addcart(url:any,data:any,token:boolean=true,options:any){
    console.log(url);
    console.log(options); 
    return this.http.post(url,data,token && options) 
  }
  
  wishlist(url:any,data:any,token:boolean=true,options:any){
    return this.http.post(url,data,token && options)
  }
  deleteService(url: string, token: boolean = true,options: any) {
    console.log(url);
    
    return this.http.delete(url,token && options)
    
  }
}

