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

  async consultarAcreditaciones(idAcreditador){ 
    await this.blockChain.initContracts();
    let acreditaciones = await this.blockChain.getAcreditaciones();
    let res = [];
    for (let acre of acreditaciones) {
      if (acre["idAcreditador"] == idAcreditador) res.push(acre);
    }
    return res;
  }

  async consultarAspirancia(idAspirante){ 
    await this.blockChain.initContracts();
    let acreditaciones = await this.blockChain.getAcreditaciones();
    let aspirantes = await this.blockChain.getAspirantes();
    let res = [];
    for (let acre of acreditaciones) {
      for (let asp of aspirantes) {
        if (asp["idAcreditacion"] == acre["idAcreditacion"]) {
          if (asp["idAspirante"] == idAspirante) res.push(acre);
        }
      }
      
    }
    return res;
  }


  public async registrarAcreditacion(acreditacion:Acreditacion ){
    let acreditaciones = await this.blockChain.getAcreditaciones();
    acreditacion.idAcreditacion=acreditaciones.length;
    this.blockChain.agregarAcreditacion(acreditacion).then((result)=>{
      console.log(result);
    })
    acreditaciones.push(acreditacion);
    console.log(acreditaciones);
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