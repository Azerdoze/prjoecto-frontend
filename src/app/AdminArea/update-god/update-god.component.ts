import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { God } from '../../models/god';
import { ReligionsService } from '../../services/religions.service';

@Component({
  selector: 'app-update-god',
  templateUrl: './update-god.component.html',
  styleUrls: ['./update-god.component.scss']
})
export class UpdateGodComponent implements OnInit {
  
  gods : God[];
  god = new God();
  chosenGod : FormGroup;
  updateGod : FormGroup;
  Message : string;

  constructor(
    private fb : FormBuilder,
    private religionService : ReligionsService
    ) { }

  ngOnInit(): void {
    this.updateGod = this.fb.group ({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      aligment: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      domains: ["", [Validators.required]],
      mysteries: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      favweapon: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
    });
    this.updateGod = this.fb.group ({
      select: ["", [Validators.required]]
    });
    this.religionService.getGods().subscribe( data => this.gods = data );
  }

  onSubmit() {
    this.Message = "";
    if(!this.updateGod.valid) {
      this.Message = "Please fill in all the form correctly";
      
      // debug
      console.log(this.updateGod);
    }
    else {
      this.Message = "God updated successfully";
    }
  }
}
