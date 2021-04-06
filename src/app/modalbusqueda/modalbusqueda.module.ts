import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalbusquedaPageRoutingModule } from './modalbusqueda-routing.module';

import { ModalbusquedaPage } from './modalbusqueda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalbusquedaPageRoutingModule
  ],
  declarations: [ModalbusquedaPage]
})
export class ModalbusquedaPageModule {}
