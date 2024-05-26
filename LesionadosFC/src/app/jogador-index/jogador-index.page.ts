import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Jogador } from '../services/jogador.service';
import { IJogador } from 'src/models/jogador.model';
import { Times } from '../services/times.service';
import { ToastController } from '@ionic/angular';
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
    private toastController: ToastController,
    private modalCtrl: ModalController,
    private jogadorServ: Jogador,
    private timesServ: Times,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listarJogadores();
  }

  public listarJogadores() {
    this.jogadores = this.jogadorServ.getAll();
  }

  public deletar(id: number) {
    this.jogadorServ.delete(id);
    this.listarJogadores();
  }

  public async gerarTimesRandom(){
    try{
      this.timesServ.generateTimesNoFilter(this.jogadores)
      this.router.navigate(['/times']);
    }catch(error){
      const toast = await this.toastController.create({
        message: error.message,
        duration: 2500,
        position: "top",
        color: "dark",
      });
      toast.present();
    }
  }

  public corPrioridade(prioridade: string) {
    return prioridade === 'alto'
      ? 'danger'
      : prioridade === 'baixo'
      ? 'success'
      : 'warning';
  }
  
}
