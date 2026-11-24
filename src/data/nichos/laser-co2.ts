// LP 6: aparelho de laser CO₂ fracionado (Hegon × Lunya), v1 (comparação).
// Rascunho do Maestro de 17/11/2026 sobre a pesquisa
// (_cerebro/Entregas/2026-11-16 - Pesquisa - Benchmark LP laser CO2.md).
// Nada de uso íntimo, ginecológico ou de "corte cirúrgico" (categoria sensível no Google),
// nem no texto nem na imagem: o kit completo vai na proposta. Sem indicação, sem
// "rejuvenescimento", "renovação", "lifting". Comprimento de onda, classe, potência,
// tensão e peso são dado de ficha que os dois fabricantes publicam; nunca argumento de "melhor".
// Nada da ficha vem da loja da rede: as 4 páginas de CO₂ da loja trazem o texto do Hegon.
import { fotosLaserCo2 as f } from '../fotos-laser-co2';
import { contato } from '../contato';
import type { Nicho } from './tipos';
import { privacidadePadrao, cuidaPadrao, avisoAtendimento } from './comum';

const conferir = ' [[CONFERIR NO MANUAL]]';
const kit = '[[CONFIRMAR COM A REDE: kit em (data)]] A lista completa do que vem na caixa e do que é vendido à parte vai na proposta.';
const criterioFotos =
  'tirar a que tiver pessoa, pele, texto, selo ou frase de venda, tela com nome de modo, protocolo, região do corpo ou indicação, ponteira, peça de mão ou acessório fora do aparelho, e ponteira montada no braço que não seja a fracionada';

export const laserCo2: Nicho = {
  slug: 'aparelho-laser-co2-fracionado',
  seo: {
    titulo: 'Aparelho de laser CO₂ fracionado: Hegon ou Lunya | Leal Tecnologia e Saúde',
    descricao: 'Compare comprimento de onda, potência, tensão e peso do Hegon e do Lunya e o que perguntar sobre assistência e treinamento. Unidade Independente da Rede ISP.',
  },
  rodapeMarcas:
    'Hegon é marca da Medical San. Lunya é marca da Bioset. Imagens da loja da rede e dos fabricantes, usadas com autorização por escrito.',
  rodapeUso:
    'Equipamentos destinados a uso profissional. O uso segue a regularização de cada aparelho na Anvisa (registro ou notificação), o manual do fabricante e as regras do conselho de quem opera.',
  mensagemPrincipal: 'Olá! Quero a comparação por escrito do Hegon e do Lunya antes de comprar, para o meu negócio.',
  mensagemBarra: 'Olá! Quero comparar os aparelhos de laser CO₂ fracionado antes de comprar, para o meu negócio.',
  hero: {
    sobre: 'Equipamento para clínicas e profissionais habilitados',
    h1: 'Aparelho de laser CO₂ fracionado: compare Hegon e Lunya antes de comprar',
    sub: 'Veja lado a lado o comprimento de onda, a potência, a tensão e o peso de cada aparelho, e o que perguntar sobre ponteiras, óculos, treinamento, garantia e assistência. Número Anvisa e manual chegam antes da proposta.',
    botao: 'Quero comparar no WhatsApp',
    apoio: avisoAtendimento,
    filtro: 'Esta página é para quem vai comprar o equipamento para o seu negócio. Não vendemos sessão.',
    pedestais: [
      { nome: 'Hegon', foto: f.hegon04, alt: 'Hegon, da Medical San', encaixe: 'contem', escala: 1.1 },
      { nome: 'Lunya', foto: f.lunya01, alt: 'Lunya, da Bioset', encaixe: 'contem', escala: 1.05 },
    ],
  },
  vitrine: {
    titulo: 'O que o preço da vitrine não mostra',
    grande: 'Você já viu o preço na vitrine. Ele diz quanto custa o aparelho, <em>não quanto custa repor uma ponteira, o que a garantia exige nem quem atende quando a máquina para.</em>',
    apoio: 'Na proposta, a Leal põe por escrito o que a rede e o fabricante informarem sobre cada ponto, para você comparar com o que viu.',
    listaTitulo: 'O que perguntar antes de fechar:',
    itens: [
      { icone: 'caixa', nome: 'Kit e entrega', texto: 'quais ponteiras e peças vêm, quais são vendidas à parte, quanto custa cada uma e o frete até a sua cidade.' },
      { icone: 'capelo', nome: 'Treinamento', texto: 'quem dá, onde, com quantas horas, em que prazo depois da entrega, se o uso da máquina depende dele e o que vale se ele não acontecer. Peça que venha escrito na proposta, com a data.' },
      { icone: 'aplicador', nome: 'Peças que se trocam', texto: 'se o fabricante indica vida útil para o tubo do laser e para as ponteiras, e quanto custa repor cada um.' },
      { icone: 'oculos', nome: 'Óculos de proteção', texto: 'se vêm óculos próprios para o comprimento de onda do aparelho, quantos pares e para quem o manual pede proteção: quem opera, quem recebe a aplicação ou todos na sala.' },
      { icone: 'termometro', nome: 'Refrigeração', texto: 'como o manual descreve o resfriamento do aparelho e se ele pede alguma manutenção periódica.' },
      { icone: 'energia', nome: 'Tensão e espaço', texto: 'a tensão e o consumo que o manual informa, se a tomada, o disjuntor e o aterramento da sua sala atendem, o peso, as dimensões e o que a instalação pede.' },
      { icone: 'chave', nome: 'Assistência', texto: 'onde fica, em quantos dias a máquina volta, quem paga o frete do reparo, o que vale se ela chegar com defeito e quem atende se a revenda deixar de existir.' },
      { icone: 'escudo', nome: 'Garantia', texto: 'o prazo, o que o termo de cada marca cobre, no aparelho, no tubo e nas ponteiras, e se ele exige revisão periódica.' },
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
      texto: 'Perguntar sobre ponteiras, tubo e assistência',
      mensagem: 'Olá! Quero saber, por escrito, o que vem na caixa, quanto custa repor ponteiras e o tubo e como funciona a assistência do laser CO₂.',
    },
  },
  comparar: {
    titulo: 'Hegon ou Lunya: onde os dois diferem',
    abertura: 'Os dois são aparelhos de laser CO₂ fracionado para uso profissional, de fabricantes diferentes, com o mesmo comprimento de onda e a mesma classe de laser, segundo os fabricantes [[CONFERIR NO MANUAL DO LUNYA]]. Diferem na potência, na tensão e no peso: a tabela mostra a ficha de cada um. Para que cada aparelho pode ser usado é o que consta na regularização dele na Anvisa e no manual.',
    criterio: 'Quatro perguntas ajudam a escolher: o que cada aparelho traz de peça de mão e de ponteiras, segundo o manual; se a tensão e a instalação da sua sala atendem; onde fica a assistência e em quantos dias a máquina volta; e quem dá o treinamento e quando. A tabela mostra a ficha dos dois; assistência e treinamento a Leal põe por escrito na proposta.',
    aparelhos: [
      {
        id: 'hegon',
        curto: 'Hegon',
        nome: 'Hegon',
        fabricante: 'Medical San',
        mensagem: 'Olá! Já escolhi o Hegon e quero a proposta por escrito.',
        galeria: [{ src: f.hegon04, alt: 'Hegon, foto da loja da rede' }],
      },
      {
        id: 'lunya',
        curto: 'Lunya',
        nome: 'Lunya',
        fabricante: 'Bioset',
        mensagem: 'Olá! Já escolhi o Lunya e quero a proposta por escrito.',
        galeria: [{ src: f.lunya01, alt: 'Lunya, imagem da Bioset' }],
      },
    ],
    fichaTitulo: 'Ficha curta',
    ficha: [
      {
        rotulo: 'Modelo e número Anvisa',
        valores: [
          'Registro {81243810014}, válido até {04/03/2034}, com o modelo Hegon listado',
          'Registro {10410300030}, válido até {01/12/2035}, com o modelo Lunya listado',
        ],
      },
      { rotulo: 'Comprimento de onda', valores: ['{10.600 nm}, segundo o manual da Medical San', '{10.600 nm}, segundo a Bioset' + conferir] },
      { rotulo: 'Classe do laser', valores: ['Classe 4, segundo o manual da Medical San', 'Classe 4, segundo a Bioset' + conferir] },
      { rotulo: 'Potência', valores: ['{1 a 30 W} de potência de saída, segundo o manual da Medical San', 'Até {50 W}, segundo a Bioset' + conferir] },
      { rotulo: 'Tensão', valores: ['{110 a 230 V}, segundo o manual da Medical San', '{230 V}, segundo a Bioset' + conferir] },
      { rotulo: 'Peso do aparelho', valores: ['{40 kg} de peso líquido, segundo o manual da Medical San', '{63 kg}, segundo a Bioset [[CONFERIR NO MANUAL DO LUNYA: se é peso líquido, na mesma base do Hegon]]'] },
      { rotulo: 'Na caixa', valores: [kit, kit] },
      {
        rotulo: 'Garantia',
        valores: [
          'Conforme o termo da Medical San [[CONFIRMAR COM A REDE: prazo em meses e revisões exigidas]]',
          'Conforme o termo da Bioset [[CONFIRMAR COM A REDE: prazo em meses e revisões exigidas]]',
        ],
      },
      {
        rotulo: 'Assistência técnica',
        valores: ['Assistências indicadas pela Medical San [[CONFIRMAR COM A REDE]]', 'Assistências indicadas pela Bioset [[CONFIRMAR COM A REDE]]'],
      },
    ],
    fichaNota:
      'Ficha do Hegon conferida no manual da Medical San (revisão 07); a do Lunya, em conferência no manual da Bioset [[CONFERIR NO MANUAL DO LUNYA, revisão NP01.0]]. Números Anvisa conferidos no portal da Anvisa em 18/11/2026. A tabela não diz qual aparelho é melhor: potência, tensão e peso são dados de ficha, e o uso de cada aparelho é o que o manual e a regularização de cada um na Anvisa indicam. O que vem na caixa vai escrito na proposta. Dados que só um dos fabricantes publica vão na proposta, para os dois aparelhos, quando o fabricante informar. Se a ficha de uma loja divergir da do fabricante, confira pelo manual que você receber. Qual assistência atende a sua cidade vai na proposta, como o fabricante informar. Hegon é marca da Medical San; Lunya, da Bioset. <a href="https://consultas.anvisa.gov.br/" target="_blank" rel="noopener"><strong>Conferir o número e a indicação na Anvisa</strong></a>',
    notas: [
      '<strong>Procura laser de outro comprimento de onda?</strong> Érbio, túlio e outros lasers são outra categoria de aparelho. Pergunte pelo WhatsApp quais a rede tem hoje.',
      '<strong>Procura laser CO₂ para corte ou gravação de material?</strong> Esta página é de equipamento para clínica.',
      '<strong>Já tem um Hegon ou um Lunya e procura assistência, peça ou manual?</strong> Esta página é para quem vai comprar o aparelho. Procure a assistência do fabricante ou quem vendeu o seu.',
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
      '<strong>A proposta chega por escrito, em até [[CONFIRMAR: X]] dias úteis depois que você disser qual máquina quer.</strong> Preço, condição de pagamento, validade da condição, o treinamento, se houver (quem dá, onde e quando), e o <a href="#quem-cuida">mapa de quem cuida de cada etapa</a> (seção acima).',
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
          '<p>As contas que podem se repetir são as peças que o fabricante indicar trocar depois de certo uso, como o tubo do laser e as ponteiras, e as revisões que o termo de garantia exigir. O que trocar, quando e onde comprar vêm do manual e do fabricante de cada um. Pesam também as ponteiras vendidas à parte, se você quiser mais de uma, a instalação, se a tensão da sala for outra, e a manutenção fora da garantia.</p><p>Pergunte o preço de reposição de cada peça antes de assinar. A Leal responde por escrito, junto com a proposta, com o que a rede e o fabricante informarem. Com esses números, você faz a conta da sua clínica.</p>',
      },
      {
        pergunta: 'Quem pode operar?',
        resposta:
          '<p>O profissional habilitado, conforme o que o fabricante informou à Anvisa e as regras do seu conselho. Você recebe o número Anvisa e o manual antes de comprar, para conferir. A Leal não define quem pode operar e não garante habilitação. O treinamento não substitui a habilitação.</p>',
      },
      {
        pergunta: 'O que conferir no manual antes de comprar?',
        resposta:
          '<p>As áreas de aplicação, as contraindicações, as advertências, os eventos adversos que o fabricante descreve e os cuidados de uso de cada aparelho, como estão no manual. No laser CO₂, confira também quais óculos o manual indica e para quem (quem opera, quem recebe a aplicação ou todos na sala), os cuidados com a sala que ele descreve e como ele descreve o resfriamento do aparelho. Pergunte se o treinamento, quando houver, cobre esses pontos. Antes da proposta, a Leal envia o manual do aparelho que você quer ver.</p>',
      },
      {
        pergunta: 'Que documentos pedir antes de assinar?',
        resposta:
          '<ul><li>O número Anvisa do modelo (registro ou notificação), para conferir no portal.</li><li>O manual em vigor, com as indicações e quem pode operar.</li><li>O termo de garantia de cada marca.</li><li>Quem emite a nota fiscal e se o aparelho é novo. Se não for, o laudo técnico e o histórico de revisão.</li><li>A regra de bloqueio da máquina por atraso de pagamento, se houver.</li><li>O treinamento por escrito: quem dá, onde, quantas horas e em que prazo depois da entrega.</li></ul><p>Kit, peças que se trocam, óculos, tensão, treinamento e assistência estão na lista da seção <a href="#lista-preco">"O que o preço da vitrine não mostra"</a>.</p>',
      },
      {
        pergunta: 'Por que comprar pela Leal e não direto do fabricante?',
        resposta:
          '<p>Pela Leal, você pode receber a proposta dos dois aparelhos no mesmo formato, com ficha, número Anvisa e manual de cada um, e comparar antes de escolher. A Leal é uma Unidade Independente da Rede ISP e atende a compra dos aparelhos da rede, que vende e emite a nota fiscal. Antes da proposta, envia esses documentos e põe por escrito o que a rede e o fabricante informarem sobre kit, garantia, assistência, treinamento e frete do reparo. [[CONFIRMAR COM A REDE: o que a compra pela rede inclui, como treinamento, formas de pagamento e suporte, conforme a rede em (data); sem número de parcelas, carência, desconto nem comparação com o fabricante]]</p>',
      },
      {
        pergunta: 'Vi mais barato em outra loja. Vale falar com a Leal?',
        resposta:
          '<p>Mande o link da outra oferta pelo WhatsApp. A Leal devolve a própria proposta com os mesmos pontos (o que vem na caixa, garantia, assistência, treinamento e frete do reparo), para você pôr ao lado do que a outra loja informar.</p>',
      },
    ],
  },
  final: {
    titulo: 'Peça a comparação por escrito antes de fechar',
    texto: 'Diga qual aparelho quer ver primeiro, ou mande o link da oferta que você já viu. Antes da proposta, vão ficha, número Anvisa e manual.',
    botao: 'Receber a comparação por escrito',
    mensagem: 'Olá! Quero receber ficha, número Anvisa e manual do Hegon e do Lunya, e saber o que vem na caixa de cada um.',
    pedestais: [
      { nome: 'Hegon', foto: f.hegon04, alt: 'Hegon', encaixe: 'contem', escala: 1.3 },
      { nome: 'Lunya', foto: f.lunya01, alt: 'Lunya', encaixe: 'contem', escala: 1.3 },
    ],
  },
};
