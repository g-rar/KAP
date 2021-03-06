import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service'
import {AcreditationRegisterService} from '../services/acreditation-register.service'
import {Acreditacion} from '../../models/acreditation'
import {User} from '../../models/user'

@Component({
  selector: 'app-mis-acreditaciones',
  templateUrl: './mis-acreditaciones.page.html',
  styleUrls: ['./mis-acreditaciones.page.scss'],
})
export class MisAcreditacionesPage implements OnInit {
  
  acreditaciones:Acreditacion[]
  user:User
  acreditador:boolean
  constructor(private authService:AuthService, private acreditationRegServ:AcreditationRegisterService ) { 
    this.user=authService.actualUser
    this.acreditador=authService.acreditador
    if(this.acreditador){
      this.acreditaciones=acreditationRegServ.consultarAcreditaciones(this.user.cedula)
    }

  }

  ngOnInit() {

  }

}
