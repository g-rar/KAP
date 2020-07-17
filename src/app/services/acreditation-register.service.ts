import { Injectable } from '@angular/core';
import {Acreditacion} from '../../models/acreditation'

@Injectable({
  providedIn: 'root'
})
export class AcreditationRegisterService {

  constructor() { }
  private acreditaciones :  Acreditacion[]= [
    {
      titulo : "GESTA FRANCORUM",
      idAcreditacion : 1,
      idAcreditador : "12345678",
      conocimiento : "Medicina:Medicina2:Medicina3",
      tipoMedio: "Examen",
      contenidos: ["1","2"],
      descripcion: "Comes igitur et Boamundus perrexerunt ad Sancti Simeonis portum. Nos uero, qui remansimus, congregati in unum, castrum incipiebamus, dum Turei preparauerunt se ilico, et exierunt extra ciuitatem obuiam nobis ad prelium. Sic itaque irruerunt super nos, et miserunt nostros in fugam, occideruntque plures ex nostris, unde tristes ualde fuimus. ",
      ignos:0,
      virtus:0
    }

  ]
  public consultarAcreditaciones(idAcreditador:String):Acreditacion[]{ 
    return [this.acreditaciones.find(res => res.idAcreditador=idAcreditador)]
  }
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