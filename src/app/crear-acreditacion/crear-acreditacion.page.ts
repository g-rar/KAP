import { Component, OnInit } from '@angular/core';
import { AcreditacionService } from '../providers/acreditacion.service';
import { stringify } from 'querystring';
import {Acreditacion} from '../../models/acreditation'
import {AuthService} from '../services/auth.service'
import {AlertService} from '../services/alert.service'
import {AcreditationRegisterService } from '../services/acreditation-register.service';

import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-crear-acreditacion',
  templateUrl: './crear-acreditacion.page.html',
  styleUrls: ['./crear-acreditacion.page.scss'],
})
export class CrearAcreditacionPage implements OnInit {
  public content:String = "";
  areas: any[] =[]; 
  ramas: any[] =[];

  area:String=""
  rama:String=""
  especializacion:string=""

  acreditacion:Acreditacion={
    titulo : "",
    idAcreditador : "",
    conocimiento : "",
    tipoMedio: "",
    contenidos: [],
    descripcion: "",
    ignos:0,
    virtus:0
  }


  areasNombres: String[] = [];
  ramasNombres: String[] = [];
  especializacionesNombres: String[] = [];

  constructor(private acredRegService:AcreditationRegisterService,
              private alertservice:AlertService,
              private authService : AuthService,
              private acreditacionService:AcreditacionService,
              public navCtrl: NavController) { 
    this.acreditacionService.getAreas().subscribe(resp=>{
      this.areas=resp;
      this.setAreasNames();
    })
  }
  
  addContent(){
    if(this.content != ""){
      this.acreditacion.contenidos.push( this.content.toString());
      this.content="";
    }
  }
  setConocimiento(){
    var result:String;
    result = this.area;
    if(this.rama!=""){
      result += ':' +this.rama
      if(this.especializacion!=""){
        result += ':' + this.especializacion
      }
    }
    this.acreditacion.conocimiento=result
  }
  public registrarAcreditacion(){
    this.acreditacion.idAcreditador=this.authService.actualUser.cedula
    const ac = {...this.acreditacion}
    if(ac.conocimiento!="" && ac.contenidos !=[] && ac.descripcion!="" &&
       ac.tipoMedio!="" && ac.titulo!=""){

      this.alertservice.presentAlert("","Acreditación registrada con exito")
      this.limpiarDatos()
      this.acredRegService.registrarAcreditacion(ac)
      this.navCtrl.navigateRoot(['/usermenu']);
      }else{
        this.alertservice.presentAlert("Error","Datos incompletos")
      }
  }
  limpiarDatos(){
    this.area=""
    this.rama=""
    this.especializacion=""
    this.acreditacion.conocimiento=""
    this.acreditacion.contenidos=[]
    this.acreditacion.descripcion=""
    this.acreditacion.idAcreditador=""
    this.acreditacion.tipoMedio=""
    this.acreditacion.titulo=""
  }

  removeContent(index:number){
    this.acreditacion.contenidos.splice(index,1)
  }

  setAreasNames(){
    var areasNames:String[] = []
    for (let area of this.areas){
      areasNames.push(area.nombre)
    }
    this.areasNombres=areasNames
  }
  setRamasNames(){
    const resultArea = {
      ...this.areas.find(area=>
        area.nombre == this.area 
      )
    }
    if (Object.keys(resultArea).indexOf("ramas")>0){
      for (let rama of resultArea.ramas){
        this.ramasNombres.push(rama.nombre)
      }
      this.ramas=resultArea.ramas
    }  
  }
  setEspecializacionesNames(){
    const resultRama = {
      ...this.ramas.find(rama=>
        rama.nombre == this.rama 
      )
    }
    if (Object.keys(resultRama).indexOf("especializaciones")>0){
      for (let especializacion of resultRama.especializaciones){
        this.especializacionesNombres.push(especializacion.nombre)
      }
      this.especializacion=resultRama.especializaciones
    }  
  }

  onSelectChange(selectedValue:any){
    this.setConocimiento()
    const src:String =selectedValue.srcElement.attributes.name.nodeValue
    if(src=="sArea"){
      this.rama=""
      this.ramas=[]
      this.ramasNombres=[]
      this.setRamasNames()
    }
    if(src=="sRama" || src =='sArea'){
      this.especializacion=""
      this.especializacionesNombres=[]
      this.setEspecializacionesNames()
    }
    
 
  }
  
  


  ngOnInit() {


  }

}
