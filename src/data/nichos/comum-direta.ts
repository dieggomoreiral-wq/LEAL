// Trechos comuns da versão de venda direta (v2) de toda LP de equipamento.
// Rascunho de 15/11/2026, escrito pelo Maestro: passa pelo guardião antes de subir.

/** Os 4 passos da compra direta. */
export const passosDiretos = [
  '<strong>Você pede o orçamento pelo WhatsApp.</strong> A mensagem já vem pronta.',
  '<strong>A proposta chega por escrito, em até [[CONFIRMAR: X]] dias úteis.</strong> Preço, condição de pagamento, validade da condição, ficha, número Anvisa e manual do aparelho.',
  '<strong>Você confirma a compra.</strong> Quem vende e emite a nota fiscal é a Rede ISP, por [[CONFIRMAR: razão social e CNPJ de quem fatura]]. A Leal é a unidade que atende a sua compra.',
  '<strong>A máquina segue para a sua clínica.</strong> O frete, o prazo de entrega e o que a compra inclui de instalação e treinamento vão escritos na proposta [[CONFIRMAR COM A REDE]].',
];

export const perguntaPreco = {
  pergunta: 'Qual é o preço?',
  aberta: true,
  resposta:
    '<p>O preço e a condição de pagamento vêm na proposta, por escrito, com a validade da condição. [[CONFIRMAR COM A REDE: só as formas de pagamento aceitas, sem número de parcelas, carência ou desconto]]</p>',
};

export const perguntaOperar = {
  pergunta: 'Quem pode operar?',
  resposta:
    '<p>O profissional habilitado, conforme o que o fabricante informou à Anvisa e as regras do seu conselho. Você recebe o número Anvisa e o manual antes de comprar, para conferir. A Leal não define quem pode operar e não garante habilitação. O treinamento não substitui a habilitação.</p>',
};

export const perguntaGarantia = {
  pergunta: 'Tem garantia e assistência?',
  resposta:
    '<p>A garantia de fábrica segue o termo de cada marca, que você recebe antes de assinar. Onde fica a assistência, em quantos dias a máquina volta e quem paga o frete do reparo vão escritos na proposta, como o fabricante e a rede informarem.</p>',
};

export const perguntaEntrega = {
  pergunta: 'Entregam na minha cidade?',
  resposta: '<p>O frete e o prazo até a sua cidade vão escritos na proposta. [[CONFIRMAR COM A REDE: área de entrega]]</p>',
};
