import { createIJogador } from 'src/models/jogador.model';
import { Jogador } from './../services/jogador.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-jogador',
  templateUrl: './edit-jogador.page.html',
  styleUrls: ['./edit-jogador.page.scss'],
})
export class EditJogadorPage implements OnInit {
  public jogador: any;

  constructor(private jogadoreservice: Jogador, private rotaAtiva: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.rotaAtiva.snapshot.paramMap.get('id'))
    this.jogadoreservice.getById(id);

    //TODO receber as informações passadas 
  }

}
