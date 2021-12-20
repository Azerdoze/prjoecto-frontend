import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

import { Nationindetail } from '../../models/nationindetail';
import { NationsService } from '../../services/nations.service';


@Component({
  selector: 'app-nationindetail',
  templateUrl: './nationindetail.component.html',
  styleUrls: ['./nationindetail.component.scss']
})
export class NationindetailComponent implements OnInit {
  
  nation: Nationindetail | undefined;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private nationService: NationsService
    ) {
    }
    
    ngOnInit(): void {
      
      this.router.events.subscribe(event => {
        if (event instanceof NavigationStart) {

          const split = event.url.split("/");
          const regionCode = split[2];
          const nationCode = split[3];
          
          this.nation = this.nationService.getRegion(regionCode,nationCode);
        }
      })
      
      const regionCode = this.route.snapshot.paramMap.get("regionCode");
      const nationCode = this.route.snapshot.paramMap.get("nationCode");
      
      this.nation = this.nationService.getRegion(regionCode,nationCode);
    }
    
  }
  