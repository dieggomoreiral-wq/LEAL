// Fotos da LP de laser CO₂ (origem e autorização em
// src/assets/produtos-laser-co2/FONTES.md). Tudo passa pelo astro:assets.
// Fora: hegon-01 (silhueta de uma cor só, 1073×373: logotipo, não foto) e hegon-02/03
// (faixa larga e opaca do site, provável arte com texto). Fora também: lunya-shopvita-11 (a página
// da loja trazia o texto do Hegon; conferir se a foto é da Lunya) e a reserva Arameus.
// Desde a crítica de 17/11 a página usa só hegon04 e lunya01 (uma de cada lado). As lunya02 a 04
// ficam importadas, mas só voltam depois de abertas uma a uma pelo critério das fotos.
import hegon04 from '../assets/produtos-laser-co2/hegon-shopvita-04-loja.jpg';
import lunya01 from '../assets/produtos-laser-co2/lunya-bioset-01-site.webp';
import lunya02 from '../assets/produtos-laser-co2/lunya-bioset-02-site.webp';
import lunya03 from '../assets/produtos-laser-co2/lunya-bioset-03-site.webp';
import lunya04 from '../assets/produtos-laser-co2/lunya-bioset-04-site.webp';

export const fotosLaserCo2 = { hegon04, lunya01, lunya02, lunya03, lunya04 };
