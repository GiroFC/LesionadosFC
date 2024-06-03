import { Component, OnInit } from '@angular/core';
import { Jogador } from '../services/jogador.service';
import { IJogador, createIJogador } from 'src/models/jogador.model';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-jogador',
  templateUrl: './novo-jogador.page.html',
  styleUrls: ['./novo-jogador.page.scss'],
})
export class NovoJogadorPage implements OnInit {
  estrelas: number = 0;
  increaseDisabled: boolean = false;
  descreaseDisabled: boolean = true;
  inputNome: string = '';
  jogador: IJogador = createIJogador();

  constructor(
    private toastController: ToastController,
    private jogadorServ: Jogador,
    private router: Router,
  ) {}

  incrementStars() {
    this.descreaseDisabled = false;
    if(this.estrelas === 5){
      this.increaseDisabled = true;
      return;
    }
    this.estrelas += 1;
  }

  decrementStars() {
    this.increaseDisabled = false;
    if(this.estrelas === 0){
      this.descreaseDisabled = true;
      return;
    }
    this.estrelas -= 1;
  }

  async createJogador(){
    if(this.inputNome == "" || this.inputNome == undefined || this.inputNome == null){
      const toast = await this.toastController.create({
        message: 'ATENÇÃO!! PREENCHA TODOS OS CAMPOS!',
        duration: 2500,
        position: "top",
        color: "dark",
      });
      toast.present();
    }else{
      this.jogador.estrelas = this.estrelas;
      this.jogador.nome = this.inputNome;
      this.jogador.presente = false;
      this.jogador.id = Date.now();

      this.jogadorServ.add(this.jogador)

      this.router.navigate(['/jogador-index']);
    }
  }

  ngOnInit() {}
}
