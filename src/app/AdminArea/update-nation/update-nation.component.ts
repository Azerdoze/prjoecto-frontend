import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/models/region';

@Component({
  selector: 'app-update-nation',
  templateUrl: './update-nation.component.html',
  styleUrls: ['./update-nation.component.scss']
})
export class UpdateNationComponent implements OnInit {

  regions: Region[];
  region: Region | undefined;
  
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
