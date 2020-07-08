import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular'


@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.page.html',
  styleUrls: ['./usermenu.page.scss'],
})
export class UsermenuPage implements OnInit {

  constructor(private menuCtr:MenuController) { }
  navigate: any;  
  public user:any 
  ngOnInit() {
    this.sideMenu();
    this.user ={
      imageURL:"http://imagenesparacelulares.net/wp-content/uploads/2016/05/imagenes-de-gatos-para-perfil-whatsapp6.jpg",
      name:"Fernanda Ruiz"
    }

  }
  toggleMenu(){
    this.menuCtr.open();
  }

  closeMenu(){
    this.menuCtr.close();

  }
  sideMenu() {  
    this.navigate =   
    [  
    { 
    title : 'App',
    url   : '/apps',
    icon  : 'apps' 
    },
    { 
    title : 'Book',  
    url   : '/book',  
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
   }  

}
