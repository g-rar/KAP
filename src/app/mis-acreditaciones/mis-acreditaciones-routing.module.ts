import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisAcreditacionesPage } from './mis-acreditaciones.page';

const routes: Routes = [
  {
    path: '',
    component: MisAcreditacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisAcreditacionesPageRoutingModule {}
