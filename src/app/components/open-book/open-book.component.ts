import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book/book.service';
import { CartService } from 'src/app/service/cart/cart.service';
import { WishlistService } from 'src/app/service/wishlist/wishlist.service';
import { DataService } from "../../service/data.service";

@Component({
  selector: 'app-open-book',
  templateUrl: './open-book.component.html',
  styleUrls: ['./open-book.component.scss']
})
export class OpenBookComponent implements OnInit{
  constructor(private openbook:BookService,private cartservice:CartService,private dataservice:DataService,private wishservice:WishlistService){}
  Book:any
  view:boolean=true;
  ngOnInit(): void {
    this.dataservice.getbooks.subscribe((res:any)=>{
      console.log(res)
      this.Book=res;
      console.log(this.Book)
    })

    
  }
  addcart(){
    let data= {
      product_id:this.Book._id
    }
    this.cartservice.addtoCart(data).subscribe((res:any)=>{
      console.log(res)
    })
  }
  wish() {
    let data = {
      product_id: this.Book._id,
    }
    console.log(data)
    this.wishservice.addWish(data).subscribe((res: any) => {
      console.log(res)
      
    })
  }
  onClick(){
    this.view=false;
  }
  
}
