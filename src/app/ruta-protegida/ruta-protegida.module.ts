import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutaProtegidaPageRoutingModule } from './ruta-protegida-routing.module';

import { RutaProtegidaPage } from './ruta-protegida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutaProtegidaPageRoutingModule
  ],
  declarations: [RutaProtegidaPage]
})
export class RutaProtegidaPageModule {}
