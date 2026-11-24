// LP 3: máquina de criolipólise (Polarys × Criodermis Smart).
// Copy de 15/11/2026 (_cerebro/Entregas/2026-11-15 - Copy - LP Criolipolise.md).
// Voz de empresa: nenhum nome de pessoa. Centro: o que vem na caixa e o que se repete
// (aplicador e membrana, esta só se o aparelho usar). Trocas do guardião A–F e da crítica 1–4 e 6.
import { fotosCriolipolise as f } from '../fotos-criolipolise';
import { contato } from '../contato';
import type { Nicho } from './tipos';
import { privacidadePadrao, cuidaPadrao, avisoAtendimento } from './comum';

const conferir = ' [[CONFERIR NO MANUAL]]';
const kit = ' [[CONFIRMAR COM A REDE: kit em (data)]]';

export const criolipolise: Nicho = {
  slug: 'criolipolise',
  seo: {
    titulo: 'Máquina de criolipólise: Polarys ou Criodermis Smart | Leal Tecnologia e Saúde',
    descricao: 'Compare o que vem na caixa, a reposição e a assistência do Polarys e do Criodermis Smart antes de comprar. Unidade Independente da Rede ISP.',
  },
  rodapeMarcas:
    'Polarys é marca da Ibramed. Criodermis é marca da Medical San. Imagens da loja da rede e dos fabricantes, usadas com autorização por escrito.',
  rodapeUso:
    'Equipamentos destinados a uso profissional. O uso segue a regularização de cada aparelho na Anvisa (registro ou notificação), o manual do fabricante e as regras do conselho de quem opera.',
  mensagemPrincipal: 'Olá! Já vi o preço da máquina de criolipólise e quero a comparação por escrito antes de fechar.',
  mensagemBarra: 'Olá! Quero comparar as máquinas de criolipólise antes de comprar.',
  hero: {
    sobre: 'Para clínicas e profissionais habilitados',
    h1: 'Máquina de criolipólise: compare Polarys e Criodermis Smart antes de assinar',
    sub: 'Veja lado a lado o que vem na caixa de cada aparelho e o que não aparece na lista. Ficha, número Anvisa e manual chegam antes da proposta.',
    botao: 'Quero comparar no WhatsApp',
    apoio: avisoAtendimento,
    filtro: 'Esta página é para quem vai comprar o equipamento. Não vendemos sessão.',
    pedestais: [
      { nome: 'Polarys', foto: f.polarys02, alt: 'Polarys, da Ibramed, com os aplicadores', encaixe: 'contem', escala: 1.05 },
      { nome: 'Criodermis Smart', foto: f.criodermis02, alt: 'Criodermis Smart, da Medical San', encaixe: 'contem', escala: 1.05 },
    ],
    pendencia: 'CONFIRMAR: autorização das imagens da Ibramed e da Medical San e conferir que não têm texto embutido (sem isso, entram as fotos da loja da rede)',
  },
  vitrine: {
    titulo: 'O que o preço da vitrine não mostra',
    grande: 'Você já viu o preço na vitrine. Ele diz quanto custa a máquina, <em>não quanto custa repor um aplicador, o que a garantia exige nem quem atende quando a máquina para.</em>',
    apoio: 'Na proposta, a Leal põe por escrito o que a rede e o fabricante informarem sobre cada ponto, para você comparar com o que viu.',
    listaTitulo: 'O que perguntar antes de fechar:',
    itens: [
      { icone: 'caixa', nome: 'Kit e entrega', texto: 'quais aplicadores vêm, se o rack vem, quanto custa cada peça à parte e o frete até a sua cidade.' },
      { icone: 'aplicador', nome: 'Aplicador', texto: 'se o fabricante indica vida útil, o preço de repor um e quantos trabalham ao mesmo tempo.' },
      { icone: 'membrana', nome: 'Membrana', texto: 'se o aparelho usa, qual o fabricante indica, se vem na caixa, quanto custa repor e onde se compra.' },
      { icone: 'capelo', nome: 'Treinamento', texto: 'quem dá, onde e com quantas horas.' },
      { icone: 'chave', nome: 'Assistência', texto: 'onde fica, em quantos dias a máquina volta, quem paga o frete do reparo, o que vale se ela chegar com defeito e quem atende se a revenda deixar de existir.' },
      { icone: 'escudo', nome: 'Garantia', texto: 'o prazo, o que o termo de cada marca cobre, no aparelho e nos aplicadores, e se ele exige revisão periódica.' },
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
      texto: 'Perguntar sobre membrana, kit e assistência',
      mensagem: 'Olá! Quero saber, por escrito, o que vem na caixa, quanto custa repor a membrana e como funciona a assistência da máquina de criolipólise.',
    },
  },
  comparar: {
    titulo: 'Polarys ou Criodermis Smart: onde os dois diferem',
    abertura: 'No catálogo da rede, os dois aparecem como aparelhos de criolipólise [[CONFERIR NO MANUAL]]. São de fabricantes diferentes e montam a caixa de jeitos diferentes: a tabela mostra a ficha de cada um.',
    criterio: 'Três perguntas ajudam a escolher: que tipo de aplicador você quer ter à mão (de sucção, de placa ou os dois), se a máquina fica num lugar só ou vai de um lugar a outro, e qual assistência atende a sua cidade.',
    aparelhos: [
      {
        id: 'polarys',
        curto: 'Polarys',
        nome: 'Polarys',
        fabricante: 'Ibramed, Amparo (SP)',
        mensagem: 'Olá! Já escolhi o Polarys e quero a proposta por escrito.',
        galeria: [
          { src: f.polarys01, alt: 'Polarys com os aplicadores, foto da loja da rede' },
          { src: f.polarys02, alt: 'Polarys com aplicadores de sucção e de placas, imagem da Ibramed' },
          { src: f.polarys04, alt: 'Aplicador de sucção 360 do Polarys, imagem da Ibramed' },
          { src: f.polarys05, alt: 'Aplicador de placas do Polarys, imagem da Ibramed' },
        ],
      },
      {
        id: 'criodermis',
        curto: 'Criodermis',
        nomeBotao: 'Criodermis Smart',
        nome: 'Criodermis Smart',
        fabricante: 'Medical San, Estrela (RS)',
        mensagem: 'Olá! Já escolhi o Criodermis Smart e quero a proposta por escrito.',
        galeria: [
          { src: f.criodermis01, alt: 'Criodermis Smart com os aplicadores, foto da loja da rede' },
          { src: f.criodermis02, alt: 'Criodermis Smart, imagem da Medical San' },
        ],
      },
    ],
    pendenciaGalerias:
      'CONFIRMAR: imagens da Ibramed e da Medical San só com a aprovação da rede. Fora até a rede confirmar o kit: a panorâmica dos aplicadores da Ibramed e o aplicador avulso do Criodermis',
    fichaTitulo: 'Ficha curta',
    ficha: [
      {
        rotulo: 'Modelo e número Anvisa',
        valores: [
          '[[CONFIRMAR: nome técnico, número e se é registro ou notificação no portal, e se cobre o Polarys com placas e sucção; a Ibramed mostra 10360319008]]',
          '[[CONFIRMAR: nome técnico, número e se é registro ou notificação no portal, e se cobre o Smart; a Medical San mostra 81243810003, classe II]]',
        ],
      },
      { rotulo: 'Tipo de aplicador', valores: ['Sucção (360°) e placas, segundo a Ibramed' + conferir, 'Placas, segundo a loja da rede' + conferir] },
      {
        rotulo: 'Na caixa, segundo a loja da rede',
        valores: [
          'Aparelho, 5 aplicadores (2 de placas e 3 de sucção: 2 P e 1 M), membranas, funil e dreno, e cabo' + kit,
          'Aparelho, 4 aplicadores de placa G e cabo' + kit,
        ],
      },
      {
        rotulo: 'Fora da lista da caixa',
        valores: [
          'Rack: a lista não cita [[CONFIRMAR COM A REDE: o aparelho usa rack?]]',
          'Rack: não acompanha, segundo a loja. Membrana: a lista não cita [[CONFIRMAR COM A REDE: o aparelho usa membrana?]]',
        ],
      },
      { rotulo: 'Refrigeração', valores: ['Com reservatório de água, segundo a Ibramed' + conferir, 'Sem água, segundo a loja da rede' + conferir] },
      { rotulo: 'Peso do aparelho', valores: ['{34,6 kg}, segundo a loja da rede' + conferir, '{6,5 kg}, segundo a loja da rede' + conferir] },
      {
        rotulo: 'Garantia',
        valores: [
          'Conforme o termo da Ibramed [[CONFIRMAR COM A REDE: prazo em meses e revisões exigidas]]',
          'Conforme o termo da Medical San [[CONFIRMAR COM A REDE: prazo em meses e revisões exigidas]]',
        ],
      },
      {
        rotulo: 'Assistência técnica',
        valores: ['Assistências indicadas no site da Ibramed [[CONFIRMAR: data de acesso]]', 'Assistências indicadas no site da Medical San [[CONFIRMAR: data de acesso]]'],
      },
    ],
    fichaNota:
      'Dados em conferência no manual de cada aparelho [[CONFIRMAR: data]]. A lista da caixa é a da loja da rede e pode mudar: o que vem na caixa vai escrito na proposta. O que não aparece na lista pode ser vendido à parte ou não ser usado pelo aparelho; pergunte antes de assinar. Qual assistência atende a sua cidade vai na proposta, como o fabricante informar. Polarys é marca da Ibramed; Criodermis, da Medical San. <a href="https://consultas.anvisa.gov.br/" target="_blank" rel="noopener"><strong>Conferir o número e a indicação na Anvisa</strong></a>',
    notas: [
      '<strong>Existe mais de um Polarys ou Criodermis?</strong> Sim. O catálogo da rede tem mais de uma versão do Polarys, e os acessórios da Medical San citam outras versões do Criodermis. Esta página trata do Polarys com aplicadores de placas e de sucção e do Criodermis Smart. Confira o modelo e o número Anvisa na proposta e no portal da Anvisa.',
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
          '<p>Duas contas podem se repetir: o aplicador, se o fabricante indicar vida útil para ele, e a membrana, se o aparelho usar. O que usar, com que frequência trocar e onde comprar vêm do manual e do fabricante de cada aparelho. Pesam também o aplicador de outro tamanho, se você quiser um que não vem na caixa, e a manutenção fora da garantia, com as revisões que o termo exigir.</p><p>Pergunte o preço de reposição da membrana, se o aparelho usar, e de cada aplicador antes de assinar. A Leal responde por escrito, junto com a proposta, com o que a rede e o fabricante informarem. Com esses números, você faz a conta da sua clínica.</p>',
      },
      {
        pergunta: 'Quem pode operar?',
        resposta:
          '<p>O profissional habilitado, conforme o que o fabricante informou à Anvisa e as regras do seu conselho. Você recebe o número Anvisa e o manual antes de comprar, para conferir. A Leal não define quem pode operar e não garante habilitação. O treinamento não substitui a habilitação.</p>',
      },
      {
        pergunta: 'O que conferir no manual antes de comprar?',
        resposta:
          '<p>As áreas de aplicação, as contraindicações, as advertências, os eventos adversos que o fabricante descreve e os cuidados de uso de cada aparelho, inclusive com a temperatura e, se o aparelho usar, com a membrana, como estão no manual. Pergunte também se o treinamento, quando houver, cobre esses pontos. Antes da proposta, a Leal envia o manual do aparelho que você quer ver.</p>',
      },
      {
        pergunta: 'Que documentos pedir antes de assinar?',
        resposta:
          '<ul><li>O número Anvisa do modelo (registro ou notificação), para conferir no portal.</li><li>O manual em vigor, com as indicações e quem pode operar.</li><li>O termo de garantia de cada marca.</li><li>Quem emite a nota fiscal e se o aparelho é novo. Se não for, o laudo técnico e o histórico de revisão.</li><li>A regra de bloqueio da máquina por atraso de pagamento, se houver.</li></ul><p>Kit, membrana, treinamento e assistência estão na lista da seção <a href="#lista-preco">"O que o preço da vitrine não mostra"</a>.</p>',
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
    mensagem: 'Olá! Quero receber ficha, número Anvisa e manual do Polarys e do Criodermis Smart, e saber o que vem na caixa de cada um.',
    pedestais: [
      { nome: 'Polarys', foto: f.polarys01, alt: 'Polarys', encaixe: 'contem', escala: 1.3 },
      { nome: 'Criodermis Smart', foto: f.criodermis01, alt: 'Criodermis Smart', encaixe: 'contem', escala: 1.3 },
    ],
  },
};
