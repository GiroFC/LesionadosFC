import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovoJogadorPage } from './novo-jogador.page';

const routes: Routes = [
  {
    path: '',
    component: NovoJogadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovoJogadorPageRoutingModule {}
