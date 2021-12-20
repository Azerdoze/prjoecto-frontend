import { Injectable } from '@angular/core';

import { Nationindetail } from '../models/nationindetail';
import { DummyRegions } from '../dummyDB/dummy';
import { Regions } from '../models/region';

@Injectable({
  providedIn: 'root'
})
export class NationsService {
  
  constructor() { }
  
  
  getRegions(): Regions[] {
    return DummyRegions; 
  }
  
  getRegion(regionCode: string, nationCode?: string):Nationindetail {
    
    const regionFound = DummyRegions.find(region => region.code == regionCode);
    
    if (regionFound && nationCode) {
      return regionFound.nations.find(nation => nation.code == nationCode);
    }
    
    return regionFound.nations[0];
  }
  
}



