import { Component, OnInit } from '@angular/core';
import { AcreditacionService } from '../providers/acreditacion.service';
import { stringify } from 'querystring';


@Component({
  selector: 'app-crear-acreditacion',
  templateUrl: './crear-acreditacion.page.html',
  styleUrls: ['./crear-acreditacion.page.scss'],
})
export class CrearAcreditacionPage implements OnInit {
  public contents=[]; 
  public content:String = "";
  areas: any[] =[]; 
  ramas: any[] =[];

  area:String=""
  rama:String=""
  especializacion:string=""

  areasNombres: String[] = [];
  ramasNombres: String[] = [];
  especializacionesNombres: String[] = [];

  constructor(private acreditacionService:AcreditacionService) { 
    this.acreditacionService.getAreas().subscribe(resp=>{
      this.areas=resp;
      this.setAreasNames();
    })
  }
  
  addContent(){
    if(this.content != ""){
      this.contents.push( this.content.toString());
      this.content=""
    }
  }

  removeContent(index:number){
    this.contents.splice(index,1)
  }

  setAreasNames(){
    var areasNames:String[] = []
    for (let area of this.areas){
      areasNames.push(area.nombre)
    }
    this.areasNombres=areasNames
    console.log(areasNames)
  }
  setRamasNames(){
    const resultArea = {
      ...this.areas.find(area=>
        area.nombre == this.area 
      )
    }
    console.log(resultArea)
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
    console.log(resultRama)
    if (Object.keys(resultRama).indexOf("especializaciones")>0){
      for (let especializacion of resultRama.especializaciones){
        this.especializacionesNombres.push(especializacion.nombre)
      }
      this.especializacion=resultRama.especializaciones
    }  
  }

  onSelectChange(selectedValue:any){
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
  onSelectRamaChange(selectedValue:any){
    console.log('Selected',selectedValue.detail.value)
  }
  
  


  ngOnInit() {


  }

}
