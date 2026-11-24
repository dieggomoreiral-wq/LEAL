// LP 1: máquina de depilação a laser (Hakon 4D Premium × Ácrus).
// Copy v5 de 14/11/2026, fechada pelo Vinicius em 15/11
// (_cerebro/Entregas/2026-11-14 - Copy - LP Depilacao a laser v5.md).
import { fotos } from '../fotos';
import { contato } from '../contato';
import type { Nicho } from './tipos';
import { privacidadePadrao, passosPadrao, cuidaPadrao, avisoAtendimento } from './comum';

const conferir = ' [[CONFERIR NO MANUAL]]';

export const depilacao: Nicho = {
  slug: 'depilacao-a-laser',
  seo: {
    titulo: 'Máquina de depilação a laser: compare Hakon e Ácrus antes de assinar | Leal Tecnologia e Saúde',
    descricao: 'Receba ficha, registro e manual do Hakon 4D Premium e do Ácrus antes da proposta, e o mapa por escrito de quem cuida de cada etapa.',
  },
  rodapeMarcas:
    'Hakon é marca da Medical San. Ácrus é marca da HTM. Imagens da loja da rede e dos fabricantes, usadas com autorização por escrito. Vídeos nos canais oficiais da Medical San e da HTM.',
  mensagemPrincipal: 'Olá! Já vi o preço da máquina de depilação a laser e quero a comparação por escrito antes de fechar.',
  hero: {
    sobre: 'Para clínicas e profissionais habilitados',
    h1: 'Máquina de depilação a laser: compare Hakon e Ácrus antes de assinar',
    sub: 'Receba ficha, registro e manual de cada aparelho antes da proposta, e o mapa por escrito de quem cuida de cada etapa.',
    botao: 'Quero comparar no WhatsApp',
    apoio: avisoAtendimento,
    filtro: 'Esta página é para quem vai comprar o equipamento. Não vendemos sessão de depilação.',
    pedestais: [
      { nome: 'Hakon 4D Premium', foto: fotos.hakonFrente, alt: 'Hakon 4D Premium inteiro, visto de frente', encaixe: 'giro' },
      { nome: 'Ácrus', foto: fotos.acrusLoja3, alt: 'Ácrus com o aplicador no suporte', encaixe: 'contem', escala: 1.1 },
    ],
    pendencia: 'CONFIRMAR: autorização das fotos da Medical San (sem ela, entra a foto da loja da rede)',
  },
  vitrine: {
    titulo: 'O que o preço da vitrine não mostra',
    grande: 'Você já viu o preço na vitrine. Ele diz quanto custa a máquina, <em>não quem instala, treina e conserta quando ela parar.</em>',
    apoio: 'Na proposta, a Leal põe tudo isso por escrito para você comparar com o que viu.',
    listaTitulo: 'O que perguntar antes de fechar:',
    itens: [
      { icone: 'caminhao', nome: 'Entrega e instalação', texto: 'quem faz e quanto custa até a sua cidade.' },
      { icone: 'capelo', nome: 'Treinamento', texto: 'quem dá, onde e com quantas horas.' },
      { icone: 'chave', nome: 'Assistência', texto: 'onde fica, em quantos dias a máquina volta e quem paga o frete do reparo.' },
      { icone: 'escudo', nome: 'Garantia', texto: 'o prazo e o que o termo de cada marca cobre.' },
      { icone: 'aplicador', nome: 'Aplicador', texto: 'quantos disparos faz e quanto custa repor.' },
      { icone: 'calendario', nome: 'Parcela', texto: 'se o contrato não prevê pausa, ela vence mesmo com a máquina parada. Pergunte o que acontece no seu caso.' },
    ],
    fecho: 'A Leal informa cada item por escrito, antes de você assinar.',
    cuidaTitulo: 'Quem cuida de cada parte',
    cuida: cuidaPadrao,
    lei: 'Essa divisão mostra quem cuida de cada etapa. Ela não reduz os direitos que a lei garante a quem compra.',
    link: {
      texto: 'Perguntar sobre assistência e treinamento',
      mensagem: 'Olá! Quero saber, por escrito, como funcionam a assistência e o treinamento da máquina de depilação a laser.',
    },
  },
  comparar: {
    titulo: 'Hakon ou Ácrus: onde as duas diferem',
    abertura: 'As duas são lasers de depilação para uso profissional. Nos documentos dos fabricantes, o termo técnico é "epilação". A tabela mostra a ficha de cada uma.',
    aparelhos: [
      {
        id: 'hakon',
        curto: 'Hakon',
        nome: 'Hakon 4D Premium',
        fabricante: 'Medical San',
        mensagem: 'Olá! Já escolhi o Hakon 4D Premium e quero a proposta por escrito.',
        video: { id: '52-YIlKbeGM', titulo: 'Vídeo da Medical San sobre o Hakon' },
        galeria: [
          { src: fotos.hakonLoja1, alt: 'Hakon 4D Premium em pé, foto 1 da loja da rede' },
          { src: fotos.hakonLoja2, alt: 'Hakon 4D Premium, foto 2 da loja da rede' },
          { src: fotos.hakonLoja3, alt: 'Hakon 4D Premium, foto 3 da loja da rede' },
          { src: fotos.hakonAplicador, alt: 'Aplicador refrigerado do Hakon em fundo escuro', escura: true },
          { src: fotos.hakonSuporte, alt: 'Detalhe do suporte antiquedas do aplicador do Hakon', pequena: true },
          { src: fotos.hakon90, alt: 'Hakon 4D Premium visto de lado' },
          { src: fotos.hakon270, alt: 'Hakon 4D Premium visto do outro lado' },
        ],
      },
      {
        id: 'acrus',
        curto: 'Ácrus',
        nome: 'Ácrus',
        fabricante: 'HTM',
        mensagem: 'Olá! Já escolhi o Ácrus e quero a proposta por escrito.',
        video: { id: 'fnh9PCPo748', titulo: 'Vídeo de lançamento do Ácrus, da HTM' },
        galeria: [
          { src: fotos.acrusLoja3, alt: 'Ácrus com o aplicador no suporte, foto 1 da loja da rede' },
          { src: fotos.acrusLoja1, alt: 'Ácrus visto de frente, foto 2 da loja da rede' },
          { src: fotos.acrusEp03, alt: 'Ácrus em pé, foto da HTM' },
          { src: fotos.acrusEp04, alt: 'Ácrus em outro ângulo, foto da HTM' },
          { src: fotos.acrusHtm2, alt: 'Ácrus, foto 2 da HTM' },
          { src: fotos.acrusHtm3, alt: 'Ácrus, foto 3 da HTM' },
        ],
      },
    ],
    pendenciaGalerias: 'CONFIRMAR: fotos e vídeos da Medical San e da HTM só com a aprovação da rede',
    fichaTitulo: 'Ficha curta',
    ficha: [
      {
        rotulo: 'Modelo e registro Anvisa',
        valores: [
          '[[CONFIRMAR: nome do modelo no registro e número válido para a unidade vendida; a Medical San mostra 81243810015]]',
          '[[CONFIRMAR: nome do modelo no registro e número, conferidos no portal]]',
        ],
      },
      { rotulo: 'Comprimentos de onda', valores: ['4: 694, 755, 808 e {1064 nm}' + conferir, '3, ao mesmo tempo: 755, 808 e {1064 nm}' + conferir] },
      { rotulo: 'Resfriamento da ponteira', valores: ['{−12 °C}, por água' + conferir, 'Até {−10 °C} (Cryocooling MAXX)' + conferir] },
      { rotulo: 'Tela', valores: ['Touch de 8"' + conferir, 'Touch de 10,4"' + conferir] },
      { rotulo: 'Aplicador', valores: ['Refrigerado, com suporte antiquedas' + conferir, 'Triple Wave, com suporte' + conferir] },
    ],
    fichaNota:
      'Dados em conferência no manual de cada aparelho [[CONFIRMAR: data]]. Hakon e Ácrus são marcas dos seus fabricantes. <a href="https://consultas.anvisa.gov.br/" target="_blank" rel="noopener"><strong>Conferir registro e indicação na Anvisa</strong></a>',
    notas: [
      '<strong>Existe mais de um Hakon?</strong> Sim. O nome circula em mais de uma versão, com fichas diferentes. Esta página trata do Hakon 4D Premium vendido pela rede. Confira o modelo e o registro na proposta e no portal da Anvisa.',
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
    passos: passosPadrao,
    privacidade: privacidadePadrao,
  },
  confira: {
    titulo: 'Antes de comprar, confira',
    perguntas: [
      {
        pergunta: 'Qual máquina atende o fototipo das minhas clientes?',
        resposta: '<p>A indicação por fototipo de cada aparelho está no manual registrado na Anvisa. Peça o manual e confira se ele cobre o fototipo das clientes que você mais atende. A Leal envia o manual dos dois antes da proposta.</p>',
      },
      {
        pergunta: 'Quem pode operar?',
        resposta: '<p>O profissional habilitado, conforme o registro do aparelho na Anvisa e as regras do seu conselho. Você recebe o registro e o manual antes de comprar, para conferir. A Leal não define quem pode operar e não garante habilitação. O treinamento não substitui a habilitação.</p>',
      },
      {
        pergunta: 'Quanto custa manter a máquina funcionando?',
        resposta: '<p>Três contas pesam: o aplicador de reposição, o consumo da rotina (água destilada, filtro e gel) e a manutenção fora da garantia.</p><p>A Leal informa por escrito, junto com a proposta, o preço do aplicador e da manutenção praticado pela rede e o consumo que o manual indica. Água, filtro e gel você cota com o seu fornecedor. Com esses números e o preço da sua sessão, você faz a conta da clínica.</p>',
      },
      {
        pergunta: 'Que documentos pedir antes de assinar?',
        aberta: true,
        resposta: '<ul><li>O número do registro Anvisa do modelo, para conferir no portal.</li><li>O manual em vigor, com as indicações e quem pode operar.</li><li>O termo de garantia de cada marca.</li><li>Quem emite a nota fiscal e se o aparelho é novo. Se não for, o laudo técnico e o histórico de revisão.</li><li>A regra de bloqueio da máquina por atraso de pagamento, se houver.</li></ul><p>Entrega, treinamento e assistência estão na lista da seção <a href="#lista-preco">"O que o preço da vitrine não mostra"</a>.</p>',
      },
      {
        pergunta: 'Vi mais barato em outra loja. Vale falar com a Leal?',
        resposta: '<p>Mande o link da outra oferta pelo WhatsApp. A Leal devolve a própria proposta com os mesmos itens (garantia, assistência, frete do reparo e o que vem com a máquina), para você pôr ao lado do que a outra loja informar.</p>',
      },
    ],
  },
  final: {
    titulo: 'Peça a comparação por escrito antes de assinar',
    texto: 'Diga qual aparelho quer ver primeiro, ou mande o link da oferta que você já viu. Antes da proposta, vão ficha, registro e manual.',
    botao: 'Receber a comparação por escrito',
    mensagem: 'Olá! Quero receber ficha, registro e manual do Hakon e do Ácrus, e saber quem entrega, instala, treina e dá assistência.',
    pedestais: [
      { nome: 'Hakon 4D Premium', foto: fotos.hakonFrente, alt: 'Hakon 4D Premium', encaixe: 'recorte' },
      { nome: 'Ácrus', foto: fotos.acrusLoja3, alt: 'Ácrus', encaixe: 'contem', escala: 1.06 },
    ],
  },
};
