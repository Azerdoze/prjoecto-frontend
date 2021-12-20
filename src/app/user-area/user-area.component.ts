import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from '../models/users';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.scss']
})
export class UserAreaComponent implements OnInit {

  user = new User ();
  updateUser : FormGroup;
  errorMessage: string;

  constructor( private fb : FormBuilder ) { }

  ngOnInit(): void {
    this.updateUser = this.fb.group ({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(1000)]],
      country: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      city: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(40)]]
    });
  }
}
