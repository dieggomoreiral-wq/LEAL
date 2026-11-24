// Sistema de movimento da LP. Liga os efeitos por atributo:
//   data-abertura            h1 da abertura: linhas sobem assim que o script inicia
//   data-revelar="linhas"    títulos linha a linha (SplitText com máscara, desfeito ao fim)
//   data-revelar="subir"     entra subindo (data-revelar-filhos: cascata nos filhos)
//   data-revelar="imagem"    cortina na foto (camada que encolhe por scaleY)
//   .desenha                 réguas, guias e pontos que se desenham ao entrar
//   data-giro                giro do Hakon: abertura + rolagem (quadros pré-decodificados)
//   data-parallax            foto desliza dentro da moldura (desktop, scrub)
//   data-horizontal          seção fixa com trilho horizontal (desktop, scrub)
//   data-faixa               faixa rolante que acelera com a rolagem
//   data-magnetico           botão atraído pelo ponteiro (só mouse)
//   data-nome-gigante        nome do rodapé que sobe com a rolagem (scrub)
//
// Regras de suavidade:
//   - só transform e opacity; as entradas de uma vez (subir, cortina, desenho)
//     são transições CSS disparadas por classe, e rodam no compositor;
//   - will-change entra pouco antes (.preparado) e sai quando a animação acaba;
//   - Lenis no ticker do GSAP, com lagSmoothing(0), como no site da Dra. Thaís;
//   - ScrollTrigger com scrub suavizado só onde há vínculo com a rolagem, e
//     ScrollTrigger.batch para as cascatas;
//   - com "reduzir movimento" nada disso roda: o conteúdo fica estático.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';
import { giro, ajustarNome } from './interacoes';

gsap.registerPlugin(ScrollTrigger, SplitText);

const html = document.documentElement;
const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const largo = window.matchMedia('(min-width: 48rem)').matches;
const fino = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const curva = 'expo.out';
const inicio = performance.now();

/** Valor em ms de uma custom property de tempo (ex.: "1.1s", "90ms"). */
function tempo(nome: string, padrao: number) {
  const v = getComputedStyle(html).getPropertyValue(nome).trim();
  if (!v) return padrao;
  return v.endsWith('ms') ? parseFloat(v) : parseFloat(v) * 1000;
}

/* ---------- Rolagem suave ---------- */
function rolagemSuave() {
  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    autoRaf: false,
  });
  window.__lenis = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);

  const alturaTopo = () => (window.matchMedia('(min-width: 900px)').matches ? 68 : 0) + 20;
  document.addEventListener('click', (e) => {
    const a = (e.target as Element | null)?.closest?.<HTMLAnchorElement>('a[href^="#"]');
    if (!a || a.classList.contains('pular')) return;
    const id = a.getAttribute('href') ?? '';
    if (id.length < 2) return;
    const alvo = document.querySelector(id);
    if (!alvo) return;
    e.preventDefault();
    // O clique já ligou .cv-desligado (interacoes.ts): espera um quadro para
    // as seções montarem e a posição do destino ser a real.
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      lenis.scrollTo(alvo as HTMLElement, { offset: -alturaTopo() });
    });
    history.replaceState(null, '', id);
  });
  return lenis;
}

/* ---------- Títulos linha a linha ---------- */
function revelarLinhas(el: HTMLElement, atraso = 0) {
  const split = SplitText.create(el, { type: 'lines', mask: 'lines', linesClass: 'linha-revelada' });
  gsap.set(el, { visibility: 'visible' });
  gsap.from(split.lines, {
    yPercent: 115,
    rotate: largo ? 2 : 0,
    duration: largo ? 1.2 : 0.9,
    ease: curva,
    stagger: 0.08,
    delay: atraso,
    force3D: true,
    onStart: () => gsap.set(split.lines, { willChange: 'transform' }),
    // Terminou: devolve o texto original, sem as divs de linha nem máscara.
    onComplete: () => split.revert(),
  });
}

/* ---------- Entradas de uma vez: classe dispara a transição CSS ---------- */
function acionar(elementos: Element[], duracao: number) {
  const passo = tempo('--cascata', 60);
  elementos.forEach((alvo, i) => {
    const el = alvo as HTMLElement;
    const atraso = Math.min(i, 6) * passo;
    el.style.setProperty('--atraso', `${atraso}ms`);
    el.classList.add('preparado', 'revelando', 'visto');
    window.setTimeout(() => {
      el.classList.remove('preparado', 'revelando');
      el.style.removeProperty('--atraso');
    }, duracao + atraso + 120);
  });
}

function entradas() {
  const unidades: Element[] = [];
  document.querySelectorAll<HTMLElement>('[data-revelar="subir"]').forEach((el) => {
    if (el.hasAttribute('data-revelar-filhos')) unidades.push(...el.children);
    else unidades.push(el);
  });
  const imagens = gsap.utils.toArray<HTMLElement>('[data-revelar="imagem"]');
  const dRevelar = tempo('--d-revelar', 1000);
  const dCortina = tempo('--d-cortina', 1250) * 1.25;

  // Camada promovida um pouco antes de a animação começar…
  const preparar = (lote: Element[]) => lote.forEach((el) => el.classList.add('preparado'));
  ScrollTrigger.batch([...unidades, ...imagens], { start: 'top bottom+=30%', once: true, onEnter: preparar });

  // …e a cascata sai em lote: o que entra no mesmo quadro ganha atrasos em sequência.
  ScrollTrigger.batch(unidades, { start: 'top 88%', once: true, interval: 0.08, onEnter: (lote) => acionar(lote, dRevelar) });
  ScrollTrigger.batch(imagens, { start: 'top 86%', once: true, interval: 0.08, onEnter: (lote) => acionar(lote, dCortina) });
  ScrollTrigger.batch('.desenha', { start: 'top 85%', once: true, onEnter: (lote) => lote.forEach((el) => el.classList.add('visto')) });

  const titulos = gsap.utils.toArray<HTMLElement>('[data-revelar="linhas"]:not([data-abertura])');
  ScrollTrigger.batch(titulos, {
    start: 'top 88%',
    once: true,
    onEnter: (lote) => lote.forEach((el, i) => revelarLinhas(el as HTMLElement, i * 0.08)),
  });
}

/* ---------- Abertura: h1 e giro do Hakon ---------- */
function abertura() {
  const hero = document.getElementById('hero');
  const h1 = document.querySelector<HTMLElement>('[data-abertura]');
  if (h1) revelarLinhas(h1, 0.3);
  if (!hero) return;

  // Giro de entrada (uma volta, terminando de frente). Começa quando os
  // quatro quadros estão decodificados, nunca antes de 0,75 s.
  let entrando = true;
  const el = giro.el;
  el?.classList.add('girando');
  giro.pronto.then(() => {
    const espera = Math.max(0, 0.75 - (performance.now() - inicio) / 1000);
    [1, 2, 3, 0].forEach((k, n) => gsap.delayedCall(espera + n * 0.14, () => giro.mostra(k)));
    gsap.delayedCall(espera + 0.6, () => (entrando = false));
  });

  // O giro fica só na entrada e no arraste: a rolagem não mexe mais no produto.
  giro.aoSoltar = () => {};
  gsap.delayedCall(3, () => el?.classList.remove('girando'));
}

/* ---------- Foto que desliza dentro da moldura (desktop) ---------- */
function parallax() {
  if (!largo) return;
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const img = el.querySelector('img');
    if (!img) return;
    const forca = Number(el.dataset.parallax || 6);
    gsap.set(img, { scale: 1 + (forca * 2.2) / 100, force3D: true });
    gsap.fromTo(
      img,
      { yPercent: -forca },
      {
        yPercent: forca,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.8,
          onToggle: (self) => gsap.set(img, { willChange: self.isActive ? 'transform' : 'auto' }),
        },
      },
    );
  });
}

/* ---------- Seção horizontal fixa (desktop) ---------- */
function horizontal() {
  const mm = gsap.matchMedia();
  mm.add('(min-width: 64rem)', () => {
    const secao = document.querySelector<HTMLElement>('[data-horizontal]');
    if (!secao) return;
    const palco = secao.querySelector<HTMLElement>('[data-horizontal-palco]')!;
    const trilho = secao.querySelector<HTMLElement>('[data-horizontal-trilho]')!;
    const barra = secao.querySelector<HTMLElement>('[data-horizontal-barra]');
    const passos = [...secao.querySelectorAll<HTMLElement>('.passo')];
    html.classList.add('horizontal-ativo');
    const distancia = () => Math.max(0, trilho.scrollWidth - palco.clientWidth);
    let aceso = -1;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: palco,
        start: 'top top',
        end: () => `+=${distancia()}`,
        pin: true,
        scrub: 0.8,
        invalidateOnRefresh: true,
        onToggle: (self) => gsap.set(trilho, { willChange: self.isActive ? 'transform' : 'auto' }),
        onUpdate(self) {
          const ativo = Math.min(passos.length - 1, Math.floor(self.progress * passos.length + 0.15));
          if (ativo === aceso) return;
          aceso = ativo;
          passos.forEach((p, i) => p.classList.toggle('aceso', i <= ativo));
        },
      },
    });
    tl.to(trilho, { x: () => -distancia(), ease: 'none', force3D: true }, 0);
    if (barra) tl.fromTo(barra, { scaleX: 0 }, { scaleX: 1, ease: 'none' }, 0);

    return () => {
      html.classList.remove('horizontal-ativo');
      passos.forEach((p) => p.classList.remove('aceso'));
    };
  });
}

/* ---------- Faixa rolante ---------- */
function faixas(lenis: Lenis) {
  document.querySelectorAll<HTMLElement>('[data-faixa]').forEach((el) => {
    const trilho = el.querySelector<HTMLElement>('[data-faixa-trilho]');
    if (!trilho) return;
    const loop = gsap.to(trilho, { xPercent: -50, ease: 'none', duration: Number(el.dataset.faixa || 44), repeat: -1, paused: true, force3D: true });
    let visivel = false;
    new IntersectionObserver(([e]) => {
      visivel = e.isIntersecting;
      trilho.style.willChange = visivel ? 'transform' : 'auto';
      if (visivel) loop.play();
      else loop.pause();
    }).observe(el);
    return; // ritmo constante, sem acelerar com a rolagem

    // Acelera com a velocidade da rolagem e inverte ao subir. Um único
    // ajuste por quadro no ticker, em vez de um tween novo a cada evento.
    let direcao = 1;
    let alvo = 1;
    let ultimoMovimento = 0;
    lenis.on('scroll', ({ velocity }: { velocity: number }) => {
      if (!velocity) return;
      direcao = velocity < 0 ? -1 : 1;
      alvo = direcao * (1 + Math.min(Math.abs(velocity) / 6, 4));
      ultimoMovimento = performance.now();
    });
    gsap.ticker.add(() => {
      if (!visivel) return;
      const meta = performance.now() - ultimoMovimento > 160 ? direcao : alvo;
      const atual = loop.timeScale();
      if (Math.abs(meta - atual) > 0.001) loop.timeScale(atual + (meta - atual) * 0.08);
    });
  });
}

/* ---------- Botões magnéticos (só desktop com mouse) ---------- */
function magneticos() {
  if (!fino || !largo) return;
  document.querySelectorAll<HTMLElement>('[data-magnetico]').forEach((el) => {
    const forca = Number(el.dataset.magnetico || 0.3);
    const x = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' });
    const y = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' });
    el.addEventListener('pointerenter', () => (el.style.willChange = 'transform'));
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      x((e.clientX - r.left - r.width / 2) * forca);
      y((e.clientY - r.top - r.height / 2) * forca);
    });
    el.addEventListener('pointerleave', () =>
      gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, 0.4)', onComplete: () => (el.style.willChange = 'auto') }),
    );
  });
}

/* ---------- Nome gigante do rodapé ---------- */
function nomeGigante() {
  const nome = document.querySelector<HTMLElement>('[data-nome-gigante]');
  if (!nome) return;
  ajustarNome();
  gsap.fromTo(
    nome,
    { yPercent: largo ? 60 : 30, scale: 0.94 },
    {
      yPercent: 0,
      scale: 1,
      ease: 'none',
      force3D: true,
      scrollTrigger: {
        trigger: nome.parentElement,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 0.8,
        onToggle: (self) => gsap.set(nome, { willChange: self.isActive ? 'transform' : 'auto' }),
      },
    },
  );
}

/* ---------- Altura da página mudou: recalcula as posições ----------
   Fichas, listas e FAQ abrem; seções com content-visibility montam e trocam
   a altura estimada pela real. Um único observador, com espera. */
function recalcularQuandoMudar() {
  let altura = document.body.scrollHeight;
  let espera: number | undefined;
  new ResizeObserver(() => {
    const nova = document.body.scrollHeight;
    if (Math.abs(nova - altura) < 2) return;
    altura = nova;
    window.clearTimeout(espera);
    espera = window.setTimeout(() => {
      ScrollTrigger.refresh();
      altura = document.body.scrollHeight;
    }, 200);
  }).observe(document.body);
}

const proximoQuadro = () => new Promise<void>((ok) => requestAnimationFrame(() => setTimeout(ok, 0)));

async function iniciar() {
  if (reduzido) {
    html.classList.add('movimento-pronto');
    return;
  }
  const lenis = rolagemSuave();
  // Se o script chegou depois do prazo, a página já está visível: só a rolagem suave.
  if (html.classList.contains('sem-movimento')) return;

  // Primeiro o que está na tela; o resto depois de um quadro, para não
  // juntar tudo numa tarefa longa no carregamento.
  abertura();
  html.classList.add('movimento-pronto');
  await proximoQuadro();
  entradas();
  await proximoQuadro();
  faixas(lenis);
  recalcularQuandoMudar();
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

Promise.race([document.fonts?.ready ?? Promise.resolve(), new Promise((ok) => setTimeout(ok, 1500))]).then(iniciar);

export { gsap, ScrollTrigger, reduzido };
