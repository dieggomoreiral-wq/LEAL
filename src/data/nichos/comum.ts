// Trechos iguais em toda LP de equipamento da Leal (aprovados na v5 de
// depilação, 14/11/2026). Mudou aqui, muda em todas: passar de novo pelo guardião.

/** Abaixo do botão do hero. */
export const avisoAtendimento =
  'Atendimento pelo WhatsApp. Primeira resposta em até [[CONFIRMAR: X]] horas úteis, de segunda a sexta, das [[CONFIRMAR: h]] às [[CONFIRMAR: h]].';

/** Cartões "Quem cuida de cada parte". */
export const cuidaPadrao = [
  {
    nome: 'Leal Tecnologia e Saúde',
    texto: 'Compara as marcas, envia ficha, registro e manual e faz a proposta por escrito. O atendimento da compra é pelo WhatsApp.',
    destaque: true,
  },
  {
    nome: 'Rede ISP',
    texto: 'Vende e emite a nota fiscal. [[CONFIRMAR: razão social e CNPJ de quem fatura]]',
    extra: '[[Logo da rede no padrão do manual]]',
  },
  {
    nome: 'Fabricante',
    texto: 'Cuida da garantia de fábrica, conforme o termo de cada marca. Você recebe o termo antes de assinar.',
  },
];

/** Os 4 passos da compra. */
export const passosPadrao = [
  '<strong>Você chama no WhatsApp.</strong> A mensagem já vem pronta.',
  '<strong>Você recebe os documentos.</strong> Ficha, registro Anvisa e manual da máquina que quer ver.',
  '<strong>A Leal entende o seu caso.</strong> Pergunta a cidade, se a clínica já funciona ou está em montagem e para quando pensa em comprar.',
  '<strong>A proposta chega por escrito, em até [[CONFIRMAR: X]] dias úteis depois que você disser qual máquina quer.</strong> Preço, condição de pagamento, validade da condição e o <a href="#quem-cuida">mapa de quem cuida de cada etapa</a> (seção acima).',
];

/** Aviso de privacidade (LGPD), em letra pequena abaixo dos passos. */
export const privacidadePadrao =
  'Ao chamar no WhatsApp, seu nome, seu número e o que você contar na conversa (cidade e situação da clínica) são usados para responder ao seu pedido e preparar a proposta. Eles são tratados por [[CONFIRMAR: controlador, razão social e CNPJ]] e compartilhados com [[CONFIRMAR: franqueadora ou rede]] para emitir a proposta e a venda, e guardados por [[CONFIRMAR: prazo]]. Para pedir acesso, correção ou exclusão: [[CONFIRMAR: e-mail ou canal]]. Detalhes na <a href="/privacidade">Política de Privacidade</a>.';
