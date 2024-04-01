import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'jogador-index', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'jogador-index',
    loadChildren: () =>
      import('./jogador-index/jogador-index.module').then(
        (m) => m.JogadorIndexPageModule
      ),
  },
  {
    path: 'novo-jogador',
    loadChildren: () =>
      import('./novo-jogador/novo-jogador.module').then(
        (m) => m.NovoJogadorPageModule
      ),
  },
  {
    path: 'edit-jogador/:id',
    loadChildren: () =>
      import('./edit-jogador/edit-jogador.module').then(
        (m) => m.EditJogadorPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {}
