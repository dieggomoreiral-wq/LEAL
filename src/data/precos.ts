// Preço na página (26/11/2026). Só Hakon e Ultramed MPT, as duas máquinas com
// verba no Google Ads. O Diego liberou "o mesmo preço da Shopvita", sem pedir
// autorização à rede, e mandou: 12, 24, 36 e 48x pela financeira ou pela
// Medical San, 1ª parcela para 90 dias, condição de Black Friday até o fim do mês.
// Valores lidos em shopvita.com.br em 26/11 às 12h30. Garantia não entra (pedido dele).
// Página sem entrada aqui continua sem preço.

export interface PrecoPagina {
  aVista: string;          // "R$ 67.499,99"
  parcelado: string;       // "R$ 74.999,99 em até 12x de R$ 6.250,00 sem juros"
  validoAte: string;       // AAAA-MM-DD
  fonte: string;
}

const FONTE = 'shopvita.com.br (loja da rede), lida em 26/11/2026; liberado pelo Diego em 26/11';

export const financiamento = 'Também em 24, 36 ou 48x pela financeira ou pela Medical San, com a 1ª parcela para 90 dias.';
export const validade = (p: PrecoPagina) => {
  const [a, m, d] = p.validoAte.split('-');
  return `Condição de Black Friday válida até ${d}/${m}/${a}. Mesmo preço da loja da Rede ISP.`;
};

export const precos: Record<string, PrecoPagina> = {
  'depilacao-a-laser': {
    aVista: 'R$ 67.499,99',
    parcelado: 'R$ 74.999,99 em até 12x de R$ 6.250,00 sem juros',
    validoAte: '2026-11-30',
    fonte: FONTE,
  },
  'ultrassom-microfocado': {
    aVista: 'R$ 255.550,01',
    parcelado: 'R$ 269.000,01 em até 12x de R$ 22.416,67 sem juros',
    validoAte: '2026-11-30',
    fonte: FONTE,
  },
};

/** Preço vencido não vai ao ar: o build avisa e a página volta a ficar sem preço. */
export function precoDa(nicho: string): PrecoPagina | undefined {
  const p = precos[nicho];
  if (!p) return undefined;
  const hoje = new Date().toISOString().slice(0, 10);
  if (hoje > p.validoAte) {
    console.warn(`[precos] ${nicho}: condição venceu em ${p.validoAte}. Confirme o preço novo com o Diego.`);
    return undefined;
  }
  return p;
}
