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

  // religions: Religions[];
  pantheon: Pantheon | undefined;

  gods: God[];
  god: God | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private religionService: ReligionsService
  ) { }

  ngOnInit(): void {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        const code : number = Number(event.url.split("/").pop());
        console.log(event.url, code);

        this.religionService.getPantheon(code).subscribe( data => this.pantheon = data );
      }
    })

    const code : number = Number(this.route.snapshot.paramMap.get("code"));
    this.religionService.getPantheon(code).subscribe( data => this.pantheon = data);
    this.religionService.getGods().subscribe( data => this.gods = data );
  }

}
