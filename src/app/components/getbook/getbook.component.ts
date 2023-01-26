import { Component,OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book/book.service';
import { DataService } from "../../service/data.service";
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-getbook',
  templateUrl: './getbook.component.html',
  styleUrls: ['./getbook.component.scss']
})
export class GetbookComponent implements OnInit{
  bookData:any;
  bookName:any;
  message:any; 
  Search='';
  page:number=1;
  totalLength:any;
  
  // subscription: Subscription;
constructor(private data:BookService,private dataservice:DataService,private router:Router){}
 
ngOnInit(): void {
 this.dataservice.getbooks.subscribe((res:any) => {
  console.log(res)
  this.Search=res;
 })
    this.getallbooks()
  }
  getallbooks(){
    this.data.getbooks().subscribe((res:any)=>{
      this.bookData=res.result;
      
      console.log(res)
      console.log(this.bookData)
      console.log(this.bookData.length)
    })
    
  }
  onclick(book:any){
    this.dataservice.sendbookdetails(book)
    this.router.navigateByUrl('/home/Openbook')
  }
  // bookdate() {
  //   this.bookData.getbooks().subscribe((result: any) => {
  //     console.log(result);
  //     this.booklist = result.result;
  //     console.log(this.booklist);
  //   })
  // }
  lowtohigh() {
    this.bookData = this.bookData.sort((low: any, high: any) => low.discountPrice - high.discountPrice);
    console.log(this.bookData)
  }
  hightolow() {
    this.bookData = this.bookData.sort((low: any, high: any) => high.discountPrice - low.discountPrice);
    console.log(this.bookData)
  }
  newestarrivals() {
    this.bookData.reverse();
    console.log(this.bookData)
  }
}
