import { Component, ViewChild, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AcreditacionService } from '../providers/acreditacion.service';
import { AccreditationDataService } from '../services/accreditation-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accreditations',
  templateUrl: './accreditations.page.html',
  styleUrls: ['./accreditations.page.scss'],
})
export class AccreditationsPage implements OnInit{
  areas: any[] =[]; 
  saveArea:any[]=[];
  textoBuscar = '';
  texto2='';
  constructor(
    private  acreditacionService:AcreditacionService, 
    private accreditationData:AccreditationDataService,
    private router: Router) { 
      this.acreditacionService.getAreas().subscribe(resp=>this.saveArea=resp);
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

menuAreaDatos(area,conocimientoIndex){

  if(area.acreditaciones!=null && area.acreditaciones.length>0){
    let hola=document.getElementById("acreditacionesA"+conocimientoIndex).hidden;
  if(hola === true){   
    document.getElementById("acreditacionesA"+conocimientoIndex).hidden = false;

  }else if(hola === false){
    document.getElementById("acreditacionesA"+conocimientoIndex).hidden = true;
  }
  }
  if(area.ramas!=null && area.ramas.length>0){
    let hola=document.getElementById("ramas"+conocimientoIndex).hidden;
    if(hola === true){   
      document.getElementById("ramas"+conocimientoIndex).hidden = false;

    }else if(hola === false){
      document.getElementById("ramas"+conocimientoIndex).hidden = true;
    }
  }

}
  enviarAcreditacion( id){
    
    this.accreditationData.setData(id,[]);

  }  

  buscarAcreditacion(event){
    
    
    
    let texto=event.target.value;
    
    if(this.texto2===texto){
      texto='';
      this.texto2='';
    }else{
      this.texto2=texto;
    }
    this.textoBuscar = texto;
    this.areas=JSON.parse(JSON.stringify(this.saveArea));
    
    
  }
  ngOnInit(){

  }
  
}


