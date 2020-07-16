import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service'
import { AlertService} from '../services/alert.service'
import { FormBuilder, FormControl,Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { AppComponent} from '../app.component';
import {MenuController} from '@ionic/angular'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm:any;

  constructor(private menuCtrl: MenuController,private appComponent : AppComponent, private authService : AuthService,private alertService : AlertService, private formBuilder : FormBuilder, public router: Router) {

    this.menuCtrl.enable(false,'menuContent')
   }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({'email':new FormControl('',[Validators.required, Validators.email]), 'password':new FormControl('',Validators.required)})
  }

  onSubmitLogin(formValue){
    this.authService.login(formValue.email,formValue.password).then(
      res =>{
        this.appComponent.user.name = this.authService.actualUser.first_name + " " + this.authService.actualUser.last_name;
        this.router.navigate(['/usermenu'])

    }).catch(err => this.alertService.presentAlert("Error al iniciar sesión","Email o contraseña incorrectos"));
    
  }




}
