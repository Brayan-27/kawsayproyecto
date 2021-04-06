import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilpersonalPage } from './perfilpersonal.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilpersonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilpersonalPageRoutingModule {}
