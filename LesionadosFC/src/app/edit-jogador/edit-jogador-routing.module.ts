import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditJogadorPage } from './edit-jogador.page';

const routes: Routes = [
  {
    path: '',
    component: EditJogadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditJogadorPageRoutingModule {}
