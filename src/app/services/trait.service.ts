import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Trait } from '../models/trait';
@Injectable({
  providedIn: 'root'
})
export class TraitService {

  TraitsDBLink = "http://localhost/backend/traits";
  TraitsByNationDBLink = "http://localhost/backend/traitsbynation";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type":"application/json"
    })

  };

  constructor( private http: HttpClient ) { }

  getTraits(): Observable<Trait[]> {
    return this.http.get < Trait[] > ( this.TraitsDBLink );
  }
  
  getTrait(trait_id: number): Observable<Trait> {
    return this.http.get < Trait > (this.TraitsDBLink + "/" + trait_id ) ;
  }

  addTrait(trait: Trait) {
    return this.http.post < Trait > ( this.TraitsDBLink , trait, this.httpOptions);
  }

  updateTrait(trait_id:number): Observable<Trait> {
    return this.http.put <Trait> ( this.TraitsDBLink + "/" + trait_id, this.httpOptions );
  }

  deleteTrait(trait_id:number): Observable<Trait> {
    return this.http.delete <Trait> ( this.TraitsDBLink + "/" + trait_id, this.httpOptions );
  }
}
