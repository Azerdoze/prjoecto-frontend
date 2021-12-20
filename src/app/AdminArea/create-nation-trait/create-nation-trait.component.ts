import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Nationtrait } from '../../models/nationtrait';

@Component({
  selector: 'app-create-nation-trait',
  templateUrl: './create-nation-trait.component.html',
  styleUrls: ['./create-nation-trait.component.scss']
})
export class CreateNationTraitComponent implements OnInit {

  nationTrait = new Nationtrait() ;
  createNationTrait : FormGroup;
  errorMEssage : string;

  constructor( private fb : FormBuilder ) { }

  ngOnInit(): void {
  }

}
