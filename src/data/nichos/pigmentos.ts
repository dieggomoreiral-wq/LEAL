// LP 4: laser para remoção de pigmentos e tatuagem (Syrius × Magni ICE YAG), v1 (comparação).
// Copy de 15/11/2026 (_cerebro/Entregas/2026-11-15 - Copy - LP Remocao de pigmentos.md, parte A).
// Nome da categoria (troca B do guardião): sai com "remoção de pigmentos". "Tatuagem" só volta
// se a regularização ou as instruções de uso dos DOIS indicarem; se nem "pigmentos" estiver
// coberto, o piso é "Laser Nd:YAG". Vale para title, meta, H1, slug, mensagens e anúncios.
import { fotosPigmentos as f } from '../fotos-pigmentos';
import { contato } from '../contato';
import type { Nicho } from './tipos';
import { privacidadePadrao, cuidaPadrao, avisoAtendimento } from './comum';

const conferir = ' [[CONFERIR NO MANUAL]]';
const kit = ' [[CONFIRMAR COM A REDE: kit em (data)]]';

export const pigmentos: Nicho = {
  slug: 'laser-remocao-de-pigmentos',
  seo: {
    titulo: 'Máquina de laser para remoção de pigmentos: Syrius ou Magni | Leal Tecnologia e Saúde',
    descricao: 'Compare a ficha, os comprimentos de onda, a tensão e a assistência do Syrius e do Magni ICE YAG antes de comprar. Unidade Independente da Rede ISP.',
  },
  rodapeMarcas:
    'Syrius é marca da Ibramed. Magni ICE YAG é marca da Bioset. Imagens da loja da rede e dos fabricantes, usadas com autorização por escrito.',
  rodapeUso:
    'Equipamentos destinados a uso profissional. O uso segue a regularização de cada aparelho na Anvisa (registro ou notificação), o manual do fabricante e as regras do conselho de quem opera.',
  mensagemPrincipal: 'Olá! Já vi o preço da máquina de laser para remoção de pigmentos e quero a comparação por escrito antes de fechar.',
  mensagemBarra: 'Olá! Quero comparar as máquinas de laser para remoção de pigmentos antes de comprar.',
  hero: {
    sobre: 'Equipamento para clínicas e profissionais habilitados',
    h1: 'Máquina de laser para remoção de pigmentos: compare Syrius e Magni ICE YAG antes de assinar',
    sub: 'Veja lado a lado a ficha de cada aparelho e o que perguntar sobre ponteiras, óculos e assistência. Número Anvisa e manual chegam antes da proposta.',
    botao: 'Quero comparar no WhatsApp',
    apoio: avisoAtendimento,
    filtro: 'Esta página é para quem vai comprar o equipamento. Não vendemos sessão.',
    pedestais: [
      { nome: 'Syrius', foto: f.syrius03, alt: 'Syrius, da Ibramed', encaixe: 'recorte' },
      { nome: 'Magni ICE YAG', foto: f.magni02, alt: 'Magni ICE YAG, da Bioset', encaixe: 'contem', escala: 1.1 },
    ],
  },
  vitrine: {
    titulo: 'O que o preço da vitrine não mostra',
    grande: 'Você já viu o preço na vitrine. Ele diz quanto custa a máquina, <em>não quanto custa repor uma ponteira ou um filtro, o que a garantia exige nem quem atende quando a máquina para.</em>',
    apoio: 'Na proposta, a Leal põe por escrito o que a rede e o fabricante informarem sobre cada ponto, para você comparar com o que viu.',
    listaTitulo: 'O que perguntar antes de fechar:',
    itens: [
      { icone: 'caixa', nome: 'Kit e entrega', texto: 'quais ponteiras ou filtros vêm, para quais comprimentos de onda, quanto custa cada peça à parte e o frete até a sua cidade.' },
      { icone: 'aplicador', nome: 'Peças que se trocam', texto: 'se o fabricante indica vida útil para ponteira, filtro, lâmpada ou outra peça, e quanto custa repor cada uma.' },
      { icone: 'oculos', nome: 'Óculos de proteção', texto: 'quantos vêm, do operador e do paciente, para quais comprimentos de onda servem e quanto custa um par a mais.' },
      { icone: 'energia', nome: 'Tensão', texto: 'a do aparelho, se a sua sala tem a mesma e, se não tiver, o que a instalação pede.' },
      { icone: 'capelo', nome: 'Treinamento', texto: 'quem dá, onde e com quantas horas.' },
      { icone: 'chave', nome: 'Assistência', texto: 'onde fica, em quantos dias a máquina volta, quem paga o frete do reparo, o que vale se ela chegar com defeito e quem atende se a revenda deixar de existir.' },
      { icone: 'escudo', nome: 'Garantia', texto: 'o prazo, o que o termo de cada marca cobre, no aparelho e nas peças que se trocam, e se ele exige revisão periódica.' },
      { icone: 'calendario', nome: 'Parcela e bloqueio', texto: 'se o contrato não prevê pausa, ela vence mesmo com a máquina parada. Pergunte também se o aparelho tem bloqueio por atraso ou por contagem de disparos, quem libera e em quantos dias.' },
    ],
    fecho: 'A Leal responde a cada item por escrito, antes de você assinar, com o que a rede e o fabricante informarem.',
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
      texto: 'Perguntar sobre ponteiras, óculos e assistência',
      mensagem: 'Olá! Quero saber, por escrito, o que vem na caixa, quanto custa repor ponteiras e filtros e como funciona a assistência da máquina de laser para remoção de pigmentos.',
    },
  },
  comparar: {
    titulo: 'Syrius ou Magni ICE YAG: onde os dois diferem',
    abertura: 'Os dois são lasers Nd:YAG Q-switched, segundo os fabricantes [[CONFERIR NO MANUAL]]. São de fabricantes diferentes, com comprimentos de onda, tensão e refrigeração diferentes: a tabela mostra a ficha de cada um.',
    criterio: 'Três perguntas ajudam a escolher: quais comprimentos de onda você quer ter na máquina, qual tensão a sua sala tem e qual assistência atende a sua cidade.',
    aparelhos: [
      {
        id: 'syrius',
        curto: 'Syrius',
        nome: 'Syrius',
        fabricante: 'Ibramed, Amparo (SP)',
        mensagem: 'Olá! Já escolhi o Syrius e quero a proposta por escrito.',
        galeria: [
          { src: f.syrius01, alt: 'Syrius, foto da loja da rede' },
          { src: f.syrius03, alt: 'Syrius, imagem da Ibramed' },
        ],
      },
      {
        id: 'magni',
        curto: 'Magni',
        nomeBotao: 'Magni ICE YAG',
        nome: 'Magni ICE YAG',
        fabricante: 'Bioset, Rio Claro (SP)',
        mensagem: 'Olá! Já escolhi o Magni ICE YAG e quero a proposta por escrito.',
        galeria: [
          { src: f.magni01, alt: 'Magni ICE YAG, foto da loja da rede' },
          { src: f.magni02, alt: 'Magni ICE YAG, foto 1 da Bioset' },
          { src: f.magni03, alt: 'Magni ICE YAG, foto 2 da Bioset' },
          { src: f.magni04, alt: 'Magni ICE YAG, foto 3 da Bioset' },
          { src: f.magni05, alt: 'Magni ICE YAG, foto 4 da Bioset' },
          { src: f.magni06, alt: 'Magni ICE YAG, foto 5 da Bioset' },
        ],
      },
    ],
    fichaTitulo: 'Ficha curta',
    ficha: [
      {
        rotulo: 'Modelo e número Anvisa',
        valores: [
          '[[CONFIRMAR: nome técnico, número, se é registro ou notificação no portal e a indicação registrada; a Ibramed mostra 10360310046]]',
          '[[CONFIRMAR: nome técnico, número, se é registro ou notificação no portal e a indicação registrada; a Bioset mostra 10410300028]]',
        ],
      },
      { rotulo: 'Comprimentos de onda', valores: ['532, 755, 1064 e {1320 nm}, segundo a Ibramed' + conferir, '532 e {1064 nm}, segundo a Bioset' + conferir] },
      {
        rotulo: 'Na caixa',
        valores: [
          kit.trim(),
          kit.trim(),
        ],
      },
      { rotulo: 'Refrigeração', valores: ['Água, radiador e ventilação forçada, segundo a Ibramed' + conferir, 'Ciclo fechado de água e ar, segundo a Bioset' + conferir] },
      { rotulo: 'Peso do aparelho', valores: ['{17 kg}, segundo a Ibramed [[CONFERIR NO MANUAL: só o aparelho, sem maleta ou case?]]', '{20 kg}, só o aparelho, segundo a Bioset' + conferir] },
      { rotulo: 'Tensão', valores: ['{220 V}, segundo a Ibramed' + conferir, '{110 a 130 V}, segundo a Bioset' + conferir] },
      {
        rotulo: 'Garantia',
        valores: [
          'Conforme o termo da Ibramed [[CONFIRMAR COM A REDE: prazo em meses e revisões exigidas]]',
          'Conforme o termo da Bioset [[CONFIRMAR COM A REDE: prazo em meses e revisões exigidas]]',
        ],
      },
      {
        rotulo: 'Assistência técnica',
        valores: ['Assistências indicadas no site da Ibramed [[CONFIRMAR: data de acesso]]', 'Sede em Rio Claro (SP), segundo o site da Bioset; outras cidades [[CONFIRMAR COM A REDE]]'],
      },
    ],
    fichaNota:
      'Dados em conferência no manual de cada aparelho [[CONFIRMAR: data]]. A tabela não diz qual aparelho é melhor: o uso de cada comprimento de onda é o que o manual e a regularização de cada aparelho na Anvisa indicam. O que vem na caixa vai escrito na proposta. Se a tensão da sua sala for outra, pergunte o que a instalação pede. Qual assistência atende a sua cidade vai na proposta, como o fabricante informar. Syrius é marca da Ibramed; Magni ICE YAG, da Bioset. <a href="https://consultas.anvisa.gov.br/" target="_blank" rel="noopener"><strong>Conferir o número e a indicação na Anvisa</strong></a>',
    notas: ['<strong>Procura laser de picossegundo ou outra marca?</strong> Pergunte pelo WhatsApp quais a rede tem hoje.'],
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
          '<p>As contas que podem se repetir são as peças que o fabricante indicar trocar depois de certo uso: ponteira, filtro, lâmpada ou outra, conforme o aparelho. O que trocar, quando e onde comprar vêm do manual e do fabricante de cada um. Pesam também um par de óculos a mais, se precisar, a instalação, se a tensão da sala for outra, e a manutenção fora da garantia, com as revisões que o termo exigir.</p><p>Pergunte o preço de reposição de cada peça antes de assinar. A Leal responde por escrito, junto com a proposta, com o que a rede e o fabricante informarem. Com esses números, você faz a conta da sua clínica.</p>',
      },
      {
        pergunta: 'Quem pode operar?',
        resposta:
          '<p>O profissional habilitado, conforme o que o fabricante informou à Anvisa e as regras do seu conselho. Você recebe o número Anvisa e o manual antes de comprar, para conferir. A Leal não define quem pode operar e não garante habilitação. O treinamento não substitui a habilitação.</p>',
      },
      {
        pergunta: 'O que conferir no manual antes de comprar?',
        resposta:
          '<p>As áreas de aplicação, as contraindicações, as advertências, os eventos adversos que o fabricante descreve e os cuidados de uso de cada aparelho, como estão no manual. Na proteção dos olhos: para quais comprimentos de onda servem os óculos de proteção de cada aparelho, a classe do laser e os cuidados com a sala que o manual indicar. Pergunte também se o treinamento, quando houver, cobre esses pontos. Antes da proposta, a Leal envia o manual do aparelho que você quer ver.</p>',
      },
      {
        pergunta: 'Que documentos pedir antes de assinar?',
        resposta:
          '<ul><li>O número Anvisa do modelo (registro ou notificação), para conferir no portal.</li><li>O manual em vigor, com as indicações e quem pode operar.</li><li>O termo de garantia de cada marca.</li><li>Quem emite a nota fiscal e se o aparelho é novo. Se não for, o laudo técnico e o histórico de revisão.</li><li>A regra de bloqueio da máquina por atraso de pagamento, se houver.</li></ul><p>Kit, peças que se trocam, óculos, tensão, treinamento e assistência estão na lista da seção <a href="#lista-preco">"O que o preço da vitrine não mostra"</a>.</p>',
      },
      {
        pergunta: 'Vi mais barato em outra loja. Vale falar com a Leal?',
        resposta:
          '<p>Mande o link da outra oferta pelo WhatsApp. A Leal devolve a própria proposta com os mesmos pontos (o que vem na caixa, garantia, assistência e frete do reparo), para você pôr ao lado do que a outra loja informar.</p>',
      },
    ],
  },
  final: {
    titulo: 'Peça a comparação por escrito antes de assinar',
    texto: 'Diga qual aparelho quer ver primeiro, ou mande o link da oferta que você já viu. Antes da proposta, vão ficha, número Anvisa e manual.',
    botao: 'Receber a comparação por escrito',
    mensagem: 'Olá! Quero receber ficha, número Anvisa e manual do Syrius e do Magni ICE YAG, e saber o que vem na caixa de cada um.',
    pedestais: [
      { nome: 'Syrius', foto: f.syrius01, alt: 'Syrius', encaixe: 'contem', escala: 1.3 },
      { nome: 'Magni ICE YAG', foto: f.magni01, alt: 'Magni ICE YAG', encaixe: 'contem', escala: 1.3 },
    ],
  },
};
