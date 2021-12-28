import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Trait } from '../../models/trait';

@Component({
  selector: 'app-create-nation-trait',
  templateUrl: './create-nation-trait.component.html',
  styleUrls: ['./create-nation-trait.component.scss']
})
export class CreateNationTraitComponent implements OnInit {

  trait = new Trait() ;
  createTrait : FormGroup;
  Message : string;

  constructor( private fb : FormBuilder ) { }

  ngOnInit(): void {
    this.createTrait = this.fb.group ({
      trait_name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      nation_description: ["", [Validators.required]]
  });
  }
  onSubmit() {
    this.Message = "";
    if(!this.createTrait.valid) {
      this.Message = "Please fill in all the form correctly";
      
      // debug
      console.log(this.createTrait);
    }
    else {
      this.Message = "Trait created successfully";
    }
  }
}
