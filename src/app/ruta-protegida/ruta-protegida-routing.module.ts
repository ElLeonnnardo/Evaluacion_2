import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutaProtegidaPage } from './ruta-protegida.page';

const routes: Routes = [
  {
    path: '',
    component: RutaProtegidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutaProtegidaPageRoutingModule {}
