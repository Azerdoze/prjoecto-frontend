import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Pantheon } from '../models/pantheon';
import { God } from '../models/god';
@Injectable({
  providedIn: 'root'
})
export class ReligionsService {

  pantheonDBLink = "http://localhost/backend/pantheons";
  godsDBLink = "http://localhost/backend/gods";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type":"application/json"
    })

  };

  constructor( private http: HttpClient ) { }

  // CRUD for Pantheons
  getPantheons(): Observable<Pantheon[]> {
    return this.http.get < Pantheon[] > ( this.pantheonDBLink );
  }
  getPantheon(pantheon_id: number): Observable<Pantheon> {
    return this.http.get < Pantheon > (this.pantheonDBLink + "/" + pantheon_id);
  }
  addPantheon(pantheon: Pantheon) {
    return this.http.post < Pantheon > ( this.godsDBLink, pantheon, this.httpOptions);
  }

  updatePantheon(pantheon_id:number): Observable<Pantheon> {
    return this.http.put <Pantheon> ( this.godsDBLink + "/" + pantheon_id, this.httpOptions );
  }

  deletePantheon(pantheon_id:number): Observable<Pantheon> {
    return this.http.delete <Pantheon> ( this.godsDBLink + "/" + pantheon_id, this.httpOptions );
  }

  // CRUD for Gods
  getGods(): Observable<God[]> {
    return this.http.get < God[] > ( this.godsDBLink );
  }

  getGod(god_id: number): Observable<God> {
    return this.http.get < God > (this.godsDBLink + "/" + god_id);
  }
  
  addGod(god: God) {
    return this.http.post < God > ( this.godsDBLink , god, this.httpOptions);
  }

  updateOrder(god_id:number): Observable<God> {
    return this.http.put <God> ( this.godsDBLink + "/" + god_id, this.httpOptions );
  }

  deleteOrder(god_id:number): Observable<God> {
    return this.http.delete <God> ( this.godsDBLink + "/" + god_id, this.httpOptions );
  }
}
