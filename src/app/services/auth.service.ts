import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

import { Login } from "../models/login";
import { User } from '../models/users';

interface AuthData {
  JWT:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  UserDBLink = "http://localhost/backend/users";
  loginDBlink = "http://localhost/backend/login";
  
  subject = new BehaviorSubject<User>(null);
  public user: Observable<User>;

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type":"application/json"
    })
  };

  constructor(
    private http: HttpClient,
    private JWT: JwtHelperService,
    private router: Router
  ) { 
    
    }

  public get userValue(): User {
    return this.subject.value;
  }

  handleAuth(JWToken:any){
    localStorage.setItem("authToken", JSON.stringify(JWToken));
  
    // using JWTHelper
    const JWT = this.JWT.decodeToken(localStorage.getItem('authToken'));
    console.log(JWT);

    const newUser = new User(
      JWT.user_id,
      JWT.user_name,
      JWT.user_email,
      JWT.user_password,
      JWT.user_country,
      JWT.user_city,
      JWT.is_admin,
      JWToken
    );

    this.subject.next(newUser);
  }

  private token: string;
  // Authentication
  login (data:any) {
    let object = {};
    data.forEach((value, key) => object[key] = value);

    let jsonConverted = JSON.stringify(object);
    
    console.log(jsonConverted);

    return this.http.post<AuthData>(this.loginDBlink, jsonConverted)
    .pipe(tap( response => this.handleAuth(response)));
  }
  
  autoLogin() {
    let JWToken = localStorage.getItem('authToken');

    if(JWToken.length <- 0) {
      this.router.navigate(['']);
    }
  
    let userData: {
      user_id: number,
      user_name: string,
      user_email: string,
      user_password: string,
      user_country: string,
      user_city: string,
      is_admin: boolean,
      JWToken: string
    } = this.JWT.decodeToken(localStorage.getItem('authToken'));
  
    if(!userData) {
      return 0;
    };

    let loadedUser = new User(
      userData.user_id,
      userData.user_name,
      userData.user_email,
      userData.user_password,
      userData.user_country,
      userData.user_city,
      userData.is_admin,
      JWToken
    );

    this.subject.next(loadedUser);
    
    // console.log(loadedUser);
    
    return loadedUser;
  }

  logout () {
    localStorage.removeItem('user');
    this.subject.next(null);
  }

  // User CRUD
  getUsers () {

  }

  getUser(id: string) {
    return this.http.get<User>( this.UserDBLink + "/" + id);
  }

  createUser(user: User) {
      return this.http.post < User > ( this.UserDBLink , user, this.httpOptions);
  }

  updateUser() {
  }
}
