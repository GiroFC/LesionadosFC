import { Injectable } from '@angular/core';
import { ITime } from 'src/models/time.model';

@Injectable({ providedIn: 'root' })
export class Times {
  private times: ITime[] = [
    {
      id: 1,
      jogador1: { id: 1, nome: 'João', estrelas: 5, presente: true },
      jogador2: { id: 2, nome: 'Maria', estrelas: 2, presente: false },
      jogador3: { id: 3, nome: 'José', estrelas: 3, presente: true },
      jogador4: { id: 4, nome: 'Antônio', estrelas: 4, presente: false },
      jogador5: { id: 5, nome: 'Ana', estrelas: 1, presente: true },
      vitorias: 3,
      derrotas: 0,
      empates: 0,
      pontos: 9,
    },
    {
      id: 2,
      jogador1: { id: 6, nome: 'Carlos', estrelas: 2, presente: false },
      jogador2: { id: 7, nome: 'Fernanda', estrelas: 3, presente: true },
      jogador3: { id: 8, nome: 'Márcia', estrelas: 4, presente: false },
      jogador4: { id: 9, nome: 'Pedro', estrelas: 5, presente: true },
      jogador5: { id: 10, nome: 'Paula', estrelas: 1, presente: false },
      vitorias: 0,
      derrotas: 2,
      empates: 1,
      pontos: 1,
    },
    {
      id: 3,
      jogador1: { id: 11, nome: 'João', estrelas: 5, presente: true },
      jogador2: { id: 12, nome: 'Maria', estrelas: 2, presente: false },
      jogador3: { id: 13, nome: 'José', estrelas: 3, presente: true },
      jogador4: { id: 14, nome: 'Antônio', estrelas: 4, presente: false },
      jogador5: { id: 15, nome: 'Ana', estrelas: 1, presente: true },
      vitorias: 1,
      derrotas: 1,
      empates: 1,
      pontos: 4,
    },
  ];
  constructor() {}

  public getAll(): ITime[] {
    return this.times;
  }

  public add(novoTime: ITime): ITime {
    let uid: number = Date.now();
    novoTime.id = uid;
    console.log('Salvar --> novoTime', novoTime);
    this.times.push(novoTime);
    return this.times[this.times.length - 1];
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
