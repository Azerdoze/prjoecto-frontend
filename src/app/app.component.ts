import { Component } from '@angular/core';
import { FormControl,FormGroup, FormBuilder, Validators } from '@angular/forms';

import { BehaviorSubject } from 'rxjs';

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Orders } from './models/orders';
import { Region } from './models/region';
import { Pantheon } from './models/pantheon';
import { User } from './models/users';

import { NationsService } from './services/nations.service';
import { OrdersService } from './services/orders.service';
import { ReligionsService } from './services/religions.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Arthan Uthyl Reborn';
  
  faBars = faBars;
  faTimes = faTimes;

  isActive:boolean = false;

  loading:boolean = false;
  submitted:boolean = false;
  
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
  
  isAdmin: any;

  loginForm: FormGroup;

  errorMessage: string;

  subject = new BehaviorSubject<User>(null);
  
  constructor (
    private nationService: NationsService,
    private orderService: OrdersService,
    private religionService: ReligionsService,
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router

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
      this.loginUserForm();
      this.authService.autoLogin();
      this.authService.subject.subscribe( data => this.isAdmin = data.is_admin );
      
      this.religionService.getPantheons().subscribe( data => this.pantheons = data );
      this.orderService.getOrders().subscribe( data => this.orders = data );
      this.nationService.getRegions().subscribe( data => this.regions = data );
    }
    
    loginUserForm() {
      this.loginForm = this.fb.group({
        user_email: new FormControl("", [Validators.required, Validators.email]),
        user_password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(1000)])
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
    onSubmit(
      values: any
      ) {
        this.onLogin(values);


        // console.log(this.onLogin);
        
        // run authentication to check if user is registered
        // if user is registered login and toggleForm, else display invalid user message
      
    }
    
    // acquire data from login form
    onLogin(values: any) {
      let formData = new FormData();

      console.log(values);
      formData.append('user_email', values.user_email);
      formData.append('user_password', values.user_password);

      this.authService.login(formData).subscribe( response => {
        // console.log(response);

        this.toggleForm();
      },error => {
        // console.log(error.error.message);
        this.errorMessage = error.error.message;
      });
    }

    goToRegionPage(region_id: any) {
      this.route.navigateByUrl("/regions",{skipLocationChange:true})
      .then( () => {
        this.route.navigate(["/regions/",region_id])
      })
    }

    goToReligionPage(pantheon_id: any) {
      // this.route.navigateByUrl("/detailedreligion",{skipLocationChange:true})
      // .then( () => {
        this.route.navigate(["/detailedreligion/",pantheon_id])
      // })
    }





















































  
  
    
  }
  