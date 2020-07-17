import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisAcreditacionesPageRoutingModule } from './mis-acreditaciones-routing.module';

import { MisAcreditacionesPage } from './mis-acreditaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisAcreditacionesPageRoutingModule
  ],
  declarations: [MisAcreditacionesPage]
})
export class MisAcreditacionesPageModule {}
