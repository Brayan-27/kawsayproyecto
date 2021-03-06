import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarpetaPageRoutingModule } from './carpeta-routing.module';

import { CarpetaPage } from './carpeta.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarpetaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CarpetaPage]
})
export class CarpetaPageModule {}
