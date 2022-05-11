import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Trait } from '../../models/trait';

import { AuthService } from '../../services/auth.service';
import { TraitService } from '../../services/trait.service';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-create-nation-trait',
  templateUrl: './create-nation-trait.component.html',
  styleUrls: ['./create-nation-trait.component.scss']
})
export class CreateNationTraitComponent implements OnInit {

  public Editor = ClassicEditor

  trait = new Trait() ;
  createTrait : FormGroup;
  Message : string;
  success: boolean;
  isAdmin : any;

  constructor(
    private fb : FormBuilder,
    private traitservice : TraitService,
    private authservice: AuthService
    ) { }

  ngOnInit(): void {
    this.authservice.autoLogin();
    this.authservice.subject.subscribe( data => this.isAdmin = data.is_admin );

    this.createTraitForm();
  }

  createTraitForm () {   
    this.createTrait = this.fb.group ({
      trait_name: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(40)]],
      trait_description: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10000)]]
  });
  }
  
  CreateNationTraitData(values: any) {
    let form = new FormData();

    form.append('trait_name', values.trait_name);
    form.append('trait_description', values.trait_description);

    this.traitservice.addTrait(form).subscribe( response => {
      // console.log(response)
      this.success = true;
    } );
  }

  onSubmit(values: any) {

    this.Message = "";

    if(!this.createTrait.valid) {
      this.Message = "Please fill in all the form correctly";

    }
    else {  this.CreateNationTraitData(values)  }
  }
}
