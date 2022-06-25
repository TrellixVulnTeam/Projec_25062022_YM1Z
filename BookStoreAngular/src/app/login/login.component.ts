import { ResponseModel } from './../Models/responseModel';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from '../Helper/constants';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { User } from '../Models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean = true;
  @BlockUI('main-loader') blockUI: NgBlockUI;
  public loginForm = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required]
  })
  constructor(private formBuilder: FormBuilder, private userServie: UserService, private router: Router) { }

  ngOnInit(): void {
    debugger
    if (this.isUserlogin) {
      this.isLoggedIn=false;
    } else {
      this.isLoggedIn=true;
    }
   
  }
  onSubmit() {
    console.log("on submit")
    this.blockUI.start();
    let email = this.loginForm.controls["email"].value;
    let password = this.loginForm.controls["password"].value;
    this.userServie.login(email, password).subscribe((data: ResponseModel) => {
debugger;
      if (data.responseCode == 1) {
        localStorage.setItem(Constants.USER_KEY, JSON.stringify(data.dateSet));
        let user = data.dateSet as User;
         //this.router.navigate(["/publicLayout"]);
        this.isLoggedIn=false;
      }
      this.blockUI.stop();
      console.log("response", data);
    }, error => {
      this.blockUI.stop();
      console.log("error", error);
      this.isLoggedIn=true;
    })
  }
  get isUserlogin() {
    const user = localStorage.getItem(Constants.USER_KEY);
    return user && user.length > 0;
  }
}
