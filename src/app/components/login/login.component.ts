import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm!:FormGroup;
  submitted=false;
  token:any;
  constructor(private formBuilder:FormBuilder,private user:UserService,private router:Router){}
  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
    })
  }
  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid){
      return;
    }else{
      console.log("form is valid",this.registerForm.value)
      let signindata={
        email:this.registerForm.value.email,
        password:this.registerForm.value.password,
      }
      this.user.login(signindata).subscribe((res:any)=>{
        console.log(res);
        localStorage.setItem('token',res.result.accessToken)
        console.log(res.result.accessToken)
        this.router.navigateByUrl('/home/dashboard')
      })
    }
  //   this.submitted = true;

  //   if (this.registerForm.valid) {
  //     //if(radio for admin else user)
  //     console.log("admin login successfully");
  //     let payload = {
  //       email: this.registerForm.value.email,
  //       password: this.registerForm.value.password,
  //     }
  //     this.user.login(payload).subscribe((response: any) => {
  //       console.log(response);
  //       localStorage.setItem('token',response.result.accessToken)
  //     }
  //     )
  // }
  }
}
