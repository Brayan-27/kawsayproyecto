import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuroprincipalPageRoutingModule } from './muroprincipal-routing.module';

import { MuroprincipalPage } from './muroprincipal.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuroprincipalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MuroprincipalPage]
})
export class MuroprincipalPageModule {}
