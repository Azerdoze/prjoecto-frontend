import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Trait } from '../../models/trait';
import { TraitService } from '../../services/trait.service';

@Component({
  selector: 'app-update-nation-trait',
  templateUrl: './update-nation-trait.component.html',
  styleUrls: ['./update-nation-trait.component.scss']
})
export class UpdateNationTraitComponent implements OnInit {

  trait: Trait | undefined;
  traits : Trait[];

  chosenTrait : FormGroup;
  updateTrait : FormGroup;
  Message : string;

  constructor(
    private fb: FormBuilder,
    private traitService : TraitService
  ) { }

  ngOnInit(): void {
    this.chosenTrait = this.fb.group({
      chosen: ["", [Validators.required]]
    });
    this.updateTrait = this.fb.group ({
      trait_name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      nation_description: ["", [Validators.required]]
  });
    this.traitService.getTraits().subscribe( data => this.traits = data );
  }
  onSubmit() {
    this.Message = "";
    if(!this.updateTrait.valid) {
      this.Message = "Please fill in all the form correctly";
      
      // debug
      console.log(this.updateTrait);
    }
    else {
      this.Message = "Trait created successfully";
    }
  }

}
