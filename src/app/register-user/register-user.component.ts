import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Registration } from '../models/registration';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  registration = new Registration ();
  registerUser : FormGroup;
  success: boolean;
  errorMessage: string;
  reveal: boolean;
  toggle: string = "reveal";

  constructor( 
    private fb : FormBuilder,
    private authservice: AuthService ) { }

  ngOnInit(): void {
    // to check if there is a user already logged
    this.authservice.autoLogin();
    // to load the validations from the existing form in the template
    this.registerUserForm();
  }

  // form structure & validators
  registerUserForm() {
    this.registerUser = this.fb.group ({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(1000)]],
      country: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      city: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      checkbox: [false, [Validators.required, Validators.requiredTrue]]
    });
  }

  registerUserData(values: any) {
    
    let form = new FormData();
    
    form.append('user_name',values.name)
    form.append('user_email',values.email)
    form.append('user_password',values.password)
    form.append('user_country',values.country)
    form.append('user_city',values.city)
    
    this.authservice.createUser(form).subscribe( response => {

      this.success = true;
    } ); 
  }
  
  onSubmit(values : any) {

    this.errorMessage = "";
    
    if(!this.registerUser.valid) {
      this.errorMessage = "Please fill all the form inputs correctly";
    }
    else { this.registerUserData(values) }
  }
}
