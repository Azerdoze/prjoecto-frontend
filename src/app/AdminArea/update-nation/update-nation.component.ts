import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Nation } from '../../models/nationindetail';
import { NationsService } from '../../services/nations.service';

import { AuthService } from '../../services/auth.service'
import { Region } from '../../models/region';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-update-nation',
  templateUrl: './update-nation.component.html',
  styleUrls: ['./update-nation.component.scss']
})
export class UpdateNationComponent implements OnInit {

  public Editor = ClassicEditor
  nations : Nation[];
  regions : Region[];

  updateNation : FormGroup;
  chosenNation : FormGroup;

  Message : string;
  isAdmin : any;
  success : boolean;



  constructor(
    private fb : FormBuilder,
    private nationService : NationsService,
    private authservice : AuthService
     ) { }

  ngOnInit(): void {
    this.updateNationForm();
    this.ChosenNationForm();

    this.authservice.autoLogin();
    this.authservice.subject.subscribe( data => this.isAdmin = data.is_admin )

    this.nationService.getNations().subscribe( data => this.nations = data );
    this.nationService.getRegions().subscribe( data => this.regions = data );
  }

  ChosenNationForm () {
    this.chosenNation = this.fb.group ({
      chosen: ["", [Validators.required]]
    })
  }
  
  updateNationForm() {
    this.updateNation = this.fb.group ({
      region: ["", [Validators.required]],
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      summary: ["", [Validators.required, Validators.maxLength(255)]],
      description: ["", [Validators.required, Validators.maxLength(65535)]],
      hub: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      hub_description: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(65535)]],
      belongs: [null]
  });
  }

  // choose Nation using select dropdown
  chooseNation() {

    // turning the value into a string so it matches it's id
    let valuetobedivided = this.chosenNation.controls.chosen.value;
    let NationString = valuetobedivided.toString()

    // turning it's value to the one obtained via string
    this.NationId.setValue(NationString, {
      onlySelf: true
    })
    
    // convert the input into the retrieved form's data
    this.GetNationData()
  }
  
  // getter method to access formcontrols
  get NationId() {
    return this.chosenNation.get('chosen');
  }

  // set input values into the ones from the obtained Nation
  GetNationData() {

      let id = this.chosenNation.controls.chosen.value

    // content generated from the data gathered from the id
      this.nationService.getNation(id).subscribe( data => {
      
      this.updateNation.controls.region.patchValue(data.region_id);
      this.updateNation.controls.name.patchValue(data.nation_name);
      this.updateNation.controls.summary.patchValue(data.nation_summary);
      this.updateNation.controls.description.patchValue(data.nation_description);
      this.updateNation.controls.hub.patchValue(data.nation_hub);
      this.updateNation.controls.hub_description.patchValue(data.nation_hub_description);
      this.updateNation.controls.belongs.patchValue(data.belongs_to);
      
    });
  }

  // choose Region using select dropdown
  chooseRegion() {
    let regionId = this.updateNation.controls.region.value;

    this.Id.setValue(regionId, {
      onlySelf: true 
    })
  }

  // getter method to access formcontrols
  get Id() {
    return this.updateNation.get('region');
  }

  updateNationData(values: any) {

    let id = this.chosenNation.controls.chosen.value;

    let form = new FormData();

    form.append('nation_id',this.chosenNation.controls.chosen.value)
    form.append('region_id',values.region)
    form.append('nation_name',values.name)
    form.append('nation_summary',values.summary)
    form.append('nation_description',values.description)
    form.append('nation_hub',values.hub)
    form.append('nation_hub_description',values.hub_description)
    form.append('belongs_to',values.belongs)


    this.nationService.updateNation(id ,form).subscribe( response => {
      // console.log(response);
      this.success = true;
      this.nationService.getNations().subscribe( data => this.nations = data );
    });
  }

  onSubmit(values: any) {
    this.Message = "";
    if(!this.updateNation.valid) {
      this.Message = "Please fill in all the form correctly";
      
      // debug
      // console.log(values);
    }
    else {
      this.updateNationData(values);
    }
  }
}
