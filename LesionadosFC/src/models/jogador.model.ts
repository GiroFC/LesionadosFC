interface IJogador {
  id: string;
  nome: string;
  estrelas: number;
  presente: boolean;
}

function createIJogador() {
  return {
    id: '',
    nome: '',
    estrelas: 0,
    presente: false,
  };
}

export { IJogador, createIJogador };
