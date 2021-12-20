import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-area',
  templateUrl: './admin-area.component.html',
  styleUrls: ['./admin-area.component.scss']
})
export class AdminAreaComponent implements OnInit {

  revealNations : Boolean;
  toggleNations : string = "reveal";
  
  revealReligions : Boolean;
  toggleReligions : string = "reveal";

  revealOrders : Boolean;
  toggleOrders : string = "reveal";

  revealUsers : Boolean;
  toggleUsers : string = "reveal";

  constructor() { }

  ngOnInit(): void {
  }

  toggleNationsTab(): void {
    this.revealNations = !this.revealNations;
    if(this.revealNations) {
      this.toggleNations = "hidden";
    } else {
      this.toggleNations = "reveal";
    }
  }

  toggleReligionsTab(): void {
    this.revealReligions = !this.revealReligions;
    if(this.revealReligions) {
      this.toggleReligions = "hidden";
    } else {
      this.toggleReligions = "reveal";
    }
  }

  toggleOrdersTab(): void {
    this.revealOrders = !this.revealOrders;
    if(this.revealOrders) {
      this.toggleOrders = "hidden";
    } else {
      this.toggleOrders = "reveal";
    }
  }

  toggleUsersTab(): void {
    this.revealUsers = !this.revealUsers;
    if(this.revealUsers) {
      this.toggleUsers = "hidden";
    } else {
      this.toggleUsers = "reveal";
    }
  }

}
