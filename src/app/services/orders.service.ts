import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';

import { Orders } from '../models/orders';



@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  
  // OrdersDBLink = "http://localhost/backend/orders"
  OrdersDBLink = "http://arthan-uthyl.me.uk/backend/orders"

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

  // CRUD BELOW
  getOrders(): Observable<Orders[]> {
    return this.http.get < Orders[] > ( this.OrdersDBLink );
  }
  
  getOrder(order_id: number): Observable<Orders> {
    return this.http.get < Orders > (this.OrdersDBLink + "/" + order_id ) ;
  }

  addOrder(data: any) {

    this.getJWT();

    // convert form data to JSON
    let object = {};
    data.forEach((value, key) => object[key] = value);
    let jsonConverted = JSON.stringify(object);

    return this.http.post ( this.OrdersDBLink , jsonConverted, this.httpOptions);
  }

  updateOrder(order_id:number, data: any) {

    this.getJWT();

    // convert form data to JSON
    let object = {};
    data.forEach((value, key) => object[key] = value);
    let jsonConverted = JSON.stringify(object);

    return this.http.put ( this.OrdersDBLink + "/" + order_id, jsonConverted, this.httpOptions );
  }

  deleteOrder(order_id:number) {

    this.getJWT();

    return this.http.delete ( this.OrdersDBLink + "/" + order_id, this.httpOptions );
  }
}
