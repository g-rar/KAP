import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearAcreditacionPage } from './crear-acreditacion.page';

const routes: Routes = [
  {
    path: '',
    component: CrearAcreditacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearAcreditacionPageRoutingModule {}
