import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent} from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { HeadercentralComponent } from './headercentral/headercentral.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { ContadorseguidorComponent } from './contadorseguidor/contadorseguidor.component';
import { SeguidorsiguiendoComponent } from './seguidorsiguiendo/seguidorsiguiendo.component';
import { HeaderarchivoComponent } from './headerarchivo/headerarchivo.component';
import { HeadercentraldosComponent } from './headercentraldos/headercentraldos.component';
import { HeadercategoriasComponent} from './headercategorias/headercategorias.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HeadercentralComponent,
    PublicacionesComponent,
    ContadorseguidorComponent,
    SeguidorsiguiendoComponent,
    HeaderarchivoComponent,
    HeadercentraldosComponent,
    HeadercategoriasComponent
  ],
  /** componentes para exportar en otras paginas */
  exports:[
    HeaderComponent,
    HeadercentralComponent,
    PublicacionesComponent,
    ContadorseguidorComponent,
    SeguidorsiguiendoComponent,
    HeaderarchivoComponent,
    HeadercentraldosComponent,
    HeadercategoriasComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
