import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service'
import { AlertService} from '../services/alert.service'
import { FormBuilder, FormControl,Validators } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  RegisterForm:any;

  constructor(private authService : AuthService,private alertService : AlertService, private formBuilder : FormBuilder, public router: Router) { }
  

  ngOnInit() {
    this.RegisterForm = this.formBuilder.group({'fName':new FormControl('',Validators.nullValidator),
                                                'lName':new FormControl('',Validators.nullValidator),
                                                'cedula':new FormControl('',Validators.nullValidator),
                                                'telefono':new FormControl('',Validators.nullValidator),
                                                'email':new FormControl('',[Validators.required, Validators.email]), 
                                                'password':new FormControl('',Validators.required)})
  }

  onSubmitRegister(formValue){
    this.authService.register(formValue.fName,formValue.lName,formValue.cedula,formValue.telefono, formValue.email,formValue.password);
    this.router.navigate(['/login']);
    
  }

}
