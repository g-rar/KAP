import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccreditationPage } from './accreditation.page';

const routes: Routes = [
  {
    path: '',
    component: AccreditationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccreditationPageRoutingModule {}
