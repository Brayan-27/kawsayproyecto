import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusquedaPageRoutingModule } from './busqueda-routing.module';

import { BusquedaPage } from './busqueda.page';
import { ModalbusquedaPage } from '../modalbusqueda/modalbusqueda.page';
import { ComponentsModule } from '../components/components.module';
import { ModalbusquedaPageModule } from '../modalbusqueda/modalbusqueda.module';

@NgModule({
  entryComponents:[
    ModalbusquedaPage
  ],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusquedaPageRoutingModule,
    ComponentsModule,
    ModalbusquedaPageModule
  ],
  declarations: [BusquedaPage]
})
export class BusquedaPageModule {}
