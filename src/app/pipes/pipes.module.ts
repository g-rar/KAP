import { NgModule } from '@angular/core';
import { BusquedaPipe } from './busqueda.pipe';


@NgModule({
  declarations: [BusquedaPipe],
  exports:[BusquedaPipe]
})
export class PipesModule { }
