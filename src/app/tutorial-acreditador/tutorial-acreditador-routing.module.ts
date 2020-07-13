import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialAcreditadorPage } from './tutorial-acreditador.page';

const routes: Routes = [
  {
    path: '',
    component: TutorialAcreditadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialAcreditadorPageRoutingModule {}
