import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/models/users';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  users : User[];
  user : User | undefined;

  deleteUser : FormGroup;
  Message : string;
  success: boolean;

  constructor(
    private userService : AuthService,
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.deleteUserForm();

    this.userService.getUsers().subscribe( data => this.users = data );
  }

  deleteUserForm () {
    this.deleteUser = this.fb.group ({
      chosen: ["", [Validators.required]],
      checkbox: ["", [Validators.required]]
    });
  }

  // choose User using select dropdown
  chooseUser() {

    // turning the value into a string so it matches it's id
    let id = this.deleteUser.controls.chosen.value;

    // turning it's value to the one obtained via string
    this.userId.setValue(id, {
      onlySelf: true
    })
    
    // convert the input into the retrieved form's data
    this.GetUserData()
  }

  // getter method to access formcontrols
  get userId() {
    return this.deleteUser.get('chosen');
  }

   // set input values into the ones from the obtained trait
  GetUserData() {

    let user_id = this.deleteUser.controls.chosen.value

  // content generated from the data gathered from the id
    this.userService.getUser(user_id).subscribe( data => {
      
    this.deleteUser.controls.chosen.setValue(data.user_id);
    });
  }

  DeleteUserData() {

    let id = this.deleteUser.controls.chosen.value;

    this.userService.deleteUser(id).subscribe( response => {
      // console.log(response);
      this.success = true;
      this.userService.getUsers().subscribe( data => this.users = data );
    });
  }

  onSubmit() {
    this.Message = "";
    if(!this.deleteUser.valid) {
      this.Message = "Please fill in all the form correctly";
      
      // debug
      // console.log(this.deleteOrder);
    }
    else {
      this.DeleteUserData();
    }
  }

}
