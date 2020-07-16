import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaAspirantesPage } from './lista-aspirantes.page';

const routes: Routes = [
  {
    path: '',
    component: ListaAspirantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaAspirantesPageRoutingModule {}
