
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'usermenu',
    loadChildren: () => import('./usermenu/usermenu.module').then( m => m.UsermenuPageModule)
  },
  {
    path: 'user-settings',
    loadChildren: () => import('./user-settings/user-settings.module').then( m => m.UserSettingsPageModule)
  },
  {
    path: 'accreditations',
    loadChildren: () => import('src/app/accreditations/accreditations.module').then( m => m.AccreditationsPageModule)
  },
  {
    path: 'tutorial-acreditador',
    loadChildren: () => import('./tutorial-acreditador/tutorial-acreditador.module').then( m => m.TutorialAcreditadorPageModule)
  },
  {
    path: 'tutorial-aspirante',
    loadChildren: () => import('./tutorial-aspirante/tutorial-aspirante.module').then( m => m.TutorialAspirantePageModule)
  },
  {
    path: 'crear-acreditacion',
    loadChildren: () => import('./crear-acreditacion/crear-acreditacion.module').then( m => m.CrearAcreditacionPageModule)
  },
  {
    path: 'form-ignos',
    loadChildren: () => import('./formularios/form-ignos/form-ignos.module').then( m => m.FormIgnosPageModule)
  },
  {

    path: 'form-virtus',
    loadChildren: () => import('./formularios/form-virtus/form-virtus.module').then( m => m.FormVirtusPageModule)
  },  {
    path: 'lista-aspirantes',
    loadChildren: () => import('./lista-aspirantes/lista-aspirantes.module').then( m => m.ListaAspirantesPageModule)
  },
  {
    path: 'mis-acreditaciones',
    loadChildren: () => import('./mis-acreditaciones/mis-acreditaciones.module').then( m => m.MisAcreditacionesPageModule)
  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

