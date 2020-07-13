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

  /*
  testPromise():Promise<string> {
    return new Promise<string>((resolve, reject) => {

      //hace un buen par de cosas aqui que pueden tomar mucho tiempo
      if(false){
        resolve('hola mundo')
      } else {
        reject('Fallo')
      }

    })
  }

  usePromise(){
    //esto se hace primero
    console.log("se va a llamar la promesa");
    //se pone a correr la funcion
    this.testPromise().then((result) => {
      //se ejecuta hasta que se resuelva la promesa
      console.log(result);
    }).catch((error) => {
      //se ejecuta si la promesa rechaza
      console.error(error);
    })
    //esto en una promesa que tarde mas tiempo se imprimiria de segundo
    console.log("la promesa no ha terminado");
    
  }
  */
}
