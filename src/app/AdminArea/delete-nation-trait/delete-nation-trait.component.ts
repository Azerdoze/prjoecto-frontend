import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TraitService } from '../../services/trait.service';
import { Trait } from '../../models/trait';

@Component({
  selector: 'app-delete-nation-trait',
  templateUrl: './delete-nation-trait.component.html',
  styleUrls: ['./delete-nation-trait.component.scss']
})
export class DeleteNationTraitComponent implements OnInit {

  traits : Trait[];
  trait : Trait | undefined;

  deleteTrait : FormGroup;
  Message: string;

  constructor(
    private fb : FormBuilder,
    private traitService : TraitService
  ) { }

  ngOnInit(): void {
    this.deleteTrait = this.fb.group ({
      checkbox: ["", [Validators.required]],
    });
    this.traitService.getTraits().subscribe( data => this.traits = data );
  }
  onSubmit() {
    this.Message = "";
    if(!this.deleteTrait.valid) {
      this.Message = "Please fill in all the form correctly";
      
      // debug
      console.log(this.deleteTrait);
    }
    else {
      this.Message = "God deleted successfully";
    }
  }

}
