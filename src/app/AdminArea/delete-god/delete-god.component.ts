import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { God } from '../../models/god';
import { ReligionsService } from '../../services/religions.service';

@Component({
  selector: 'app-delete-god',
  templateUrl: './delete-god.component.html',
  styleUrls: ['./delete-god.component.scss']
})
export class DeleteGodComponent implements OnInit {

  gods : God[];

  deleteGod : FormGroup;
  Message : string;

  success: boolean;

  constructor(
    private fb : FormBuilder,
    private religionService : ReligionsService
     ) { }

  ngOnInit(): void {
    this.deleteGodForm()
    this.religionService.getGods().subscribe( data => this.gods = data );
  }

  // Form Method
  deleteGodForm() {
    this.deleteGod = this.fb.group ({
      chosen: ["", [Validators.required]],
      checkbox: ["", [Validators.required]]
    });
  }

  // choose Trait using select dropdown
  chooseGod() {
    // turning the value into a string so it matches it's id
    let id = this.deleteGod.controls.chosen.value;

    // turning it's value to the one obtained via string
    this.godId.setValue(id, {
      onlySelf: true
    })
  }

  // getter method to access formcontrols
  get godId() {
    return this.deleteGod.get('chosen');
  }

  DeleteTraitData() {

    let id = this.deleteGod.controls.chosen.value;

    this.religionService.deleteGod(id).subscribe( response => {
      // console.log(response);
      this.success = true;
    });
  }

  onSubmit() {
    this.Message = "";
    if(!this.deleteGod.valid) {
      this.Message = "Please fill in all the form correctly";
      
      // debug
      // console.log(this.deleteGod);
    }
    else {
      this.DeleteTraitData()
      this.religionService.getGods().subscribe( data => this.gods = data );
    }
  }
}
