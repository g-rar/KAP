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
  cuenta = "0x7FA3e839DCEc44d26e79547e9bb5ABFCd7DAb0C6";

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
    await this.contratoUsuario.agregarUsuario.sendTransaction(usuario, {from: this.cuenta}).then((result) => {
      console.log(result);
    });
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
    await this.contratoAcreditacion.agregarAcreditacion.sendTransaction(acreditacion, {from: this.cuenta});
  }
  
  async getAcreditacion(idAcreditacion) {
    await this.contratoAcreditacion.getAcreditacion(idAcreditacion);
  }

  async getAcreditaciones() {
    const acreditaciones = await this.contratoAcreditacion.getAcreditaciones();
    return acreditaciones;
  }

  /* AspiranteAcreditacion */

  async agregarAspiranteAcreditacion(aspiranteAcreditacion) {
    await this.contratoAcreditacion.agregarAspiranteAcreditacion.sendTransaction(aspiranteAcreditacion, {from: this.cuenta});
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

  async setAceptadoRechazado(idAcreditacion, idAspirante, aceptado) {
    await this.contratoAcreditacion.setAceptadoRechazado.sendTransaction(idAcreditacion, idAspirante, aceptado, {from: this.cuenta});   
  }
  
}