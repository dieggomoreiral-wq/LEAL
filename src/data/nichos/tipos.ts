// Molde de dados de uma LP por nicho de equipamento (uma LP por nicho; a
// Leal só vende equipamento). Os textos são HTML de confiança, escritos por
// nós: passam por marca() (lib/rico.ts), que troca [[...]] por pílula de
// pendência e {...} por trecho sem quebra.
import type { ImageMetadata } from 'astro';
import type { FotoGaleria } from '../fotos';

/** Como a foto do aparelho se encaixa no pedestal 3:4. */
export type Encaixe =
  | 'giro'      // giro de 360° do Hakon (4 quadros)
  | 'recorte'   // recorte transparente alto: ocupa a altura, centrado
  | 'contem';   // foto com fundo branco ou quadrada: contida, apoiada na base

export interface FotoPedestal {
  nome: string;
  foto: ImageMetadata;
  alt: string;
  encaixe: Encaixe;
  /** Escala extra da foto contida (o branco da foto some no pedestal). */
  escala?: number;
}

export interface Aparelho {
  /** Valor da chave e sufixo das mensagens (ex.: 'hakon'). */
  id: string;
  /** Nome curto na chave ("Hakon"). */
  curto: string;
  /** Nome no botão da proposta, se for diferente do curto. */
  nomeBotao?: string;
  nome: string;
  fabricante: string;
  galeria: FotoGaleria[];
  video?: { id: string; titulo: string };
  /** Mensagem pronta da chamada 2 ("Já escolhi o ..."). */
  mensagem: string;
}

export interface LinhaFicha {
  rotulo: string;
  /** Um valor por aparelho, na ordem de `comparar.aparelhos`. */
  valores: string[];
}

export interface Nicho {
  slug: string;
  seo: { titulo: string; descricao: string };
  /** Linha de marcas e imagens do rodapé (HTML de confiança). */
  rodapeMarcas: string;
  /** Linha de uso profissional do rodapé, se for diferente da padrão. */
  rodapeUso?: string;
  /** Mensagem da chamada 1 (e da barra fixa do celular, se não houver mensagemBarra). */
  mensagemPrincipal: string;
  /** Mensagem própria da barra fixa do celular, para medir à parte. */
  mensagemBarra?: string;
  hero: {
    sobre: string;
    h1: string;
    sub: string;
    botao: string;
    apoio: string;
    filtro: string;
    pedestais: FotoPedestal[];
    pendencia?: string;
  };
  vitrine: {
    titulo: string;
    grande: string;
    apoio: string;
    listaTitulo: string;
    itens: { icone: string; nome: string; texto: string }[];
    fecho: string;
    cuidaTitulo: string;
    cuida: { nome: string; texto: string; extra?: string; destaque?: boolean }[];
    lei: string;
    link: { texto: string; mensagem: string };
  };
  comparar: {
    titulo: string;
    abertura: string;
    /** Parágrafo opcional que ajuda a escolher (sem preço). */
    criterio?: string;
    aparelhos: Aparelho[];
    pendenciaGalerias?: string;
    fichaTitulo: string;
    ficha: LinhaFicha[];
    fichaNota: string;
    notas: string[];
    /** Texto do botão antes do nome curto ("Quero a proposta do"). */
    botaoPrefixo: string;
  };
  atende: {
    titulo: string;
    pessoa: { rotulo: string; nome: string; linhas: string[]; pendencia?: string };
    passosTitulo: string;
    passos: string[];
    privacidade: string;
  };
  confira: {
    titulo: string;
    perguntas: { pergunta: string; resposta: string; aberta?: boolean }[];
  };
  final: {
    titulo: string;
    texto: string;
    botao: string;
    mensagem: string;
    pedestais: FotoPedestal[];
  };
}

/** Versão 2, de venda direta, para o teste A/B com a versão de comparação.
 *  Reaproveita aparelhos, fotos, ficha, pedestais e o bloco de quem atende do
 *  Nicho; troca os textos e ganha a seção de cartões ("Escolha o aparelho").
 *  Mensagens de WhatsApp próprias, para saber de qual versão veio o contato. */
export interface VersaoDireta {
  slug: string;
  seo: { titulo: string; descricao: string };
  mensagemPrincipal: string;
  mensagemBarra?: string;
  hero: { sobre: string; h1: string; sub: string; botao: string };
  ofertas: {
    titulo: string;
    abertura?: string;
    /** Um cartão por aparelho, na ordem de `comparar.aparelhos` (mesmo id). */
    cartoes: { id: string; destaques: string[]; botao: string; mensagem: string }[];
  };
  ficha: { titulo: string; abertura: string; notas: string[]; botaoPrefixo: string };
  compra: { titulo: string; passosTitulo: string; passos: string[] };
  perguntas: { titulo: string; itens: { pergunta: string; resposta: string; aberta?: boolean }[] };
  final: { titulo: string; texto: string; botao: string; mensagem: string };
}
