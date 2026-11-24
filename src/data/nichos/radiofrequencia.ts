// LP 5: aparelho de radiofrequência convencional (Novo Hooke × Effect), v1 (comparação).
// Rascunho do Maestro de 15/11/2026 sobre a pesquisa
// (_cerebro/Entregas/2026-11-15 - Pesquisa - Benchmark LP radiofrequencia.md).
// Corporal e facial: nada de uso íntimo (categoria sensível no Google), nem no texto
// nem na imagem. Sem indicação, sem "reduz", "tira", "firmeza". Frequência é dado de
// ficha, nunca argumento de "melhor". Potência e peso ficam fora: só a Ibramed publica,
// e linha com uma coluna vazia sugere vencedor.
import { fotosRadiofrequencia as f } from '../fotos-radiofrequencia';
import { contato } from '../contato';
import type { Nicho } from './tipos';
import { privacidadePadrao, cuidaPadrao, avisoAtendimento } from './comum';

const conferir = ' [[CONFERIR NO MANUAL]]';
const kit = '[[CONFIRMAR COM A REDE: kit em (data)]] A lista completa do que vem na caixa e do que é vendido à parte vai na proposta.';

export const radiofrequencia: Nicho = {
  slug: 'aparelho-de-radiofrequencia',
  seo: {
    titulo: 'Aparelho de radiofrequência profissional: Novo Hooke ou Effect | Leal Tecnologia e Saúde',
    descricao: 'Compare a frequência, os aplicadores, a placa dispersiva e a assistência do Novo Hooke e do Effect antes de comprar. Unidade Independente da Rede ISP.',
  },
  rodapeMarcas:
    'Novo Hooke é marca da Ibramed. Effect é marca da HTM. Imagens da loja da rede e dos fabricantes, usadas com autorização por escrito.',
  rodapeUso:
    'Equipamentos destinados a uso profissional. O uso segue a regularização de cada aparelho na Anvisa (registro ou notificação), o manual do fabricante e as regras do conselho de quem opera.',
  mensagemPrincipal: 'Olá! Quero a comparação por escrito do Novo Hooke e do Effect antes de comprar, para o meu negócio.',
  mensagemBarra: 'Olá! Quero comparar os aparelhos de radiofrequência profissionais antes de comprar, para o meu negócio.',
  hero: {
    sobre: 'Equipamento para clínicas e profissionais habilitados',
    h1: 'Aparelho de radiofrequência profissional: compare Novo Hooke e Effect antes de comprar',
    sub: 'Veja lado a lado a frequência, os aplicadores e a placa dispersiva de cada aparelho, e o que perguntar sobre ponteiras, garantia e assistência. Número Anvisa e manual chegam antes da proposta.',
    botao: 'Quero comparar no WhatsApp',
    apoio: avisoAtendimento,
    filtro: 'Esta página é para quem vai comprar o equipamento para o seu negócio. Não vendemos sessão nem aparelho de uso doméstico.',
    pedestais: [
      { nome: 'Novo Hooke', foto: f.hooke04, alt: 'Novo Hooke, da Ibramed', encaixe: 'contem', escala: 1.05 },
      { nome: 'Effect', foto: f.effect02, alt: 'Effect, da HTM', encaixe: 'contem', escala: 1.1 },
    ],
    pendencia: 'CONFIRMAR: autorização das imagens da Ibramed; conferir que a foto do Effect, da loja da rede, é mesmo o Effect; pedir o kit de imagem à HTM; tirar a que tiver pessoa, pele, texto, selo ou frase de venda ("único", "maior potência"), tela com nome de protocolo, região do corpo ou indicação, e aplicador, ponteira, placa ou acessório fora do aparelho. Se o portal não confirmar o 80212480015 para o Effect, ou se a finalidade registrada não for compatível com a página, o Effect sai e entra outro aparelho da rede; H1, título, mensagens e fotos são refeitos',
  },
  vitrine: {
    titulo: 'O que o preço da vitrine não mostra',
    grande: 'Você já viu o preço na vitrine. Ele diz quanto custa o aparelho, <em>não quanto custa repor uma ponteira, o que a garantia exige nem quem atende quando a máquina para.</em>',
    apoio: 'Na proposta, a Leal põe por escrito o que a rede e o fabricante informarem sobre cada ponto, para você comparar com o que viu.',
    listaTitulo: 'O que perguntar antes de fechar:',
    itens: [
      { icone: 'caixa', nome: 'Kit e entrega', texto: 'quais aplicadores ou ponteiras vêm, quais são vendidos à parte, quanto custa cada um e o frete até a sua cidade.' },
      { icone: 'aplicador', nome: 'Peças que se trocam', texto: 'se o fabricante indica vida útil para ponteira, aplicador ou placa dispersiva, e quanto custa repor cada um.' },
      { icone: 'placa', nome: 'Placa e meio de contato', texto: 'se o aparelho usa placa dispersiva, e qual creme, gel ou óleo o manual pede. Alguns fabricantes exigem um tipo só.' },
      { icone: 'termometro', nome: 'Temperatura', texto: 'se o manual orienta medir a temperatura da pele durante o uso, com que instrumento, e se ele vem na caixa ou é vendido à parte.' },
      { icone: 'energia', nome: 'Tensão', texto: 'a do aparelho, se a sua sala tem a mesma e, se não tiver, o que a instalação pede.' },
      { icone: 'capelo', nome: 'Treinamento', texto: 'quem dá, onde e com quantas horas.' },
      { icone: 'chave', nome: 'Assistência', texto: 'onde fica, em quantos dias a máquina volta, quem paga o frete do reparo, o que vale se ela chegar com defeito e quem atende se a revenda deixar de existir.' },
      { icone: 'escudo', nome: 'Garantia', texto: 'o prazo, o que o termo de cada marca cobre, no aparelho e nas ponteiras, e se ele exige revisão periódica.' },
      { icone: 'calendario', nome: 'Parcela e bloqueio', texto: 'se o contrato não prevê pausa, ela vence mesmo com a máquina parada. Pergunte também se o aparelho tem bloqueio por atraso, quem libera e em quantos dias.' },
    ],
    fecho: 'A Leal responde a cada item por escrito, antes de você fechar, com o que a rede e o fabricante informarem.',
    cuidaTitulo: 'Quem cuida de cada parte',
    cuida: [
      {
        ...cuidaPadrao[0],
        texto: 'Compara as marcas, envia ficha, número Anvisa e manual e faz a proposta por escrito. O atendimento da compra é pelo WhatsApp.',
      },
      cuidaPadrao[1],
      cuidaPadrao[2],
    ],
    lei: 'Essa divisão mostra quem cuida de cada etapa. Ela não reduz os direitos que a lei garante a quem compra.',
    link: {
      texto: 'Perguntar sobre ponteiras, placa e assistência',
      mensagem: 'Olá! Quero saber, por escrito, o que vem na caixa, quanto custa repor ponteiras e placa e como funciona a assistência do aparelho de radiofrequência.',
    },
  },
  comparar: {
    titulo: 'Novo Hooke ou Effect: onde os dois diferem',
    abertura: 'Os dois são aparelhos de radiofrequência para uso profissional, de fabricantes diferentes. Trabalham em frequências diferentes, e um usa placa dispersiva e o outro não, segundo os fabricantes [[CONFERIR NO MANUAL]]: a tabela mostra a ficha de cada um. A frequência é um dado de ficha. Para que cada aparelho pode ser usado é o que consta na regularização dele na Anvisa e no manual.',
    criterio: 'Três perguntas ajudam a escolher: quais aplicadores você quer ter na máquina, se quer trabalhar com placa dispersiva ou sem ela e qual assistência atende a sua cidade.',
    aparelhos: [
      {
        id: 'hooke',
        curto: 'Hooke',
        nomeBotao: 'Novo Hooke',
        nome: 'Novo Hooke',
        fabricante: 'Ibramed',
        mensagem: 'Olá! Já escolhi o Novo Hooke e quero a proposta por escrito.',
        galeria: [
          { src: f.hooke08, alt: 'Novo Hooke, foto da loja da rede' },
          { src: f.hooke01, alt: 'Novo Hooke, imagem 1 da Ibramed' },
          { src: f.hooke02, alt: 'Novo Hooke, imagem 2 da Ibramed' },
          { src: f.hooke03, alt: 'Novo Hooke, imagem 3 da Ibramed' },
          { src: f.hooke06, alt: 'Novo Hooke, imagem 4 da Ibramed' },
        ],
      },
      {
        id: 'effect',
        curto: 'Effect',
        nome: 'Effect',
        fabricante: 'HTM',
        mensagem: 'Olá! Já escolhi o Effect e quero a proposta por escrito.',
        galeria: [{ src: f.effect02, alt: 'Effect, foto da loja da rede' }],
      },
    ],
    pendenciaGalerias:
      'CONFIRMAR: imagens da Ibramed só com a aprovação da rede; o kit de imagem do Effect vem da HTM pela rede; abrir cada foto e tirar a que tiver pessoa, pele, texto, selo ou frase de venda ("único", "maior potência"), tela com nome de protocolo, região do corpo ou indicação, e aplicador, ponteira, placa ou acessório fora do aparelho',
    fichaTitulo: 'Ficha curta',
    ficha: [
      {
        rotulo: 'Modelo e número Anvisa',
        valores: [
          '[[CONFIRMAR: nome técnico, número, se é registro ou notificação no portal e a indicação registrada; a Ibramed mostra 10360319025]]',
          '[[CONFIRMAR: nome técnico, número, se é registro ou notificação no portal e a indicação registrada; a HTM mostra 80212480015, conferir se é do Effect]]',
        ],
      },
      { rotulo: 'Frequência', valores: ['{27,12 MHz}, segundo a Ibramed' + conferir, '{0,6}, {1,2} e {2,4 MHz}, segundo a HTM' + conferir] },
      {
        rotulo: 'Aplicadores',
        valores: [
          'Aplicadores faciais e corporais, em uso monopolar e bipolar, segundo a Ibramed' + conferir,
          'Ponteiras resistivas e capacitivas, faciais e corporais, em uso monopolar, bipolar e multipolar, segundo a HTM' + conferir,
        ],
      },
      { rotulo: 'Placa dispersiva', valores: ['Não usa, segundo a Ibramed' + conferir, 'Usa, segundo a HTM [[CONFERIR NO MANUAL: em quais ponteiras ou modos]]'] },
      { rotulo: 'Na caixa', valores: [kit, kit] },
      { rotulo: 'Tensão', valores: ['Bivolt, {100 a 240 V}, segundo a Ibramed' + conferir, 'Bivolt, segundo a HTM' + conferir] },
      {
        rotulo: 'Garantia',
        valores: [
          'Conforme o termo da Ibramed [[CONFIRMAR COM A REDE: prazo em meses e revisões exigidas]]',
          'Conforme o termo da HTM [[CONFIRMAR COM A REDE: prazo em meses e revisões exigidas]]',
        ],
      },
      {
        rotulo: 'Assistência técnica',
        valores: ['Assistências indicadas no site da Ibramed [[CONFIRMAR: data de acesso]]', 'Assistências indicadas pela HTM [[CONFIRMAR COM A REDE]]'],
      },
    ],
    fichaNota:
      'Dados em conferência no manual de cada aparelho [[CONFIRMAR: data]]. A tabela não diz qual aparelho é melhor: a frequência é um dado de ficha, e o uso de cada aparelho é o que o manual e a regularização de cada um na Anvisa indicam. O que vem na caixa vai escrito na proposta. Qual assistência atende a sua cidade vai na proposta, como o fabricante informar. Novo Hooke é marca da Ibramed; Effect, da HTM. <a href="https://consultas.anvisa.gov.br/" target="_blank" rel="noopener"><strong>Conferir o número e a indicação na Anvisa</strong></a>',
    notas: [
      '<strong>Procura radiofrequência fracionada ou microagulhada?</strong> É outra categoria de aparelho. Pergunte pelo WhatsApp quais a rede tem hoje.',
      '<strong>Procura aparelho de alta frequência?</strong> É outra categoria de aparelho, mesmo com o nome parecido. Pergunte pelo WhatsApp quais a rede tem hoje.',
    ],
    botaoPrefixo: 'Quero a proposta do',
  },
  atende: {
    titulo: 'Quem atende e como funciona a compra',
    pessoa: {
      rotulo: 'Quem atende a sua compra',
      nome: contato.marca,
      linhas: [`${contato.cidade} · ${contato.rede}`, `${contato.razaoSocial} · CNPJ ${contato.cnpj}`, 'Atendimento pelo WhatsApp, com proposta por escrito.'],
    },
    passosTitulo: 'Os 4 passos',
    passos: [
      '<strong>Você chama no WhatsApp.</strong> A mensagem já vem pronta.',
      '<strong>Você recebe os documentos.</strong> Ficha, número Anvisa e manual da máquina que quer ver.',
      '<strong>A Leal entende o seu caso.</strong> Pergunta a cidade, se a clínica já funciona ou está em montagem e para quando pensa em comprar.',
      '<strong>A proposta chega por escrito, em até [[CONFIRMAR: X]] dias úteis depois que você disser qual máquina quer.</strong> Preço, condição de pagamento, validade da condição e o <a href="#quem-cuida">mapa de quem cuida de cada etapa</a> (seção acima).',
    ],
    privacidade: privacidadePadrao,
  },
  confira: {
    titulo: 'Antes de comprar, confira',
    perguntas: [
      {
        pergunta: 'Quanto custa manter a máquina funcionando?',
        aberta: true,
        resposta:
          '<p>As contas que podem se repetir são as peças que o fabricante indicar trocar depois de certo uso, como ponteira, aplicador ou placa dispersiva, e o creme, gel ou óleo que o manual pedir. O que trocar, quando e onde comprar vêm do manual e do fabricante de cada um. Pesam também os aplicadores vendidos à parte, se você quiser mais de um, a instalação, se a tensão da sala for outra, e a manutenção fora da garantia, com as revisões que o termo exigir.</p><p>Pergunte o preço de reposição de cada peça antes de assinar. A Leal responde por escrito, junto com a proposta, com o que a rede e o fabricante informarem. Com esses números, você faz a conta da sua clínica.</p>',
      },
      {
        pergunta: 'Quem pode operar?',
        resposta:
          '<p>O profissional habilitado, conforme o que o fabricante informou à Anvisa e as regras do seu conselho. Você recebe o número Anvisa e o manual antes de comprar, para conferir. A Leal não define quem pode operar e não garante habilitação. O treinamento não substitui a habilitação.</p>',
      },
      {
        pergunta: 'O que conferir no manual antes de comprar?',
        resposta:
          '<p>As áreas de aplicação, as contraindicações, as advertências, os eventos adversos que o fabricante descreve e os cuidados de uso de cada aparelho, como estão no manual. Na radiofrequência, confira também se e como o manual orienta medir a temperatura da pele, qual meio de contato usar e, se houver placa dispersiva, como posicioná-la. Pergunte se o treinamento, quando houver, cobre esses pontos. Antes da proposta, a Leal envia o manual do aparelho que você quer ver.</p>',
      },
      {
        pergunta: 'Que documentos pedir antes de assinar?',
        resposta:
          '<ul><li>O número Anvisa do modelo (registro ou notificação), para conferir no portal.</li><li>O manual em vigor, com as indicações e quem pode operar.</li><li>O termo de garantia de cada marca.</li><li>Quem emite a nota fiscal e se o aparelho é novo. Se não for, o laudo técnico e o histórico de revisão.</li><li>A regra de bloqueio da máquina por atraso de pagamento, se houver.</li></ul><p>Kit, peças que se trocam, placa, tensão, treinamento e assistência estão na lista da seção <a href="#lista-preco">"O que o preço da vitrine não mostra"</a>.</p>',
      },
      {
        pergunta: 'Por que comprar pela Leal e não direto do fabricante?',
        resposta:
          '<p>A Leal é uma Unidade Independente da Rede ISP e atende a compra dos aparelhos da rede, que vende e emite a nota fiscal. Antes da proposta, envia ficha, número Anvisa e manual, e põe por escrito o que a rede e o fabricante informarem sobre kit, garantia, assistência e frete do reparo, para você comparar com qualquer outra oferta. [[CONFIRMAR COM A REDE: o que a compra pela rede inclui, como treinamento, formas de pagamento e suporte, conforme a rede em (data); sem número de parcelas, carência, desconto nem comparação com o fabricante]]</p>',
      },
      {
        pergunta: 'Vi mais barato em outra loja. Vale falar com a Leal?',
        resposta:
          '<p>Mande o link da outra oferta pelo WhatsApp. A Leal devolve a própria proposta com os mesmos pontos (o que vem na caixa, garantia, assistência e frete do reparo), para você pôr ao lado do que a outra loja informar.</p>',
      },
    ],
  },
  final: {
    titulo: 'Peça a comparação por escrito antes de fechar',
    texto: 'Diga qual aparelho quer ver primeiro, ou mande o link da oferta que você já viu. Antes da proposta, vão ficha, número Anvisa e manual.',
    botao: 'Receber a comparação por escrito',
    mensagem: 'Olá! Quero receber ficha, número Anvisa e manual do Novo Hooke e do Effect, e saber o que vem na caixa de cada um.',
    pedestais: [
      { nome: 'Novo Hooke', foto: f.hooke08, alt: 'Novo Hooke', encaixe: 'contem', escala: 1.3 },
      { nome: 'Effect', foto: f.effect02, alt: 'Effect', encaixe: 'contem', escala: 1.3 },
    ],
  },
};
