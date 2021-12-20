import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Email } from 'src/app/models/emails';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  email = new Email();
  emailForm: FormGroup;
  errorMessage: string;
  
  reveal: boolean;
  toggle: string = "reveal";
  
  constructor( 
    private fb: FormBuilder 
    ) { }
    
    ngOnInit(): void {
      this.emailForm = this.fb.group({
        email:["", [Validators.required, Validators.email]]
      });
    }
    
    toggleForm() {
      this.reveal = !this.reveal;
      if(this.reveal) {
        this.toggle = "hidden";
      } else {
        this.toggle = "reveal";
      };
    }
    
    onSubmit() {
      this.errorMessage = "";
      if(!this.emailForm.valid) {
        this.errorMessage = "Please fill in with a correct email address";
      }
      
      if(this.errorMessage === "") {
        this.toggleForm();
      }
      
    }
  }
  