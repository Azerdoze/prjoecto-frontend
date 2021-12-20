import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Nation } from 'src/app/models/nationindetail';

import { Regions } from 'src/app/models/region';

import { NationsService } from 'src/app/services/nations.service';

@Component({
  selector: 'app-create-nation',
  templateUrl: './create-nation.component.html',
  styleUrls: ['./create-nation.component.scss']
})
export class CreateNationComponent implements OnInit {

  regions: Regions[] = this.nationService.getRegions();
  region: Regions | undefined;
  
  nation = new Nation();
  createNation : FormGroup;
  errorMessage : string;
  
  constructor(
    private nationService: NationsService,
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.createNation = this.fb.group ({
      nation_id: ["", [Validators.required,]],
      nation_name: ["", [Validators.required]],
      nation_summary: ["", [Validators.required]],
      nation_description: ["", [Validators.required]],
      nation_hub: ["", [Validators.required]],
      nation_hub_description: ["", [Validators.required]]
  });
  }

  onSubmit() {
    this.errorMessage = "";
    if(!this.createNation.valid) {
      this.errorMessage = "Please fill in all the form correctly";
      
      // debug
      console.log(this.createNation);
    }
  }
}
