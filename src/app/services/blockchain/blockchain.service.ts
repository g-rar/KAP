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
  terminado = false;
  
  constructor(private w3 : Web3Service) {
  }

  async initContracts() {
    let usuarioAbstraction = await this.w3.artifactsToContract(usuarioArtifacts);
    this.contratoUsuario = await usuarioAbstraction.deployed();

    let acreditacionAbstraction = await this.w3.artifactsToContract(acreditacionArtifacts);
    this.contratoAcreditacion = await acreditacionAbstraction.deployed();
    this.terminado = true;
  }

  /* Usuario */

  async agregarUsuario(usuario) {
    await this.contratoUsuario.agregarUsuario.sendTransaction(usuario, {from: "0x156F98047b61385febEe2b5Cb67f2d975809D8b6"});
  }

  async getUsuarios() {
    const usuarios = await this.contratoUsuario.getUsuarios();
    return usuarios;
  }

  async getUsuario(cedula) {
    const usuario = await this.contratoUsuario.getUsuario(cedula);
    return usuario;
  }

  /* Acreditacion */

  async agregarAcreditacion(acreditacion) {
    await this.contratoAcreditacion.agregarAcreditacion.sendTransaction(acreditacion, {from: "0xa8e12c6216BcBA4C27E777144fDc8ff0F2bcE4Ec"});
  }
  
  async getAcreditacion(conocimiento, titulo) {
    await this.contratoAcreditacion.getAcreditacion(conocimiento, titulo);
  }

  async getAcreditaciones() {
    const acreditaciones = await this.contratoAcreditacion.getAcreditaciones();
    return acreditaciones;
  }

  /* AspiranteAcreditacion */

  async agregarAspiranteAcreditacion(aspiranteAcreditacion) {
    await this.contratoAcreditacion.agregarAspiranteAcreditacion.sendTransaction(aspiranteAcreditacion, {from: "0xa8e12c6216BcBA4C27E777144fDc8ff0F2bcE4Ec"});
  }
  
  async getAspiranteAcreditacion(cedula, idAcreditacion) {
    await this.contratoAcreditacion.getAspiranteAcreditacion(cedula, idAcreditacion);
  }

  async getAspirantes() {
    const aspirantes = await this.contratoAcreditacion.getAspirantes();
    return aspirantes;
  }

  async getAspirantesPorAcreditacion(idAcreditacion) {
    const aspirantes = await this.contratoAcreditacion.getAspirantesPorAcreditacion(idAcreditacion);
    return aspirantes;
  }
  
}