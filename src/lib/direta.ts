// Ajudantes da versão de venda direta (v2): estado dos fatos, marcadores
// de texto, link do WhatsApp, montagem da mensagem e lista de travas.
import { marca } from './rico';
import type {
  ComumDireta,
  CondicoesRede,
  Dono,
  Fato,
  Momento,
  VersaoDireta,
} from '../data/nichos/tipos-direta';

/** rascunho (padrão): travas viram pílula e painel. publicacao: zero pílula
 *  e o build falha se sobrar trava. */
export const MODO: 'rascunho' | 'publicacao' = (globalThis as { process?: { env: Record<string, string | undefined> } }).process?.env.MODO === 'publicacao' ? 'publicacao' : 'rascunho';
export const rascunho = MODO === 'rascunho';
/** LANCAR=1 (24/11): o dono assumiu o risco e mandou ir ao ar com as travas
 *  abertas. A trava some da página (nada inventado) e o build só avisa. */
export const lancar = (globalThis as { process?: { env: Record<string, string | undefined> } }).process?.env.LANCAR === '1';

const nomeDono: Record<Dono, string> = { rede: 'Rede', diego: 'Leal', vinicius: 'Shark', shark: 'Shark' };

const escapar = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Pílula de pendência (só no rascunho). */
export function pilula(f: { pergunta: string; dono: Dono }): string {
  return rascunho ? `<span class="pend">${escapar(nomeDono[f.dono])}: ${escapar(f.pergunta)}</span>` : '';
}

export function confirmado<T>(f: Fato<T>): T | undefined {
  return f.estado === 'confirmado' ? f.valor : undefined;
}

/** Texto do fato, a pílula da trava ou o texto padrão de "na proposta". */
export function mostrar(f: Fato<string>, naProposta = ''): string {
  if (f.estado === 'confirmado') return f.valor;
  if (f.estado === 'trava') return pilula(f);
  return naProposta;
}

/** Troca os marcadores %PECA%, %RESPOSTA%, %PROPOSTA%, %HORARIO% e
 *  %QUEMVENDE% e passa pela marca() (pílula e trecho sem quebra). */
export function preencher(texto: string, v: VersaoDireta, c: CondicoesRede): string {
  const qv = c.quemVende.estado === 'confirmado'
    ? `${c.quemVende.valor.razaoSocial}, CNPJ {${c.quemVende.valor.cnpj}}`
    : '';
  return marca(
    texto
      .replace(/%PECA%/g, v.nicho.peca.toLowerCase())
      .replace(/%RESPOSTA%/g, mostrarMarca(c.respostaEm))
      .replace(/%PROPOSTA%/g, mostrarMarca(c.propostaEm))
      .replace(/%HORARIO%/g, c.horario.estado === 'confirmado' ? c.horario.valor : pilulaMarca(c.horario))
      .replace(/%QUEMVENDE%/g, c.quemVende.estado === 'trava' ? (rascunho ? pilulaMarca(c.quemVende) : 'a Rede ISP') : qv),
  );
}
// Dentro de preencher() a pílula vai como [[...]] para a marca() montar.
const pilulaMarca = (f: { pergunta: string; dono: Dono }) => (rascunho ? `[[${nomeDono[f.dono]}: ${f.pergunta}]]` : '');
const mostrarMarca = (f: Fato<string>) =>
  f.estado === 'confirmado' ? `{${f.valor}}` : f.estado === 'trava' ? pilulaMarca(f) : '';

/** Link do WhatsApp da Leal com a mensagem pronta. Sem número confirmado,
 *  o link leva CONFIRMAR, de propósito, para não ir ao ar. */
export function linkDireta(mensagem: string, c: CondicoesRede): string {
  const numero = c.whatsapp.estado === 'confirmado' ? c.whatsapp.valor.replace(/\D/g, '') : 'CONFIRMAR';
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

/** Mensagem do pedido em 2 toques. */
export function montarMensagem(
  v: VersaoDireta,
  escolha: string,
  momento: Momento | undefined,
  c: ComumDireta,
): string {
  const ap = v.aparelhos.find((a) => a.id === escolha);
  // Desde 21/11 o concorrente não aparece na v2: quem não decidiu não cita marca.
  const base = ap
    ? `Olá! Quero a proposta do ${ap.nome}, com as respostas do pós-venda.`
    : `Olá! Quero a proposta de ${v.nicho.comArtigo}, com as respostas do pós-venda. Ainda não decidi o modelo.`;
  const frase = c.momentos.find((m) => m.id === momento)?.frase;
  return frase ? `${base} ${frase}` : base;
}

/* ---------- Travas: o que falta para publicar ---------- */

export interface Trava {
  onde: string;
  pergunta: string;
  dono: Dono;
}

export function travas(v: VersaoDireta, c: CondicoesRede): Trava[] {
  const lista: Trava[] = [];
  const junta = (onde: string, f: Fato<unknown>) => {
    if (f.estado === 'trava') lista.push({ onde, pergunta: f.pergunta, dono: f.dono });
  };
  const rotulos: Record<string, string> = {
    whatsapp: 'WhatsApp', horario: 'Horário', respostaEm: 'Prazo de resposta', propostaEm: 'Prazo da proposta', pagamento: 'Pagamento', quemVende: 'Quem vende',
    entregaArea: 'Área de entrega', entregaPrazo: 'Prazo de entrega', lgpd: 'Dados (LGPD)', politicas: 'Privacidade e cookies',
    demonstracao: 'Demonstração',
  };
  for (const [k, f] of Object.entries(c)) junta(rotulos[k] ?? k, f as Fato<unknown>);
  const ap = v.aparelhos.find((a) => a.id === v.principal)!;
  // Só o carro-chefe aparece na página (o segundo saiu do pedido em 21/11).
  if (ap.anvisa) junta(`${ap.nome}: registro Anvisa`, ap.anvisa);
  junta(`${ap.nome}: imagens`, ap.fotos.autorizacao);
  junta(`${ap.nome}: fonte dos dados`, ap.fonteDados);
  junta(`${ap.nome}: caixa`, ap.caixa);
  for (const [k, f] of Object.entries(ap.posVenda)) junta(`${ap.nome}: ${k}`, f as Fato<unknown>);
  // Pendência escrita à mão no texto ("[[CONFIRMAR: ...]]") também trava: na
  // publicação a marca() ainda a mostraria como pílula.
  for (const m of JSON.stringify(v).matchAll(/\[\[(.+?)\]\]/g)) lista.push({ onde: 'Texto', pergunta: m[1], dono: 'shark' });
  return lista;
}

/** No modo publicação, falha o build com a lista de travas. */
export function exigirPublicavel(v: VersaoDireta, c: CondicoesRede) {
  if (rascunho) return;
  const t = travas(v, c);
  if (t.length) {
    // LISTAR=1: só lista as travas de todas as páginas, sem parar o build.
    const listar = (globalThis as { process?: { env: Record<string, string | undefined> } }).process?.env.LISTAR === "1";
    if (listar || lancar) {
      console.error(`TRAVAS ${v.slug}\n` + t.map((x) => `  - [${x.dono}] ${x.onde}: ${x.pergunta}`).join('\n'));
      return;
    }
    throw new Error(
      `${v.slug}: ${t.length} trava(s) impedem a publicação:\n` +
        t.map((x) => `  - [${x.dono}] ${x.onde}: ${x.pergunta}`).join('\n'),
    );
  }
}

export function dataBR(iso: string): string {
  const [a, m, d] = iso.split('-');
  return `${d}/${m}/${a}`;
}
