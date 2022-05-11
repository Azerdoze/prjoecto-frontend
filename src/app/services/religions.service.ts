import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { Pantheon } from '../models/pantheon';
import { God } from '../models/god';
@Injectable({
  providedIn: 'root'
})
export class ReligionsService {

  subject = new BehaviorSubject<God>(null);

  // pantheonDBLink = "http://localhost/backend/pantheons";
  // godsDBLink = "http://localhost/backend/gods";
  // godsByPantheonDBLink = "http://localhost/backend/godsbypantheon";
  pantheonDBLink = "http://arthan-uthyl.me.uk/backend/pantheons";
  godsDBLink = "http://arthan-uthyl.me.uk/backend/gods";
  godsByPantheonDBLink = "http://arthan-uthyl.me.uk/backend/godsbypantheon";

  ParsedJWT;
  httpOptions;

  constructor( private http: HttpClient ) { }

  // Method to get the JWT Token
  getJWT () {
    const JWT = localStorage.getItem("authToken");

    this.ParsedJWT = JSON.parse(JWT)["X-Auth-Token"];

    this.httpOptions = {
        headers: new HttpHeaders({
          "X-Auth-Token":this.ParsedJWT
        })
      };
  }

  // CRUD for Pantheons
  getPantheons(): Observable<Pantheon[]> {
    return this.http.get < Pantheon[] > ( this.pantheonDBLink );
  }
  getPantheon(pantheon_id: number): Observable<Pantheon> {
    return this.http.get < Pantheon > (this.pantheonDBLink + "/" + pantheon_id);
  }

  addPantheon( data:any ) {

    this.getJWT();

    // convert form data to JSON
    let object = {};
    data.forEach((value, key) => object[key] = value);
    let jsonConverted = JSON.stringify(object);
    
    return this.http.post ( this.pantheonDBLink, jsonConverted, this.httpOptions);
  }

  updatePantheon(pantheon_id:number, data: any) {

    this.getJWT();

    // convert form data to JSON
    let object = {};
    data.forEach((value, key) => object[key] = value);
    let jsonConverted = JSON.stringify(object);

    return this.http.put ( this.pantheonDBLink + "/" + pantheon_id, jsonConverted, this.httpOptions );
  }

  deletePantheon(pantheon_id:number) {

    this.getJWT();
    
    return this.http.delete ( this.pantheonDBLink + "/" + pantheon_id, this.httpOptions);
  }


// CRUD for GODS

  getGods(): Observable<God[]> {
    return this.http.get < God[] > ( this.godsDBLink );
  }

  getGodsByPantheon(pantheon_id:any): Observable<God[]> {
    return this.http.get < God[] > ( this.godsByPantheonDBLink + "/" + pantheon_id);
  }

  getGod(god_id: any): Observable<God> {
    return this.http.get < God > (this.godsDBLink + "/" + god_id);
  }
  
  addGod( data:any ) {

    this.getJWT();

    // convert form data to JSON
    let object = {};
    data.forEach((value, key) => object[key] = value);
    let jsonConverted = JSON.stringify(object);
    
    return this.http.post ( this.godsDBLink, jsonConverted, this.httpOptions);
  }

  updateGod(id: number, data: any) {

    this.getJWT();

    const url = this.godsDBLink + "/" + id;
    
    // convert form data to JSON
    let object = {};
    data.forEach((value, key) => object[key] = value);
    let jsonConverted = JSON.stringify(object);

    return this.http.put ( url, jsonConverted, this.httpOptions );
  }

  // NOT WORKING!

  deleteGod (god_id:number) {

    this.getJWT();

    return this.http.delete ( this.godsDBLink + "/" + god_id, this.httpOptions );
  }
}
