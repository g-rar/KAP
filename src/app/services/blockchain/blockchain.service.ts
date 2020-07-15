import { Injectable } from '@angular/core';
import { Web3Service } from 'src/app/util/web3.service';
import { runInThisContext } from 'vm';
const usuarioArtifacts = require('../../../../build/contracts/ServiciosUsuario.json');
const acreditacionArtifacts = require('../../../../build/contracts/ServiciosAcreditacion.json');

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  contratoUsuario:any;
  contratoAcreditacion:any;
  
  constructor(private w3 : Web3Service) {
    this.initContracts(); 
    
  }

  async initContracts() {
    const delay = new Promise(resolve => setTimeout(resolve, 100));
    // while(!this.w3.ready){
    //   console.log("picha");
      
    //   await delay;
    // }
    this.w3.artifactsToContract(usuarioArtifacts)
      .then((usuarioAbstraction) => {
        usuarioAbstraction.deployed().then(deployed => {
          this.contratoUsuario = deployed;
        });
      });
  
    this.w3.artifactsToContract(acreditacionArtifacts)
      .then((acreditacionAbstraction) => {
        acreditacionAbstraction.deployed().then(deployed => {
          this.contratoAcreditacion = deployed;
        });
      });
  }

  async getUsuarios() {
    if(this.w3.ready){
      const usuarios = await this.contratoUsuario.getUsuarios();
      return usuarios;
    } else {
      console.log("No estaba listo");
    }
  }

}
