import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Pantheon } from '../../models/pantheon';
import { ReligionsService } from '../../services/religions.service';

@Component({
  selector: 'app-update-pantheon',
  templateUrl: './update-pantheon.component.html',
  styleUrls: ['./update-pantheon.component.scss']
})
export class UpdatePantheonComponent implements OnInit {

  pantheons: Pantheon[];
  pantheon: Pantheon | undefined;

  chosenPantheon : FormGroup;
  updatePantheon : FormGroup;

  message : string;

  constructor(
    private religionservice : ReligionsService,
    private fb : FormBuilder,
  ) { }

  ngOnInit(): void {
    this.updatePantheon = this.fb.group ({
      pantheon_name: ["",[Validators.required, Validators.min(3), Validators.maxLength(40)]],
      pantheon_summary: ["",[Validators.required, Validators.min(3), Validators.maxLength(200)]],
      pantheon_description: ["",[Validators.required, Validators.min(3), Validators.maxLength(10000)]],
      pantheon_scope: ["",[Validators.required, Validators.min(3), Validators.maxLength(40)]]
    });
    this.chosenPantheon = this.fb.group ({
      select: ["", [Validators.required]]
    });
    this.religionservice.getPantheons().subscribe( data => this.pantheons = data );

  }

  onSubmit() {
    this.message = "";
    if(!this.updatePantheon.valid) {
      this.message = "Please fill in all the form inputs correctly";
    }
    else {
      this.message = "Pantheon updated successfully";
    }
  }

}
