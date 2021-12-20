import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Religions } from '../models/religions';
import { Pantheon } from '../models/pantheon';
import { God } from '../models/god';

import { DummyReligions } from '../dummyDB/dummyReligions';
import { dummyPantheons } from '../dummyDB/dummyPantheons';

@Injectable({
  providedIn: 'root'
})
export class ReligionsService {

  dbLink = "?";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type":"application/json"
    })

  };

  constructor( private http: HttpClient ) { }

  // CRUD for Pantheons
  getPantheons(): Observable<Pantheon[]> {
    return this.http.get < Pantheon[] > ( this.dbLink + "?get");
  }
  getPantheon(pantheon_id: string): Observable<Religions> {
    return this.http.post < Pantheon > (this.dbLink) + "?get&pantheon_id=" + pantheon_id;
  }


  // CRUD for Gods
  getGods(): Observable<God[]> {
    return this.http.get < God[] > ( this.dbLink + "?get");
  }

  getGod(god_id: number): Observable<God> {
    return this.http.post < God > (this.dbLink) + "?get&god_id=" + god_id;
  }
  
}
