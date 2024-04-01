import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JogadorIndexPageRoutingModule } from './jogador-index-routing.module';

import { JogadorIndexPage } from './jogador-index.page';
import { TabelaComponent } from '../tabela/tabela.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JogadorIndexPageRoutingModule
  ],
  declarations: [JogadorIndexPage, TabelaComponent]
})
export class JogadorIndexPageModule {}
