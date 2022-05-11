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

  dontshowme: boolean;
  
  userName: string;

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
      this.authService.subject.subscribe( (response) => {
        if ( response ) {
          this.view = true;
          this.authService.subject.subscribe (data => this.userName = data.user_name)
          this.authService.subject.subscribe( data => this.isAdmin = data.is_admin )
          this.dontshowme = true;
          this.retrieveNations();
          this.retrieveOrders();
          this.retrievePantheons();
        }
        else {
          this.dontshowme = false;
        }
      } );
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
    
    retrievePantheons() {
      this.religionService.getPantheons().subscribe( data => this.pantheons = data );
    }
    retrieveOrders() {
      this.orderService.getOrders().subscribe( data => this.orders = data );
    }
    retrieveNations() {
      this.nationService.getRegions().subscribe( data => this.regions = data );
    }
    // acquire data from login form
    onLogin(values: any) {
      let formData = new FormData();
      
      // console.log(values);
      formData.append('user_email', values.user_email);
      formData.append('user_password', values.user_password);
      
      this.authService.login(formData).subscribe( response => {
        // console.log(response);
        this.view = true;
        this.authService.subject.subscribe( data => this.isAdmin = data.is_admin );
        this.retrieveNations();
        this.retrieveOrders();
        this.retrievePantheons();
        this.dontshowme =  true;
        this.authService.subject.subscribe (data => this.userName = data.user_name)
      },error => {
        this.errorMessage = error.error.message;
      });
    }
    
    goToRegionPage(region_id: any) {
      this.route.navigateByUrl("/regions",{skipLocationChange:true})
      .then( () => {
        this.route.navigate(["/region/",region_id])
      })
    }
    
    goToReligionPage(pantheon_id: any) {
      this.route.navigate(["/detailedreligion/",pantheon_id])
    }
    
    goToOrdersPage(order_id: any) {
      this.route.navigateByUrl("/orders",{skipLocationChange:true})
      .then( () => {
        this.route.navigate(["/orders/", order_id])
      })
    }

    onSubmit( values: any ) { this.onLogin(values) };

    onClick() { 
      this.authService.logout()
      this.userName = "";
      this.loginForm.reset()
      this.view = false;
      window.location.reload();
    };
    
    
    

















































  
  
    
  }
  