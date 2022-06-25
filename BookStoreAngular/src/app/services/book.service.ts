import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../Models/responseModel';
import {map} from 'rxjs/operators'
import { ResponseCode } from '../enums/responseCode';
import { User } from '../Models/user';
import { Constants } from '../Helper/constants';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient:HttpClient,private toastr: ToastrService) { }

  getBookList() {
      return this.httpClient.get(Constants.BASE_URL + 'book/getBookList');
  }
  // getTokenByRefreshToken(tokenModel:any) {
  //     return this.httpClient.post(Constants.BASE_URL + 'book/getBookList',tokenModel);
  // }
   

}
