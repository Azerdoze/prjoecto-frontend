import { Component, OnInit } from '@angular/core';
import { Regions } from '../models/region';

import { NationsService } from '../services/nations.service';

@Component({
  selector: 'app-nations',
  templateUrl: './nations.component.html',
  styleUrls: ['./nations.component.scss']
})
export class NationsComponent implements OnInit {

  
  regions: Regions[] = this.nationService.getRegions();
  region: Regions | undefined;


  constructor(private nationService: NationsService) { 

  }

  ngOnInit(): void {

  }

}
