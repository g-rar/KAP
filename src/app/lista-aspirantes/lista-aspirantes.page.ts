import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../services/blockchain/blockchain.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-aspirantes',
  templateUrl: './lista-aspirantes.page.html',
  styleUrls: ['./lista-aspirantes.page.scss'],
})
export class ListaAspirantesPage implements OnInit {

  aspirantes : any[] = []
  idAcreditacion: any;
  blockchain: BlockchainService;

  constructor(private activatedRoute: ActivatedRoute, blockchain: BlockchainService) {
    this.idAcreditacion = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.blockchain = blockchain;
    this.blockchain.initContracts().then (() => {
      blockchain.getAspirantes().then(res => {
        blockchain.getUsuarios().then(res2 => {
          for (let asp of res) {
            if (asp["idAcreditacion"] == this.idAcreditacion) {
              for (let user of res2) {
                if (asp["idAspirante"] == user["cedula"]) {
                  console.log(asp);
                  user["estado"] = "No"
                  if (asp["estado"] == "En proceso") user["estado"] = "No"
                  if (asp["resultado"] == "Aceptado") user["estado"] = "Si1"
                  if (asp["resultado"] == "Rechazado") user["estado"] = "Si2"
                  this.aspirantes.push(user);
                }
              }
            }
          }
          console.log(this.aspirantes);
        })
      });
      

    });
    
   }

  ngOnInit() {
  }

  async aceptar(usuario) {
    usuario.estado = "Si1"
    await this.blockchain.setAceptadoRechazado(this.idAcreditacion, usuario.cedula, 1);
    
  }
  async rechazar(usuario) {
    usuario.estado = "Si2"
    await this.blockchain.setAceptadoRechazado(this.idAcreditacion, usuario.cedula, 0);
  
  }
}
