import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
 registerForm: any;

 constructor(private fb: FormBuilder,
  private authService: AuthService,
  private message: NzMessageService,
  private router: Router
){}

 ngOnInit(){
  this.registerForm =this.fb.group({
    email:[null, [Validators.email, Validators.required]],
    password: [null, Validators.required],
    name: [null, Validators.required]
  })
 }
 submitForm(){
  this.authService.register(this.registerForm.value).subscribe(res=>{
    if(res.id !=null){
      this.message.success("Signup successful", { nzDuration:3000});
      this.router.navigateByUrl("/");

    }else{
      this.message.error(`${res.message}`, {nzDuration:3000})
    }
  })
 }
}
