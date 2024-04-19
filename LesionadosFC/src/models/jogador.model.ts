interface IJogador {
  id: number;
  nome: string;
  estrelas: number;
  presente: boolean;
}

function createIJogador() {
  return {
    id: 0,
    nome: '',
    estrelas: 0,
    presente: false,
  };
}

export { IJogador, createIJogador };
