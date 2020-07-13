import { Component, ViewChild, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { AcreditacionService } from '../providers/acreditacion.service';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-accreditations',
  templateUrl: './accreditations.page.html',
  styleUrls: ['./accreditations.page.scss'],
})
export class AccreditationsPage implements OnInit {
  areas: any[] =[]; 
 
  textoBuscar = '';

  constructor(private httpService: HttpClient, private acreditacionService:AcreditacionService) { 
  
    this.acreditacionService.getAreas().subscribe(resp=>this.areas=resp);
  
  }
  

  abrirMenu(conocimiento,cantidad){
    
  for (let i = 0; i < cantidad; i++){
    let hola=document.getElementById(conocimiento+i).hidden;
    if(document.getElementById(conocimiento+i)!==null){
    if(hola === true){   
      document.getElementById(conocimiento+i).hidden = false;

    }else if(hola === false){
      document.getElementById(conocimiento+i).hidden = true;
    }
  }

}
}

  buscarAcreditacion(event){
    const texto=event.target.value;
    this.acreditacionService.getAreas().subscribe(resp=>this.areas=resp);
    this.textoBuscar = texto; 
  }
  
  ngOnInit() {
  }

  

}


