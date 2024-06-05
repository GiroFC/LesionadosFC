import { IJogador, createIJogador } from 'src/models/jogador.model';
import { Jogador } from './../services/jogador.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-jogador',
  templateUrl: './edit-jogador.page.html',
  styleUrls: ['./edit-jogador.page.scss'],
})
export class EditJogadorPage implements OnInit {
  public jogadorToEdit: IJogador;
  public jogadorEdited: IJogador = createIJogador();
  estrelas: number = 0;
  presente: boolean = false;
  id: string = '';
  increaseDisabled: boolean = false;
  descreaseDisabled: boolean = true;
  inputNome: string = '';
  public IJogador: IJogador[] = [];

  constructor(
    private toastController: ToastController,
    private jogadoreservice: Jogador,
    private rotaAtiva: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    const id = this.rotaAtiva.snapshot.paramMap.get('id');

    this.jogadoreservice.getAll().subscribe((jogadores: IJogador[]) => {
      this.IJogador = jogadores;

      this.jogadorToEdit = jogadores.find(jogador => jogador.id === id);

      this.inputNome = this.jogadorToEdit.nome;
      this.estrelas = this.jogadorToEdit.estrelas;
      this.presente = this.jogadorToEdit.presente;
      this.id = this.jogadorToEdit.id;

      if (this.estrelas === 5) {
        this.increaseDisabled = true;
        this.descreaseDisabled = false;
      } else if (this.estrelas === 1) {
        this.increaseDisabled = false;
        this.descreaseDisabled = true;
      } else {
        this.increaseDisabled = false;
        this.descreaseDisabled = false;
      }
    });
  }

  incrementStars() {
    this.descreaseDisabled = false;
    if (this.estrelas === 5) {
      this.increaseDisabled = true;
      return;
    }
    this.estrelas += 1;
  }

  decrementStars() {
    this.increaseDisabled = false;
    if (this.estrelas === 0) {
      this.descreaseDisabled = true;
      return;
    }
    this.estrelas -= 1;
  }

  async editJogador() {
    if (this.inputNome == "" || this.inputNome == undefined || this.inputNome == null) {
      const toast = await this.toastController.create({
        message: 'ATENÇÃO!! PREENCHA TODOS OS CAMPOS!',
        duration: 2500,
        position: "top",
        color: "dark",
      });
      toast.present();
    } else {
      this.jogadorEdited.estrelas = this.estrelas;
      this.jogadorEdited.nome = this.inputNome;
      this.jogadorEdited.presente = this.presente;
      this.jogadorEdited.id = this.id;

      this.jogadoreservice.update(this.jogadorEdited, this.id);

      this.router.navigate(['/jogador-index']);
    }
  }
}
