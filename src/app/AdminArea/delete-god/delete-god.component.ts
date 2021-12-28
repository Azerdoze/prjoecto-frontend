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
  god = new God();
  deleteGod : FormGroup;
  Message : string;

  constructor(
    private fb : FormBuilder,
    private religionService : ReligionsService
     ) { }

  ngOnInit(): void {
    this.deleteGod = this.fb.group ({
      checkbox: ["", [Validators.required]],
    });
    this.religionService.getGods().subscribe( data => this.gods = data );
  }
  onSubmit() {
    this.Message = "";
    if(!this.deleteGod.valid) {
      this.Message = "Please fill in all the form correctly";
      
      // debug
      console.log(this.deleteGod);
    }
    else {
      this.Message = "God deleted successfully";
    }
  }
}
