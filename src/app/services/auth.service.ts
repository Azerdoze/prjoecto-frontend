import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

import { User } from '../models/users';

interface AuthData {
  JWT:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // UserDBLink = "http://localhost/backend/users";

  // userRightsDBLink = "http://localhost/backend/userrights";

  // loginDBlink = "http://localhost/backend/login";
  UserDBLink = "https://arthan-uthyl.me.uk/backend/users";

  userRightsDBLink = "https://arthan-uthyl.me.uk/backend/userrights";

  loginDBlink = "https://arthan-uthyl.me.uk/backend/login";


  ParsedJWT;
  httpOptions;
  
  subject = new BehaviorSubject<User>(null);
  
  public user: Observable<User>;

  constructor(
    private http: HttpClient,
    private JWT: JwtHelperService,
    private router: Router
  ) { }

  public get userValue(): User {
    return this.subject.value;
  }

  // Method to get the JWT Token
  getJWT () {
    const JWTo = localStorage.getItem("authToken");

    this.ParsedJWT = JSON.parse(JWTo)["X-Auth-Token"];

    this.httpOptions = {
        headers: new HttpHeaders({
          "X-Auth-Token":this.ParsedJWT
        })
      };
  }

  handleAuth(JWToken:any){
    localStorage.setItem("authToken", JSON.stringify(JWToken));
  
    // using JWTHelper
    const JWT = this.JWT.decodeToken(localStorage.getItem('authToken'));

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

  // Authentication
  login (data:any) {
    let object = {};
    data.forEach((value, key) => object[key] = value);

    let jsonConverted = JSON.stringify(object);

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

    return loadedUser;

  }

  logout () {
    localStorage.removeItem('authToken');
    this.subject.next(null);
  }

  // User CRUD
  getUsers ():Observable<User[]> {
    return this.http.get<User[]>(this.UserDBLink);
  }

  getUser(id: number) {
    return this.http.get<User>( this.UserDBLink + "/" + id);
  }

  createUser(data: any) {

    let object = {};
    data.forEach((value, key) => object[key] = value);
    let jsonConverted = JSON.stringify(object);

      return this.http.post ( this.UserDBLink , jsonConverted);
  }

  updateUser(id: number, data: any) {
    
    const url = this.UserDBLink + "/" + id;
    
    // convert form data to JSON
    let object = {};
    data.forEach((value, key) => object[key] = value);
    let jsonConverted = JSON.stringify(object);

    return this.http.put (url, jsonConverted);
  }

  adminRights(id:any) {
    const url = this.userRightsDBLink;

    this.getJWT()

    return this.http.post(url, {user_id : id}, this.httpOptions)
  }

  deleteUser(user_id:number) {

    this.getJWT()

    return this.http.delete ( this.UserDBLink + "/" + user_id, this.httpOptions );
  }
}
