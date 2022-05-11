import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Nation } from '../models/nationindetail';
import { Region } from '../models/region';

@Injectable({
  providedIn: 'root'
})
export class NationsService {

  // RegionsDBLink = "http://localhost/backend/regions";
  // NationsDBLink = "http://localhost/backend/nations";
  // NationsByRegionDBLink = "http://localhost/backend/nationsbyregion";
  RegionsDBLink = "http://arthan-uthyl.me.uk/backend/regions";
  NationsDBLink = "http://arthan-uthyl.me.uk/backend/nations";
  NationsByRegionDBLink = "http://arthan-uthyl.me.uk/backend/nationsbyregion";

  ParsedJWT;
  httpOptions;
  
  
  constructor( private http: HttpClient ) { }


  // Method to get the JWT Token
  getJWT () {
    const JWT = localStorage.getItem("authToken");

    this.ParsedJWT = JSON.parse(JWT)["X-Auth-Token"];

    this.httpOptions = {
        headers: new HttpHeaders({
          "X-Auth-Token":this.ParsedJWT
        })
      };
  }

  // Regions CRUD
  getRegions(): Observable<Region[]> {
    return this.http.get < Region[] > ( this.RegionsDBLink );
  }
  
  getRegion(region_id: string): Observable<Region> {
    return this.http.get < Region > (this.RegionsDBLink + "/" + region_id ) ;
  }

  // addRegion(region: Region) {
  //   return this.http.post < Region > ( this.RegionsDBLink , region, this.httpOptions);
  // }

  // updateRegion(region_id:string): Observable<Region> {
  //   return this.http.put <Region> ( this.RegionsDBLink + "/" + region_id, this.httpOptions );
  // }

  // deleteRegion(region_id:string) {
  //   return this.http.delete <Region> ( this.RegionsDBLink + "/" + region_id, this.httpOptions );
  // }
  
  // Nations CRUD

  getNations(): Observable<Nation[]> {
    return this.http.get < Nation[] > ( this.NationsDBLink );
  }

  getNationsByRegion(region_id:string): Observable<Nation[]> {
    return this.http.get < Nation [] > (this.NationsByRegionDBLink + "/" + region_id ) ;
  };
  
  getNation(nation_id: string): Observable<Nation> {
    return this.http.get < Nation > (this.NationsDBLink + "/" + nation_id ) ;
  }

  addNation(data : any) {

    this.getJWT()

    // convert form data to JSON
    let object = {};
    data.forEach((value, key) => object[key] = value);
    let jsonConverted = JSON.stringify(object);

    return this.http.post ( this.NationsDBLink , jsonConverted, this.httpOptions);
  }

  updateNation(nation_id : string, data: any) {

    this.getJWT()

    // convert form data to JSON
    let object = {};
    data.forEach((value, key) => object[key] = value);
    let jsonConverted = JSON.stringify(object);

    return this.http.put <Nation> ( this.NationsDBLink + "/" + nation_id, jsonConverted, this.httpOptions );
  }

  deleteNation(nation_id:string) {

    this.getJWT()
    
    return this.http.delete ( this.NationsDBLink + "/" + nation_id, this.httpOptions );
  }
}



