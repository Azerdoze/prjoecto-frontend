import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

import { Pantheon } from '../../models/pantheon';
import { AuthService } from '../../services/auth.service';
import { ReligionsService } from '../../services/religions.service';

@Component({
  selector: 'app-delete-pantheon',
  templateUrl: './delete-pantheon.component.html',
  styleUrls: ['./delete-pantheon.component.scss']
})
export class DeletePantheonComponent implements OnInit {

  pantheons : Pantheon[];

  deletePantheon : FormGroup;

  message : string;
  isAdmin : any;

  success : boolean;

  constructor(
    private fb : FormBuilder,
    private religionService : ReligionsService,
    private authservice : AuthService
  ) { }

  ngOnInit(): void {
    this.deletePantheonForm();

    this.authservice.autoLogin();
    this.authservice.subject.subscribe( data => this.isAdmin = data.is_admin)

    this.religionService.getPantheons().subscribe( data => this.pantheons = data );
  }

  deletePantheonForm () {
    this.deletePantheon = this.fb.group ({
      chosen: ["", [Validators.required]],
      checkbox: ["", [Validators.required]]
    });
  }

  // choose Pantheon using select dropdown
  choosePantheon() {

    // turning the value into a string so it matches it's id
    let id = this.deletePantheon.controls.chosen.value;

    // turning it's value to the one obtained via string
    this.PantheonId.setValue(id, {
      onlySelf: true
    })
    
    // convert the input into the retrieved form's data
    this.GetPantheonData()
  }

  // getter method to access formcontrols
  get PantheonId() {
    return this.deletePantheon.get('chosen');
  }

   // set input values into the ones from the obtained trait
  GetPantheonData() {

    let pantheon_id = this.deletePantheon.controls.chosen.value

  // content generated from the data gathered from the id
    this.religionService.getPantheon(pantheon_id).subscribe( data => {
      
    this.deletePantheon.controls.chosen.setValue(data.pantheon_id);
    });
  }

  DeletePantheonData() {

    let id = this.deletePantheon.controls.chosen.value;

    this.religionService.deletePantheon(id).subscribe( response => {
      // console.log(response);
      this.success = true;
      this.religionService.getPantheons().subscribe( data => this.pantheons = data );
    });
  }

  onSubmit() {
    this.message = "";
    if(!this.deletePantheon.valid) {
      this.message = "Please fill in all the form correctly";
      
      // debug
      // console.log(this.deletePantheon);
    }
    else {
      this.DeletePantheonData();
    }
  }
}
