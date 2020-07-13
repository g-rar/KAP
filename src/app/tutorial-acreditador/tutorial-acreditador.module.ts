import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialAcreditadorPageRoutingModule } from './tutorial-acreditador-routing.module';

import { TutorialAcreditadorPage } from './tutorial-acreditador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialAcreditadorPageRoutingModule
  ],
  declarations: [TutorialAcreditadorPage]
})
export class TutorialAcreditadorPageModule {}
