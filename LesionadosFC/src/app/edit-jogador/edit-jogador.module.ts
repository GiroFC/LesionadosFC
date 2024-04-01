import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditJogadorPageRoutingModule } from './edit-jogador-routing.module';

import { EditJogadorPage } from './edit-jogador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditJogadorPageRoutingModule
  ],
  declarations: [EditJogadorPage]
})
export class EditJogadorPageModule {}
