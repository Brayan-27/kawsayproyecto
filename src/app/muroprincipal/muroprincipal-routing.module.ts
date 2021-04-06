import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuroprincipalPage } from './muroprincipal.page';

const routes: Routes = [
  {
    path: '',
    component: MuroprincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuroprincipalPageRoutingModule {}
