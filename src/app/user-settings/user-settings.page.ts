import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.page.html',
  styleUrls: ['./user-settings.page.scss'],
})
export class UserSettingsPage implements OnInit {
  user_name;
  user_apellidos;
  user_email;
  user_telefono;
  user_redes;
  user_contrasena;
  user_cedula;

  constructor(private authService : AuthService, public alertController: AlertController, public router: Router) { 
    this.user_name = this.authService.actualUser.first_name;
    this.user_apellidos = this.authService.actualUser.last_name;
    this.user_email = this.authService.actualUser.email;
    this.user_telefono = this.authService.actualUser.telefono;
    this.user_redes = this.authService.actualUser.redes;
    this.user_contrasena = this.authService.actualUser.password;
    this.user_cedula = this.authService.actualUser.cedula;
  }

  ngOnInit() {
  }

  async actualizarUser(){
    this.authService.actualizarUser(this.user_name,this.user_apellidos,this.user_email, this.user_telefono , this.user_redes ,this.user_contrasena, this.user_cedula);
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Datos actualizados',
      buttons: ['Aceptar']
    });
    await alert.present();
    this.router.navigate(['/usermenu'])
  }

}
