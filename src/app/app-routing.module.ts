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
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'muroprincipal',
    loadChildren: () => import('./muroprincipal/muroprincipal.module').then( m => m.MuroprincipalPageModule)
  },
  {
    path: 'perfilpersonal',
    loadChildren: () => import('./perfilpersonal/perfilpersonal.module').then( m => m.PerfilpersonalPageModule)
  },
  {
    path: 'seguidores',
    loadChildren: () => import('./seguidores/seguidores.module').then( m => m.SeguidoresPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'familia',
    loadChildren: () => import('./familia/familia.module').then( m => m.FamiliaPageModule)
  },
  {
    path: 'carpeta',
    loadChildren: () => import('./carpeta/carpeta.module').then( m => m.CarpetaPageModule)
  },
  {
    path: 'album',
    loadChildren: () => import('./album/album.module').then( m => m.AlbumPageModule)
  },
  {
    path: 'siguiendo',
    loadChildren: () => import('./siguiendo/siguiendo.module').then( m => m.SiguiendoPageModule)
  },
  {
    path: 'busqueda',
    loadChildren: () => import('./busqueda/busqueda.module').then( m => m.BusquedaPageModule)
  },
  {
    path: 'subircontenido',
    loadChildren: () => import('./subircontenido/subircontenido.module').then( m => m.SubircontenidoPageModule)
  },
  {
    path: 'crear',
    loadChildren: () => import('./crear/crear.module').then( m => m.CrearPageModule)
  },
  /**
   * {
    path: 'modalbusqueda',
    loadChildren: () => import('./modalbusqueda/modalbusqueda.module').then( m => m.ModalbusquedaPageModule)
  }
   * 
   */
  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
