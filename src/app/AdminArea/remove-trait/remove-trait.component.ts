import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NationsService } from '../../services/nations.service';
import { AuthService } from '../../services/auth.service';
import { TraitService } from '../../services/trait.service';

import { Nation } from '../../models/nationindetail';
import { Trait } from '../../models/trait';

@Component({
  selector: 'app-remove-trait',
  templateUrl: './remove-trait.component.html',
  styleUrls: ['./remove-trait.component.scss']
})
export class RemoveTraitComponent implements OnInit {


  traitToNation: FormGroup

  nations : Nation[];
  nationtraits : Trait [];
  traits : Trait[]
  isAdmin : any;
  success : boolean;

  Message: string;

  traitname : string;
  nationname : string;
  traitdesc : string;

  traitvalue : any;
  nationvalue : string;

  constructor(
    private fb : FormBuilder,
    private nationService : NationsService,
    private traitService : TraitService,
    private authservice : AuthService
  ) { }

  ngOnInit(): void {
    this.traitToNationForm();

    this.authservice.autoLogin();
    this.authservice.subject.subscribe( data => this.isAdmin = data.is_admin)

    this.nationService.getNations().subscribe ( data => this.nations = data)
    this.traitService.getTraits().subscribe ( data => {
      this.traits = data} )
  }

  traitToNationForm() {
    this.traitToNation = this.fb.group({
      chosenN: ["", [Validators.required]],
      chosenT: ["", [Validators.required]]
    });
  }

  // choose Trait using select dropdown
  chooseTrait() {

    // turning the value into a string so it matches it's id
    let trait_id_value = this.traitToNation.controls.chosenT.value;

    // turning it's value to the one obtained via string
    this.traitId.setValue(trait_id_value, {
      onlySelf: true
    })
    // convert the input into the retrieved form's data
    this.GetTraitData()
  }
  chooseNation() {

    // turning the value into a string so it matches it's id
    let nation_id_value = this.traitToNation.controls.chosenN.value;

    // turning it's value to the one obtained via string
    this.traitId.setValue(nation_id_value, {
      onlySelf: true
    })
    
    // convert the input into the retrieved form's data
    this.GetNationData()
  }

  // getter method to access formcontrols
  get traitId() {
    return this.traitToNation.get('chosenT');
  }
  get nationId() {
    return this.traitToNation.get('chosenN');
  }

    // set input values into the ones from the obtained trait
    GetTraitData() {

      let trait_id = this.traitToNation.controls.chosenT.value
      console.log(trait_id)
    // content generated from the data gathered from the id
      this.traitService.getTrait(trait_id).subscribe( data => {
        this.traitname = data.trait_name;
        this.traitdesc = data.trait_description;
      });
    }

    // set input values into the ones from the obtained nation
    GetNationData() {

      let nation_id = this.traitToNation.controls.chosenN.value
  
    // content generated from the data gathered from the id
      this.nationService.getNation(nation_id).subscribe( data => {
        this.nationname = data.nation_name
    
        this.nationtraits = data.traits;
      });
    }

    removeData( ) {

      let nation_id = this.traitToNation.controls.chosenN.value;
      let trait_id = this.traitToNation.controls.chosenT.value;

      this.traitService.removeTraitfromNation( trait_id, nation_id ).subscribe( response => {
        // console.log(response);
        this.success = true;
        this.traitToNation.reset()
      });
    }

    onSubmit() {
      this.Message = "";
      if(!this.traitToNation.valid) {
        this.Message = "Please fill in all the form correctly";
        
      }
      else {
        this.removeData()
      }
    }
}
