import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Nation } from '../../models/nationindetail';
import { NationsService } from '../../services/nations.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  region_name: string;
  region_description: string;
  
  nations: Nation[];

  constructor(
    private route: ActivatedRoute,
    private nationService: NationsService) { }

  ngOnInit(): void {

    let region_id = this.route.snapshot.params["region_id"];

    this.nationService.getRegion(region_id).subscribe( data => {
      this.region_name = data ["region_name"];
      this.region_description = data ["region_description"];
    });
    
    this.nationService.getNationsByRegion(region_id).subscribe( data => {
      this.nations = data;
    });
  }
}


