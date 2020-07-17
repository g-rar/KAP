import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MenuController} from '@ionic/angular'
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.page.html',
  styleUrls: ['./usermenu.page.scss'],
})
export class UsermenuPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private auth: AuthService, private menuCtrl: MenuController) {
    this.menuCtrl.enable(true,'menuContent');
   }

  ngOnInit() {
  }

}
