import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';

import { Nation } from '../models/nationindetail';
import { Region } from '../models/region';

@Injectable({
  providedIn: 'root'
})
export class NationsService {

  RegionsDBLink = "http://localhost/backend/regions";
  NationsDBLink = "http://localhost/backend/nations";
  NationsByRegionDBLink = "http://localhost/backend/nationsbyregion";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type":"application/json"
    })
  };

  constructor( private http: HttpClient ) { }
  
  // Regions CRUD
  getRegions(): Observable<Region[]> {
    return this.http.get < Region[] > ( this.RegionsDBLink );
  }
  
  getRegion(region_id: string): Observable<Region> {
    return this.http.get < Region > (this.RegionsDBLink + "/" + region_id ) ;
  }

  addRegion(region: Region) {
    return this.http.post < Region > ( this.RegionsDBLink , region, this.httpOptions);
  }

  updateRegion(region_id:string): Observable<Region> {
    return this.http.put <Region> ( this.RegionsDBLink + "/" + region_id, this.httpOptions );
  }

  deleteRegion(region_id:string): Observable<Region> {
    return this.http.delete <Region> ( this.RegionsDBLink + "/" + region_id, this.httpOptions );
  }
  
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

  addNation(nation: Nation) {
    return this.http.post < Nation > ( this.NationsDBLink , nation, this.httpOptions);
  }

  updateNation(nation_id:string): Observable<Nation> {
    return this.http.put <Nation> ( this.NationsDBLink + "/" + nation_id, this.httpOptions );
  }

  deleteNation(nation_id:string): Observable<Nation> {
    return this.http.delete <Nation> ( this.NationsDBLink + "/" + nation_id, this.httpOptions );
  }
}



