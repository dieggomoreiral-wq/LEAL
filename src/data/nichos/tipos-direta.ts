// Molde da versão 2 (venda direta) das LPs de equipamento, refeita em
// 21/11/2026 a partir da arquitetura do estrategista (Entregas, 19/11).
// A v2 não herda nada do Nicho da v1: um aparelho carro-chefe, o pós-venda
// escrito antes da assinatura e o pedido em 2 toques.
//
// Pendência é dado, não pílula: todo dado que depende de terceiro é um Fato
// com estado. Na publicação (MODO=publicacao) nenhuma pílula aparece e o
// build falha se sobrar alguma trava. No rascunho (padrão), as travas viram
// pílula e o painel "Faltam N respostas" lista cada uma com o dono.
import type { ImageMetadata } from 'astro';
import type { FotoGaleria } from '../fotos';
import type { FotoPedestal } from './tipos';

/* ---------- Pendência como dado ---------- */

export type Dono = 'rede' | 'diego' | 'vinicius' | 'shark';

/** confirmado: aparece, com fonte e data (AAAA-MM-DD).
 *  na-proposta: a página mostra o texto honesto padrão do campo.
 *  trava: o build de publicação falha e lista a pergunta. */
export type Fato<T = string> =
  | { estado: 'confirmado'; valor: T; fonte: string; em: string }
  | { estado: 'na-proposta' }
  | { estado: 'trava'; pergunta: string; dono: Dono };

/** Só confirmado ou trava. */
export type FatoObrigatorio<T = string> = Exclude<Fato<T>, { estado: 'na-proposta' }>;

/* ---------- Condições: um arquivo só para os 6 nichos (condicoes.ts) ---------- */

export interface CondicoesRede {
  whatsapp: FatoObrigatorio<string>;          // só dígitos, com 55 e DDD
  horario: FatoObrigatorio<string>;           // "de segunda a sexta, das 8h às 18h"
  respostaEm: FatoObrigatorio<string>;        // "em poucos minutos"
  propostaEm: FatoObrigatorio<string>;        // "na própria conversa"
  pagamento: FatoObrigatorio<string>;         // só formas; sem parcelas, carência ou desconto
  quemVende: FatoObrigatorio<{ razaoSocial: string; cnpj: string }>;
  enderecoLeal: FatoObrigatorio<string>;
  entregaArea: FatoObrigatorio<string>;       // "Para todo o Brasil" ou a área
  entregaPrazo: Fato<string>;
  lgpd: FatoObrigatorio<{ controlador: string; canal: string; prazo: string }>; // prazo: por quanto tempo a conversa fica guardada
  politicas: FatoObrigatorio<{ privacidade: string; cookies: string }>; // URLs das páginas
  demonstracao: Fato<string>;                 // na-proposta: a pergunta some
}

/* ---------- Aparelho ---------- */

export type ItemPosVenda = 'garantia' | 'assistencia' | 'pecas' | 'treinamento' | 'instalacao' | 'parada';
export const ITENS_POS_VENDA: ItemPosVenda[] = ['garantia', 'assistencia', 'pecas', 'treinamento', 'instalacao', 'parada'];
export type Responsavel = 'Leal' | 'Rede ISP' | 'Fabricante';

export interface RespostaPosVenda {
  /** O fato numa frase, como a rede ou o fabricante confirmou. */
  texto: string;
  /** Etiqueta "quem responde". */
  responsavel: Responsavel;
}

export interface DadoCompra {
  numero: string;        // "4"  |  "−12"  |  "1 a 30"
  unidade?: string;      // "comprimentos de onda" | "°C" | "W"
  rotulo: string;        // "Resfriamento da ponteira"
  leitura: string;       // uma linha do que muda na rotina da sala, sem resultado
}

export interface FonteDados {
  documento: string;     // "Manual do usuário do Hakon 4D Premium"
  revisao: string;       // "revisão 03"
  conferidoEm: string;   // AAAA-MM-DD
}

/** Textos de um aparelho (copywriter): dados, ficha e mensagens. */
export interface TextosAparelho {
  nome: string;          // "Hakon 4D Premium"
  fabricante: string;    // "Medical San"
  dados: [DadoCompra, DadoCompra, DadoCompra];
  /** Dever de casa nosso: sem o manual lido, é trava (dono shark). */
  fonteDados: FatoObrigatorio<FonteDados>;
  fichaCompleta: { rotulo: string; valor: string }[];
  mensagens: {
    topo: string;        // "Olá! Quero a proposta do Hakon 4D Premium."
    docs: string;        // "Olá! Quero receber o manual e a ficha do Hakon 4D Premium."
  };
}

/** Aparelho completo: textos + o que depende de terceiro (Maestro). */
export interface AparelhoDireto extends TextosAparelho {
  id: string;            // "hakon" (mesmo id da v1, para reaproveitar fotos)
  anvisa: FatoObrigatorio<{ numero: string; tipo: 'registro' | 'notificação'; nomeTecnico: string }>;
  fotos: {
    destaque: FotoPedestal;              // bloco 1
    miniatura: ImageMetadata;            // toque 1 do pedido
    galeria: FotoGaleria[];              // até 3
    origem: 'rede' | 'fabricante';
    autorizacao: FatoObrigatorio<string>;
  };
  video?: { id: string; titulo: string; assistidoEm: string };   // sem assistidoEm, não entra
  caixa: Fato<string[]>;                 // na-proposta: a lista some do bloco 4
  posVenda: { garantia: FatoObrigatorio<RespostaPosVenda> } &
            Record<Exclude<ItemPosVenda, 'garantia'>, Fato<RespostaPosVenda>>;
}

/* ---------- Textos padrão (comum), iguais nos 6 nichos ---------- */

export interface TextoItemPosVenda {
  rotulo: string;        // "Assistência técnica"  ("pecas" usa {peca})
  pergunta: string;      // "Onde fica, em quantos dias a máquina volta e quem paga o frete"
}

export interface Pergunta { pergunta: string; resposta: string; aberta?: boolean }

export type Momento = 'agora' | 'trimestre' | 'pesquisa';

export interface ComumDireta {
  /** Faixa escura: rótulos das 4 células e a linha de baixo. */
  condicoes: { pagamento: string; entrega: string; quemVende: string; proposta: string; precoNaProposta: string };
  posVenda: Record<ItemPosVenda, TextoItemPosVenda>;
  /** Carimbo dos itens sem resposta confirmada. */
  carimbo: string;
  compromisso: string;
  ctaPosVenda: string;                              // "Pedir a proposta com estas respostas"
  perguntaPorQueLeal: Pergunta;
  perguntaOperar: Pergunta;
  perguntaMaisBarato: Pergunta;
  perguntaDemonstracao: Pergunta;                   // só com condicoes.demonstracao confirmada
  compra: { passo1: string; passo2: string; passo3: string };
  momentos: { id: Momento; rotulo: string; frase: string }[];
  pedido: { tituloToque1: string; tituloToque2: string; rotuloIndeciso: string; nota: string; botao: string; previa: string };
  botaoPrincipal: string;                           // "Pedir a proposta no WhatsApp"
  botaoDocs: string;                                // "Receber manual e ficha no WhatsApp"
  filtro: string;                                   // "Para quem vai comprar o equipamento. Não vendemos sessão."
}

/* ---------- Textos de cada página (copywriter) ---------- */

export interface TextosNicho {
  slug: string;                           // "depilacao-a-laser-v2"
  seo: { titulo: string; descricao: string };
  nicho: {
    nome: string;                         // "depilação a laser"
    comArtigo: string;                    // "uma máquina de depilação a laser"
    peca: string;                         // "Ponteiras" | "Cartuchos" | "Aplicadores" | "Tubo e ponteiras"
  };
  topo: { sobre: string; h1: string; sub: string };          // h1 até 60 caracteres
  posVenda: { titulo: string; abertura: string };
  maquina: { titulo: string };
  compra: { titulo: string };
  perguntas: { titulo: string; doNicho: Pergunta; variantes: Pergunta; manter: Pergunta };
  pedido: { titulo: string; texto: string };
  mensagemBarra: string;                  // "Olá! Quero a proposta de uma máquina de depilação a laser."
  /** Textos dos dois aparelhos, por id (o carro-chefe primeiro). */
  aparelhos: Record<string, TextosAparelho>;
}

/* ---------- A página montada (diretas.ts) ---------- */

export interface VersaoDireta extends Omit<TextosNicho, 'aparelhos'> {
  principal: string;                      // id do carro-chefe
  aparelhos: [AparelhoDireto, AparelhoDireto];
  rodape: { marcas: string; uso?: string };
}
