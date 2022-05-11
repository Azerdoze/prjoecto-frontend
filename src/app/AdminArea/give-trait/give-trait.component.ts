import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NationsService } from '../../services/nations.service';
import { AuthService } from '../../services/auth.service';
import { TraitService } from '../../services/trait.service';

import { Nation } from '../../models/nationindetail';
import { Trait } from '../../models/trait';

@Component({
  selector: 'app-give-trait',
  templateUrl: './give-trait.component.html',
  styleUrls: ['./give-trait.component.scss']
})
export class GiveTraitComponent implements OnInit {

  traitToNation: FormGroup

  nations : Nation[];
  nationtraits : any [];
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
    this.traitService.getTraits().subscribe ( data => this.traits = data )
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
  giveData(values: any) {
    let form = new FormData();
    form.append('nation_id', values.chosenN);
    form.append('trait_id', values.chosenT);
    this.traitService.giveTraittoNation(form).subscribe( response => {
      // console.log(response);
      this.success = true;
      this.traitToNation.reset();
    });
  }
  onSubmit(values: any) {
    
    this.Message = "";
    if(!this.traitToNation.valid) {
      this.Message = "Please fill in all the form correctly";
      
    }
    else {
      this.giveData(values)
    }
  }
}
