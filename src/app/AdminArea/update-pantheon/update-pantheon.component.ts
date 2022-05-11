import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Pantheon } from '../../models/pantheon';
import { AuthService } from '../../services/auth.service';
import { ReligionsService } from '../../services/religions.service';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-update-pantheon',
  templateUrl: './update-pantheon.component.html',
  styleUrls: ['./update-pantheon.component.scss']
})
export class UpdatePantheonComponent implements OnInit {
  public Editor = ClassicEditor
  pantheons: Pantheon[];

  chosenPantheon : FormGroup;
  updatePantheon : FormGroup;

  isAdmin: any;

  message : string;

  success : boolean;

  constructor(
    private authservice: AuthService,
    private religionservice : ReligionsService,
    private fb : FormBuilder,
  ) { }

  ngOnInit(): void {
    this.UpdatePantheonForm();
    this.chosenPantheonForm();

    this.authservice.autoLogin();
    this.authservice.subject.subscribe( data => this.isAdmin = data.is_admin );

    this.religionservice.getPantheons().subscribe( data => this.pantheons = data );
  }
  chosenPantheonForm() {
    this.chosenPantheon = this.fb.group ({
      chosen: ["", [Validators.required]]
    });
  }

  UpdatePantheonForm() {
    this.updatePantheon = this.fb.group ({
      name: ["",[Validators.required, Validators.min(3), Validators.maxLength(40)]],
      summary: ["",[Validators.required, Validators.min(3), Validators.maxLength(200)]],
      description: ["",[Validators.required, Validators.min(3), Validators.maxLength(65535)]],
      scope: ["",[Validators.required, Validators.min(3), Validators.maxLength(40)]]
    });
  }
  // choose Pantheon using select dropdown
  choosePantheon() {

    // turning the value into a string so it matches it's id
    let idValue = this.chosenPantheon.controls.chosen.value;

    // turning it's value to the one obtained via string
    this.traitId.setValue(idValue, {
      onlySelf: true
    })
    
    // convert the input into the retrieved form's data
    this.GetTraitData()
  }

  // getter method to access formcontrols
  get traitId() {
    return this.chosenPantheon.get('chosen');
  }
  
  // set input values into the ones from the obtained trait
  GetTraitData() {

    let idValue = this.chosenPantheon.controls.chosen.value

  // content generated from the data gathered from the id
    this.religionservice.getPantheon(idValue).subscribe( data => {
      
    this.updatePantheon.controls.name.setValue(data.pantheon_name);
    this.updatePantheon.controls.summary.setValue(data.pantheon_summary);
    this.updatePantheon.controls.description.setValue(data.pantheon_description);
    this.updatePantheon.controls.scope.setValue(data.pantheon_scope);

    });
  }

  updatePantheonData(values: any) {
    let idValue = this.chosenPantheon.controls.chosen.value

    let form = new FormData();

    form.append('pantheon_name', values.name);
    form.append('pantheon_summary', values.summary);
    form.append('pantheon_description', values.description);
    form.append('pantheon_scope', values.scope);

    this.religionservice.updatePantheon(idValue,form).subscribe( response => {
      // console.log(response)
      this.success = true;
    } );
    this.religionservice.getPantheons().subscribe( data => this.pantheons = data );
  }

  onSubmit(values: any) {
    this.message = "";
    if(!this.updatePantheon.valid) {
      this.message = "Please fill in all the form entries correctly";
    }
    else {
      this.updatePantheonData(values)
    }
  }
}
