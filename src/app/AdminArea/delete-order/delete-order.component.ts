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
  Message : string;
  success: boolean;

  constructor(
    private orderService : OrdersService,
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.deleteOrderForm();

    this.orderService.getOrders().subscribe( data => this.orders = data );
  }

  deleteOrderForm () {
    this.deleteOrder = this.fb.group ({
      chosen: ["", [Validators.required]],
      checkbox: ["", [Validators.required]]
    });
  }

  // choose Order using select dropdown
  chooseOrder() {

    // turning the value into a string so it matches it's id
    let id = this.deleteOrder.controls.chosen.value;

    // turning it's value to the one obtained via string
    this.orderId.setValue(id, {
      onlySelf: true
    })
    
    // convert the input into the retrieved form's data
    this.GetOrderData()
  }

  // getter method to access formcontrols
  get orderId() {
    return this.deleteOrder.get('chosen');
  }

   // set input values into the ones from the obtained trait
  GetOrderData() {

    let order_id = this.deleteOrder.controls.chosen.value

  // content generated from the data gathered from the id
    this.orderService.getOrder(order_id).subscribe( data => {
      
    this.deleteOrder.controls.chosen.setValue(data.order_id);
    });
  }

  DeleteOrderData() {

    let id = this.deleteOrder.controls.chosen.value;

    this.orderService.deleteOrder(id).subscribe( response => {
      // console.log(response);
      this.success = true;
      this.orderService.getOrders().subscribe( data => this.orders = data );
    });
  }

  onSubmit() {
    this.Message = "";
    if(!this.deleteOrder.valid) {
      this.Message = "Please fill in all the form correctly";
      
      // debug
      // console.log(this.deleteOrder);
    }
    else {
      this.DeleteOrderData();
    }
  }

}
