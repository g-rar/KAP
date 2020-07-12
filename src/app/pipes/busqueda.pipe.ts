import { Pipe, PipeTransform } from '@angular/core';
import { empty } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AcreditacionService } from '../providers/acreditacion.service';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {
  constructor(private httpService: HttpClient, private acreditacionService:AcreditacionService) { 
  
  this.acreditacionService.getAreas().subscribe(resp=>this.areas=resp);
  
  }
  acreditaciones:any[]=[];
  acreditacionesR:any[]=[];
  acreditacionesE:any[]=[];
  areas:any[]=[];
  ramas:any[]=[];
  especializaciones:any[]=[];
  transform(areas1: any[], texto: string): any[] {
  
    if(texto.length === 0){
      this.acreditacionService.getAreas().subscribe(resp=>areas1=resp);
      return areas1;
    }
   
    texto=texto.toLocaleLowerCase();
    this.areas=areas1.filter(  
      area=>{
        this.ramas=[];
        this.acreditaciones=[];
        //console.log(area.nombre);
        if(area.nombre.toLocaleLowerCase().includes(texto)){
          return true;
        }
        if(area.acreditaciones){

          this.acreditaciones=area.acreditaciones.filter(acreditacion=>{
            //console.log(acreditacion.nombre.toLocaleLowerCase().includes(texto));
            return acreditacion.nombre.toLocaleLowerCase().includes(texto);
            
          })
          
            area.acreditaciones=this.acreditaciones;
            //return true;
          
          //return false;
        }
        if(area.ramas){
          this.ramas=area.ramas.filter(rama=>{
            this.acreditacionesR=[];
            this.especializaciones=[];
            //console.log(acreditacion.nombre.toLocaleLowerCase().includes(texto));
            if(rama.nombre.toLocaleLowerCase().includes(texto)){
              return true;
            }
            if(rama.acreditaciones){
              this.acreditacionesR=rama.acreditaciones.filter(acreditacionR=>{
                //console.log(acreditacion.nombre.toLocaleLowerCase().includes(texto));
                return acreditacionR.nombre.toLocaleLowerCase().includes(texto);  
              })
              rama.acreditaciones=this.acreditacionesR
            }
            if(rama.especializaciones){
              this.especializaciones=rama.especializaciones.filter(esp=>{
                this.acreditacionesE=[];
                //console.log(acreditacion.nombre.toLocaleLowerCase().includes(texto));
                if(esp.nombre.toLocaleLowerCase().includes(texto)){
                  return true;
                }
                if(esp.acreditaciones){
                  this.acreditacionesE=esp.acreditaciones.filter(acreditacionE=>{
                    //console.log(acreditacion.nombre.toLocaleLowerCase().includes(texto));
                    return acreditacionE.nombre.toLocaleLowerCase().includes(texto);  
                  })
                  esp.acreditaciones=this.acreditacionesE
                }
                if(this.acreditacionesE.length>0){
                  return true;
                }
                return false;
              })
              rama.especializaciones=this.especializaciones;

            }
            
            if((this.especializaciones.length>0) || (this.acreditacionesR.length>0)){
              return true;
            }
            return false;
          })
            area.ramas=this.ramas; 
        }
        if((this.ramas.length>0) || (this.acreditaciones.length>0)){
          return true;
        }
        return false;
        /*console.log(area.nombre.toLocaleLowerCase().includes(texto));
         return area.nombre.toLocaleLowerCase().includes(texto);
      */}
    );
    return this.areas;
}}
