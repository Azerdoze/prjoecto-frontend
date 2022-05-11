import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

import { Nation } from '../../models/nationindetail';

import { NationsService } from '../../services/nations.service';

@Component({
  selector: 'app-nationindetail',
  templateUrl: './nationindetail.component.html',
  styleUrls: ['./nationindetail.component.scss']
})
export class NationindetailComponent implements OnInit {
  
  nation: Nation | undefined;

  name : string;
  description : string;
  hub : string;
  hubDesc : string;

  traits: any = [];
  
  constructor(
    private route: ActivatedRoute,
    private nationService: NationsService,
    ) { }
    
  ngOnInit(): void {
    
    let nation_id = this.route.snapshot.params["nation_id"];
        
        this.nationService.getNation(nation_id).subscribe( data => {

            this.name = data["nation_name"];
            this.description = data["nation_description"];
            this.hub = data["nation_hub"];
            this.hubDesc = data["nation_hub_description"];

            this.traits = data.traits;
          });        

  }
}
