import { Injectable } from '@angular/core';
import { ITime } from 'src/models/time.model';
import { IJogador } from 'src/models/jogador.model';
import { Jogador } from './jogador.service';

@Injectable({ providedIn: 'root' })
export class Times {
  private times: ITime[] = [];
  constructor() {}

  public getAll(): ITime[] {
    return this.times;
  }

  public add(novoTime: ITime): ITime {
    // let uid: number = Date.now();
    // novoTime.id = uid;
    console.log('Salvar --> novoTime', novoTime);
    this.times.push(novoTime);
    return this.times[this.times.length - 1];
  }

  public limpar(){
    this.times.length = 0;
  }

  private embaralharArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  public generateTimesNoFilter(jogadores: IJogador[]): ITime[] {
    this.times.length = 0;
    const tamanhoTime = 5;

    const jogadoresPresentes = jogadores.filter(jogador => jogador.presente)

    if (jogadoresPresentes.length < tamanhoTime) {
      throw new Error('Número insuficiente de jogadores presentes para formar um time');
    }

    // Embaralhar a lista de jogadores
    const jogadoresEmbaralhados = this.embaralharArray(jogadoresPresentes.slice());

    // Criar os times
    const times: ITime[] = [];
    let id = 1;

    for (let i = 0; i < jogadoresEmbaralhados.length; i += tamanhoTime) {
      const timeJogadores = jogadoresEmbaralhados.slice(i, i + tamanhoTime);

        const time: ITime = {
          id: id++, // Iremos sobrescrever este ID ao adicionar o time
          jogadores: timeJogadores,
          vitorias: 0,
          derrotas: 0,
          empates: 0,
          pontos: 0
        };

        times.push(time);
        this.add(time)
    }

    return times;
  }

  public getTeamsByPoints(): ITime[] {
    return this.times.sort((a, b) => b.pontos - a.pontos);
  }

  

  /*public getById(id: number): ITime {
    const resultado = this.times.find((obj) => {
      return obj.id === id;
    });
    return resultado ? { ...resultado } : createITime();
    }*/
}
