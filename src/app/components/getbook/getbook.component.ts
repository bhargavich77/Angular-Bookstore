import { Component,OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book/book.service';

@Component({
  selector: 'app-getbook',
  templateUrl: './getbook.component.html',
  styleUrls: ['./getbook.component.scss']
})
export class GetbookComponent implements OnInit{
  bookData:any;
  bookName:any;
constructor(private data:BookService){}
  ngOnInit(): void {
    this.getallbooks()
  }
  getallbooks(){
    this.data.getbooks().subscribe((res:any)=>{
      this.bookData=res.result;
      // console.log(res)
      console.log(this.bookData)
    })
    
  }

}
