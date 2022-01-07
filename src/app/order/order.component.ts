import { Component, OnInit } from '@angular/core';
import { NavigationStart, ActivatedRoute, Router } from '@angular/router';

import { Orders } from '../models/orders';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  order: Orders | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrdersService
    ) { }

  ngOnInit(): void {

    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        const order_id = +event.url.split("/").pop();
        
        this.orderService.getOrder(order_id).subscribe( data => this.order = data);
      }
    })
    const order_id = +this.route.snapshot.paramMap.get("code");
    this.orderService.getOrder(order_id).subscribe( data => this.order = data);
  }
}
