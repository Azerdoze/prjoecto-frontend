import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Login } from './models/login';

import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Orders } from './models/orders';
import { Region } from './models/region';
import { Pantheon } from './models/pantheon';

import { NationsService } from './services/nations.service';
import { OrdersService } from './services/orders.service';
import { ReligionsService } from './services/religions.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Arthan Uthyl Reborn';
  
  faSearch = faSearch;
  faBars = faBars;
  faTimes = faTimes;

  isActive:boolean = false;
  
  show: boolean;
  toggle: string = "show";

  reveal: boolean;
  toggleTab: string = "reveal";

  view: boolean;
  toggleUp: string = "view";

  
  regions: Region[];
  region: Region | undefined;
  
  orders: Orders[];
  order: Orders | undefined;
  
  pantheons: Pantheon[];
  pantheon: Pantheon | undefined;
  
  login = new Login();
  loginForm: FormGroup;
  errorMessage: string;
  
  constructor (
    private nationService: NationsService,
    private orderService: OrdersService,
    private religionService: ReligionsService,
    private fb: FormBuilder
    ) {
      
    }
    // show or hide the menu in mobile
    toggleMenu(): void {
      this.show = !this.show;
      if(this.show) {
        this.toggle = "hide";
      } else {
        this.toggle = "show";
      }
    }
    // show or hide the user login
    toggleSub(): void {
      this.reveal = !this.reveal;
      if(this.reveal) {
        this.toggleTab = "cover";
      } else {
        this.toggleTab = "reveal";
      }
    }
    scrollTop() {
      window.scrollTo(0, 0);
    }

    checkActive() {
      this.isActive = !this.isActive;
    }
    ngOnInit(): void {
      this.religionService.getPantheons().subscribe( data => this.pantheons = data );
      this.orderService.getOrders().subscribe( data => this.orders = data );
      this.nationService.getRegions().subscribe( data => this.regions = data );
      
      this.loginForm = this.fb.group({
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(1000)])
      });
    }
    
    // show or hide the login Form (which should hide after login)
    toggleForm() {
      this.view = !this.view;
      if(this.reveal) {
        this.toggleUp = "hidden";
      } else {
        this.toggleUp = "view";
      };
    }
    onSubmit() {
      this.errorMessage = "";
      if(!this.loginForm.valid) {
        this.errorMessage = "Username or Password Incorrect";
        
        // debug
        // console.log(this.loginForm);
      }
      
      if(this.errorMessage === "") {
        this.toggleForm();
      }  
    }
  }
  