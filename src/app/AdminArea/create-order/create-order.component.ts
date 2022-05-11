import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Orders } from '../../models/orders';
import { AuthService } from '../../services/auth.service';
import { OrdersService } from '../../services/orders.service';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  public Editor = ClassicEditor
  isAdmin: any;

  isSubmitted = false;

  createOrder: FormGroup;

  order = new Orders();

  Message: string;

  success: boolean;

  constructor(
    private fb : FormBuilder,
    private orderservice : OrdersService,
    private authservice : AuthService
  ) { }

  ngOnInit(): void {
    this.authservice.autoLogin();
    this.authservice.subject.subscribe( data => this.isAdmin = data.is_admin );

    this.createOrderForm();
  }

  createOrderForm() {
    this.createOrder = this.fb.group ({
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

  createOrderData(values: any) {
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
    
    this.orderservice.addOrder(form).subscribe( response => {
      // console.log(response);
      this.success = true;
    });
  }

  onSubmit(values:any) {
    this.Message = "";

    if(!this.createOrder.valid) {
      this.Message = "Please fill all the form inputs correctly";
    }
    else { 
      this.createOrderData(values )
      this.  isSubmitted = true;
    }
  }

}
