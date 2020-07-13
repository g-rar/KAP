import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearAcreditacionPageRoutingModule } from './crear-acreditacion-routing.module';

import { CrearAcreditacionPage } from './crear-acreditacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearAcreditacionPageRoutingModule
  ],
  declarations: [CrearAcreditacionPage]
})
export class CrearAcreditacionPageModule {}
