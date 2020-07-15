import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccreditationsPage } from './accreditations.page';
import { AccreditationResolverService } from '../services/accreditation-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: AccreditationsPage,
    
  },
  {
    path: ':id',resolve:{
      data:AccreditationResolverService
    },
    loadChildren: () => import('src/app/accreditation/accreditation.module').then( m => m.AccreditationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccreditationsPageRoutingModule {}
