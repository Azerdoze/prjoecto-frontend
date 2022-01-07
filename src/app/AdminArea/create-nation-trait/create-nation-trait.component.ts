import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Trait } from '../../models/trait';
import { TraitService } from '../../services/trait.service';

@Component({
  selector: 'app-create-nation-trait',
  templateUrl: './create-nation-trait.component.html',
  styleUrls: ['./create-nation-trait.component.scss']
})
export class CreateNationTraitComponent implements OnInit {

  trait = new Trait() ;
  createTrait : FormGroup;
  Message : string;
  values : any;

  constructor(
    private fb : FormBuilder,
    private traitservice : TraitService
    ) { }

  ngOnInit(): void {
    this.createTrait = this.fb.group ({
      trait_name: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(40)]],
      trait_description: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10000)]]
  });
  }
  onSubmit() {
    this.Message = "";
    if(!this.createTrait.valid) {
      this.Message = "Please fill in all the form correctly";
      
      // debug
      // console.log(this.createTrait);
    }
    else {
      // acquire data from form
      let formData = new FormData();

      formData.append('trait_name', this.values.trait_name);
      formData.append('trait_description', this.values.trait_description);

      this.traitservice.addTrait(new Trait).subscribe( data => this.trait = data );
      this.Message = "Trait created successfully";
    }
  }
}
