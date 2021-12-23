import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

import { Nation } from '../../models/nationindetail';
import { NationsService } from '../../services/nations.service';

@Component({
  selector: 'app-nationindetail',
  templateUrl: './nationindetail.component.html',
  styleUrls: ['./nationindetail.component.scss']
})
export class NationindetailComponent implements OnInit {
  
  nation: Nation | undefined;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private nationService: NationsService
    ) { }
    
  ngOnInit(): void {
    
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        const nation_id = event.url.split("/").pop();
        
        this.nationService.getNation(nation_id).subscribe( data => this.nation = data);
      }
    })
    const nation_id = this.route.snapshot.paramMap.get("code");
    this.nationService.getNation(nation_id).subscribe( data => this.nation = data);
  }
}
