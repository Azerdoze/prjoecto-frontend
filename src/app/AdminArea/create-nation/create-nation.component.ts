import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Nation } from '../../models/nationindetail';

import { Region } from '../../models/region';
import { NationsService } from '../../services/nations.service';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-create-nation',
  templateUrl: './create-nation.component.html',
  styleUrls: ['./create-nation.component.scss']
})
export class CreateNationComponent implements OnInit {

  public Editor = ClassicEditor

  regions: Region[];
  nations: Nation[]

  nation = new Nation();
  createNation : FormGroup;
  Message : string;
  success : boolean;
  
  constructor(
    private fb : FormBuilder,
    private nationservice : NationsService
  ) { }

  ngOnInit(): void {
    this.createNationForm();
    this.nationservice.getRegions().subscribe( data => this.regions = data );
    this.nationservice.getNations().subscribe( data => this.nations = data );
  }
  createNationForm () {
    this.createNation = this.fb.group ({
      region: ["", [Validators.required]],
      code: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      summary: ["", [Validators.required, Validators.maxLength(65535)]],
      description: ["", [Validators.required, Validators.maxLength(65535)]],
      hub: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      hub_description: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(65535)]],
      belongs: [null]
  });
  }
  // choose Region using select dropdown
  chooseRegion(event) {

    let valuetobedivided = this.createNation.controls.region.value;

    this.regionId.setValue(valuetobedivided, {
      onlySelf: true
    })
  }

  // getter method to access formcontrols
  get regionId() {
    return this.createNation.get('region');
  }

  // choose Nation using select dropdown
  chooseNation(event) {

    let valuetobedivided = this.createNation.controls.belongs.value;
    let newValue = valuetobedivided.toString()

    this.Id.setValue(newValue, {
      onlySelf: true
    })
  }

  // getter method to access formcontrols
  get Id() {
    return this.createNation.get('belongs');
  }

  createNationData (values: any) {
    let form = new FormData();

    form.append('region_id', values.region)
    form.append('nation_id', values.code)
    form.append('nation_name', values.name)
    form.append('nation_summary', values.summary)
    form.append('nation_description', values.description)
    form.append('nation_hub', values.hub)
    form.append('nation_hub_description', values.hub_description)

    if (values.belongs === undefined) {
      form.append('belongs_to',null)
    }
    else {
      form.append('belongs_to', values.belongs)
    }

    this.nationservice.addNation(form).subscribe ( response => {
      
      this.success = true;
    })

  }

  onSubmit(values: any) {
    this.Message = "";
    if(!this.createNation.valid) {
      this.Message = "Please fill in all the form correctly";
    }
    else {
      this.createNationData(values)
    }
  }
}
