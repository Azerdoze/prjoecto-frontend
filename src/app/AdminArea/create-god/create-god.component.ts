import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { God } from '../../models/god';

@Component({
  selector: 'app-create-god',
  templateUrl: './create-god.component.html',
  styleUrls: ['./create-god.component.scss']
})
export class CreateGodComponent implements OnInit {

  god = new God();
  createGod : FormGroup;
  errorMessage : string;

  constructor( private fb : FormBuilder ) { }

  ngOnInit(): void {
    this.createGod = this.fb.group ({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      aligment: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      domains: ["", [Validators.required]],
      mysteries: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      favweapon: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
    });
  }

  onSubmit() {
    this.errorMessage = "";
    if(!this.createGod.valid) {
      this.errorMessage = "Please fill in all the form correctly";
      
      // debug
      console.log(this.createGod);
    }
  }
}
