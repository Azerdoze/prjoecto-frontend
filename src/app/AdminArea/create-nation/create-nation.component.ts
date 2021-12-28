import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Nation } from '../../models/nationindetail';

import { Region } from '../../models/region';
import { NationsService } from '../../services/nations.service';

@Component({
  selector: 'app-create-nation',
  templateUrl: './create-nation.component.html',
  styleUrls: ['./create-nation.component.scss']
})
export class CreateNationComponent implements OnInit {

  regions: Region[];
  region: Region | undefined;
  
  nation = new Nation();
  createNation : FormGroup;
  Message : string;
  
  constructor(
    private fb : FormBuilder,
    private nationservice : NationsService
  ) { }

  ngOnInit(): void {
    this.createNation = this.fb.group ({
      nation_id: ["", [Validators.required,]],
      nation_name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      nation_summary: ["", [Validators.required]],
      nation_description: ["", [Validators.required]],
      nation_hub: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      nation_hub_description: ["", [Validators.required]]
  });
    this.nationservice.getRegions().subscribe( data => this.regions = data );
  }

  onSubmit() {
    this.Message = "";
    if(!this.createNation.valid) {
      this.Message = "Please fill in all the form correctly";
      
      // debug
      console.log(this.createNation);
    }
    else {
      this.Message = "Nation created successfully";
    }
  }
}
