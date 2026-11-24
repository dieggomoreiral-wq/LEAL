// Interações que funcionam com ou sem movimento: giro do Hakon (arraste,
// toque, teclado), galerias, zoom, vídeos, WhatsApp fixo, listas, FAQ,
// copiar a lista e o ajuste do nome gigante do rodapé.
// O movimento (rolagem suave, revelações, scrub) mora em movimento.ts.

declare global {
  interface Window {
    __lenis?: { stop(): void; start(): void };
  }
}

const calmo = window.matchMedia('(prefers-reduced-motion: reduce)');
const comportamento = (): ScrollBehavior => (calmo.matches ? 'auto' : 'smooth');
const temIO = 'IntersectionObserver' in window;

/* ---------- Seções com content-visibility: montar antes de pular para âncora ---------- */
// Um link interno pode atravessar seções ainda não montadas; com a altura
// estimada, o destino sairia errado. No primeiro clique, monta todas.
document.addEventListener(
  'click',
  (e) => {
    const a = (e.target as Element | null)?.closest?.('a[href^="#"]');
    if (a && (a.getAttribute('href') ?? '').length > 1) document.documentElement.classList.add('cv-desligado');
  },
  { capture: true },
);

/* ---------- Topo: sombra depois de rolar (sem ouvir a rolagem) ---------- */
const topo = document.querySelector<HTMLElement>('[data-topo]');
if (topo && temIO) {
  const sentinela = document.createElement('div');
  sentinela.setAttribute('aria-hidden', 'true');
  sentinela.style.cssText = 'position:absolute;top:24px;left:0;width:1px;height:1px;pointer-events:none';
  document.body.prepend(sentinela);
  new IntersectionObserver(([e]) => topo.classList.toggle('rolado', !e.isIntersecting)).observe(sentinela);
}

/* ---------- Giro do Hakon ---------- */
export interface ControleGiro {
  el: HTMLElement | null;
  mostra(k: number): void;
  atual(): number;
  arrastando: boolean;
  aoSoltar?: () => void;
  /** Resolve quando os quatro quadros estão carregados e decodificados. */
  pronto: Promise<void>;
}

function criarGiro(): ControleGiro {
  const el = document.querySelector<HTMLElement>('[data-giro]');
  const controle: ControleGiro = { el, mostra: () => {}, atual: () => 0, arrastando: false, pronto: Promise.resolve() };
  if (!el) return controle;

  const quadros = [...el.querySelectorAll<HTMLImageElement>('img.quadro')];
  const angulos = [0, 90, 180, 270];
  let i = 0;

  // Os quadros só alternam depois de prontos: carregar e decodificar antes
  // evita o quadro vazio e a decodificação no meio da rolagem.
  const preparar = (img: HTMLImageElement) =>
    (img.complete && img.naturalWidth
      ? Promise.resolve()
      : new Promise<void>((ok) => {
          img.addEventListener('load', () => ok(), { once: true });
          img.addEventListener('error', () => ok(), { once: true });
        })
    ).then(() => img.decode().catch(() => undefined));
  controle.pronto = Promise.all(quadros.map(preparar)).then(() => undefined);

  controle.mostra = (k: number) => {
    const n = ((k % 4) + 4) % 4;
    if (n === i) return;
    quadros[i].classList.remove('ativo');
    quadros[n].classList.add('ativo');
    i = n;
    el.setAttribute('aria-valuenow', String(angulos[i]));
    el.setAttribute('aria-valuetext', `${angulos[i]} graus`);
  };
  controle.atual = () => i;

  let x0: number | null = null;
  let i0 = 0;
  let moveu = false;
  el.addEventListener('pointerdown', (e) => {
    x0 = e.clientX;
    i0 = i;
    moveu = false;
    controle.arrastando = true;
    el.setPointerCapture(e.pointerId);
    el.classList.add('arrastando', 'girando');
  });
  el.addEventListener('pointermove', (e) => {
    if (x0 === null) return;
    const dx = e.clientX - x0;
    if (Math.abs(dx) > 6) moveu = true;
    controle.mostra(i0 + Math.round(dx / 36));
  });
  const fim = (e: PointerEvent) => {
    if (x0 === null) return;
    if (!moveu && e.type === 'pointerup') controle.mostra(i + 1);
    x0 = null;
    controle.arrastando = false;
    el.classList.remove('arrastando');
    controle.aoSoltar?.();
  };
  el.addEventListener('pointerup', fim);
  el.addEventListener('pointercancel', fim);
  el.addEventListener('keydown', (e) => {
    const mapa: Record<string, number> = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1 };
    if (e.key in mapa) controle.mostra(i + mapa[e.key]);
    else if (e.key === 'Home') controle.mostra(0);
    else if (e.key === 'End') controle.mostra(3);
    else return;
    e.preventDefault();
    controle.aoSoltar?.();
  });
  return controle;
}

export const giro = criarGiro();

/* ---------- Zoom ---------- */
const zoom = document.getElementById('zoom') as HTMLDialogElement | null;
const zImg = zoom?.querySelector('img');
function abreZoom(img: HTMLImageElement) {
  if (!zoom || !zImg) return;
  zImg.src = img.currentSrc || img.src;
  zImg.alt = img.alt;
  zImg.width = img.naturalWidth || img.width;
  zImg.height = img.naturalHeight || img.height;
  zImg.classList.toggle('escura', !!img.closest('.escuro'));
  if (typeof zoom.showModal === 'function') {
    zoom.showModal();
    window.__lenis?.stop();
  } else window.open(zImg.src, '_blank');
}
if (zoom) {
  zoom.addEventListener('close', () => window.__lenis?.start());
  zoom.addEventListener('click', (e) => {
    if (e.target === zoom) zoom.close();
  });
  zoom.querySelector('.zoom-fechar')?.addEventListener('click', () => zoom.close());
}

/* ---------- Galerias: scroll-snap, miniaturas, setas e contagem ---------- */
document.querySelectorAll<HTMLElement>('[data-galeria]').forEach((g) => {
  const trilho = g.querySelector<HTMLElement>('.galeria-trilho')!;
  const itens = [...trilho.querySelectorAll<HTMLElement>('.galeria-item')];
  const minis = [...g.querySelectorAll<HTMLButtonElement>('.mini')];
  const atual = g.querySelector<HTMLElement>('[data-atual]')!;
  const ant = g.querySelector<HTMLButtonElement>('.ant')!;
  const prox = g.querySelector<HTMLButtonElement>('.prox')!;
  const tira = g.querySelector<HTMLElement>('.galeria-minis')!;
  let idx = 0;
  const marca = (k: number) => {
    if (k === idx) return;
    itens[idx].classList.remove('ativo');
    itens[k].classList.add('ativo');
    minis[idx].setAttribute('aria-current', 'false');
    minis[k].setAttribute('aria-current', 'true');
    idx = k;
    atual.textContent = String(k + 1);
    ant.disabled = k === 0;
    prox.disabled = k === itens.length - 1;
    const m = minis[k];
    tira.scrollTo({ left: Math.max(0, m.offsetLeft - (tira.clientWidth - m.offsetWidth) / 2), behavior: comportamento() });
  };
  const vai = (k: number) => {
    k = Math.max(0, Math.min(itens.length - 1, k));
    trilho.scrollTo({ left: k * trilho.clientWidth, behavior: comportamento() });
    if (!temIO) marca(k);
  };
  if (temIO) {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.intersectionRatio >= 0.6 && marca(itens.indexOf(e.target as HTMLElement))),
      { root: trilho, threshold: [0.6] },
    );
    itens.forEach((it) => io.observe(it));
  }
  minis.forEach((m, j) => m.addEventListener('click', () => vai(j)));
  ant.addEventListener('click', () => vai(idx - 1));
  prox.addEventListener('click', () => vai(idx + 1));
  trilho.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') vai(idx + 1);
    else if (e.key === 'ArrowLeft') vai(idx - 1);
    else return;
    e.preventDefault();
  });
  trilho.querySelectorAll<HTMLButtonElement>('.galeria-zoom').forEach((b) =>
    b.addEventListener('click', () => abreZoom(b.querySelector('img')!)),
  );
  window.addEventListener('resize', () => (trilho.scrollLeft = idx * trilho.clientWidth), { passive: true });
});

/* ---------- Chave dos aparelhos: galeria do celular e botão da proposta ---------- */
// As duas chaves (celular, acima das galerias; desktop, acima do botão) ficam
// sincronizadas pela seção: data-escolha (aparelho), --i (posição da marca),
// data-links (link do WhatsApp de cada aparelho) e data-ativo na galeria.
const secaoEscolha = document.querySelector<HTMLElement>('[data-escolha]');
if (secaoEscolha) {
  const botoes = [...secaoEscolha.querySelectorAll<HTMLButtonElement>('[data-chave] button')];
  const cols = [...secaoEscolha.querySelectorAll<HTMLElement>('[data-aparelho]')];
  const cta = secaoEscolha.querySelector<HTMLAnchorElement>('#cta-escolha');
  const nomeCta = cta?.querySelector<HTMLElement>('[data-nome-escolha]');
  const links: Record<string, string> = JSON.parse(secaoEscolha.dataset.links ?? '{}');
  const ordem = cols.map((c) => c.dataset.aparelho ?? '');
  const escolhe = (valor: string) => {
    secaoEscolha.dataset.escolha = valor;
    secaoEscolha.style.setProperty('--i', String(Math.max(0, ordem.indexOf(valor))));
    botoes.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.valor === valor)));
    cols.forEach((c) => c.toggleAttribute('data-ativo', c.dataset.aparelho === valor));
    if (cta && links[valor]) cta.href = links[valor];
    const botao = botoes.find((b) => b.dataset.valor === valor);
    if (nomeCta && botao) nomeCta.textContent = botao.dataset.nome ?? botao.textContent;
    // A galeria que aparece agora não passou pela revelação: mostra direto.
    secaoEscolha
      .querySelectorAll(`[data-aparelho="${valor}"] [data-revelar]`)
      .forEach((el) => el.classList.add('visto'));
  };
  botoes.forEach((b) => b.addEventListener('click', () => escolhe(b.dataset.valor ?? 'hakon')));
}

/* ---------- Vídeo leve: o iframe só carrega no clique ---------- */
document.querySelectorAll<HTMLButtonElement>('[data-yt]').forEach((b) =>
  b.addEventListener('click', () => {
    const f = document.createElement('iframe');
    f.src = `https://www.youtube-nocookie.com/embed/${b.dataset.yt}?autoplay=1&rel=0&modestbranding=1`;
    f.title = b.dataset.titulo ?? '';
    f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    f.allowFullscreen = true;
    f.referrerPolicy = 'strict-origin-when-cross-origin';
    b.replaceWith(f);
    f.focus();
  }),
);

/* ---------- WhatsApp fixo no celular ---------- */
const wa = document.getElementById('wa-fixo');
if (wa && temIO) {
  const vistos = new Set<Element>();
  const io = new IntersectionObserver((es) => {
    es.forEach((e) => (e.isIntersecting ? vistos.add(e.target) : vistos.delete(e.target)));
    const mostrar = vistos.size === 0;
    wa.classList.toggle('visivel', mostrar);
    wa.inert = !mostrar;
  });
  ['hero', 'final', 'pedido', 'rodape'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) io.observe(el);
  });
}

/* ---------- Perguntas antes de assinar: acordeão no celular, abertas no desktop ---------- */
const largo = window.matchMedia('(min-width: 900px)');
const grupos = [...document.querySelectorAll<HTMLDetailsElement>('.lista-grupo')];
const ajustaGrupos = () =>
  grupos.forEach((d, j) => {
    d.open = largo.matches ? true : j === 0;
    d.querySelector('summary')!.tabIndex = largo.matches ? -1 : 0;
  });
grupos.forEach((d) =>
  d.querySelector('summary')!.addEventListener('click', (e) => {
    if (largo.matches) e.preventDefault();
  }),
);
largo.addEventListener('change', ajustaGrupos);
ajustaGrupos();

/* ---------- FAQ: uma aberta por vez (reforço para navegadores sem details[name]) ---------- */
const faqs = [...document.querySelectorAll<HTMLDetailsElement>('.faq details')];
faqs.forEach((d) =>
  d.addEventListener('toggle', () => {
    if (d.open) faqs.forEach((o) => o !== d && (o.open = false));
  }),
);

/* ---------- Copiar a lista ---------- */
const copiar = document.getElementById('copiar');
const status = document.getElementById('copiar-status');
copiar?.addEventListener('click', async () => {
  let n = 0;
  const blocos = grupos.map(
    (d) =>
      d.querySelector('h3')!.textContent!.trim() +
      '\n' +
      [...d.querySelectorAll('li')].map((li) => `${++n}. ${li.textContent!.trim()}`).join('\n'),
  );
  const texto = `${document.getElementById('t-perg')!.textContent!.trim()}\n\n${blocos.join('\n\n')}`;
  try {
    await navigator.clipboard.writeText(texto);
  } catch {
    const t = document.createElement('textarea');
    t.value = texto;
    t.setAttribute('readonly', '');
    t.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(t);
    t.select();
    document.execCommand('copy');
    t.remove();
  }
  copiar.classList.add('copiado');
  if (status) status.textContent = 'Lista copiada';
  setTimeout(() => {
    copiar.classList.remove('copiado');
    if (status) status.textContent = '';
  }, 2400);
});

/* ---------- Nome gigante do rodapé: ocupa a largura exata da página ---------- */
const nome = document.querySelector<HTMLElement>('[data-nome-gigante]');
export function ajustarNome() {
  if (!nome) return;
  const caixa = nome.parentElement!;
  const st = getComputedStyle(caixa);
  const livre = caixa.clientWidth - parseFloat(st.paddingLeft) - parseFloat(st.paddingRight);
  nome.style.fontSize = '100px';
  const w = nome.scrollWidth;
  if (w > 0 && livre > 0) nome.style.fontSize = `${((100 * livre) / w).toFixed(2)}px`;
}
let esperaNome: number | undefined;
window.addEventListener(
  'resize',
  () => {
    window.clearTimeout(esperaNome);
    esperaNome = window.setTimeout(ajustarNome, 120);
  },
  { passive: true },
);
document.fonts?.ready.then(ajustarNome);
