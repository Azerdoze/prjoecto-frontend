import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { God } from '../../models/god';

import { ReligionsService } from '../../services/religions.service';

@Component({
  selector: 'app-detailedreligion',
  templateUrl: './detailedreligion.component.html',
  styleUrls: ['./detailedreligion.component.scss']
})
export class DetailedreligionComponent implements OnInit {

  pantheon_name: string;
  pantheon_description: string;
  pantheon_scope: string;

  god_name: string;
  god_alignment: string;
  god_domains: string;
  god_mysteries: string;
  god_fav_weapon : string;

  gods: God[];

  constructor(
    private route: ActivatedRoute,
    private religionService: ReligionsService
  ) { }

  ngOnInit(): void {

    let pantheon_id = this.route.snapshot.params["pantheon_id"];

    this.religionService.getPantheon(pantheon_id).subscribe( data =>{
        this.pantheon_name = data ["pantheon_name"];
        this.pantheon_description = data ["pantheon_description"];
        this.pantheon_scope = data ["pantheon_scope"];
      });
    this.religionService.getGodsByPantheon(pantheon_id).subscribe( data =>{
        this.gods = data;
      });
  }

}
