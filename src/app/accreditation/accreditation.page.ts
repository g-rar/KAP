import { Component, OnInit, Input, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __await } from 'tslib';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { IonContent, IonLabel } from '@ionic/angular';
import { AcreditacionService } from '../providers/acreditacion.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-accreditation',
  templateUrl: './accreditation.page.html',
  styleUrls: ['./accreditation.page.scss'],
})
export class AccreditationPage implements OnInit {

  conocimiento:any;
  titulo:any;
  area:any;
  rama:any;
  especializacion:any;
  mobile:any;
  contenidos:any;
 descripcion: any;
  areas:any;
  virtus: any;
  ignos: any;
  idAcreditacion: any;
  idAcreditador: any;
  tipoMedio: any;
  usuario: any = {};
  ignos_ar = [];
  virtus_ar = [];
  acreditador = false;
  soyYo = false;
  terminada: any = 0;
  

  constructor(private activatedRoute: ActivatedRoute, private  acreditacionService:AcreditacionService, private authService: AuthService) { }
  ngOnInit() {
    if (document.body.offsetWidth < 360) { // 768px portrait
      this.mobile = true;
    }
    this.idAcreditacion = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.acreditacionService.getAcreditacion(Number(this.idAcreditacion)).then(res => {
      this.titulo = res["titulo"];

      let conos = res.conocimiento.split(":");
      this.area = (conos[0].trim());
      this.rama = (conos.length > 1) ? (conos[1].trim()): "";
      this.especializacion = (conos.length > 2) ? (conos[2].trim()): "";

      this.descripcion = res["descripcion"];
      this.contenidos = res["contenidos"];
      this.idAcreditacion = res["idAcreditacion"];
      this.idAcreditador = res["idAcreditador"];
      this.ignos = res["ignos"];
      this.tipoMedio = res["tipoMedio"];
      this.virtus = res["virtus"];
      this.ignos_ar = [].constructor(Number(this.ignos));
      this.virtus_ar = [].constructor(Number(this.virtus));
      this.usuario = res["acreditador"];
      this.acreditador = this.authService.acreditador;
      this.soyYo = this.authService.actualUser.cedula == this.usuario.cedula;
      
      this.acreditacionService.getAspiranteAcreditacion(this.idAcreditacion, this.usuario.cedula).then(res => {
        if (res) {
          this.terminada = (res["estado"] == "Finalizada") ? 1: 2;
        }
      });
    });
  }
}
