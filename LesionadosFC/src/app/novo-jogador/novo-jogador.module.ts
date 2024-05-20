import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoJogadorPageRoutingModule } from './novo-jogador-routing.module';

import { NovoJogadorPage } from './novo-jogador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoJogadorPageRoutingModule
  ],
  declarations: [NovoJogadorPage]
})
export class NovoJogadorPageModule {

  constructor() {}

}

