import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Nation } from '../../models/nationindetail';
import { NationsService } from '../../services/nations.service';

@Component({
  selector: 'app-update-nation',
  templateUrl: './update-nation.component.html',
  styleUrls: ['./update-nation.component.scss']
})
export class UpdateNationComponent implements OnInit {

  nations : Nation[];
  nation = new Nation();
  chosenNation : FormGroup;
  updateNation : FormGroup;
  Message : string;

  constructor(
    private fb : FormBuilder,
    private nationService : NationsService
    ) { }

  ngOnInit(): void {
    this.updateNation = this.fb.group ({
      nation_name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      nation_summary: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      nation_description: ["", [Validators.required]],
      nation_hub: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      nation_hub_description: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
    });
    this.chosenNation = this.fb.group ({
      select: ["", [Validators.required]]
    });
    this.nationService.getNations().subscribe( data => this.nations = data );
  }

  onSubmit() {
    this.Message = "";
    if(!this.updateNation.valid) {
      this.Message = "Please fill in all the form correctly";
      
      // debug
      console.log(this.updateNation);
    }
    else {
      this.Message = "Nation updated successfully";
    }
  }

}
