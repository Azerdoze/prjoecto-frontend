import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TraitService } from '../../services/trait.service';
import { Trait } from '../../models/trait';
import { AuthService } from '../../services/auth.service';

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
  isAdmin : any;
  success: boolean;

  constructor(
    private fb : FormBuilder,
    private traitService : TraitService,
    private authservice : AuthService
  ) { }

  ngOnInit(): void {
    this.deleteTraitForm();

    this.authservice.autoLogin();
    this.authservice.subject.subscribe( data => this.isAdmin = data.is_admin )

    this.traitService.getTraits().subscribe( data => this.traits = data );
  }

  // Form Method
  deleteTraitForm () {
    this.deleteTrait = this.fb.group ({
      chosen: ["", [Validators.required]],
      checkbox: ["", [Validators.required]]
    });
  }

  // choose Trait using select dropdown
  chooseTrait() {

    // turning the value into a string so it matches it's id
    let id = this.deleteTrait.controls.chosen.value;

    // turning it's value to the one obtained via string
    this.traitId.setValue(id, {
      onlySelf: true
    })
    
    // convert the input into the retrieved form's data
    this.GetTraitData()
  }

  // getter method to access formcontrols
  get traitId() {
    return this.deleteTrait.get('chosen');
  }

   // set input values into the ones from the obtained trait
  GetTraitData() {

    let trait_id = this.deleteTrait.controls.chosen.value

  // content generated from the data gathered from the id
    this.traitService.getTrait(trait_id).subscribe( data => {
      
    this.deleteTrait.controls.chosen.setValue(data.trait_id);
    });
  }

  DeleteTraitData() {

    let id = this.deleteTrait.controls.chosen.value;

    this.traitService.deleteTrait(id).subscribe( response => {
      // console.log(response);
      this.success = true;
      this.traitService.getTraits().subscribe( data => this.traits = data );
    });
  }

  onSubmit() {
    this.Message = "";
    if(!this.deleteTrait.valid) {
      this.Message = "Please fill in all the form correctly";
      
      // debug
      // console.log(this.deleteTrait);
    }
    else {
      this.DeleteTraitData();
      
    }
  }

}
