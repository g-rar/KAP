import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialAspirantePageRoutingModule } from './tutorial-aspirante-routing.module';

import { TutorialAspirantePage } from './tutorial-aspirante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialAspirantePageRoutingModule
  ],
  declarations: [TutorialAspirantePage]
})
export class TutorialAspirantePageModule {}
