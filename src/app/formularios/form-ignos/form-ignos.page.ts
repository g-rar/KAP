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
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Acreditación evaluada',
      message: 'Has dado ' + (formValue.uno + formValue.dos + formValue.tres + formValue.cuatro) + ' 🔥',
      buttons: ['Aceptar']
    });
    await alert.present();
    this.router.navigate(['/usermenu'])
  }

}
