import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';

import { Orders } from '../models/orders';

// import { DummyOrders } from '../dummyDB/dummyOrders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  OrdersDBLink = "http://localhost/backend/orders"

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type":"application/json"
    })

  };

  constructor( private http: HttpClient ) { }

  getOrders(): Observable<Orders[]> {
    return this.http.get < Orders[] > ( this.OrdersDBLink );
  }
  
  getOrder(order_id: number): Observable<Orders> {
    return this.http.get < Orders > (this.OrdersDBLink + "/" + order_id ) ;
  }

  addOrder(order: Orders) {
    return this.http.post < Orders > ( this.OrdersDBLink , order, this.httpOptions);
  }

  updateOrder(order_id:number): Observable<Orders> {
    return this.http.put <Orders> ( this.OrdersDBLink + "/" + order_id, this.httpOptions );
  }

  deleteOrder(order_id:number): Observable<Orders> {
    return this.http.delete <Orders> ( this.OrdersDBLink + "/" + order_id, this.httpOptions );
  }
}
