import { Component, Input } from '@angular/core';
import { ITime } from 'src/models/time.model';


@Component({
  selector: 'app-lista-times',
  templateUrl: 'listaTimes.component.html',
  styleUrls: ['listaTimes.component.scss'],
})
export class ListaTimesComponent {

  @Input() dados: ITime[] = [];

}
