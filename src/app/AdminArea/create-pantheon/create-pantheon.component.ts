import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Pantheon } from '../../models/pantheon';
import { AuthService } from '../../services/auth.service';
import { ReligionsService } from '../../services/religions.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-create-pantheon',
  templateUrl: './create-pantheon.component.html',
  styleUrls: ['./create-pantheon.component.scss']
})
export class CreatePantheonComponent implements OnInit {

  public Editor = ClassicEditor
  pantheon = new Pantheon();
  createPantheon : FormGroup;
  message : string;
  isAdmin: any;

  success: boolean;

  constructor(
    private fb: FormBuilder,
    private religionService : ReligionsService,
    private authservice: AuthService
  ) { }

  ngOnInit(): void {
    this.CreatePantheonForm();

    this.authservice.autoLogin();
    this.authservice.subject.subscribe( data => this.isAdmin = data.is_admin );
  }

  CreatePantheonForm() {
    this.createPantheon = this.fb.group ({
      name : ["", [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      summary : ["", [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      description : ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10000)]],
      scope : ["", [Validators.required, Validators.minLength(3), Validators.maxLength(40)]]
    })
  }

  CreatePantheonData(values: any) {
    let form = new FormData();

    form.append('pantheon_name', values.name);
    form.append('pantheon_summary', values.summary);
    form.append('pantheon_description', values.description);
    form.append('pantheon_scope', values.scope);

    this.religionService.addPantheon(form).subscribe( response => {
      // console.log(response)
      this.success = true;
    } );
  }

  onSubmit(values: any) {
    this.message = "";
    if(!this.createPantheon.valid) {
      this.message = "Please fill in all the form entries correctly";
    }
    else {
      this.CreatePantheonData(values)
    }
  }
}
