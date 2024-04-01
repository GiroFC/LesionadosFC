import { Component, Input } from '@angular/core';
import { IJogador } from 'src/models/jogador.model';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent {

  @Input() dados: IJogador[] = [];

}
