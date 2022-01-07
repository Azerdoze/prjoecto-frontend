import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { God } from '../../models/god';

import { Pantheon } from '../../models/pantheon';
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
    private router: Router,
    private route: ActivatedRoute,
    private religionService: ReligionsService
  ) { }

  ngOnInit(): void {

    let pantheon_id = this.route.snapshot.params["pantheon_id"];


    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationStart) {
    //     const code : number = Number(event.url.split("/").pop());
    //     console.log(event.url, code);

        this.religionService.getPantheon(pantheon_id).subscribe( data =>{
           this.pantheon_name = data ["pantheon_name"];
           this.pantheon_description = data ["pantheon_description"];
           this.pantheon_scope = data ["pantheon_scope"];
          });
        this.religionService.getGodsByPantheon(pantheon_id).subscribe( data =>{
           this.gods = data;
          //  console.log(this.gods);
          });
      }
    // })

    // const code : number = Number(this.route.snapshot.paramMap.get("code"));
    // this.religionService.getPantheon(code).subscribe( data => this.pantheon = data);
    // this.religionService.getGods().subscribe( data => this.gods = data );
  // }

}
