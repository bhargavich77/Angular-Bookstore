import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  registerForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, private user:UserService){}
ngOnInit(): void {
  this.registerForm=this.formBuilder.group({
    // budget: [null, [Validators.required, Validators.min(1)]]
    fullName:['',[Validators.required]],
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]],
    phone:['',[Validators.required,Validators.minLength(10)]]
  });
}
onSubmit(){
  if(this.registerForm.invalid){
    return;
  }else{
    console.log("form is valid", this.registerForm.value)
    let signupdata={
      fullName:this.registerForm.value.fullName,
      email:this.registerForm.value.email,
      password:this.registerForm.value.password,
      phone:this.registerForm.value.phone,
      service:"advanced"
    
    }
    this.user.register(signupdata).subscribe((res:any)=>{
      console.log(res);
    })
  }
}
}
