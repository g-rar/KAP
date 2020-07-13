import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsermenuPage } from './usermenu.page';

const routes: Routes = [
  {
    path: '',
    component: UsermenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsermenuPageRoutingModule {}
