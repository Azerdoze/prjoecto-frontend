import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

import { Religions } from '../../models/religions';
import { ReligionsService } from '../../services/religions.service';

@Component({
  selector: 'app-detailedreligion',
  templateUrl: './detailedreligion.component.html',
  styleUrls: ['./detailedreligion.component.scss']
})
export class DetailedreligionComponent implements OnInit {

  // religions: Religions[];
  religion: Religions | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private religionService: ReligionsService
  ) { }

  ngOnInit(): void {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        const code = event.url.split("/").pop();
        console.log(event.url, code);

        this.religionService.getPantheon(code).subscribe( data => this.religion = data );
      }
    })

    const code = this.route.snapshot.paramMap.get("code");
    this.religionService.getPantheon(code).subscribe( data => this.religion = data);
  }

}
