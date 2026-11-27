// As 6 LPs de venda direta (v2), montadas em 21/11/2026: textos do
// copywriter (textos-direta.ts) + fotos da v1 + o que depende de terceiro
// (Anvisa, autorização das imagens, pós-venda), cada um como Fato.
// Para publicar, troque cada trava por { estado: 'confirmado', valor, fonte, em }.
import type { Nicho } from './tipos';
import type { AparelhoDireto, FatoObrigatorio, TextosNicho, VersaoDireta } from './tipos-direta';
import { depilacao } from './depilacao';
import { ultrassom } from './ultrassom';
import { criolipolise } from './criolipolise';
import { pigmentos } from './pigmentos';
import { radiofrequencia } from './radiofrequencia';
import { laserCo2 } from './laser-co2';
import {
  depilacaoTextos,
  ultrassomTextos,
  criolipoliseTextos,
  pigmentosTextos,
  radiofrequenciaTextos,
  laserCo2Textos,
} from './textos-direta';

type Anvisa = AparelhoDireto['anvisa'];

/**
 * Número que o fabricante mostra. Em 18/11/2026 o portal da Anvisa deu os
 * números como válidos (Diário de Operações), mas o nome técnico, o tipo e a
 * validade não foram anotados: falta abrir o detalhe e registrar aqui.
 */
const anvisaConferir = (nome: string, fabricante: string, numero: string): Anvisa => ({
  estado: 'trava',
  pergunta: `Anotar do portal da Anvisa o nome técnico, o tipo (registro ou notificação) e a validade do ${nome} (${fabricante}, ${numero}; número válido em 18/11)`,
  dono: 'shark',
});

// Áudio do Diego repassado em 27/11: há treinamento para quem compra, dado na
// chegada; quem instala é o comprador, nesse treinamento; equipamentos em estoque.
const DIEGO = { estado: 'confirmado', fonte: 'Áudio do Diego', em: '2026-11-27' } as const;
// Garantia de fábrica de 18 meses, mandada publicar pelo Vinicius em 27/11. O "disparo
// ilimitado" do áudio saiu (H1): o manual REV05 não traz, e a preventiva conta disparos.
// Ultramed: manual REV03, seção 12 (18 meses no equipamento a contar da nota, 6 nos
// aplicadores, preventiva com inspeção e calibração na fábrica a cada 6 meses).
// Nas outras 4 LPs a garantia não tem resposta confirmada, e o item não aparece.
const GARANTIA: Record<string, AparelhoDireto['posVenda']['garantia']> = {
  hakon: { ...DIEGO, valor: { texto: '18 meses de garantia de fábrica no equipamento.', responsavel: 'Fabricante' } },
  ultramed: {
    estado: 'confirmado',
    fonte: 'Manual do usuário do Ultramed MPT, REV03',
    em: '2026-11-27',
    valor: { texto: '18 meses de garantia de fábrica no equipamento, a contar da nota fiscal.', responsavel: 'Fabricante' },
  },
};

// Estoque é fato perecível (parecer de conformidade 27/11, G6): vale 7 dias a partir
// do áudio. Sem renovação por escrito, a linha "Disponibilidade" some da página,
// no build e no navegador. Para renovar, troque "em" e "validoAte".
export const ESTOQUE = {
  ...DIEGO,
  valor: 'Em estoque na Rede ISP, com a disponibilidade confirmada por escrito antes do pagamento',
  validoAte: '2026-12-04',
} as const;

// Manual do fabricante lido em 27/11 (REV05, item 5.3). A caixa do Ultramed espera o kit real.
const CAIXA: Record<string, AparelhoDireto['caixa']> = {
  hakon: {
    estado: 'confirmado',
    valor: ['Aplicador de depilação', 'Pedal de acionamento', 'Óculos de proteção do operador', 'Óculos de proteção do paciente'],
    fonte: 'Manual do usuário do Hakon, REV05',
    em: '2026-11-27',
  },
};

function montar(t: TextosNicho, n: Nicho, principal: string, anvisa: Record<string, Anvisa>): VersaoDireta {
  const ids = n.comparar.aparelhos.map((a) => a.id).sort((a, b) => (a === principal ? -1 : b === principal ? 1 : 0));
  const aparelhos = ids.map((id) => {
    const v1 = n.comparar.aparelhos.find((a) => a.id === id)!;
    const textos = t.aparelhos[id];
    if (!textos) throw new Error(`${t.slug}: faltam os textos do aparelho "${id}" em textos-direta.ts`);
    const pedestal =
      n.hero.pedestais.find((p) => p.nome === v1.nome) ?? n.hero.pedestais[n.comparar.aparelhos.indexOf(v1)];
    const daRede = v1.galeria.some((g) => /loja da rede/i.test(g.alt));
    // Formulário do Diego (22/11): "Sim, tenho a autorização por escrito".
    const autorizacao: FatoObrigatorio = {
      estado: 'confirmado',
      valor: `Fotos do ${v1.nome} (${daRede ? 'da loja da rede' : 'do fabricante'}) com autorização por escrito`,
      fonte: 'Formulário do Diego',
      em: '2026-11-22',
    };
    const ap: AparelhoDireto = {
      ...textos,
      id,
      anvisa: anvisa[id],
      fotos: {
        destaque: { ...pedestal, alt: pedestal.alt || v1.nome },
        miniatura: pedestal.foto,
        galeria: v1.galeria.slice(0, 3),
        origem: daRede ? 'rede' : 'fabricante',
        autorizacao,
      },
      // Vídeo só entra depois de assistido inteiro (assistidoEm).
      caixa: CAIXA[id] ?? { estado: 'na-proposta' },
      posVenda: {
        // 27/11: item sem resposta confirmada (na-proposta) não aparece na página.
        garantia: GARANTIA[id] ?? { estado: 'na-proposta' },
        // 27/11, Vinicius: assistência em todo o Brasil; a página não fala de quem paga frete.
        assistencia: { estado: 'confirmado', fonte: 'Vinicius', em: '2026-11-27', valor: { texto: 'Assistência técnica em todo o Brasil.', responsavel: 'Rede ISP' } },
        pecas: { estado: 'na-proposta' },
        treinamento: { ...DIEGO, valor: { texto: 'Treinamento para quem compra, marcado para a chegada da máquina.', responsavel: 'Leal' } },
        instalacao: { ...DIEGO, valor: { texto: 'Instalação feita pelo próprio comprador, com orientação no treinamento.', responsavel: 'Leal' } },
        // 27/11, Vinicius: máquina parada por defeito tem valor reduzido no período. A página
        // não diz "redução" e não pode dar a entender que a parcela some. Bloqueio por atraso não é citado.
        parada: { estado: 'confirmado', fonte: 'Vinicius', em: '2026-11-27', valor: { texto: 'Máquina parada por defeito tem condição especial de pagamento no período.', responsavel: 'Rede ISP' } },
      },
    };
    return ap;
  }) as [AparelhoDireto, AparelhoDireto];

  const { aparelhos: _textos, ...resto } = t;
  // Sem vídeo na v2 (só entra assistido), a linha dos vídeos sai do rodapé.
  // Venda direta (24/11): o rodapé cita só a marca do aparelho vendido, não a do concorrente da v1.
  const nomePrincipal = aparelhos[0].nome;
  const marcas = n.rodapeMarcas
    .replace(/\s*Vídeos? n[oa]s? canais[^.]*\./, '')
    .split(/(?<=\.)\s+/)
    .filter((f) => {
      const m = f.match(/^(.+?) é marca d[ao] /);
      return !m || nomePrincipal.startsWith(m[1]);
    })
    .join(' ');
  return { ...resto, principal, aparelhos, rodape: { marcas, uso: n.rodapeUso } };
}

export const depilacaoDireta = montar(depilacaoTextos, depilacao, 'hakon', {
  // 27/11, Vinicius: a LP do Hakon não mostra o registro Anvisa.
  acrus: { estado: 'trava', pergunta: 'Conferir no portal da Anvisa o número, o nome técnico e se é registro ou notificação do Ácrus (HTM)', dono: 'shark' },
});

export const ultrassomDireta = montar(ultrassomTextos, ultrassom, 'ultramed', {
  ultramed: anvisaConferir('Ultramed MPT', 'Medical San', '81243819008; modelo ME21380A ou ME21241A'),
  iasis: anvisaConferir('IÁSIS HIFU MPT', 'Bioset', '10410309017'),
});

export const criolipoliseDireta = montar(criolipoliseTextos, criolipolise, 'criodermis', {
  criodermis: anvisaConferir('Criodermis Smart', 'Medical San', '81243810003, classe II'),
  polarys: anvisaConferir('Polarys', 'Ibramed', '10360319008'),
});

export const pigmentosDireta = montar(pigmentosTextos, pigmentos, 'syrius', {
  syrius: anvisaConferir('Syrius', 'Ibramed', '10360310046'),
  magni: anvisaConferir('Magni ICE YAG', 'Bioset', '10410300028'),
});

export const radiofrequenciaDireta = montar(radiofrequenciaTextos, radiofrequencia, 'hooke', {
  hooke: anvisaConferir('Novo Hooke', 'Ibramed', '10360319025'),
  effect: anvisaConferir('Effect', 'HTM', '80212480015, que lista o modelo Effect'),
});

export const laserCo2Direta = montar(laserCo2Textos, laserCo2, 'hegon', {
  hegon: {
    estado: 'confirmado',
    valor: { numero: '81243810014', tipo: 'registro', nomeTecnico: 'Válido até 04/03/2034, com o modelo Hegon listado' },
    fonte: 'Portal da Anvisa',
    em: '2026-11-18',
  },
  lunya: {
    estado: 'confirmado',
    valor: { numero: '10410300030', tipo: 'registro', nomeTecnico: 'Válido até 01/12/2035, com o modelo Lunya listado' },
    fonte: 'Portal da Anvisa',
    em: '2026-11-18',
  },
});
