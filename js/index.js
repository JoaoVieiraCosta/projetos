const personagens = document.querySelectorAll('.personagem');
const descricaoPersonagem = document.getElementById('descricao-personagem');
const nomePersonagemElement = document.getElementById('nome-personagem');
const personagemGrande = document.querySelector('.personagem-grande');
const logoImageSrc = personagemGrande.src;

// Lista de nomes dos personagens
const nomesPersonagens = {
  gokub: 'Goku Black',
  zamasu: 'Zamasu',
  freeza: 'Freeza',
  majin: 'Majin Buu',
  goku: 'Goku',
  vegeta: 'Vegeta',
  gohan: 'Gohan',
  trunks: 'Trunks'
};

// Lista de descrições dos personagens
const descricoesPersonagens = {
  gokub: 'Ao contrário de Goku, Black é do mal e quer exterminar a raça humana junto com Zamasu.',
  zamasu: 'Zamasu é o cabeça do plano, muito inteligente e rápido, dará trabalho para os guerreiros Z.',
  freeza: 'Freeza, nêmesis de Goku, sempre dará um jeito de retornar para ter sua vingança.',
  majin: 'Majin Buu foi um vilão muito poderoso e foi preciso uma fusão para detê-lo, o que restou dele hoje em dia foi seu lado bom.',
  goku: 'Goku, protagonista e herói da Terra, é um dos guerreiros mais fortes do universo.',
  vegeta: 'Vegeta invadiu a Terra para conquistá-la, porém foi impedido por Goku. Bulma amoleceu seu coração e hoje é parceiro de Goku.',
  gohan: 'Gohan é o filho prodígio de Goku, preza pela paz e não gosta de lutar, mas faz de tudo por sua família.',
  trunks: 'Filho mais velho de Vegeta, volta no passado várias vezes para poder salvar o seu futuro de 17 e 18, e também Zamasu.'
};

personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () => {
    // Verificar se já existe um personagem selecionado e remover a classe "selecionado"
    const personagemSelecionado = document.querySelector('.selecionado');
    if (personagemSelecionado) {
      personagemSelecionado.classList.remove('selecionado');
    }

    // Adicionar a classe "selecionado" ao personagem atual
    personagem.classList.add('selecionado');

    // Alterar a imagem do personagem grande
    const idPersonagem = personagem.getAttribute('id');
    personagemGrande.src = `src/imagem/card-${idPersonagem}.png`;

    // Atualizar a descrição do personagem
    const novaDescricao = descricoesPersonagens[idPersonagem];
    descricaoPersonagem.textContent = novaDescricao;

    // Atualizar o nome do personagem
    const novoNome = nomesPersonagens[idPersonagem];
    nomePersonagemElement.textContent = novoNome;
  });

  personagem.addEventListener('mouseleave', () => {
    descricaoPersonagem.textContent = 'escolha um guerreiro e veja um pouco de sua historia aqui';
    nomePersonagemElement.textContent = 'escolha um guerreiro';

    // Restaurar a imagem do personagem grande para o logo original

  });
});