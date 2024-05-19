import { IJogador } from 'src/models/jogador.model';

interface ITime {
    id: number;
    jogador1: IJogador;
    jogador2: IJogador;
    jogador3: IJogador;
    jogador4: IJogador;
    jogador5: IJogador;
    vitorias: number;
    derrotas: number;
    empates: number;
    pontos: number;
  }
  
  function createITime() {
    return {
        id: 0,
      jogador1: null,    
      jogador2: null,
      jogador3: null,
      jogador4: null,
      jogador5: null,
      vitorias: 0,
      derrotas: 0,
      empates: 0,
      pontos: 0
    };
  }
  
  export { ITime, createITime };
  