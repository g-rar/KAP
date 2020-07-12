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
    imageURL:"http://imagenesparacelulares.net/wp-content/uploads/2016/05/imagenes-de-gatos-para-perfil-whatsapp6.jpg",
    name:"Fernanda Ruiz"
  }
  
  public navigate =   
    [  
    { 
    title : 'Acreditaciones',
    url   : '/accreditations',
    icon  : 'book' 
    },
    { 
    title : 'Book',  
    url   : '/usermenu',  
    icon  : 'book'  
    },   
    {  
    title : 'Paint',  
    url   : '/paint',  
    icon  : 'brush'   
    },  
    {  
    title : 'Twitter',  
    url   : '/contacts',  
    icon  : 'logo-twitter'  
    },   
    {
    title : 'Facebook',
    url   : '/facebook.com',
    icon  : 'logo-facebook'
    },
    ];  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
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
