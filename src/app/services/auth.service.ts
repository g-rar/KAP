import { Injectable } from '@angular/core';
import { LoginPage } from '../login/login.page';
import {Acreditador} from '../../models/acreditador'
import {Aspirante} from '../../models/aspirante'
import { rejects } from 'assert';
import {User} from '../models/User';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private users :  User[]= [
    {
      first_name : "hola",
      last_name : "hola",
      email: "hola@gmail.com",
      password: "password",
    }

  ]

  public actualUser : User;

  login(email:string,password:string){
    return new Promise((resolve,rejected)=>{
      const user = {
        ...this.users.find(user=>
          user.email === email && user.password === password
        )
      }
      this.actualUser = user;
      if (Object.keys(user).length === 0){
        rejected(null);
      }
      resolve(user);


    })
  }

  register(fName: string, lName: string, email: string, password: string) {
    this.users.push(
      {
      first_name :fName,
      last_name :lName,
      email,
      password,
      }
    )
  }

  
}

