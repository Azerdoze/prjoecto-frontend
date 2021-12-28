import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

import { Pantheon } from '../../models/pantheon';
import { ReligionsService } from '../../services/religions.service';

@Component({
  selector: 'app-delete-pantheon',
  templateUrl: './delete-pantheon.component.html',
  styleUrls: ['./delete-pantheon.component.scss']
})
export class DeletePantheonComponent implements OnInit {

  pantheons : Pantheon[];
  pantheon : Pantheon | undefined;

  deletePantheon : FormGroup;
  message : string;

  constructor(
    private fb : FormBuilder,
    private religionService : ReligionsService
  ) { }

  ngOnInit(): void {
    this.deletePantheon = this.fb.group ({
      checkbox: ["", [Validators.required]],
    });
    this.religionService.getPantheons().subscribe( data => this.pantheons = data );
  }
  onSubmit() {
    this.message = "";
    if(!this.deletePantheon.valid) {
      this.message = "Please fill in all the form correctly";
      
      // debug
      console.log(this.deletePantheon);
    }
    else {
      this.message = "God deleted successfully";
    }
  }

}
