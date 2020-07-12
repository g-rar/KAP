import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AcreditacionService {
   
  constructor(private http:HttpClient) { }
  getAreas(){
    return this.http.get<any[]>('/assets/data/data.json')
  }
}
