import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilpersonalPageRoutingModule } from './perfilpersonal-routing.module';

import { PerfilpersonalPage } from './perfilpersonal.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilpersonalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PerfilpersonalPage]
})
export class PerfilpersonalPageModule {}
