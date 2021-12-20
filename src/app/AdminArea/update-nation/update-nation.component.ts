import { Component, OnInit } from '@angular/core';
import { Regions } from 'src/app/models/region';

import { NationsService } from 'src/app/services/nations.service';
@Component({
  selector: 'app-update-nation',
  templateUrl: './update-nation.component.html',
  styleUrls: ['./update-nation.component.scss']
})
export class UpdateNationComponent implements OnInit {

  regions: Regions[] = this.nationService.getRegions();
  region: Regions | undefined;
  
  constructor(
    private nationService: NationsService
  ) { }

  ngOnInit(): void {
  }

}
