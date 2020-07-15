import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormVirtusPage } from './form-virtus.page';

const routes: Routes = [
  {
    path: '',
    component: FormVirtusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormVirtusPageRoutingModule {}
