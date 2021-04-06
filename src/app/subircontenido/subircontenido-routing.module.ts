import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubircontenidoPage } from './subircontenido.page';

const routes: Routes = [
  {
    path: '',
    component: SubircontenidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubircontenidoPageRoutingModule {}
