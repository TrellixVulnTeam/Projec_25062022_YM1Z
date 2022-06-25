import { ResponseModel } from './../Models/responseModel';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ResponseCode } from '../enums/responseCode';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm;
  constructor(private router:Router,private formBuilder:FormBuilder,private userServie:UserService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.email,Validators.required]],
      password:['',Validators.required]
    });
    
  }
  onSubmit()
  {

    let firstName=this.registerForm.controls["firstName"].value;
    let lastName=this.registerForm.controls["lastName"].value;
    let email=this.registerForm.controls["email"].value;
    let password=this.registerForm.controls["password"].value;
    this.userServie.register(firstName,lastName,email,password).subscribe((data:ResponseModel)=>{
       if(data.responseCode==ResponseCode.OK)
       {
        this.registerForm.controls["firstName"].setValue("");
        this.registerForm.controls["lastName"].setValue("");
        this.registerForm.controls["email"].setValue("");
        this.registerForm.controls["password"].setValue("");
        this.toastr.success("You have created account please login");
        this.router.navigate(["login"]);

       }else{
         this.toastr.error(data.dateSet[0]);
       }
     console.log("response",data);
    },error=>{
      console.log("error",error)
      this.toastr.error("Something went wrong please try again later");
    })
  }





}
