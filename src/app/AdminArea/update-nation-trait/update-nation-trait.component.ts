import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Trait } from '../../models/trait';
import { AuthService } from '../../services/auth.service';
import { TraitService } from '../../services/trait.service';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-update-nation-trait',
  templateUrl: './update-nation-trait.component.html',
  styleUrls: ['./update-nation-trait.component.scss']
})
export class UpdateNationTraitComponent implements OnInit {
  public Editor = ClassicEditor

  trait: Trait | undefined;
  traits : Trait[];

  isAdmin : any;
  
  chosenTrait : FormGroup;
  updateTrait : FormGroup;
  Message : string;

  success: boolean;

  constructor(
    private fb: FormBuilder,
    private traitService : TraitService,
    private authservice : AuthService
  ) { }

  ngOnInit(): void {
    this.chosenTraitForm();
    this.updateTraitForm();
    this.authservice.autoLogin();

    this.authservice.subject.subscribe( data => this.isAdmin = data.is_admin );

    this.traitService.getTraits().subscribe( data => this.traits = data );
  }

  chosenTraitForm() {
    this.chosenTrait = this.fb.group({
      chosen: ["", [Validators.required]]
    });
  }

  updateTraitForm() {
    this.updateTrait = this.fb.group ({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      description: ["", [Validators.required, Validators.maxLength(10000)]]
    });
  }

  // choose Trait using select dropdown
  chooseTrait() {

    // turning the value into a string so it matches it's id
    let valuetobedivided = this.chosenTrait.controls.chosen.value;

    // console.log(valuetobedivided)
    let traitString = valuetobedivided.toString()
    

    // turning it's value to the one obtained via string
    this.traitId.setValue(traitString, {
      onlySelf: true
    })
    
    // convert the input into the retrieved form's data
    this.GetTraitData()
  }

  // getter method to access formcontrols
  get traitId() {
    return this.chosenTrait.get('chosen');
  }
  
  // set input values into the ones from the obtained trait
  GetTraitData() {

    let trait_id = this.chosenTrait.controls.chosen.value

  // content generated from the data gathered from the id
    this.traitService.getTrait(trait_id).subscribe( data => {
      
    this.updateTrait.controls.name.setValue(data.trait_name);
    this.updateTrait.controls.description.setValue(data.trait_description);

    });
  }

  updateTraitData(values: any) {

    let valuetobedivided = this.chosenTrait.controls.chosen.value;
    let traitString = valuetobedivided.toString()

    let form = new FormData();

    form.append('trait_name',values.name)
    form.append('trait_description',values.description)
    
    this.traitService.updateTrait(traitString ,form).subscribe( response => {
      // console.log(response);
      this.success = true;
      this.traitService.getTraits().subscribe( data => this.traits = data );
    });
  }

  onSubmit(values: any) {
    this.Message = "";
    if(!this.updateTrait.valid) {
      this.Message = "Please fill in all the form correctly";
      
    }
    else {
      this.updateTraitData(values)
    }
  }

}
