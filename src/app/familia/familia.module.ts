import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamiliaPageRoutingModule } from './familia-routing.module';

import { FamiliaPage } from './familia.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamiliaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FamiliaPage]
})
export class FamiliaPageModule {}
