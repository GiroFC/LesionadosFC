import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Jogador } from '../services/jogador.service';
import { IJogador } from 'src/models/jogador.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jogador-index',
  templateUrl: './jogador-index.page.html',
  styleUrls: ['./jogador-index.page.scss'],
})

export class JogadorIndexPage {
  public jogadores: IJogador[] = [];
  public hoje: number = Date.now();

  constructor(
    private modalCtrl: ModalController,
    private jogadorServ: Jogador,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listarJogadores();
  }

  public listarJogadores() {
    this.jogadores = this.jogadorServ.getAll();
    console.log(this.jogadores);
  }

  public deletar(id: number) {
    this.jogadorServ.delete(id);
    this.listarJogadores();
  }

  public corPrioridade(prioridade: string) {
    return prioridade === 'alto'
      ? 'danger'
      : prioridade === 'baixo'
      ? 'success'
      : 'warning';
  }
  
}
