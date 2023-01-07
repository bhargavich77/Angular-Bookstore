// import { Component, OnInit } from '@angular/core';
// import { BookService } from 'src/app/service/book/book.service';
// import { CartService } from 'src/app/service/cart/cart.service';
// import { WishlistService } from 'src/app/service/wishlist/wishlist.service';
// import { DataService } from "../../service/data.service";

// @Component({
//   selector: 'app-open-book',
//   templateUrl: './open-book.component.html',
//   styleUrls: ['./open-book.component.scss']
// })
// export class OpenBookComponent implements OnInit{
//   constructor(private openbook:BookService,private cartservice:CartService,private dataservice:DataService,private wishservice:WishlistService){}
//   Book:any
//   view:boolean=true;
//   ngOnInit(): void {
//     this.dataservice.getbooks.subscribe((res:any)=>{
//       console.log(res)
//       this.Book=res;
//       console.log(this.Book)
//     })

    
//   }
//   addcart(){
//     let data= {
//       product_id:this.Book._id
//     }
//     console.log(data)
//     this.cartservice.addtoCart(data).subscribe((res:any)=>{
//       console.log(res)
    
//     })
//   }
//   wish() {
//     let data = {
//       product_id: this.Book._id,
//     }
//     console.log(data)
//     this.wishservice.addWish(data).subscribe((res: any) => {
//       console.log(res)
      
//     })
//   }
//   onClick(){
//     this.view=false;
//   }
  
// }



import { Component, Input, OnInit, Output } from '@angular/core';
import { Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/service/cart/cart.service';
import { WishlistService } from 'src/app/service/wishlist/wishlist.service';
import { DataService } from "../../service/data.service";

@Component({
  selector: 'app-open-book',
  templateUrl: './open-book.component.html',
  styleUrls: ['./open-book.component.scss']
})
export class OpenBookComponent implements OnInit {
  show=false;
  @Input() cartitem:any
  
  constructor(private dataservice:DataService,private cartservice:CartService, private wish:WishlistService,private router:Router,private snackbar: MatSnackBar ) { 
    this.hideMatBadge = true;
    this.badgeCounter = 1;
  }
  Book: any
  length:any;
  cart:any;
  count=1;
  item_qty:any;
  hideMatBadge : boolean=true;
  badgeCounter: number=1;
  
  ngOnInit(): void {
    this.dataservice.getbooks.subscribe((result: any) => {
      this.Book = result;
      console.log(this.Book);  
    })

  }
  dasboard(){
    this.router.navigateByUrl('/home/dashboard')
  }
  isShow(){
    this.show=true;
  }
  cartadd() {
    let data = {
      bookid:this.Book._id,
    }
    console.log(data);
    
    console.log(this.Book._id);
    this.cartservice.addtoCart(data).subscribe((result: any) => {
      console.log(result);
     
      
    })
  }
  wishlist(){
    let data={
      bookid: this.Book._id,
    }
    console.log(this.Book._id);
    this.wish.addWish(data).subscribe((result:any)=>{
      console.log(result);
    })
  }
  increment() {
    this.badgeCounter++;
    this.hideMatBadge = false;
  }
  decrement(){ 
    if(this.badgeCounter < 0)
     return;
    this.badgeCounter--;
    if(this.badgeCounter == 0){
      this.hideMatBadge = true;
    }
  }
  openSnackbar(message: any, action: any) {
    this.snackbar.open(message, action)
  }

  resetCount() {
    this.badgeCounter = 0;
    this.hideMatBadge = true;
  } 


}
