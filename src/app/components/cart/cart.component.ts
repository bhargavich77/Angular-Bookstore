import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart/cart.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  constructor(private cartservice:CartService,private dataservice:DataService){}
  count=1;
  Book:any;
  _id: any;
  item_qty = 1;
  ngOnInit(): void {
    this.dataservice.getbooks.subscribe((res:any)=>{
      this.Book=res;
    })
    
  }
  // increment() {
  //   this.count = this.count + 1;
  // }
  // decrement() {
  //   this.count = this.count - 1;
  // }
  

  increase(Book: any) {
    this.item_qty = Book.quantityToBuy;
    this.item_qty += 1;
    console.log("increased",this.item_qty);
    this.updateCount(Book);
  }
  decrease(Book: any) {
    this.item_qty =Book.quantityToBuy;
    if (this.item_qty > 0) {
      this.item_qty -= 1;
      console.log( "decrease", this.item_qty);
      this.updateCount(Book);
    }

  }
  updateCount(Book:any){
    let payload={
      quantityToBuy: this.item_qty
    }
    this.cartservice.quantity(Book._id,payload).subscribe((res:any)=>{
      console.log(res)
    })
  }
  deleteItem(Book:any){
    console.log(Book)
    this.cartservice.removeItem(Book).subscribe((res:any)=>{
      console.log(res)
    })
  }
 
}
