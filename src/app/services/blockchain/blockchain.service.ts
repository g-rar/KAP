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
          console.log(this.contratoUsuario);
          this.test();
        });
      });
  
    this.w3.artifactsToContract(acreditacionArtifacts)
      .then((acreditacionAbstraction) => {
        acreditacionAbstraction.deployed().then(deployed => {
          this.contratoAcreditacion = deployed;
        });
      });
  }

  async test() {
    var res = await this.contratoUsuario.agregarUsuario.sendTransaction(
    {apellidos: "Abarca",
    cedula: "111111",
    contrasenna: "Berune",
    correoElectronico: "baz@gmail.com",
    nombre: "Bernold",
    numeroTelefonico: "77774444",
    redesSociales: ["Facebook: felipepace09", "Instragram: felipepace09"],
  }, {from: "0x8DB1ffe4aEBd068AA8a2C41244A5016cb5591d9F"});
    var res = await this.contratoUsuario.getUsuarios();
    console.log(res);
  }

  async getUsuarios() {

    console.log(this.contratoUsuario);
    //const usuarios = await this.contratoUsuario.getUsuarios();
    //return usuarios;

  }

}


/*
pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract ServiciosUsuario {
    Usuario[] usuarios;
    mapping (uint256 => uint256) usuariosMap;
    
    struct Usuario {
        string nombre;
        string apellidos;
        string contrasenna;
        string correoElectronico;
        uint256 numeroTelefonico;
        string[] redesSociales;
        uint256 cedula;
    }
    

    constructor() public {
        Usuario memory usuario_;
        
        usuario_.nombre = "Felipe Pacheco";
        usuario_.apellidos = "Pacheco Cerdas";
        usuario_.contrasenna = "felpudo";
        usuario_.correoElectronico = "felipepace09@gmail.com";
        usuario_.numeroTelefonico = 85858585;
        string[] memory rrss = new string[](2);
        rrss[0] = "Facebook: felipepace09";
        rrss[1] = "Instragram: felipe09";
        usuario_.redesSociales = rrss;
        usuario_.cedula = 305280872;
        
        usuariosMap[usuario_.cedula] = usuarios.length;
        usuarios.push(usuario_);
    }
    
    function agregarUsuario(Usuario memory _usuario) public {
        usuariosMap[_usuario.cedula] = usuarios.length;
        usuarios.push(_usuario);
    }
    
    function getUsuario(uint256 cedula) public view returns (Usuario memory usuario) {
        return usuarios[usuariosMap[cedula]];
    }
    
    function getUsuarios() public view returns (Usuario[] memory usuario) {
        return usuarios;
    }
}


contract ServiciosAcreditacion {
    Acreditacion[] acreditaciones;
    
    AspiranteAcreditacion[] aspirantes;
   
    struct AspiranteAcreditacion {
        uint256 idAcreditacion;
        uint256 idAspirante;
    }
    
    struct Acreditacion {
        string titulo;
        uint256 idAcreditador;
        string conocimiento;
        string tipoMedio;
        string[] contenidos;
        string descripcion;
        int ignos;
    }
    
    constructor() public {
        Acreditacion memory acreditacion_;
        acreditacion_.titulo = "Python Basics";
        acreditacion_.idAcreditador = 305280872;
        acreditacion_.conocimiento = "Ciencias de la Computacion: Lenguajes de Programacion";
        acreditacion_.tipoMedio = "Examen Práctico";
        string[] memory ct = new string[](2);
        ct[0] = "Funciones";
        ct[1] = "Excepciones";
        acreditacion_.contenidos = ct;
        acreditacion_.descripcion = "En este curso aprenderás sobre el arte y la ciencia del anime";
        acreditacion_.ignos = 0;
        acreditacion_.ignos = 0;
        
        acreditaciones.push(acreditacion_);
    }
    
    function agregarAcreditacion(Acreditacion memory _acreditacion) public {
        acreditaciones.push(_acreditacion);
    }
    
    function getAcreditacion(uint256 id) public view returns (Acreditacion memory acreditacion) {
        return acreditaciones[0];
    }
    
    function getAcreditaciones() public view returns (Acreditacion[] memory acreditacion) {
        return acreditaciones;
    }

    
    function agregarAspiranteAcreditacion(AspiranteAcreditacion memory _acreditacionAspirante) public {
      aspirantes.push(_acreditacionAspirante);
  }
  
  function getAspiranteAcreditacion(uint256 idUsuario, uint256 idAcreditacion) public view returns (AspiranteAcreditacion memory acreditacionAspirante) {
      for (uint256 i = 0; i < aspirantes.length; i++) {
          if (aspirantes[i].idAcreditacion == idAcreditacion && aspirantes[i].idAspirante == idUsuario)  
              return  aspirantes[i];
      }
      return AspiranteAcreditacion(0, 0);
  }
  
  function getAspirantes() public view returns (AspiranteAcreditacion[] memory acreditacionAspirante) {
      return aspirantes;
  }
  
  function getAspirantesPorAcreditacion(uint256 idAcreditacion) public view returns (AspiranteAcreditacion[] memory acreditacionAspirante) {
      AspiranteAcreditacion[] memory res = new AspiranteAcreditacion[](aspirantes.length);
      uint256 j = 0;
      for (uint256 i = 0; i < aspirantes.length; i++) {
          if (aspirantes[i].idAcreditacion == idAcreditacion) { 
              res[j] = aspirantes[i];
              j++;
          }
      }
      return res;
  }
}
*/