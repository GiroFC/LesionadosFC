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

  getTimesOrdenadosPorPontos(): ITime[] {
    const timesOrdenados = this.times.slice();

    timesOrdenados.sort((a, b) => b.pontos - a.pontos);

    return timesOrdenados;
  }

  public add(novoTime: ITime): ITime {
    // let uid: number = Date.now();
    // novoTime.id = uid;
    this.times.push(novoTime);
    return this.times[this.times.length - 1];
  }

  public limpar(){
    this.times.length = 0;
  }

  public addWin(id: number){
    const time = this.times.find(time => time.id === id)
    time.vitorias+=1;
    time.pontos+=3;
    return time
  }


  public addDefeat(id: number){
    const time = this.times.find(time => time.id === id)
    time.derrotas+=1;
    return time;
  }


  public addTie(id: number){
    const time = this.times.find(time => time.id === id)
    time.empates+=1;
    time.pontos+=1;
    return time
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
}
