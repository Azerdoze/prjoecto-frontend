import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { User } from '../../models/users';
import { God } from '../../models/god';
import { Pantheon } from '../../models/pantheon';

import { AuthService } from '../../services/auth.service';
import { ReligionsService } from '../../services/religions.service';

@Component({
  selector: 'app-create-god',
  templateUrl: './create-god.component.html',
  styleUrls: ['./create-god.component.scss']
})
export class CreateGodComponent implements OnInit {

  pantheons : Pantheon[];
  isSubmitted = false;
  god = new God();
  createGod : FormGroup;
  success: boolean;
  Message: string;

  isAdmin : any;

  constructor(
     private fb : FormBuilder,
     private religionService : ReligionsService,
     private authservice: AuthService,
      ) { }

  ngOnInit(): void {
    this.authservice.autoLogin();
    this.authservice.subject.subscribe( data => this.isAdmin = data.is_admin );

    this.createGodForm();
    this.religionService.getPantheons().subscribe( data => this.pantheons = data );
    
  }

  createGodForm() {
      this.createGod = this.fb.group ({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      alignment: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      domains: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
      mysteries: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      favweapon: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      pantheon: ["", [Validators.required]]
    });
  }
  // choose Pantheon using select dropdown
  choosePantheon(event) {
    this.pantheonId.setValue(event.target.value, {
      onlySelf: true
    })
  }

  // getter method to access formcontrols
  get pantheonId() {
    return this.createGod.get('pantheon');
  }

  createGodData(values: any) {
    let form = new FormData();

    form.append('god_name',values.name)
    form.append('god_alignment',values.aligment)
    form.append('god_domains',values.domains)
    form.append('god_mysteries',values.mysteries)
    form.append('god_fav_weapon',values.favweapon)
    form.append('pantheon_id',values.pantheon)
    
    this.religionService.addGod(form).subscribe( response => {
      // console.log(response);
      this.success = true;
    });
  }

  onSubmit(values : any) {
    this.Message = "";
    
    if(!this.createGod.valid) {
      this.Message = "Please fill all the form inputs correctly";
    }
    else { 
      this.createGodData(values) 
      this.isSubmitted = true;
    }
  }
}
