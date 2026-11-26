// Textos da versão 2 (venda direta) das 6 LPs de equipamento, escritos do
// zero em 21/11/2026 pelo copywriter, a partir da arquitetura de 19/11.
// A pergunta que a página responde: "se eu comprar esta máquina, o que
// acontece depois da entrega?". A promessa é ESCREVER o pós-venda na
// proposta, nunca incluir.
//
// Regras que valem para todo texto daqui:
// - Marcadores: %PECA% (vira nicho.peca em minúsculas), %RESPOSTA%,
//   %PROPOSTA%, %HORARIO% e %QUEMVENDE%. Prazo nenhum é escrito à mão.
// - {texto} não quebra de linha. Sem [[pílula]] e sem "segundo X" na ficha.
// - Dados e ficha só do manual. Sem manual lido, fonteDados é trava (dono shark).
// - Kit, caixa, garantia e registro Anvisa são da rede ou do Maestro: não
//   entram aqui como fato.
import type { ComumDireta, TextosNicho } from './tipos-direta';

/* ============================================================
   Comum aos 6 nichos
   ============================================================ */

export const comumDireta: ComumDireta = {
  condicoes: {
    pagamento: 'Pagamento',
    entrega: 'Entrega',
    quemVende: 'Quem vende',
    proposta: 'Proposta',
    precoNaProposta: 'O preço vai na proposta.',
  },
  posVenda: {
    garantia: {
      rotulo: 'Garantia',
      pergunta: 'Quantos meses, o que cobre e se exige revisão',
    },
    assistencia: {
      rotulo: 'Assistência técnica',
      pergunta: 'Onde fica, em quantos dias a máquina volta e quem paga o frete',
    },
    pecas: {
      rotulo: 'Reposição de %PECA%',
      pergunta: 'Quanto custa a reposição e se há em estoque',
    },
    treinamento: {
      rotulo: 'Treinamento',
      pergunta: 'Quem dá, onde, quantas horas e quanto tempo depois da entrega',
    },
    instalacao: {
      rotulo: 'Instalação',
      pergunta: 'O que a sala precisa (tensão, espaço, água) e quem instala',
    },
    parada: {
      rotulo: 'Se a máquina parar',
      pergunta: 'O que acontece com a parcela durante o conserto e se há bloqueio por atraso',
    },
  },
  carimbo: 'Pergunte na conversa',
  compromisso:
    'Faça as seis perguntas na conversa do WhatsApp. A Leal responde antes de você fechar a compra.',
  ctaPosVenda: 'Fazer estas perguntas no WhatsApp',

  perguntaPorQueLeal: {
    pergunta: 'Por que comprar pela Leal e não direto do fabricante?',
    resposta:
      '<p>Na Leal, você fala com um atendimento só, do pedido à entrega, e tira na conversa as dúvidas do pós-venda antes de fechar: garantia, assistência, reposição, treinamento, instalação e o que acontece se a máquina parar. A Rede ISP vende e emite a nota.</p>',
    aberta: true,
  },
  perguntaOperar: {
    pergunta: 'Quem pode operar?',
    resposta:
      '<p>Quem pode operar segue o que consta na Anvisa para o aparelho, o manual do fabricante e as regras da sua profissão. A Leal não define quem opera, e nenhum treinamento substitui a habilitação. Peça o número Anvisa e o manual no WhatsApp antes de comprar.</p>',
  },
  perguntaMaisBarato: {
    pergunta: 'Vi mais barato em outra loja. Vale falar com a Leal?',
    resposta:
      '<p>Vale. Mande o link junto com a mensagem. A Leal responde com a proposta dela, e você faz as mesmas seis perguntas às duas lojas para pôr uma ao lado da outra.</p>',
  },
  perguntaDemonstracao: {
    pergunta: 'Posso ver a máquina funcionando antes de comprar?',
    resposta:
      '<p>Peça na mensagem. A Leal responde se há demonstração do modelo e onde ela acontece.</p>',
  },

  compra: {
    passo1: '<strong>Você manda a mensagem.</strong> A Leal responde %RESPOSTA%, %HORARIO%.',
    passo2:
      '<strong>A proposta sai %PROPOSTA%.</strong> Nela vêm o preço e a condição de pagamento. Antes de fechar, faça as seis perguntas do pós-venda e peça a ficha, o número Anvisa e o manual.',
    passo3:
      '<strong>Você confirma.</strong> Quem vende e emite a nota fiscal é %QUEMVENDE%. A Leal atende a sua compra.',
  },

  momentos: [
    { id: 'agora', rotulo: 'Este mês', frase: 'Penso em comprar este mês.' },
    { id: 'trimestre', rotulo: 'Em 1 a 3 meses', frase: 'Penso em comprar nos próximos 3 meses.' },
    { id: 'pesquisa', rotulo: 'Só pesquisando', frase: 'Por enquanto estou pesquisando.' },
  ],

  pedido: {
    tituloToque1: 'Qual aparelho?',
    tituloToque2: 'Quando pensa em comprar?',
    rotuloIndeciso: 'Ainda não decidi',
    nota: 'O que você marcar aqui monta o texto da mensagem. A página não pede nome, telefone nem e-mail.',
    botao: 'Enviar no WhatsApp',
    previa: 'Sua mensagem',
  },

  botaoPrincipal: 'Pedir a proposta no WhatsApp',
  botaoDocs: 'Receber manual e ficha no WhatsApp',
  filtro: 'Para quem vai comprar o equipamento. Não vendemos sessão.',
};

/* ---------- Ajudantes de texto (só para não repetir a mesma frase 6 vezes) ---------- */

const SOBRE = 'Equipamento profissional · Unidade Independente da Rede ISP';
const DOR =
  'O dia que mais pesa na compra de uma máquina é o dia em que ela precisa de conserto, com a parcela correndo e cada empresa dizendo que o problema é da outra.';

const trava = (nome: string) => ({
  estado: 'trava' as const,
  pergunta: `Ler o manual do ${nome} e conferir os 3 dados, a ficha e os números repetidos no topo e nas perguntas`,
  dono: 'shark' as const,
});

const mensagens = (nome: string) => ({
  topo: `Olá! Quero a proposta do ${nome}.`,
  docs: `Olá! Quero receber o manual e a ficha do ${nome}.`,
});

/** "Existe mais de um X?" para os modelos sem variante conhecida. */
const variantePadrao = (curto: string, nome: string) => ({
  pergunta: `Existe mais de um ${curto}?`,
  resposta: `<p>Esta página trata do ${nome} vendido pela Rede ISP. Se você viu um nome parecido, mande o link e peça o modelo exato e o número dele na Anvisa, para conferir no portal.</p>`,
});

/* ============================================================
   1. Depilação a laser (a única com verba)
   ============================================================ */

export const depilacaoTextos: TextosNicho = {
  slug: 'depilacao-a-laser-v2',
  seo: {
    titulo: 'Máquina de depilação a laser Hakon 4D Premium | Leal',
    descricao:
      'Proposta do Hakon 4D Premium no WhatsApp. Na conversa, pergunte sobre o pós-venda: garantia, assistência, reposição do aplicador, treinamento, instalação e o que acontece se a máquina parar.',
  },
  nicho: {
    nome: 'depilação a laser',
    comArtigo: 'uma máquina de depilação a laser',
    peca: 'Aplicadores',
  },
  topo: {
    sobre: SOBRE,
    h1: 'Máquina de depilação a laser Hakon 4D Premium',
    sub: 'Laser de {4 comprimentos de onda} com ponteira resfriada a {−12 °C}. Mesmo preço da loja da Rede ISP, com a proposta por escrito no WhatsApp. Na mesma conversa, pergunte sobre o pós-venda: garantia, assistência, preço do aplicador de reposição, treinamento, instalação e o que acontece se a máquina parar.',
  },
  posVenda: {
    titulo: 'Pergunte antes da compra o que acontece depois da entrega',
    abertura: `${DOR} Numa máquina de depilação a laser, entra também o aplicador: quanto custa repor e se há em estoque.`,
  },
  maquina: { titulo: 'O Hakon 4D Premium em três números' },
  compra: { titulo: 'Como a compra anda' },
  perguntas: {
    titulo: 'O que ainda falta saber',
    doNicho: {
      pergunta: 'O Hakon 4D Premium atende todos os fototipos?',
      resposta:
        '<p>A indicação por fototipo do Hakon 4D Premium está no manual do fabricante. Peça o manual e confira se ele cobre o fototipo das clientes que você mais atende. A Leal envia o manual e o número Anvisa pelo WhatsApp, antes de você comprar.</p>',
    },
    manter: {
      pergunta: 'Quanto custa manter a máquina funcionando?',
      resposta:
        '<p>Além do preço da máquina, entram na conta depois da compra: o aplicador de reposição, o material de rotina, se o manual indicar algum, e a manutenção fora da garantia.</p><p>Pergunte na conversa o preço do aplicador, quem faz a manutenção fora da garantia e como ela é cobrada. Com esses números, você faz a conta da sua clínica.</p>',
    },
    variantes: {
      pergunta: 'Existe mais de um Hakon?',
      resposta:
        '<p>Sim. O nome circula em mais de uma versão, com fichas diferentes. Esta página trata do Hakon 4D Premium vendido pela Rede ISP. Peça na conversa o modelo exato e o número dele na Anvisa, para conferir no portal.</p>',
    },
  },
  pedido: {
    titulo: 'Monte o pedido em dois toques',
    texto: 'A mensagem sai pronta para o WhatsApp da Leal.',
  },
  mensagemBarra: 'Olá! Quero a proposta de uma máquina de depilação a laser.',
  aparelhos: {
    hakon: {
      nome: 'Hakon 4D Premium',
      fabricante: 'Medical San',
      dados: [
        {
          numero: '4',
          unidade: 'comprimentos de onda',
          rotulo: '694, 755, 808 e 1064 nm',
          leitura: 'Os quatro num aparelho só, na mesma sala.',
        },
        {
          numero: '−12',
          unidade: '°C',
          rotulo: 'Resfriamento da ponteira',
          leitura: 'O frio vem da própria ponteira, refrigerada por água.',
        },
        {
          numero: '8',
          unidade: 'polegadas',
          rotulo: 'Tela touch',
          leitura: 'Os parâmetros de cada atendimento se ajustam na tela.',
        },
      ],
      fonteDados: trava('Hakon 4D Premium'),
      fichaCompleta: [
        { rotulo: 'Comprimentos de onda', valor: '4: 694, 755, 808 e {1064 nm}' },
        { rotulo: 'Resfriamento da ponteira', valor: '{−12 °C}, por água' },
        { rotulo: 'Aplicador', valor: 'Refrigerado, com suporte antiquedas' },
        { rotulo: 'Tela', valor: 'Touch de {8 polegadas}' },
        { rotulo: 'Fabricante', valor: 'Medical San' },
      ],
      mensagens: mensagens('Hakon 4D Premium'),
    },
    acrus: {
      nome: 'Ácrus',
      fabricante: 'HTM',
      dados: [
        {
          numero: '3',
          unidade: 'comprimentos de onda',
          rotulo: '755, 808 e 1064 nm, ao mesmo tempo',
          leitura: 'Os três saem juntos do aplicador Triple Wave.',
        },
        {
          numero: '−10',
          unidade: '°C',
          rotulo: 'Resfriamento, até',
          leitura: 'O frio vem do sistema Cryocooling MAXX.',
        },
        {
          numero: '10,4',
          unidade: 'polegadas',
          rotulo: 'Tela touch',
          leitura: 'Os parâmetros de cada atendimento se ajustam na tela.',
        },
      ],
      fonteDados: trava('Ácrus'),
      fichaCompleta: [
        { rotulo: 'Comprimentos de onda', valor: '3, ao mesmo tempo: 755, 808 e {1064 nm}' },
        { rotulo: 'Resfriamento', valor: 'Até {−10 °C} (Cryocooling MAXX)' },
        { rotulo: 'Aplicador', valor: 'Triple Wave, com suporte' },
        { rotulo: 'Tela', valor: 'Touch de {10,4 polegadas}' },
        { rotulo: 'Fabricante', valor: 'HTM' },
      ],
      mensagens: mensagens('Ácrus'),
    },
  },
};

/* ============================================================
   2. Ultrassom microfocado
   ============================================================ */

export const ultrassomTextos: TextosNicho = {
  slug: 'ultrassom-microfocado-v2',
  seo: {
    titulo: 'Máquina de ultrassom microfocado Ultramed MPT | Leal',
    descricao:
      'Proposta do Ultramed MPT no WhatsApp. Na conversa, pergunte sobre o pós-venda: garantia, assistência, preço dos cartuchos, treinamento, instalação e o que acontece se a máquina parar.',
  },
  nicho: {
    nome: 'ultrassom microfocado',
    comArtigo: 'uma máquina de ultrassom microfocado',
    peca: 'Cartuchos',
  },
  topo: {
    sobre: SOBRE,
    h1: 'Máquina de ultrassom microfocado Ultramed MPT',
    sub: 'Ultrassom microfocado que trabalha de {1,5 a 16 mm} de profundidade, conforme o cartucho. Mesmo preço da loja da Rede ISP, com a proposta por escrito no WhatsApp. Na mesma conversa, pergunte sobre o pós-venda: garantia, assistência, preço de cada cartucho de reposição, treinamento, instalação e o que acontece se a máquina parar.',
  },
  posVenda: {
    titulo: 'Pergunte antes da compra o que acontece depois da entrega',
    abertura: `${DOR} No ultrassom microfocado, entra também a conta do cartucho que acaba.`,
  },
  maquina: { titulo: 'O Ultramed MPT em três números' },
  compra: { titulo: 'Como a compra anda' },
  perguntas: {
    titulo: 'O que ainda falta saber',
    doNicho: {
      pergunta: 'Quanto dura cada cartucho do Ultramed MPT?',
      resposta:
        '<p>Cada cartucho tem um número de disparos. O 2D, por exemplo, tem 20.000. Pergunte na conversa quais cartuchos vêm com a máquina, o preço da reposição e se há em estoque.</p>',
    },
    manter: {
      pergunta: 'Quanto custa manter a máquina funcionando?',
      resposta:
        '<p>Além do preço da máquina, entram na conta depois da compra: os cartuchos que se trocam por número de disparos (quais são e quantos disparos fazem, o fabricante informa), o material de rotina, se o manual indicar algum, e a manutenção fora da garantia.</p><p>Pergunte na conversa o preço de cada cartucho, quem faz a manutenção fora da garantia e como ela é cobrada. Com esses números, você faz a conta da sua clínica.</p>',
    },
    variantes: {
      pergunta: 'Existe mais de um Ultramed?',
      resposta:
        '<p>Sim. A Rede ISP vende duas versões do Ultramed MPT, com códigos de modelo diferentes: o Ultramed MPT e o Ultramed MPT Versão Especial. Pergunte na conversa o que muda entre elas, como kit e cartuchos, e o número de cada uma na Anvisa, para conferir no portal.</p>',
    },
  },
  pedido: {
    titulo: 'Monte o pedido em dois toques',
    texto: 'A mensagem sai pronta para o WhatsApp da Leal.',
  },
  mensagemBarra: 'Olá! Quero a proposta de uma máquina de ultrassom microfocado.',
  aparelhos: {
    ultramed: {
      nome: 'Ultramed MPT',
      fabricante: 'Medical San',
      dados: [
        {
          numero: '1,5 a 16',
          unidade: 'mm',
          rotulo: 'Profundidades, conforme o cartucho',
          leitura: 'Cada profundidade pede o seu cartucho. Pergunte quais vêm com a máquina.',
        },
        {
          numero: '20.000',
          unidade: 'disparos',
          rotulo: 'Por cartucho 2D',
          leitura: 'É a conta da reposição: depois disso, o cartucho 2D se troca.',
        },
        {
          numero: '5',
          unidade: 'kg',
          rotulo: 'Peso',
          leitura: 'Cabe numa bancada e muda de sala com facilidade.',
        },
      ],
      fonteDados: trava('Ultramed MPT'),
      fichaCompleta: [
        { rotulo: 'Aplicadores', valor: 'Entre eles 2D MPT, Pen MPT e 9D' },
        { rotulo: 'Profundidades', valor: '{1,5 a 16 mm}, conforme o cartucho' },
        { rotulo: 'Disparos por cartucho', valor: '2D: {20.000}; 9D: {525}' },
        { rotulo: 'Peso', valor: '{5 kg}' },
        { rotulo: 'Fabricante', valor: 'Medical San, Estrela (RS)' },
      ],
      mensagens: mensagens('Ultramed MPT'),
    },
    iasis: {
      nome: 'IÁSIS HIFU MPT',
      fabricante: 'Bioset',
      dados: [
        {
          numero: '1,5 a 13',
          unidade: 'mm',
          rotulo: 'Profundidades, conforme o aplicador',
          leitura: 'Três aplicadores, linear, multilinear e pontual, cada um com as suas profundidades.',
        },
        {
          numero: '12.000',
          unidade: 'disparos',
          rotulo: 'Por aplicador linear ou multilinear',
          leitura: 'É a conta da reposição desses dois aplicadores.',
        },
        {
          numero: '14,6',
          unidade: 'kg',
          rotulo: 'Peso',
          leitura: 'Conte com uma bancada firme na sala.',
        },
      ],
      fonteDados: trava('IÁSIS HIFU MPT'),
      fichaCompleta: [
        { rotulo: 'Aplicadores', valor: '3: linear, multilinear e pontual' },
        {
          rotulo: 'Profundidades',
          valor: 'Linear {1,5, 3 e 4,5 mm}; multilinear {7 e 13 mm}; pontual {1,5, 3 e 4,5 mm}',
        },
        { rotulo: 'Disparos', valor: 'Linear e multilinear {12.000}; pontual {100.000}' },
        { rotulo: 'Peso', valor: '{14,6 kg}' },
        { rotulo: 'Fabricante', valor: 'Bioset, Rio Claro (SP)' },
      ],
      mensagens: mensagens('IÁSIS HIFU MPT'),
    },
  },
};

/* ============================================================
   3. Criolipólise
   ============================================================ */

export const criolipoliseTextos: TextosNicho = {
  slug: 'criolipolise-v2',
  seo: {
    titulo: 'Máquina de criolipólise Criodermis Smart | Leal',
    descricao:
      'Proposta do Criodermis Smart no WhatsApp. Na conversa, pergunte sobre o pós-venda: garantia, assistência, reposição dos aplicadores, treinamento, instalação e o que acontece se a máquina parar.',
  },
  nicho: {
    nome: 'criolipólise',
    comArtigo: 'uma máquina de criolipólise',
    peca: 'Aplicadores',
  },
  topo: {
    sobre: SOBRE,
    h1: 'Máquina de criolipólise Criodermis Smart',
    sub: 'Criolipólise por placas e refrigeração sem água, num aparelho de {6,5 kg}. A proposta sai no WhatsApp, com o preço e a condição de pagamento. Na mesma conversa, pergunte sobre o pós-venda: garantia, assistência, preço dos aplicadores de reposição, treinamento, instalação e o que acontece se a máquina parar.',
  },
  posVenda: {
    titulo: 'Pergunte antes da compra o que acontece depois da entrega',
    abertura: `${DOR} Na criolipólise, entra também uma pergunta: o aparelho gasta algum material a cada atendimento?`,
  },
  maquina: { titulo: 'O Criodermis Smart em três números' },
  compra: { titulo: 'Como a compra anda' },
  perguntas: {
    titulo: 'O que ainda falta saber',
    doNicho: {
      pergunta: 'O Criodermis Smart usa membrana?',
      resposta:
        '<p>Usa. A membrana é vendida à parte. Pergunte na conversa se alguma vem na caixa, quanto se usa a cada atendimento, o preço da reposição e se há em estoque.</p>',
    },
    manter: {
      pergunta: 'Quanto custa manter a máquina funcionando?',
      resposta:
        '<p>Além do preço da máquina, entram na conta depois da compra: o preço de um aplicador, se precisar repor, a membrana, vendida à parte, e a manutenção fora da garantia.</p><p>Pergunte na conversa o preço dos aplicadores, quem faz a manutenção fora da garantia e como ela é cobrada. Com esses números, você faz a conta da sua clínica.</p>',
    },
    variantes: variantePadrao('Criodermis', 'Criodermis Smart'),
  },
  pedido: {
    titulo: 'Monte o pedido em dois toques',
    texto: 'A mensagem sai pronta para o WhatsApp da Leal.',
  },
  mensagemBarra: 'Olá! Quero a proposta de uma máquina de criolipólise.',
  aparelhos: {
    criodermis: {
      nome: 'Criodermis Smart',
      fabricante: 'Medical San',
      dados: [
        {
          numero: 'Sem água',
          rotulo: 'Refrigeração',
          leitura: 'Sem reservatório para encher ou esvaziar na rotina da sala.',
        },
        {
          numero: '6,5',
          unidade: 'kg',
          rotulo: 'Peso',
          leitura: 'Leve para mudar de sala ou de bancada.',
        },
        {
          numero: 'Placas',
          rotulo: 'Tipo de aplicador',
          leitura: 'Pergunte quais aplicadores e quantos vêm na caixa.',
        },
      ],
      fonteDados: trava('Criodermis Smart'),
      fichaCompleta: [
        { rotulo: 'Aplicadores', valor: 'De placas' },
        { rotulo: 'Refrigeração', valor: 'Sem água' },
        { rotulo: 'Peso', valor: '{6,5 kg}' },
        { rotulo: 'Fabricante', valor: 'Medical San, Estrela (RS)' },
      ],
      mensagens: mensagens('Criodermis Smart'),
    },
    polarys: {
      nome: 'Polarys',
      fabricante: 'Ibramed',
      dados: [
        {
          numero: '360°',
          rotulo: 'Aplicador de sucção',
          leitura: 'Há também aplicadores de placas. Pergunte quais vêm na caixa.',
        },
        {
          numero: 'Água',
          rotulo: 'Refrigeração com reservatório',
          leitura: 'O reservatório entra na rotina de cuidado da sala.',
        },
        {
          numero: '34,6',
          unidade: 'kg',
          rotulo: 'Peso',
          leitura: 'Pede lugar fixo na sala ou um carrinho firme.',
        },
      ],
      fonteDados: trava('Polarys'),
      fichaCompleta: [
        { rotulo: 'Aplicadores', valor: 'De sucção ({360°}) e de placas' },
        { rotulo: 'Refrigeração', valor: 'Com reservatório de água' },
        { rotulo: 'Peso', valor: '{34,6 kg}' },
        { rotulo: 'Fabricante', valor: 'Ibramed, Amparo (SP)' },
      ],
      mensagens: mensagens('Polarys'),
    },
  },
};

/* ============================================================
   4. Laser para remoção de pigmentos (carro-chefe provisório)
   ============================================================ */

export const pigmentosTextos: TextosNicho = {
  slug: 'laser-remocao-de-pigmentos-v2',
  seo: {
    titulo: 'Laser para remoção de pigmentos Syrius | Leal',
    descricao:
      'Proposta do Syrius no WhatsApp. Na conversa, pergunte sobre o pós-venda: garantia, assistência, reposição das ponteiras, treinamento, instalação e o que acontece se a máquina parar.',
  },
  nicho: {
    nome: 'laser para remoção de pigmentos',
    comArtigo: 'uma máquina de laser para remoção de pigmentos',
    peca: 'Ponteiras',
  },
  topo: {
    sobre: SOBRE,
    h1: 'Máquina de laser para remoção de pigmentos Syrius',
    sub: 'Laser de {4 comprimentos de onda}, de 532 a {1320 nm}, num aparelho só. A proposta sai no WhatsApp, com o preço e a condição de pagamento. Na mesma conversa, pergunte sobre o pós-venda: garantia, assistência, preço das ponteiras de reposição, treinamento, instalação e o que acontece se a máquina parar.',
  },
  posVenda: {
    titulo: 'Pergunte antes da compra o que acontece depois da entrega',
    abertura: `${DOR} Num laser, entra também o que a sala precisa ter para a instalação, como tensão e espaço.`,
  },
  maquina: { titulo: 'O Syrius em três números' },
  compra: { titulo: 'Como a compra anda' },
  perguntas: {
    titulo: 'O que ainda falta saber',
    doNicho: {
      pergunta: 'Que tomada a sala precisa para o Syrius?',
      resposta:
        '<p>O Syrius trabalha em 220 V. Pergunte na conversa o que a sala precisa ter para a instalação, como tensão e espaço, e quem instala, e peça o manual.</p>',
    },
    manter: {
      pergunta: 'Quanto custa manter a máquina funcionando?',
      resposta:
        '<p>Além do preço da máquina, entram na conta depois da compra: as peças que o manual mandar trocar com o uso, o cuidado com o circuito de água e a manutenção fora da garantia.</p><p>Pergunte na conversa o preço das ponteiras, quem faz a manutenção fora da garantia e como ela é cobrada. Com esses números, você faz a conta da sua clínica.</p>',
    },
    variantes: variantePadrao('Syrius', 'Syrius'),
  },
  pedido: {
    titulo: 'Monte o pedido em dois toques',
    texto: 'A mensagem sai pronta para o WhatsApp da Leal.',
  },
  mensagemBarra: 'Olá! Quero a proposta de uma máquina de laser para remoção de pigmentos.',
  aparelhos: {
    syrius: {
      nome: 'Syrius',
      fabricante: 'Ibramed',
      dados: [
        {
          numero: '4',
          unidade: 'comprimentos de onda',
          rotulo: '532, 755, 1064 e 1320 nm',
          leitura: 'Os quatro num aparelho só, na mesma sala.',
        },
        {
          numero: '220',
          unidade: 'V',
          rotulo: 'Tensão',
          leitura: 'A sala precisa de tomada 220 V. Pergunte o que a instalação pede.',
        },
        {
          numero: 'Água',
          rotulo: 'Refrigeração',
          leitura: 'Água, radiador e ventilação forçada. O cuidado com o circuito está no manual.',
        },
      ],
      fonteDados: trava('Syrius'),
      fichaCompleta: [
        { rotulo: 'Tipo', valor: 'Nd:YAG Q-switched' },
        { rotulo: 'Comprimentos de onda', valor: '532, 755, 1064 e {1320 nm}' },
        { rotulo: 'Refrigeração', valor: 'Água, radiador e ventilação forçada' },
        { rotulo: 'Tensão', valor: '{220 V}' },
        { rotulo: 'Fabricante', valor: 'Ibramed, Amparo (SP)' },
      ],
      mensagens: mensagens('Syrius'),
    },
    magni: {
      nome: 'Magni ICE YAG',
      fabricante: 'Bioset',
      dados: [
        {
          numero: '2',
          unidade: 'comprimentos de onda',
          rotulo: '532 e 1064 nm',
          leitura: 'Os dois num aparelho só, na mesma sala.',
        },
        {
          numero: '110 a 130',
          unidade: 'V',
          rotulo: 'Tensão',
          leitura: 'Liga em rede de 110 a 130 V. Pergunte o que a instalação pede.',
        },
        {
          numero: '20',
          unidade: 'kg',
          rotulo: 'Peso, só o aparelho',
          leitura: 'Pede lugar fixo na sala ou um carrinho firme.',
        },
      ],
      fonteDados: trava('Magni ICE YAG'),
      fichaCompleta: [
        { rotulo: 'Tipo', valor: 'Nd:YAG Q-switched' },
        { rotulo: 'Comprimentos de onda', valor: '532 e {1064 nm}' },
        { rotulo: 'Refrigeração', valor: 'Ciclo fechado de água e ar' },
        { rotulo: 'Tensão', valor: '{110 a 130 V}' },
        { rotulo: 'Peso', valor: '{20 kg}, só o aparelho' },
        { rotulo: 'Fabricante', valor: 'Bioset, Rio Claro (SP)' },
      ],
      mensagens: mensagens('Magni ICE YAG'),
    },
  },
};

/* ============================================================
   5. Radiofrequência
   ============================================================ */

export const radiofrequenciaTextos: TextosNicho = {
  slug: 'aparelho-de-radiofrequencia-v2',
  seo: {
    titulo: 'Aparelho de radiofrequência Novo Hooke | Leal',
    descricao:
      'Proposta do Novo Hooke no WhatsApp. Na conversa, pergunte sobre o pós-venda: garantia, assistência, reposição dos aplicadores, treinamento, instalação e o que acontece se o aparelho parar.',
  },
  nicho: {
    nome: 'radiofrequência',
    comArtigo: 'um aparelho de radiofrequência',
    peca: 'Aplicadores',
  },
  topo: {
    sobre: SOBRE,
    h1: 'Aparelho de radiofrequência Novo Hooke',
    sub: 'Radiofrequência nos modos monopolar e bipolar, bivolt, de {100 a 240 V}. A proposta sai no WhatsApp, com o preço e a condição de pagamento. Na mesma conversa, pergunte sobre o pós-venda: garantia, assistência, preço dos aplicadores de reposição, treinamento, instalação e o que acontece se o aparelho parar.',
  },
  posVenda: {
    titulo: 'Pergunte antes da compra o que acontece depois da entrega',
    abertura: `${DOR} Por isso vale perguntar antes de assinar.`,
  },
  maquina: { titulo: 'O Novo Hooke em três números' },
  compra: { titulo: 'Como a compra anda' },
  perguntas: {
    titulo: 'O que ainda falta saber',
    doNicho: {
      pergunta: 'O Novo Hooke liga em 110 ou em 220 V?',
      resposta:
        '<p>Nos dois: ele é bivolt, de 100 a 240 V. Pergunte na conversa o que a sala precisa ter para a instalação e quem instala, e peça o manual.</p>',
    },
    manter: {
      pergunta: 'Quanto custa manter o aparelho funcionando?',
      resposta:
        '<p>Além do preço do aparelho, entram na conta depois da compra: as peças que o fabricante mandar trocar com o uso, se houver, o gel ou creme que o manual pedir e a manutenção fora da garantia.</p><p>Pergunte na conversa o preço de cada peça de reposição, quem faz a manutenção fora da garantia e como ela é cobrada. Com esses números, você faz a conta da sua clínica.</p>',
    },
    variantes: {
      pergunta: 'Existe mais de um Hooke?',
      resposta:
        '<p>O “Novo” do nome indica que houve uma versão anterior. Esta página trata do Novo Hooke vendido pela Rede ISP. Peça na conversa o modelo exato e o número dele na Anvisa, para conferir no portal.</p>',
    },
  },
  pedido: {
    titulo: 'Monte o pedido em dois toques',
    texto: 'A mensagem sai pronta para o WhatsApp da Leal.',
  },
  mensagemBarra: 'Olá! Quero a proposta de um aparelho de radiofrequência.',
  aparelhos: {
    hooke: {
      nome: 'Novo Hooke',
      fabricante: 'Ibramed',
      dados: [
        {
          numero: 'Sem placa',
          rotulo: 'Placa dispersiva',
          leitura: 'Não usa placa de retorno para posicionar a cada atendimento.',
        },
        {
          numero: '100 a 240',
          unidade: 'V',
          rotulo: 'Tensão, bivolt',
          leitura: 'Liga em 110 ou em 220 V.',
        },
        {
          numero: '2',
          unidade: 'modos',
          rotulo: 'Monopolar e bipolar',
          leitura: 'Aplicadores faciais e corporais, nos dois modos.',
        },
      ],
      fonteDados: trava('Novo Hooke'),
      fichaCompleta: [
        { rotulo: 'Frequência', valor: '{27,12 MHz}' },
        { rotulo: 'Aplicadores', valor: 'Faciais e corporais' },
        { rotulo: 'Modos', valor: 'Monopolar e bipolar' },
        { rotulo: 'Placa dispersiva', valor: 'Não usa' },
        { rotulo: 'Tensão', valor: 'Bivolt, {100 a 240 V}' },
        { rotulo: 'Fabricante', valor: 'Ibramed' },
      ],
      mensagens: mensagens('Novo Hooke'),
    },
    effect: {
      nome: 'Effect',
      fabricante: 'HTM',
      dados: [
        {
          numero: '3',
          unidade: 'modos',
          rotulo: 'Monopolar, bipolar e multipolar',
          leitura: 'Ponteiras resistivas e capacitivas, faciais e corporais.',
        },
        {
          numero: 'Com placa',
          rotulo: 'Placa dispersiva',
          leitura: 'Usa placa de retorno. Em quais modos, o manual diz.',
        },
        {
          numero: 'Bivolt',
          rotulo: 'Tensão',
          leitura: 'Liga em 110 ou em 220 V.',
        },
      ],
      fonteDados: trava('Effect'),
      fichaCompleta: [
        { rotulo: 'Frequências', valor: '{0,6}, {1,2} e {2,4 MHz}' },
        { rotulo: 'Ponteiras', valor: 'Resistivas e capacitivas, faciais e corporais' },
        { rotulo: 'Modos', valor: 'Monopolar, bipolar e multipolar' },
        { rotulo: 'Placa dispersiva', valor: 'Usa' },
        { rotulo: 'Tensão', valor: 'Bivolt' },
        { rotulo: 'Fabricante', valor: 'HTM' },
      ],
      mensagens: mensagens('Effect'),
    },
  },
};

/* ============================================================
   6. Laser CO₂ fracionado (único manual lido: Hegon, REV07)
   ============================================================ */

export const laserCo2Textos: TextosNicho = {
  slug: 'aparelho-laser-co2-fracionado-v2',
  seo: {
    titulo: 'Aparelho de laser CO₂ fracionado Hegon | Leal',
    descricao:
      'Proposta do Hegon no WhatsApp. Na conversa, pergunte sobre o pós-venda: garantia, assistência, tubo e ponteiras de reposição, treinamento, instalação e o que acontece se o aparelho parar.',
  },
  nicho: {
    nome: 'laser CO₂ fracionado',
    comArtigo: 'um aparelho de laser CO₂ fracionado',
    peca: 'Tubo e ponteiras',
  },
  topo: {
    sobre: SOBRE,
    h1: 'Aparelho de laser CO₂ fracionado Hegon',
    sub: 'Laser CO₂ fracionado de {1 a 30 W}, refrigerado por água em circuito fechado. A proposta sai no WhatsApp, com o preço e a condição de pagamento. Na mesma conversa, pergunte sobre o pós-venda: garantia, assistência, preço do tubo e das ponteiras de reposição, treinamento, instalação e o que acontece se o aparelho parar.',
  },
  posVenda: {
    titulo: 'Pergunte antes da compra o que acontece depois da entrega',
    abertura: `${DOR} No Hegon, entra também a revisão anual que o manual pede.`,
  },
  maquina: { titulo: 'O Hegon em três números' },
  compra: { titulo: 'Como a compra anda' },
  perguntas: {
    titulo: 'O que ainda falta saber',
    doNicho: {
      pergunta: 'Os óculos de proteção vêm com o Hegon?',
      resposta:
        '<p>Pelo manual do fabricante, a caixa traz um protetor ocular para o paciente e um par de óculos para quem opera. Quem mais na sala precisa de proteção, o manual diz. Pergunte na conversa o que vem na caixa e quanto custa cada par a mais.</p>',
    },
    manter: {
      pergunta: 'Quanto custa manter o aparelho funcionando?',
      resposta:
        '<p>Além do preço do aparelho, entram na conta depois da compra: o tubo e as ponteiras, quando precisarem de troca, e a manutenção fora da garantia, com a preventiva e a calibração anuais que o manual pede.</p><p>Pergunte na conversa o preço do tubo e das ponteiras, quem faz a manutenção fora da garantia e como ela é cobrada. Com esses números, você faz a conta da sua clínica.</p>',
    },
    variantes: variantePadrao('Hegon', 'Hegon'),
  },
  pedido: {
    titulo: 'Monte o pedido em dois toques',
    texto: 'A mensagem sai pronta para o WhatsApp da Leal.',
  },
  mensagemBarra: 'Olá! Quero a proposta de um aparelho de laser CO₂ fracionado.',
  aparelhos: {
    hegon: {
      nome: 'Hegon',
      fabricante: 'Medical San',
      dados: [
        {
          numero: '1 a 30',
          unidade: 'W',
          rotulo: 'Potência de saída',
          leitura: 'A potência se ajusta dentro dessa faixa, a cada atendimento.',
        },
        {
          numero: '110 a 230',
          unidade: 'V',
          rotulo: 'Tensão',
          leitura: 'Liga nessa faixa de tensão. Pergunte o que a instalação pede.',
        },
        {
          numero: '40',
          unidade: 'kg',
          rotulo: 'Peso líquido',
          leitura: 'Refrigerado por água em circuito fechado. Pede lugar fixo na sala.',
        },
      ],
      fonteDados: {
        estado: 'confirmado',
        valor: {
          documento: 'Manual do usuário do Hegon (Medical San)',
          revisao: 'REV07',
          conferidoEm: '2026-11-18',
        },
        fonte: 'Drive da Medical San, mesmo arquivo publicado no portal da Anvisa',
        em: '2026-11-18',
      },
      fichaCompleta: [
        { rotulo: 'Comprimento de onda', valor: '{10.600 nm}' },
        { rotulo: 'Classe do laser', valor: '{Classe 4}' },
        { rotulo: 'Potência de saída', valor: '{1 a 30 W}' },
        { rotulo: 'Tensão', valor: '{110 a 230 V}' },
        { rotulo: 'Peso líquido', valor: '{40 kg}' },
        { rotulo: 'Refrigeração', valor: 'Água em circuito fechado' },
        { rotulo: 'Manutenção', valor: 'Preventiva e calibração, uma vez por ano' },
        { rotulo: 'Fabricante', valor: 'Medical San' },
      ],
      mensagens: mensagens('Hegon'),
    },
    lunya: {
      nome: 'Lunya',
      fabricante: 'Bioset',
      dados: [
        {
          numero: 'Até 50',
          unidade: 'W',
          rotulo: 'Potência',
          leitura: 'A potência se ajusta dentro dessa faixa, a cada atendimento.',
        },
        {
          numero: '230',
          unidade: 'V',
          rotulo: 'Tensão',
          leitura: 'A sala precisa de tomada 230 V. Pergunte o que a instalação pede.',
        },
        {
          numero: '7',
          unidade: 'geometrias',
          rotulo: 'Peça de mão',
          leitura: 'Desenhos de disparo de até 20 × 20 mm.',
        },
      ],
      fonteDados: trava('Lunya'),
      fichaCompleta: [
        { rotulo: 'Comprimento de onda', valor: '{10.600 nm}' },
        { rotulo: 'Classe do laser', valor: '{Classe 4}' },
        { rotulo: 'Potência', valor: 'Até {50 W}' },
        { rotulo: 'Tensão', valor: '{230 V}' },
        { rotulo: 'Peça de mão', valor: '7 geometrias, área de até {20 × 20 mm}' },
        { rotulo: 'Fabricante', valor: 'Bioset' },
      ],
      mensagens: mensagens('Lunya'),
    },
  },
};
