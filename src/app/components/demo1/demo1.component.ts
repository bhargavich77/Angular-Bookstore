import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component {
  constructor(private user:UserService){}
submit(){
  let data={
    email:'saragadam.neeraja@bridgelabz.com',
    password:'Pass@123'
  }
  return this.user.login(data).subscribe((res:any)=>{
    console.log(res)
    console.log(data)
  })
}
}
