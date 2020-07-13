import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from '@ionic/angular';
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
  
  public menu =   
    [  
    { 
    title : 'Acreditaciones',
    url   : '/accreditations',
    icon  : 'book-outline' 
    imageURL:"https://recap-project.eu/wp-content/uploads/2017/02/default-user.jpg",
    },
    { 
    title : 'Tutorial',  
    url   : '/tutorial-acreditador',  
    icon  : 'document-outline'  
    }]
  public cuenta= [   
    {  
    title : 'Configuración',  
    url   : '/user-settings',  
    icon  : 'settings-outline'   
    },  
    {  
    title : 'Logout',  
    url   : '/inicio',  
    icon  : 'log-out-outline'  
    }
    ];  
  public cambiarUsr ={
    title : 'Cambiar a Acreditador',
    icon  : 'person-outline'
    }
  public crearAcreditacion = {
    title : 'Crear Acreditación',  
    url   : '/crear-acreditacion',  
    icon  : 'add-outline'  
  }
  private acreditador = true;
  protected menuName = "Acreditador";
  protected tutorial

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController
  ) {
    this.initializeApp();
  }

  cambiarUsuario(){
    if(this.acreditador){
      this.cambiarUsr.title='Cambiar a Acreditador';
      this.menuName='Aspirante';
      this.menu.find(element => element.title == "Tutorial").url="/tutorial-aspirante"
      this.navCtrl.navigateRoot(['/tutorial-aspirante']);
      this.acreditador = false;
      }
     
      else{
          this.cambiarUsr.title='Cambiar a Aspirante';
          this.menuName='Acreditador'
          this.menu.find(element => element.title == "Tutorial").url="/tutorial-acreditador"
          this.navCtrl.navigateRoot(['/tutorial-acreditador']);
          this.acreditador=true
      }

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
