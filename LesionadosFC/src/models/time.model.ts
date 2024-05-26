import { IJogador } from 'src/models/jogador.model';

interface ITime {
    id: number;
    jogadores: IJogador[]
    vitorias: number;
    derrotas: number;
    empates: number;
    pontos: number;
  }
  
  function createITime() {
    return {
      id: 0,
      jogadores: null,
      vitorias: 0,
      derrotas: 0,
      empates: 0,
      pontos: 0
    };
  }
  
  export { ITime, createITime };
  