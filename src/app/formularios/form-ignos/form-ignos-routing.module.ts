import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormIgnosPage } from './form-ignos.page';

const routes: Routes = [
  {
    path: '',
    component: FormIgnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormIgnosPageRoutingModule {}
