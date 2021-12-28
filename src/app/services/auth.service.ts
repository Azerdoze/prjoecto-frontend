import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UserDBLink = "http://localhost/backend/users";
  public user: Observable<User>;

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type":"application/json",
      "X-Api-Key":""
    })
  };

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    
   }

  // Authentication
  login (username, password) {
    
  }
  logout () {
    
  }

  // User CRUD
  getUsers () {

  }

  getUser() {

  }

  createUser(user) {
      return this.http.post < User > ( this.UserDBLink , user, this.httpOptions);
  }

  updateUser() {

  }
}
