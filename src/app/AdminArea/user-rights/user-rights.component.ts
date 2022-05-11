import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


import { User } from '../../models/users'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-rights',
  templateUrl: './user-rights.component.html',
  styleUrls: ['./user-rights.component.scss']
})
export class UserRightsComponent implements OnInit {

  isAdmin : any;

  users : User[]
  user: User | undefined;

  rights : FormGroup;

  Message : string;

  success: boolean;
  add: boolean;
  remove: boolean;

  admin: string;

  constructor(
    private authservice : AuthService
  ) { }

  ngOnInit(): void {
    this.authservice.autoLogin();
    this.authservice.subject.subscribe( data => this.isAdmin = data.is_admin );
    this.authservice.getUsers().subscribe( data => {
      this.users = data
    })
  }

  AdminRightsMod (userId) {
    this.authservice.adminRights(userId).subscribe( data => {
      
    })
  
  }
  
}
