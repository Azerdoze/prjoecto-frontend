import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';

import { Orders } from '../models/orders';

// import { DummyOrders } from '../dummyDB/dummyOrders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  dbLink = "?"

  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     "Content-Type":"application/json"
  //   })

  // };

  constructor( private http: HttpClient ) { }

  getOrders(): Observable<Orders[]> {

    // return of(DummyOrders);

    return this.http.get < Orders[] > ( this.dbLink + "?get");
  }
  
  getOrder(order_id: number): Observable<Orders> {

    // return of(DummyOrders.find( order => order.code == orderCode));

    return this.http.post < Orders > (this.dbLink) + "?get&order_id=" + order_id;
  }

  // addOrder(order: Orders) {
  //   return this.http.post < Orders > ( this.dbLink + "?add", order, this.httpOptions);
  // }
}
