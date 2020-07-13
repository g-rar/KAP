import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccreditationsPage } from './accreditations.page';

const routes: Routes = [
  {
    path: '',
    component: AccreditationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccreditationsPageRoutingModule {}
