import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Orders } from '../../models/orders';
import { AuthService } from '../../services/auth.service';
import { OrdersService } from '../../services/orders.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.scss']
})
export class UpdateOrderComponent implements OnInit {
  public Editor = ClassicEditor

  isAdmin: any;

  isSubmitted = false;

  chosenOrder: FormGroup;
  updateOrder: FormGroup;

  orders : Orders[];

  Message: string;

  success: boolean;

  constructor(
    private fb : FormBuilder,
    private orderservice : OrdersService,
    private authservice : AuthService
  ) { }

  ngOnInit(): void {
    this.chosenOrderForm();
    this.updateOrderForm()
    this.authservice.autoLogin();
    this.authservice.subject.subscribe( data => this.isAdmin = data.is_admin );

    this.orderservice.getOrders().subscribe( data => this.orders = data);
  }

  chosenOrderForm () {
    this.chosenOrder = this.fb.group ({
      chosen: ["", [Validators.required]]
    })
  }

  updateOrderForm() {
    this.updateOrder = this.fb.group ({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      truename: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      summary: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
      description: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(65535)]],
      scope: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      alignment: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      headquarters: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      values: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      goals: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
      allies: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      enemies: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      rivals: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(80)]]
    })
  }

  // choose Order using select dropdown
  chooseOrder() {
    // turning the value into a string so it matches it's id
    let idValue = this.chosenOrder.controls.chosen.value;

    // turning it's value to the one obtained via string
    this.orderId.setValue(idValue, {
      onlySelf: true
    })
    
    // convert the input into the retrieved form's data
    this.GetGodData()
  }
  
  // getter method to access formcontrols
  get orderId() {
    return this.chosenOrder.get('chosen');
  }

  // set input values into the ones from the obtained Order
  GetGodData() {

    let order_id = this.chosenOrder.controls.chosen.value

    // content generated from the data gathered from the id
    this.orderservice.getOrder(order_id).subscribe( data => {

      this.updateOrder.controls.name.patchValue(data.order_name);
      this.updateOrder.controls.truename.setValue(data.order_official_name);
      this.updateOrder.controls.summary.setValue(data.order_summary);
      this.updateOrder.controls.description.setValue(data.order_description);
      this.updateOrder.controls.scope.setValue(data.order_scope);
      this.updateOrder.controls.alignment.patchValue(data.order_alignment);
      this.updateOrder.controls.headquarters.patchValue(data.order_headquarters);
      this.updateOrder.controls.values.patchValue(data.order_values);
      this.updateOrder.controls.goals.patchValue(data.order_goals);
      this.updateOrder.controls.allies.patchValue(data.order_allies);
      this.updateOrder.controls.enemies.patchValue(data.order_enemies);
      this.updateOrder.controls.rivals.patchValue(data.order_rivals);
      
    });
  }

  updateOrderData(values: any) {

    let idValue = this.chosenOrder.controls.chosen.value;

    let form = new FormData();

    form.append('order_name',values.name)
    form.append('order_official_name',values.truename)
    form.append('order_summary',values.summary)
    form.append('order_description',values.description)
    form.append('order_scope',values.scope)
    form.append('order_alignment',values.alignment)
    form.append('order_headquarters',values.headquarters)
    form.append('order_values',values.values)
    form.append('order_goals',values.goals)
    form.append('order_allies',values.allies)
    form.append('order_enemies',values.enemies)
    form.append('order_rivals',values.rivals)
    
    this.orderservice.updateOrder(idValue,form).subscribe( response => {
      // console.log(response);
      this.success = true;
    });
    this.orderservice.getOrders().subscribe( data => this.orders = data);
  }

  onSubmit(values:any) {
    this.Message = "";

    if(!this.updateOrder.valid) {
      this.Message = "Please fill all the form inputs correctly";
    }
    else { 
      this.updateOrderData(values )
      this.  isSubmitted = true;
    }
  }
}
