import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { WishlistService } from 'src/app/service/wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit{
  wishlist:any=[];
  constructor(private data:DataService,private book:WishlistService,private router:Router){}
  ngOnInit(): void {
    this.getwishlistitems();
    
  }
getwishlistitems(){
  this.book.getwishlist().subscribe((result:any)=>{
    console.log(result);
    this.wishlist=result.result;
    console.log(this.wishlist)
  })
}

deleteItem(Book:any){
  console.log(Book)
  this.book.removewish(Book).subscribe((res:any)=>{
    console.log(res)
  })
}
}
