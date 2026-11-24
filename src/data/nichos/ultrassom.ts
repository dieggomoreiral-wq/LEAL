// LP 2: máquina de ultrassom microfocado (Ultramed MPT × IÁSIS HIFU MPT).
// Copy de 15/11/2026 (_cerebro/Entregas/2026-11-15 - Copy - LP Ultrassom microfocado.md),
// com as trocas dos pareceres de conformidade e crítica do mesmo dia (copy v2).
// Padrão sem promessa de preço de cartucho: ela só volta com a tabela da rede.
import { fotosUltrassom as f } from '../fotos-ultrassom';
import { contato } from '../contato';
import type { Nicho } from './tipos';
import { privacidadePadrao, cuidaPadrao, avisoAtendimento } from './comum';

const conferir = ' [[CONFERIR NO MANUAL]]';
const kit = ' [[CONFIRMAR COM A REDE: kit em (data)]]';

export const ultrassom: Nicho = {
  slug: 'ultrassom-microfocado',
  seo: {
    titulo: 'Máquina de ultrassom microfocado: Ultramed MPT ou IÁSIS | Leal Tecnologia e Saúde',
    descricao: 'Compare ficha, cartuchos e assistência do Ultramed MPT e do IÁSIS HIFU MPT antes de comprar. Unidade Independente da Rede ISP.',
  },
  rodapeMarcas:
    'Ultramed é marca da Medical San. IÁSIS é marca da Bioset. Imagens da loja da rede e dos fabricantes, usadas com autorização por escrito.',
  rodapeUso:
    'Equipamentos destinados a uso profissional. O uso segue a regularização de cada aparelho na Anvisa (registro ou notificação), o manual do fabricante e as regras do conselho de quem opera.',
  mensagemPrincipal: 'Olá! Já vi o preço da máquina de ultrassom microfocado e quero a comparação por escrito antes de fechar.',
  hero: {
    sobre: 'Para clínicas e profissionais habilitados',
    h1: 'Máquina de HIFU e ultrassom microfocado: compare Ultramed MPT e IÁSIS antes de assinar',
    sub: 'Receba ficha, número Anvisa e manual de cada aparelho antes da proposta, e o mapa por escrito de quem cuida de cada etapa.',
    botao: 'Quero comparar no WhatsApp',
    apoio: avisoAtendimento,
    filtro: 'Esta página é para quem vai comprar o equipamento. Não vendemos sessão.',
    pedestais: [
      { nome: 'Ultramed MPT', foto: f.mpt02, alt: 'Ultramed MPT, da Medical San, inteiro', encaixe: 'recorte' },
      { nome: 'IÁSIS HIFU MPT', foto: f.iasis01, alt: 'IÁSIS HIFU MPT, da Bioset, visto de frente', encaixe: 'contem', escala: 1.3 },
    ],
    pendencia: 'CONFIRMAR: autorização do render da Medical San (sem ela, entra a foto da loja da rede) e conferir que a imagem não tem texto embutido',
  },
  vitrine: {
    titulo: 'O que o preço da vitrine não mostra',
    grande: 'Você já viu o preço na vitrine. Ele diz quanto custa a máquina, <em>não quanto custa repor o cartucho nem quem treina e conserta quando ela parar.</em>',
    apoio: 'Na proposta, a Leal põe por escrito o que a rede e o fabricante informarem sobre cada ponto, para você comparar com o que viu.',
    listaTitulo: 'O que perguntar antes de fechar:',
    itens: [
      { icone: 'cartucho', nome: 'Cartucho', texto: 'quantos disparos faz cada um, quanto custa repor e onde se compra o original.' },
      { icone: 'caixa', nome: 'Kit e entrega', texto: 'quais aplicadores e cartuchos vêm na caixa e quanto custa o frete até a sua cidade.' },
      { icone: 'capelo', nome: 'Treinamento', texto: 'quem dá, onde e com quantas horas.' },
      { icone: 'chave', nome: 'Assistência', texto: 'onde fica, em quantos dias a máquina volta e quem paga o frete do reparo.' },
      { icone: 'escudo', nome: 'Garantia', texto: 'o prazo e o que o termo de cada marca cobre, no aparelho e nos cartuchos.' },
      { icone: 'calendario', nome: 'Parcela', texto: 'se o contrato não prevê pausa, ela vence mesmo com a máquina parada. Pergunte o que acontece no seu caso.' },
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
      texto: 'Perguntar sobre cartucho, assistência e treinamento',
      mensagem: 'Olá! Quero saber, por escrito, quanto custa repor os cartuchos e como funcionam a assistência e o treinamento da máquina de ultrassom microfocado.',
    },
  },
  comparar: {
    titulo: 'Ultramed MPT ou IÁSIS: onde os dois diferem',
    abertura: 'No catálogo da rede, os dois aparecem como ultrassom micro e macrofocado [[CONFERIR NO MANUAL]]. São de fabricantes diferentes, e a tabela mostra a ficha de cada um.',
    criterio: 'Três perguntas ajudam a escolher: que aplicadores e profundidades você quer ter à mão, se a máquina fica num lugar só ou vai de um lugar a outro, e qual assistência atende a sua cidade.',
    aparelhos: [
      {
        id: 'ultramed',
        curto: 'Ultramed',
        nomeBotao: 'Ultramed MPT',
        nome: 'Ultramed MPT',
        fabricante: 'Medical San, Estrela (RS)',
        mensagem: 'Olá! Já escolhi o Ultramed MPT e quero a proposta por escrito.',
        galeria: [
          { src: f.mpt01, alt: 'Ultramed MPT visto de frente, foto da loja da rede' },
          { src: f.mpt02, alt: 'Ultramed MPT inteiro, imagem da Medical San' },
          { src: f.mpt03, alt: 'Ultramed MPT, imagem da Medical San' },
          {
            src: f.mpt2d,
            alt: 'Três aplicadores do Ultramed MPT: 2D, Pen e 9D',
            grupo: [
              { src: f.mpt2d, alt: 'Aplicador 2D do Ultramed MPT', nome: '2D MPT' },
              { src: f.mptPen, alt: 'Aplicador Pen do Ultramed MPT', nome: 'Pen MPT' },
              { src: f.mpt9d, alt: 'Aplicador 9D do Ultramed MPT', nome: '9D' },
            ],
          },
        ],
      },
      {
        id: 'iasis',
        curto: 'IÁSIS',
        nomeBotao: 'IÁSIS HIFU MPT',
        nome: 'IÁSIS HIFU MPT',
        fabricante: 'Bioset, Rio Claro (SP)',
        mensagem: 'Olá! Já escolhi o IÁSIS HIFU MPT e quero a proposta por escrito.',
        galeria: [
          { src: f.iasis01, alt: 'IÁSIS HIFU MPT visto de frente, foto da loja da rede' },
          { src: f.iasis02, alt: 'IÁSIS, foto 1 da Bioset' },
          { src: f.iasis03, alt: 'IÁSIS, foto 2 da Bioset' },
          { src: f.iasis04, alt: 'IÁSIS, foto 3 da Bioset' },
          { src: f.iasis05, alt: 'IÁSIS, foto 4 da Bioset' },
          {
            src: f.iasisMicro,
            alt: 'Dois handpieces do IÁSIS: microfocado e macrofocado',
            grupo: [
              { src: f.iasisMicro, alt: 'Handpiece microfocado do IÁSIS', nome: 'Microfocado' },
              { src: f.iasisMacro, alt: 'Handpiece macrofocado do IÁSIS', nome: 'Macrofocado' },
            ],
          },
        ],
      },
    ],
    pendenciaGalerias:
      'CONFIRMAR: fotos da Medical San e da Bioset só com a aprovação da rede; as fotos 2 a 6 do IÁSIS só se a rede confirmar que o gabinete é o da versão MPT',
    fichaTitulo: 'Ficha curta',
    ficha: [
      {
        rotulo: 'Modelo e número Anvisa',
        valores: [
          '[[CONFIRMAR: modelo vendido pela rede (ME21380A ou Versão Especial ME21241A), nome técnico, número e se é registro ou notificação no portal; a Medical San mostra 81243819008]]',
          '[[CONFIRMAR: nome técnico, número, se é registro ou notificação e se cobre a versão MPT; a Bioset mostra 10410309017]]',
        ],
      },
      { rotulo: 'Aplicadores no kit', valores: ['4, entre eles 2D MPT, Pen MPT e 9D' + kit, '3: linear, multilinear e pontual' + kit] },
      {
        rotulo: 'Profundidades dos cartuchos',
        valores: ['De 1,5 a {16 mm}, conforme o cartucho' + conferir, 'Linear: 1,5, 3 e {4,5 mm}. Multilinear: 7 e {13 mm}. Pontual: 1,5, 3 e {4,5 mm}' + conferir],
      },
      {
        rotulo: 'Disparos por cartucho',
        valores: ['2D: 20.000. 9D: 525. Pen: 250.000 no pontual e 20.000 no round' + conferir, 'Linear e multilinear: 12.000. Pontual: 100.000' + conferir],
      },
      { rotulo: 'Peso do aparelho', valores: ['{5 kg}, segundo a Medical San' + conferir, '{14,6 kg}' + conferir] },
      {
        rotulo: 'Assistência técnica',
        valores: ['Lista de assistências no site da Medical San [[CONFIRMAR: data de acesso]]', 'Sede em Rio Claro (SP), segundo o site da Bioset; outras cidades [[CONFIRMAR COM A REDE]]'],
      },
    ],
    fichaNota:
      'Dados em conferência no manual de cada aparelho [[CONFIRMAR: data]]. Os disparos mudam por tipo de cartucho, até dentro do mesmo aparelho, como mostra a linha do Ultramed. Compare os disparos de cada cartucho com o preço dele, e pergunte o que cada fabricante conta como um disparo. O que vem na caixa vai escrito na proposta. Qual assistência atende a sua cidade vai na proposta, como o fabricante informar. Ultramed é marca da Medical San; IÁSIS, da Bioset. <a href="https://consultas.anvisa.gov.br/" target="_blank" rel="noopener"><strong>Conferir o número e a indicação na Anvisa</strong></a>',
    notas: [
      '<strong>Existe mais de um Ultramed MPT ou IÁSIS?</strong> Sim. Os dois nomes aparecem em mais de uma versão no catálogo da rede. Esta página trata do [[CONFIRMAR: Ultramed MPT ou Ultramed MPT Versão Especial]] e do IÁSIS HIFU MPT. Confira o modelo e o número Anvisa na proposta e no portal da Anvisa.',
      '<strong>Procura outra marca?</strong> Pergunte pelo WhatsApp quais a rede tem hoje.',
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
          '<p>O cartucho é a conta que se repete. Em geral, cada um tem uma vida útil em disparos, informada pelo fabricante, e é trocado quando ela acaba. Pesam também a manutenção fora da garantia e o consumo que o manual indica.</p><p>Pergunte o preço de reposição de cada cartucho antes de assinar. A Leal informa por escrito, junto com a proposta, o preço da manutenção praticado pela rede. Com esses números, você faz a conta da sua clínica.</p>',
      },
      {
        pergunta: 'Quem pode operar?',
        resposta:
          '<p>O profissional habilitado, conforme o que o fabricante informou à Anvisa e as regras do seu conselho. Você recebe o número Anvisa e o manual antes de comprar, para conferir. A Leal não define quem pode operar e não garante habilitação. O treinamento não substitui a habilitação.</p>',
      },
      {
        pergunta: 'O que conferir no manual antes de comprar?',
        resposta:
          '<p>As áreas de aplicação, as contraindicações, as advertências e os cuidados de uso de cada aparelho, como estão no manual do fabricante. Pergunte também se o treinamento, quando houver, cobre esses pontos. Antes da proposta, a Leal envia o manual do aparelho que você quer ver.</p>',
      },
      {
        pergunta: 'Que documentos pedir antes de assinar?',
        resposta:
          '<ul><li>O número Anvisa do modelo (registro ou notificação), para conferir no portal.</li><li>O manual em vigor, com as indicações e quem pode operar.</li><li>O termo de garantia de cada marca.</li><li>Quem emite a nota fiscal e se o aparelho é novo. Se não for, o laudo técnico e o histórico de revisão.</li><li>A regra de bloqueio da máquina por atraso de pagamento, se houver.</li></ul><p>Kit, cartucho, treinamento e assistência estão na lista da seção <a href="#lista-preco">"O que o preço da vitrine não mostra"</a>.</p>',
      },
      {
        pergunta: 'Vi mais barato em outra loja. Vale falar com a Leal?',
        resposta:
          '<p>Mande o link da outra oferta pelo WhatsApp. A Leal devolve a própria proposta com os mesmos itens (cartuchos no kit, garantia, assistência e frete do reparo), para você pôr ao lado do que a outra loja informar.</p>',
      },
    ],
  },
  final: {
    titulo: 'Peça a comparação por escrito antes de assinar',
    texto: 'Diga qual aparelho quer ver primeiro, ou mande o link da oferta que você já viu. Antes da proposta, vão ficha, número Anvisa e manual.',
    botao: 'Receber a comparação por escrito',
    mensagem: 'Olá! Quero receber ficha, número Anvisa e manual do Ultramed MPT e do IÁSIS HIFU MPT.',
    pedestais: [
      { nome: 'Ultramed MPT', foto: f.mpt01, alt: 'Ultramed MPT', encaixe: 'contem', escala: 1.3 },
      { nome: 'IÁSIS HIFU MPT', foto: f.iasis01, alt: 'IÁSIS HIFU MPT', encaixe: 'contem', escala: 1.3 },
    ],
  },
};
