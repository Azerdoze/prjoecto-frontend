import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { God } from '../../models/god';
import { Pantheon } from '../../models/pantheon';
import { ReligionsService } from '../../services/religions.service';

@Component({
  selector: 'app-create-god',
  templateUrl: './create-god.component.html',
  styleUrls: ['./create-god.component.scss']
})
export class CreateGodComponent implements OnInit {

  pantheons : Pantheon[];
  pantheon : Pantheon | undefined;

  god = new God();
  createGod : FormGroup;
  Message : string;

  constructor(
     private fb : FormBuilder,
     private religionService : ReligionsService ) { }

  ngOnInit(): void {
    this.createGod = this.fb.group ({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      aligment: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      domains: ["", [Validators.required]],
      mysteries: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      favweapon: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
    });
    this.religionService.getPantheons().subscribe( data => this.pantheons = data );

  }

  onSubmit() {
    this.Message = "";
    if(!this.createGod.valid) {
      this.Message = "Please fill in all the form correctly";
      
      // debug
      console.log(this.createGod);
    }
    else {
      this.Message = "God created successfully";
    }
  }
}
