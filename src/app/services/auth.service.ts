import { Injectable } from '@angular/core';
import { LoginPage } from '../login/login.page';
import {Acreditador} from '../../models/acreditador'
import {Aspirante} from '../../models/aspirante'
import { rejects } from 'assert';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private users = [
    {
      email: "hola@gmail.com",
      password: "password",
    }

  ]

  login(email:string,password:string){
    return new Promise((resolve,rejected)=>{
      const user = {
        ...this.users.find(user=>
          user.email === email && user.password === password
        )
      }
      if (Object.keys(user).length === 0){
        rejected(null);
      }
      resolve(user);


    })





  }

  
}

