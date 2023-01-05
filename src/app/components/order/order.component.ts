import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{
  constructor(private formBuilder: FormBuilder){}
  createForm !:FormGroup;
  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      mobilenumber: ['', Validators.required],
      fullAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    })
  }

}
