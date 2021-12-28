import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Pantheon } from '../../models/pantheon';
import { ReligionsService } from '../../services/religions.service';

@Component({
  selector: 'app-create-pantheon',
  templateUrl: './create-pantheon.component.html',
  styleUrls: ['./create-pantheon.component.scss']
})
export class CreatePantheonComponent implements OnInit {

  pantheon = new Pantheon();
  createPantheon : FormGroup;
  message : string;

  constructor(
    private fb: FormBuilder,
    private religionService : ReligionsService
  ) { }

  ngOnInit(): void {
    this.createPantheon = this.fb.group ({
      pantheon_name : ["", [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      pantheon_summary : ["", [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      pantheon_description : ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10000)]],
      pantheon_scope : ["", [Validators.required, Validators.minLength(3), Validators.maxLength(40)]]
    })
  }

  onSubmit() {
    this.message = "";
    if(!this.createPantheon.valid) {
      this.message = "Please fill in all the form entries correctly";
    }
    else {
      this.message = "Pantheon created Successfully";
    }
  }
}
