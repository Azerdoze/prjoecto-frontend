import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  UserDBLink = "http://localhost/backend/users";
  loginDBlink = "http://localhost/backend/login";
  
  private subject : BehaviorSubject<User>;
  public user: Observable<User>;

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type":"application/json"
    })
  };

  constructor(
    private http: HttpClient
  ) { 
    this.subject = new BehaviorSubject<User>(JSON.parse
      (localStorage.getItem('user')));
      this.user = this.subject.asObservable();
    }

  public get userValue(): User {
    return this.subject.value;
  }

  // Authentication
  login (email, password) {
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

  createUser(user) {
      return this.http.post < User > ( this.UserDBLink , user, this.httpOptions);
  }

  updateUser() {
  }
}
