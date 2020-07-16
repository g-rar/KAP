import { Injectable } from '@angular/core';
import {Acreditacion} from '../../models/acreditation'

@Injectable({
  providedIn: 'root'
})
export class AcreditationRegisterService {

  constructor() { }
  private acreditaciones :  Acreditacion[]= [
    {
      titulo : "hola",
      idAcreditacion : 1,
      idAcreditador : "12345678",
      conocimiento : "Medicina",
      tipoMedio: "Examen",
      contenidos: ["1","2"],
      descripcion: "HOLA",
      ignos:0,
      virtus:0
    }

  ]
  public registrarAcreditacion(acreditacion:Acreditacion ){
    acreditacion.idAcreditacion=this.acreditaciones.length
    this.acreditaciones.push(acreditacion)
    console.log(this.acreditaciones)
  }

}


//export interface Acreditacion {
  //titulo:String;
  //idAcreditacion?:number;
  //idAcreditador:String;
  //conocimiento:number;
  //tipoMedio:String;
  //contenidos:String[];
  //descripcion:String;
  //ignos:number;
  //virtus:number;
//}