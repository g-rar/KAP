import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular'

@Component({
  selector: 'app-tutorial-acreditador',
  templateUrl: './tutorial-acreditador.page.html',
  styleUrls: ['./tutorial-acreditador.page.scss'],
})
export class TutorialAcreditadorPage implements OnInit {

  constructor(private menuCtrl: MenuController) { 
    this.menuCtrl.enable(true,'menuContent');
  }

  ngOnInit() {
  }

}