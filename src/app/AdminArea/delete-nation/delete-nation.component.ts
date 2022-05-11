import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Nation } from '../../models/nationindetail';
import { NationsService } from '../../services/nations.service';

import { AuthService } from '../../services/auth.service'


@Component({
  selector: 'app-delete-nation',
  templateUrl: './delete-nation.component.html',
  styleUrls: ['./delete-nation.component.scss']
})
export class DeleteNationComponent implements OnInit {

  nations : Nation[];
  nation : Nation | undefined;
  deleteNation : FormGroup;
  Message : string;
  isAdmin : any;
  success : boolean;

  constructor(
    private fb : FormBuilder,
    private nationService : NationsService,
    private authservice : AuthService
     ) { }

  ngOnInit(): void {
    this.deleteNationForm();

    this.authservice.autoLogin();
    this.authservice.subject.subscribe( data => this.isAdmin = data.is_admin )

    this.nationService.getNations().subscribe( data => this.nations = data );
  }
  
  deleteNationForm() {
    this.deleteNation = this.fb.group ({
    chosen: ["", [Validators.required]],
    checkbox: ["", [Validators.required]]
  });
  }
    // choose Nation using select dropdown
    chooseNation(event) {
      
      let setID = this.deleteNation.controls.chosen.value;
  
      this.Id.setValue(setID, {
        onlySelf: true
      })
    }
  
    // getter method to access formcontrols
    get Id() {
      return this.deleteNation.get('chosen');
    }

    DeletePantheonData() {

      let id = this.deleteNation.controls.chosen.value;

      this.nationService.deleteNation(id).subscribe( response => {
        // console.log(response);
        this.success = true;
        this.nationService.getNations().subscribe( data => this.nations = data );
      });
    }
  
    onSubmit() {
      this.Message = "";
      if(!this.deleteNation.valid) {
        this.Message = "Please fill in all the form correctly";
        
        // debug
        // console.log(this.deleteNation);
      }
      else {
        this.DeletePantheonData();
      }
    }
}
