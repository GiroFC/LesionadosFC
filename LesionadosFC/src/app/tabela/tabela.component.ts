import { Component, Input } from '@angular/core';
import { IJogador } from 'src/models/jogador.model';
import { Router } from '@angular/router';
import { Jogador } from './../services/jogador.service';


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent {

  @Input() dados: IJogador[] = [];

  constructor(
    private jogadoreservice: Jogador,
    private router: Router,
  ) {}

  
  gotoEdit(id: number){
    this.router.navigate(['/edit-jogador', id]);
  }

  deleteJogador(id: number){
    this.jogadoreservice.delete(id);
  }
}
