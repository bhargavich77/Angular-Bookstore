import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book/book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  booklist = []
  constructor(private getbookdata:BookService){}
  ngOnInit(): void {
    this.bookdate();
  }
  bookdate() {
    this.getbookdata.getbooks().subscribe((result: any) => {
      console.log(result);
      this.booklist = result.result;
      console.log(this.booklist);
    })
  }
  lowtohigh() {
    this.booklist = this.booklist.sort((low: any, high: any) => low.discountPrice - high.discountPrice);
    console.log(this.booklist)
  }
  hightolow() {
    this.booklist = this.booklist.sort((low: any, high: any) => high.discountPrice - low.discountPrice);
    console.log(this.booklist)
  }
  newestarrivals() {
    this.booklist.reverse();
    console.log(this.booklist)
  }
}
