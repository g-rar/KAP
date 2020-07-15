import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormIgnosPageRoutingModule } from './form-ignos-routing.module';

import { FormIgnosPage } from './form-ignos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormIgnosPageRoutingModule
  ],
  declarations: [FormIgnosPage]
})
export class FormIgnosPageModule {}
