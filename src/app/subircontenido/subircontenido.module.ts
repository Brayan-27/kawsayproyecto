import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubircontenidoPageRoutingModule } from './subircontenido-routing.module';

import { SubircontenidoPage } from './subircontenido.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubircontenidoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SubircontenidoPage]
})
export class SubircontenidoPageModule {}
