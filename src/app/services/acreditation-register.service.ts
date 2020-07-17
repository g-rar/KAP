import { Injectable } from '@angular/core';
import {Acreditacion} from '../../models/acreditation'
import { BlockchainService } from './blockchain/blockchain.service';

@Injectable({
  providedIn: 'root'
})
export class AcreditationRegisterService {

  constructor(private blockChain : BlockchainService) { 
    if(!blockChain.terminado){
      blockChain.initContracts()
    }
  }
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
  public async registrarAcreditacion(acreditacion:Acreditacion ){
    acreditacion.idAcreditacion=this.acreditaciones.length
    this.blockChain.agregarAcreditacion(acreditacion).then((result)=>{
      console.log(result);
    })
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