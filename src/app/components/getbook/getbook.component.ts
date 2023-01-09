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
      // console.log(res)
      console.log(this.bookData)
    })
    
  }
  onclick(book:any){
    this.dataservice.sendbookdetails(book)
    this.router.navigateByUrl('/home/Openbook')
  }

}
