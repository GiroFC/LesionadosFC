import { Injectable } from '@angular/core';
import { IJogador, createIJogador } from 'src/models/jogador.model';



@Injectable({ providedIn: 'root' })
export class jogadoreservice {
  private jogadores: IJogador[] = [
    { id: '1', nome: 'João', estrelas: 5, presente: true },
    { id: '2', nome: 'Maria', estrelas: 2, presente: false },
  ];
  constructor() {}

  public getAll(): IJogador[] {
    return this.jogadores;
  }

  public get(id: string): IJogador {
    const resultado = this.jogadores.find((obj) => {
      return obj.id === id;
    });
    return resultado ? { ...resultado } : createIJogador();
  }

  public add(novoJogador: IJogador): IJogador {
    let uid: string = Date.now().toString(16);
    novoJogador.id = uid;
    console.log('Salvar --> novoJogador', novoJogador);
    this.jogadores.push(novoJogador);
    return this.jogadores[this.jogadores.length - 1];
  }

  public getIndex(id: string): number {
    const index = this.jogadores.findIndex((obj) => {
      return obj.id === id;
    });
    return index;
  }

  public update(jogador: IJogador): IJogador {
    const index = this.getIndex(jogador.id);
    if (index >= 0) {
      this.jogadores[index] = jogador;
      return this.jogadores[index];
    } else {
      return createIJogador();
    }
  }

  public delete(id: string): number {
    const index = this.getIndex(id);
    if (index >= 0) {
      this.jogadores.splice(index, 1);
    }
    return index;
  }
}
