import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  { path: '', redirectTo: 'jogador-index', pathMatch: 'full' },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'jogador-index',
        loadChildren: () =>
          import('./jogador-index/jogador-index.module').then(
            (m) => m.JogadorIndexPageModule
          ),
      },
      {
        path: 'times',
        loadChildren: () =>
          import('./times/times.module').then(
            (m) => m.TimesPageModule
          ),
      },
      {
        path: 'classificacao',
        loadChildren: () =>
          import('./classificacao/classificacao.module').then(
            (m) => m.ClassificacaoPageModule
          ),
      },
    ]
  },
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
  {
    path: 'times',
    loadChildren: () =>
      import('./times/times.module').then(
        (m) => m.TimesPageModule
      ),
  },
  {
    path: 'classificacao',
    loadChildren: () =>
      import('./classificacao/classificacao.module').then(
        (m) => m.ClassificacaoPageModule
      ),
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {}
