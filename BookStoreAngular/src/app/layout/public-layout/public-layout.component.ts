import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/Helper/constants';
import { IBookInfo } from 'src/app/Models/bookInfo';
import { TokenModel } from 'src/app/Models/tokenModel';
import { User } from 'src/app/Models/user';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent implements OnInit {

  bookInfos: IBookInfo[];
  
  tokenModel = new TokenModel();
  title = 'webAuth';
  constructor(private router: Router, private bookServie: BookService) {

    if (this.isUserlogin) {
      // this.router.navigate(["/user-management"]);
    }

  }
  ngOnInit(): void {
    this.getBookInfo();
    // if (this.tokenExpired) {
    //   this.getTokenByRefreshToken();
    // } 
  }
  onLogout() {
    localStorage.removeItem(Constants.USER_KEY);
    this.router.navigate(["/register"]);
  }
  get isUserlogin() {
    const user = localStorage.getItem(Constants.USER_KEY);
    return user && user.length > 0;
  }
  private tokenExpired() {
  
    let userInfo = JSON.parse(localStorage.getItem(Constants.USER_KEY));
    const expiry = (JSON.parse(atob(userInfo?.token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
  get user(): User {
    return JSON.parse(localStorage.getItem(Constants.USER_KEY)) as User;
  }
  getBookInfo() {
    this.bookServie.getBookList().subscribe(response => {
      debugger;
      this.bookInfos = response as IBookInfo[];
    }, error => {
      console.log(error);
    });
  }
  // getTokenByRefreshToken() {
  //   let userInfo = JSON.parse(localStorage.getItem(Constants.USER_KEY));
  //   this.tokenModel.accessToken=userInfo.token;
  //   this.tokenModel.refreshToken=userInfo.refreshToken;
  //   this.bookServie.getTokenByRefreshToken( this.tokenModel).subscribe(response => {
  //     debugger;
  //     this.bookInfos = response as IBookInfo[];
  //   }, error => {
  //     console.log(error);
  //   });
  // }
  // getBookInfo() {
  //   this.bookServie.getBookList().subscribe(response => {
  //     debugger;
  //     this.bookInfos = response as IBookInfo[];
  //   }, error => {
  //     console.log(error);
  //   });
  // }
  // get isAdmin(): boolean {
  //   return this.user.roles.indexOf('Admin') > -1;
  // }
  // get isUser(): boolean {
  //   return this.user.roles.indexOf('User') > -1 && !this.isAdmin;
  // }

}

