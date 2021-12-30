import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

import { Region } from '../models/region';
import { Nation } from '../models/nationindetail';

import { NationsService } from '../services/nations.service';

@Component({
  selector: 'app-nations',
  templateUrl: './nations.component.html',
  styleUrls: ['./nations.component.scss']
})
export class NationsComponent implements OnInit {

  
  regions: Region[];
  region: Region | undefined;

  nations: Nation[];
  nation: Nation | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private nationService: NationsService
    ) { 

  }

  ngOnInit(): void {

    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        const region_id = event.url.split("/").pop();
        
        this.nationService.getNation(region_id).subscribe( data => this.nation = data);
      }
    })

    this.nationService.getRegions().subscribe( data => this.regions = data );
  }

}
