import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';

import { User } from '../models/users';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.scss']
})
export class UserAreaComponent implements OnInit {

  subject = new BehaviorSubject<User>(null);

  updateUser : FormGroup;
  userConnected : any;
  error : string;
  success : boolean;

  constructor( 
    private fb : FormBuilder,
    private authservice: AuthService ) { }

  ngOnInit(): void {
    // to check if there is a user already logged (grabbing the token)
    this.authservice.autoLogin();
    // to load the validations from the existing form in the template
    this.updateUserForm();

    // to acquire the user id to be used to generate content
    this.authservice.subject.subscribe( data => {
      this.userConnected = data.user_id;
    });

    // content generated from the data gathered from the id
    this.authservice.getUser(this.userConnected).subscribe( data => {
      this.updateUser.controls.name.setValue(data.user_name);
      this.updateUser.controls.email.setValue(data.user_email);
      this.updateUser.controls.password.setValue(data.user_password);
      this.updateUser.controls.country.setValue(data.user_country);
      this.updateUser.controls.city.setValue(data.user_city);
    });
  }

  // custom validator to check if pass and confirm pass are the same
  matchingPass(passwordName: string, confirmPasswordName: string){

    return (formGroup: FormGroup) => {
        let control = formGroup.controls[passwordName];
        let matchingControl = formGroup.controls[confirmPasswordName];

        if(matchingControl.errors && !matchingControl.errors.passwordMatch){
            return;
        }

        if(control.value !== matchingControl.value){
            matchingControl.setErrors({passwordMatch: true});
        } else {
            matchingControl.setErrors(null);
        }
    }
  }

  // form structure & validators
  updateUserForm() {
    this.updateUser = this.fb.group ({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(1000)]],
      confirm_password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(1000)]],
      country: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      city: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(40)]]
    }, {
      validator : this.matchingPass('password', 'confirm_password')
    });
  }
  
  // data from form to be sent to backend
  updateUserData(values: any) {
      
    let form = new FormData();

    form.append('user_name',values.name)
    form.append('user_email',values.email)
    form.append('user_password',values.password)
    form.append('user_country',values.country)
    form.append('user_city',values.city)

    this.authservice.updateUser(this.userConnected, form).subscribe( response => {
      this.success = true;
    } );   
  }
}
