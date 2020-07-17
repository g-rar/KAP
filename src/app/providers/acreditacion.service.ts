import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlockchainService } from '../services/blockchain/blockchain.service';


@Injectable({
  providedIn: 'root'
})
export class AcreditacionService {
   
  constructor(private http:HttpClient, private blockchain: BlockchainService) { }

  async getAreas() {
    await this.blockchain.initContracts();
    let acreditaciones = await this.blockchain.getAcreditaciones();
    let res = [];

    for (let acreditacion of acreditaciones) {
      console.log(res);
      "    CS:   FS:     D DD   "
      let conos = acreditacion.conocimiento.split(":");
      let area = (conos[0].trim());
      let rama = (conos.length > 1) ? (conos[1].trim()): "";
      let especializacion = (conos.length > 2) ? (conos[2].trim()): "";
      
      /*
      let area = (cono.includes(":")) ?
                 (cono.substring(0, cono.indexOf(":"))).trim():
                 (cono).trim(); 
      let rama = ((cono.substring(cono.indexOf(":")+1, cono.length).includes(":"))) ?
                 (cono.substring(cono.indexOf(":"), cono.lastIndexOf(":"))).trim():
                 (cono.substring(cono.indexOf(":")+1, cono.length).trim());
      let especializacion = 
                 (cono.substring(cono.lastIndexOf(":"), cono.length-1)).trim();
      */
                 console.log(area, "|||", rama, "|||", especializacion);
      

      let aux_area = {};
      res.forEach(area_ => {if (area_["nombre"] == area) aux_area = area_});
      if (!aux_area["nombre"]) {
        aux_area = {"nombre": area, "ramas": [], "acreditaciones": []};
        res.push(aux_area);
      }
      
      if (rama) {
        let aux_rama = {};
        aux_area["ramas"].forEach(rama_ => {if (rama_["nombre"] == rama) aux_rama = rama_});
        if (!aux_rama["nombre"]) {
          aux_rama = {"nombre": rama, "especializaciones": [], "acreditaciones": []};
          aux_area["ramas"].push(aux_rama);
        }

        if (especializacion) {
          let aux_especializacion = {};
          aux_rama["especializaciones"].forEach(especializacion_ => {if (especializacion_["nombre"] == especializacion) aux_especializacion = especializacion_});
          if (!aux_especializacion["nombre"]) {
            aux_especializacion = {"nombre": especializacion, "acreditaciones": []};
            aux_rama["especializaciones"].push(aux_especializacion);
          }
          aux_especializacion["acreditaciones"].push(acreditacion);
        } else {
          aux_rama["acreditaciones"].push(acreditacion);
        }  
      } else {
        aux_area["acreditaciones"].push(acreditacion);
      } 
    }
    return res;
  }

  async getAcreditacion(idAcreditacion) {
    await this.blockchain.initContracts();
    let acreditaciones = await this.blockchain.getAcreditaciones(); 
    for (let acreditacion of acreditaciones) {
      if (acreditacion["idAcreditacion"] == idAcreditacion) {
        acreditacion["acreditador"] = await this.blockchain.getUsuario(acreditacion["idAcreditador"]); 
        return acreditacion;  

      }
    }
  } 
}
