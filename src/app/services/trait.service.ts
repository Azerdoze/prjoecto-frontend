import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trait } from '../models/trait';
@Injectable({
  providedIn: 'root'
})
export class TraitService {

  // TraitsDBLink = "http://localhost/backend/traits";
  // TraitsToNationDBLink = "http://localhost/backend/traitstonation";
  TraitsDBLink = "http://arthan-uthyl.me.uk/backend/traits";
  TraitsToNationDBLink = "http://arthan-uthyl.me.uk/backend/traitstonation";

  JWT = localStorage.getItem("authToken");

  parsedJWT = JSON.parse(this.JWT)["X-Auth-Token"];
  
  httpOptions = {
    headers: new HttpHeaders({
      "X-Auth-Token":this.parsedJWT
    }) 
  };

  constructor( private http: HttpClient ) { }
  
  getTraits(): Observable<Trait[]> {
    return this.http.get < Trait[] > ( this.TraitsDBLink );
  }
  
  getTrait(trait_id: number): Observable<Trait> {
    return this.http.get < Trait > (this.TraitsDBLink + "/" + trait_id ) ;
  }
  
  addTrait(data: any) {
    
    // convert form data to JSON
    let object = {};
    data.forEach((value, key) => object[key] = value);
    let jsonConverted = JSON.stringify(object);

    return this.http.post ( this.TraitsDBLink , jsonConverted, this.httpOptions);
  }

  giveTraittoNation(data : any) {
    // convert form data to JSON
    let object = {};
    data.forEach((value, key) => object[key] = value);
    let jsonConverted = JSON.stringify(object);

    let url = this.TraitsToNationDBLink

    return this.http.post ( url, jsonConverted, this.httpOptions);
  }

  removeTraitfromNation(trait_id: number, nation_id: string) {
    
    let id = trait_id + "&" + nation_id;
    let url = this.TraitsToNationDBLink + "/" + id
    return this.http.delete ( url, this.httpOptions );
  }


  updateTrait(trait_id:number, data: any) {

    // convert form data to JSON
    let object = {};
    data.forEach((value, key) => object[key] = value);
    let jsonConverted = JSON.stringify(object);

    return this.http.put ( this.TraitsDBLink + "/" + trait_id, jsonConverted, this.httpOptions );
  }

  deleteTrait(trait_id:number) {
    return this.http.delete ( this.TraitsDBLink + "/" + trait_id, this.httpOptions );
  }
}
