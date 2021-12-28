import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Nation } from '../../models/nationindetail';
import { NationsService } from '../../services/nations.service';

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

  constructor(
    private fb : FormBuilder,
    private nationService : NationsService
     ) { }

  ngOnInit(): void {
    this.deleteNation = this.fb.group ({
      checkbox: ["", [Validators.required]],
    });
    this.nationService.getNations().subscribe( data => this.nations = data );
  }
  onSubmit() {
    this.Message = "";
    if(!this.deleteNation.valid) {
      this.Message = "Please fill in all the form correctly";
      
      // debug
      console.log(this.deleteNation);
    }
    else {
      this.Message = "Nation deleted successfully";
    }
  }
}
