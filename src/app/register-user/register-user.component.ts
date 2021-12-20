import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Registration } from '../models/registration';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  registration = new Registration ();
  registerUser : FormGroup;
  errorMessage: string;

  reveal: boolean;
  toggle: string = "reveal";

  constructor( private fb : FormBuilder ) { }

  ngOnInit(): void {
    this.registerUser = this.fb.group ({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(1000)]],
      country: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      city: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      checkbox: ["", [Validators.required]]
    });
  }

  onSubmit() {
    this.errorMessage = "";
    if(!this.registerUser.valid) {
      this.errorMessage = "Please fill in all the form correctly";
      
      // debug
      console.log(this.registerUser);
    }
  }
}
