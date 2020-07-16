import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-virtus',
  templateUrl: './form-virtus.page.html',
  styleUrls: ['./form-virtus.page.scss'],
})
export class FormVirtusPage implements OnInit {
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
      message: 'Has dado ' + (formValue.uno + formValue.dos + formValue.tres + formValue.cuatro) + ' 🍃',
      buttons: ['Aceptar']
    });
    await alert.present();
    this.router.navigate(['/usermenu'])
  }
}
