import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccreditationsPage } from './accreditations.page';

const routes: Routes = [
  {
    path: '',
    component: AccreditationsPage,
    
  },
  {
    path: ':id',
    loadChildren: () => import('src/app/accreditation/accreditation.module').then( m => m.AccreditationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccreditationsPageRoutingModule {}
