import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  name : string;
  description : string;
  headquarters : string;
  official_name : string;
  scope : string;
  alignment : string;
  values : string;
  goals : string;
  allies: string;
  enemies : string;
  rivals : string;
  
  constructor(
    private route: ActivatedRoute,
    private orderService: OrdersService
    ) { }

  ngOnInit(): void {
    let order_id = this.route.snapshot.params["order_id"];

    this.orderService.getOrder(order_id).subscribe( data => {
      this.name = data["order_name"];
      this.description = data["order_description"];
      this.headquarters = data["order_headquarters"];
      this.official_name = data["order_official_name"];
      this.scope = data["order_scope"];
      this.alignment = data["order_alignment"];
      this.values = data["order_values"];
      this.goals = data["order_goals"];
      this.allies = data["order_allies"];
      this.enemies = data["order_enemies"];
      this.rivals = data["order_rivals"];
    });
  }
}
