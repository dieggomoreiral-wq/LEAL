// Fotos dos aparelhos (fontes em src/assets/produtos/FONTES.md do cliente).
// Tudo passa pelo astro:assets: AVIF e WebP no build, com srcset.
import type { ImageMetadata } from 'astro';

import hakonFrente from '../assets/produtos/hakon-01-recorte-transparente-0graus.png';
import hakon90 from '../assets/produtos/hakon-02-recorte-transparente-90graus.png';
import hakon180 from '../assets/produtos/hakon-03-recorte-transparente-180graus.png';
import hakon270 from '../assets/produtos/hakon-04-recorte-transparente-270graus.png';
import hakonAplicador from '../assets/produtos/hakon-06-aplicador-refrigerado-fundo-escuro.png';
import hakonSuporte from '../assets/produtos/hakon-07-detalhe-suporte-antiquedas.png';
import hakonLoja1 from '../assets/produtos/hakon-08-fundo-branco-shopvita-01.jpg';
import hakonLoja2 from '../assets/produtos/hakon-09-fundo-branco-shopvita-02.jpg';
import hakonLoja3 from '../assets/produtos/hakon-10-fundo-branco-shopvita-03.jpg';

import acrusLoja3 from '../assets/produtos/acrus-01-fundo-branco-shopvita-03.jpg';
import acrusLoja1 from '../assets/produtos/acrus-02-fundo-branco-shopvita-01.jpg';
import acrusHtm2 from '../assets/produtos/acrus-04-fundo-branco-htm-2.jpg';
import acrusHtm3 from '../assets/produtos/acrus-05-fundo-branco-htm-3.jpg';
import acrusEp03 from '../assets/produtos/acrus-06-fundo-branco-htm-ep03.jpg';
import acrusEp04 from '../assets/produtos/acrus-07-fundo-branco-htm-ep04.jpg';

export interface FotoGaleria {
  src: ImageMetadata;
  alt: string;
  /** Foto de fundo escuro (ocupa o quadro inteiro, sem respiro). */
  escura?: boolean;
  /** Foto pequena na origem: não é ampliada além do tamanho real. */
  pequena?: boolean;
  /** Quadro com várias peças pequenas lado a lado (ex.: aplicadores), cada
   *  uma com o nome embaixo. `src` vira a miniatura; o quadro não tem zoom. */
  grupo?: { src: ImageMetadata; alt: string; nome: string }[];
}

export const fotos = {
  hakonFrente,
  hakon90,
  hakon180,
  hakon270,
  hakonAplicador,
  hakonSuporte,
  hakonLoja1,
  hakonLoja2,
  hakonLoja3,
  acrusLoja3,
  acrusLoja1,
  acrusHtm2,
  acrusHtm3,
  acrusEp03,
  acrusEp04,
};

/** Os quatro quadros do giro de 360° do Hakon, na ordem 0°, 90°, 180°, 270°. */
export const giroHakon = [hakonFrente, hakon90, hakon180, hakon270];
