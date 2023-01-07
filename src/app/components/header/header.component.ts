import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart/cart.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  token:any;
  @Input() cartitemslist:any;
  constructor(private router:Router,private cart:CartService,private data:DataService){}
  booklist:any=[];
  ngOnInit(): void {
    this.cart.cartitemQuantity();
    localStorage.getItem('cartitems')
  }
tocart(){
  this.router.navigateByUrl('/home/cart')
}
towishlist(){
  this.router.navigateByUrl('/home/wishlist')
}

recivemessage(event: any) {
  this.cart=event;
}
searchBook(event:any){
  this.data.sendbookdetails(event.target.value)
}
}
