// Contato da unidade. O número entra quando o cliente confirmar:
// até lá o link fica com [CONFIRMAR], de propósito, para não ir ao ar.
// As mensagens prontas de cada LP ficam no arquivo do nicho (src/data/nichos).
export const contato = {
  marca: 'Leal Tecnologia e Saúde',
  rede: 'Unidade Independente da Rede ISP',
  razaoSocial: 'Leal Promoção de Vendas Ltda',
  cnpj: '69.660.690/0001-01',
  cidade: 'Foz do Iguaçu (PR)',
  whatsapp: '5545988092693', // Formulário do Diego, 22/11
};

/** Link do WhatsApp da Leal com a mensagem pronta. */
export function linkWhats(mensagem: string): string {
  return `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
