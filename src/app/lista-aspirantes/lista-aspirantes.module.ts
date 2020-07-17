import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaAspirantesPageRoutingModule } from './lista-aspirantes-routing.module';

import { ListaAspirantesPage } from './lista-aspirantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaAspirantesPageRoutingModule
  ],
  declarations: [ListaAspirantesPage]
})
export class ListaAspirantesPageModule {}
