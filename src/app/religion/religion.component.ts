import { Component, OnInit } from '@angular/core';

// import { Religions } from '../models/religions';

import { Pantheon } from '../models/pantheon';
import { ReligionsService } from '../services/religions.service';

@Component({
  selector: 'app-religion',
  templateUrl: './religion.component.html',
  styleUrls: ['./religion.component.scss']
})
export class ReligionComponent implements OnInit {

  // religions: Religions[] = this.religionService.getReligions();
  pantheons: Pantheon[];
  pantheon: Pantheon | undefined;
  
  constructor(private religionService: ReligionsService) { }

  ngOnInit(): void {
    this.religionService.getPantheons().subscribe( data => this.pantheons = data );
  }

}
