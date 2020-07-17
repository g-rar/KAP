import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-ignos',
  templateUrl: './form-ignos.page.html',
  styleUrls: ['./form-ignos.page.scss'],
})
export class FormIgnosPage implements OnInit {
  loginForm:any;

  constructor(public alertController: AlertController, public router: Router, private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({ 'uno':new FormControl(), 
                                              'dos':new FormControl(),
                                              'tres':new FormControl(), 
                                              'cuatro':new FormControl(),})

  }

  async presentAlert(formValue) {
    console.log(formValue);
    
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Acreditación evaluada',
      message: 'Has dado ' + (((!formValue.uno)?1:formValue.uno) + 
                              ((!formValue.dos)?1:formValue.dos) +
                              ((!formValue.tres)?1:formValue.tres) +
                              ((!formValue.cuatro)?1:formValue.cuatro)) / 4.0 + ' 🔥',
      buttons: ['Aceptar']
    });
    await alert.present();
    window.history.back();
  }

}
