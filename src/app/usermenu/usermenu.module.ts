import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsermenuPageRoutingModule } from './usermenu-routing.module';

import { UsermenuPage } from './usermenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsermenuPageRoutingModule
  ],
  declarations: [UsermenuPage]
})
export class UsermenuPageModule {}
