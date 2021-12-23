import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

import { Region } from '../../models/region';
import { Nation } from '../../models/nationindetail';
import { NationsService } from '../../services/nations.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  region: Region | undefined;
  nations: Nation[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private nationService: NationsService) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        const region_id = event.url.split("/").pop();   
             
        this.nationService.getRegion(region_id).subscribe( data => this.region = data);
        this.nationService.getNationsByRegion(region_id).subscribe( data => this.nations = data);
      }
    })
    const region_id = this.route.snapshot.paramMap.get("code");
    this.nationService.getRegion(region_id).subscribe( data => this.region = data);
    this.nationService.getNationsByRegion(region_id).subscribe( data => this.nations = data);
  }
}


