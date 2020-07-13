import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public user ={
    imageURL:"https://recap-project.eu/wp-content/uploads/2017/02/default-user.jpg",
    name: "Maria Juana"
  }
  
  public navigate =   
    [  
    { 
    title : 'Acreditaciones',
    url   : '/accreditations',
    icon  : 'book' 
    },
    { 
    title : 'Mis acreditaciones',  
    url   : '/accreditations',  
    icon  : 'school'  
    },
    { 
      title : 'Crear acreditación',  
      url   : '/accreditations',  
      icon  : 'newspaper'  
      },   
    {  
    title : 'Editar perfil',  
    url   : '/user-settings',  
    icon  : 'person'   
    },  
    {  
    title : 'Cerrar sesión',  
    url   : '/inicio',  
    icon  : 'log-out'  
    },   
    {
    title : 'Acerca de',
    url   : '/facebook.com',
    icon  : 'help-circle'
    },
    ];  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {

  }
}
