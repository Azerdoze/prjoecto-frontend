import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { God } from '../../models/god';

@Component({
  selector: 'app-update-god',
  templateUrl: './update-god.component.html',
  styleUrls: ['./update-god.component.scss']
})
export class UpdateGodComponent implements OnInit {
  
  god = new God();
  updateGod : FormGroup;
  errorMessage : string;

  constructor( private fb : FormBuilder ) { }

  ngOnInit(): void {
    this.updateGod = this.fb.group ({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      aligment: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      domains: ["", [Validators.required]],
      mysteries: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      favweapon: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
    });
  }

  onSubmit() {
    this.errorMessage = "";
    if(!this.updateGod.valid) {
      this.errorMessage = "Please fill in all the form correctly";
      
      // debug
      console.log(this.updateGod);
    }
  }
}
