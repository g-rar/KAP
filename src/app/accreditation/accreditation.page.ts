import { Component, OnInit, Input, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __await } from 'tslib';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { IonContent, IonLabel } from '@ionic/angular';
import { AcreditacionService } from '../providers/acreditacion.service';

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
  

  constructor(private activatedRoute: ActivatedRoute, private  acreditacionService:AcreditacionService) { }
  ngOnInit() {
    if (document.body.offsetWidth < 360) { // 768px portrait
      this.mobile = true;
    }
      this.acreditacionService.getAreas().subscribe(resp=>this.areas=resp);
    this.conocimiento = this.activatedRoute.snapshot.paramMap.get('id').split('¬') ;
    let tamanno=this.conocimiento.length;
    this.titulo = this.conocimiento[tamanno-1];
  
    this.area = this.conocimiento [0];
    if(tamanno===3){
      this.rama=this.conocimiento[1];
    }else if(tamanno===4){
      this.rama=this.conocimiento[1];
      this.especializacion=this.conocimiento[2];
    }
    setTimeout(() => {for(let area of this.areas){
      if(area.nombre===this.area){
        for(let acreditacion of area.acreditaciones){
          if(acreditacion.nombre===this.titulo){
            this.descripcion=acreditacion.descripcion;
            this.contenidos=acreditacion.contenidos;
            break;
          }
        }
        for(let rama of area.ramas){
          if(rama.nombre===this.rama){
            for(let acreditacion of rama.acreditaciones){
              if(acreditacion.nombre===this.titulo){
                this.descripcion=acreditacion.descripcion;
                this.contenidos=acreditacion.contenidos;
                break;
              }
            }for(let esp of rama.especializaciones){
              if(esp.nombre===this.especializacion){
                for(let acreditacion of esp.acreditaciones){
                  if(acreditacion.nombre===this.titulo){
                    this.descripcion=acreditacion.descripcion;
                    this.contenidos=acreditacion.contenidos;
                    break;
                  }
              }
            }
          }
          }
        }
      }
    };},300);
  }
 

}
