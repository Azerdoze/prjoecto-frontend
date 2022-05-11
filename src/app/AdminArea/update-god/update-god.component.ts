import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { God } from '../../models/god';
import { Pantheon } from '../../models/pantheon';
import { ReligionsService } from '../../services/religions.service';

@Component({
  selector: 'app-update-god',
  templateUrl: './update-god.component.html',
  styleUrls: ['./update-god.component.scss']
})
export class UpdateGodComponent implements OnInit {

  god : God;
  selectedGod : any;
  values: any;

  pantheons : Pantheon[];
  gods : God[];

  chosenGod : FormGroup;
  updateGod : FormGroup;

  Message : string;
  success : boolean;

  constructor(
    private fb : FormBuilder,
    private religionService : ReligionsService
    ) { }

  ngOnInit(): void {
    this.ChosenGodForm();
    this.updateGodForm();

    this.religionService.getGods().subscribe( data => this.gods = data );
    this.religionService.getPantheons().subscribe( data => this.pantheons = data );
  }
  
  ChosenGodForm () {
    this.chosenGod = this.fb.group ({
      godtobechosen: ["", [Validators.required]]
    })
  }
  updateGodForm () {
    this.updateGod = this.fb.group ({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      alignment: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      domains: ["", [Validators.required]],
      mysteries: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      favweapon: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      pantheon: ["", [Validators.required]]
    });
  }

  // choose God using select dropdown
  chooseGod() {

    // turning the value into a string so it matches it's id
    let valuetobedivided = this.chosenGod.controls.godtobechosen.value;
    let godString = valuetobedivided.toString()

    // turning it's value to the one obtained via string
    this.godId.setValue(godString, {
      onlySelf: true
    })
    
    // convert the input into the retrieved form's data
    this.GetGodData()
  }
  
  // getter method to access formcontrols
  get godId() {
    return this.chosenGod.get('godtobechosen');
  }

  // set input values into the ones from the obtained god
  GetGodData() {

      let god_id = this.chosenGod.controls.godtobechosen.value

    // content generated from the data gathered from the id
      this.religionService.getGod(god_id).subscribe( data => {

      this.updateGod.controls.name.patchValue(data.god_name);
      this.updateGod.controls.alignment.setValue(data.god_alignment);
      this.updateGod.controls.domains.setValue(data.god_domains);
      this.updateGod.controls.mysteries.setValue(data.god_mysteries);
      this.updateGod.controls.favweapon.setValue(data.god_fav_weapon);
      this.updateGod.controls.pantheon.patchValue(data.pantheon_id);
      
    });
  }

  // choose Pantheon using select dropdown
  choosePantheon() {
    let valuetobedivided = this.updateGod.controls.pantheon.value;
    let newValue = valuetobedivided.toString()

    this.pantheonId.setValue(newValue, {
      onlySelf: true 
    })
  }

  // getter method to access formcontrols
  get pantheonId() {
    return this.updateGod.get('pantheon');
  }

  updateGodData(values: any) {

    let valuetobedivided = this.chosenGod.controls.godtobechosen.value;
    let godString = valuetobedivided.toString()

    let form = new FormData();

    form.append('god_name',values.name)
    form.append('god_alignment',values.alignment)
    form.append('god_domains',values.domains)
    form.append('god_mysteries',values.mysteries)
    form.append('god_fav_weapon',values.favweapon)
    form.append('pantheon_id',values.pantheon)

    this.religionService.updateGod(godString ,form).subscribe( response => {
      // console.log(response);
      this.success = true;
      this.religionService.getGods().subscribe( data => this.gods = data );
    });
  }

  onSubmit(form: any) {
    let values = form.value
    this.Message = "";
    if(!this.updateGod.valid) {
      this.Message = "Please fill in all the form correctly";
      
      // debug
      // console.log(values);
    }
    else {
      this.updateGodData(values);
    }
  }
}
