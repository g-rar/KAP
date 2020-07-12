import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AccreditationsPageRoutingModule } from './accreditations-routing.module';

import { AccreditationsPage } from './accreditations.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccreditationsPageRoutingModule,
    PipesModule
  ],
  declarations: [AccreditationsPage]
})
export class AccreditationsPageModule {}
