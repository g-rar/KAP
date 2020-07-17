import { Injectable } from '@angular/core';
import { AccreditationDataService } from './accreditation-data.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AcreditacionService } from '../providers/acreditacion.service';

@Injectable({
  providedIn: 'root'
})
export class AccreditationResolverService {

  constructor(private accreditationData: AcreditacionService) { }

  resolve(route: ActivatedRouteSnapshot){
    let areas;
    return this.accreditationData.getAreas().subscribe(resp=>areas=resp);
  }
}

