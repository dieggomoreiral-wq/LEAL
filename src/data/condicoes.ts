// Condições de compra da rede, iguais nas 6 LPs de venda direta (v2).
// Cada campo é um Fato. As respostas do Formulário do Diego chegaram em
// 22/11/2026: o que ele respondeu está confirmado; o resto segue como trava.
// Enquanto houver trava, `MODO=publicacao npm run build` falha de propósito.
import type { CondicoesRede } from './nichos/tipos-direta';

const FORM = 'Formulário do Diego';
const EM = '2026-11-22';

export const condicoes: CondicoesRede = {
  whatsapp: { estado: 'confirmado', valor: '5545988092693', fonte: FORM, em: EM },
  // Ele respondeu "9h às 18h", sem os dias da semana.
  // Lançamento (24/11): vai o que ele respondeu, sem os dias da semana.
  horario: { estado: 'confirmado', valor: 'das 9h às 18h', fonte: FORM, em: EM },
  // Ele respondeu "em até 1 min". Na página vai a versão que não quebra num dia cheio.
  respostaEm: { estado: 'confirmado', valor: 'em poucos minutos', fonte: `${FORM} (em até 1 min)`, em: EM },
  // "A proposta de valores e formas de pagamento é desenrolada no primeiro contato via whats."
  propostaEm: { estado: 'confirmado', valor: 'na própria conversa', fonte: FORM, em: EM },
  pagamento: { estado: 'confirmado', valor: 'Pix, boleto, cartão de crédito, financiamento e transferência', fonte: FORM, em: EM },
  // Ele respondeu "Rede ISP Saúde/Shopvita", sem razão social. A política de
  // privacidade da shopvita.com.br nomeia Smart BR Soluções Tecnológicas, CNPJ
  // 06.981.980/0001-37 (lida em 22/11). Falta ele confirmar que é quem fatura.
  quemVende: {
    estado: 'trava',
    pergunta: 'A nota sai pela Smart BR Soluções Tecnológicas, CNPJ 06.981.980/0001-37 (a empresa que aparece na política da shopvita.com.br)? Se não, qual razão social e CNPJ?',
    dono: 'diego',
  },
  // "Depende do estado, mas assim que fatura o equipamento já sai pra envio."
  // A política da shopvita.com.br diz envio e rastreamento para todo o Brasil (lida em 22/11).
  entregaArea: { estado: 'confirmado', valor: 'Todo o Brasil', fonte: 'shopvita.com.br + Formulário do Diego', em: EM },
  entregaPrazo: { estado: 'na-proposta' },
  // O controlador é a empresa (Leal Promoção de Vendas Ltda), não a pessoa. O
  // canal é o próprio WhatsApp até existir um e-mail comercial. O prazo de
  // guarda na rede ainda é pergunta do Diego para a rede.
  lgpd: {
    estado: 'confirmado',
    valor: {
      controlador: 'Leal Promoção de Vendas Ltda, CNPJ 69.660.690/0001-01',
      canal: 'mande uma mensagem no <a href="https://wa.me/5545988092693">WhatsApp da Leal</a>, o mesmo número do atendimento.',
      prazo: 'pelo tempo necessário para responder ao seu pedido',
    },
    fonte: `${FORM} + Shark`,
    em: EM,
  },
  politicas: { estado: 'confirmado', valor: { privacidade: '/privacidade', cookies: '/cookies' }, fonte: 'Shark', em: '2026-11-22' },
  demonstracao: { estado: 'na-proposta' },
};
