import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormVirtusPageRoutingModule } from './form-virtus-routing.module';

import { FormVirtusPage } from './form-virtus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormVirtusPageRoutingModule
  ],
  declarations: [FormVirtusPage]
})
export class FormVirtusPageModule {}
