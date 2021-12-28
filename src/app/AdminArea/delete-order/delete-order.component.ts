import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Orders } from '../../models/orders';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-delete-order',
  templateUrl: './delete-order.component.html',
  styleUrls: ['./delete-order.component.scss']
})
export class DeleteOrderComponent implements OnInit {

  orders : Orders[];
  order : Orders | undefined;

  deleteOrder : FormGroup;
  message : string;

  constructor(
    private orderService : OrdersService,
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.deleteOrder = this.fb.group ({
      checkbox: ["", [Validators.required]],
    });
    this.orderService.getOrders().subscribe( data => this.orders = data );
  }
  onSubmit() {
    this.message = "";
    if(!this.deleteOrder.valid) {
      this.message = "Please fill in all the form correctly";
      
      // debug
      console.log(this.deleteOrder);
    }
    else {
      this.message = "God deleted successfully";
    }
  }

}
