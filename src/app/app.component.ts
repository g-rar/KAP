import { Component, OnInit } from '@angular/core';

import { Platform, AlertController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from '@ionic/angular';
import { BlockchainService } from './services/blockchain/blockchain.service';
import { AuthService} from './services/auth.service'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public user ={
    imageURL:"https://recap-project.eu/wp-content/uploads/2017/02/default-user.jpg",
    name: this.authService.loggedIn ? this.authService.actualUser.first_name + " "+ this.authService.actualUser.last_name : "Anonymous"
  }
  
  public menu =
  [
    {
    title : 'Acreditaciones',
    url   : '/accreditations',
    icon  : 'book-outline' 
    },
    { 
    title : 'Mis Acreditaciones',
    url   : '/mis-acreditaciones',
    icon  : 'documents-outline'
    }]
  public cuenta= [   
    {  
    title : 'Editar Perfil',  
    url   : '/user-settings',  
    icon  : 'settings-outline'   
    },  
    {  
    title : 'Cerrar sesión',  
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
    icon  : 'add-circle-outline'  
  }
  public acreditador = false;
  protected menuName = "Aspirante";
  protected tutorial

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    private blockchain: BlockchainService,
    public authService:AuthService,
    public toastController: ToastController
  ) {
    this.initializeApp();
    this.acreditador=authService.acreditador
    
  }

  async cambiarUsuario(){
    if(this.authService.acreditador){
      this.cambiarUsr.title='Cambiar a Acreditador';
      this.menuName='Aspirante';
      //this.menu.find(element => element.title == "Tutorial").url="/tutorial-aspirante"
      this.navCtrl.navigateRoot(['/usermenu']);
      this.authService.acreditador=false
      const toast = await this.toastController.create({
        message: '¡Ahora eres aspirante!',
        color: 'light',
        duration: 2000
      });
      toast.present();
    }
     
    else{
      this.cambiarUsr.title='Cambiar a Aspirante';
      this.menuName='Acreditador'
      //this.menu.find(element => element.title == "Mis Acreditaciones").url="/tutorial-acreditador"
      this.navCtrl.navigateRoot(['/usermenu']);
      this.authService.acreditador=true;
      const toast = await this.toastController.create({
        message: '¡Ahora eres acreditador!',
        color: 'light',
        duration: 2000
      });
      toast.present();
    }

    }

    


  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.blockchain.initContracts().then(() => console.log("Contracts ready"));
    });
  }

  ngOnInit() {
  }
}
