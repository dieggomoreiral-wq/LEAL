# Site da Leal Tecnologia e Saúde

Astro 7.3.8 + GSAP 3.15 (ScrollTrigger, SplitText) + Lenis 1.3.26, fonte Archivo variável por `@fontsource-variable`. Mesma arquitetura do site da Dra. Thaís.

## Comandos

```sh
npm install          # uma vez
npm run dev          # desenvolvimento em http://localhost:4321
npm run build        # gera dist/ (imagens AVIF e WebP saem aqui)
npm run preview      # serve dist/ em http://localhost:4330
```

Páginas: `http://localhost:4330/depilacao-a-laser` e `http://localhost:4330/ultrassom-microfocado` (a raiz redireciona para a de depilação).

## Onde mexer

Uma LP por nicho de equipamento. A Leal só vende máquina, nunca sessão.

- **LP nova:** copie `src/data/nichos/ultrassom.ts` para `src/data/nichos/<nicho>.ts`, troque texto e fotos (fotos em `src/assets/produtos-<nicho>/`, importadas num `src/data/fotos-<nicho>.ts`) e crie `src/pages/<slug>.astro` com 3 linhas, como `ultrassom-microfocado.astro`.
- `src/data/nichos/tipos.ts`: o molde de dados. `comum.ts`: trechos aprovados que valem para todas (aviso do Diego, cartões, passos, LGPD). Mudou ali, passa de novo pelo guardião.
- `src/components/nicho/`: as seis seções (Abertura, Vitrine, Comparar, Atende, Confira, Fechamento), a `Pagina` que junta tudo, o `Pedestal` das fotos e os `icones`. `lp/Galeria.astro`: galeria com zoom, quadro de peças pequenas (`grupo`) e vídeo.
- Nos textos dos dados, `[[...]]` vira pílula de pendência e `{...}` não quebra linha; o resto é HTML.
- `src/styles/tokens.css`: cores, tipo e tempos de movimento. `src/scripts/movimento.ts`: todo o movimento; `interacoes.ts`: chave dos aparelhos, galerias, zoom, barra fixa.
- `_arquivo-v3/`: código antigo (v3 e v5 antes do molde), fora do build.

## Medir

```sh
npx lighthouse http://localhost:4330/depilacao-a-laser --only-categories=performance --output=json --output-path=medicoes/lh-mobile.json
npx lighthouse http://localhost:4330/depilacao-a-laser --only-categories=performance --preset=desktop --output=json --output-path=medicoes/lh-desktop.json
```

O granulado (`public/grao.png`) foi gerado com Pillow via `uv`: PNG de 128 px, paleta indexada.

## Publicar (Vercel)

O build de publicação esconde o que não está confirmado e confere tudo antes de sair:

```sh
node scripts/lancar.mjs https://DOMINIO GTM-XXXXXXX   # gera dist/ e para com "NÃO PUBLICAR" se algo estiver errado
```

Se a Vercel puxar deste repositório, configure no projeto (Settings > Environment Variables, ambiente Production):

| Variável | Valor |
|---|---|
| `MODO` | `publicacao` |
| `LANCAR` | `1` |
| `SITE_URL` | `https://DOMINIO` |
| `PUBLIC_GTM_ID` | `GTM-XXXXXXX` |

Sem `MODO=publicacao` sobe o rascunho, com as pendências à mostra. O `vercel.json` já tira o `.html` dos endereços.

## Aprovação sem servidor

```sh
npm run build && node scripts/aprovacao.mjs "../05 - Site/lp-ultrassom-microfocado" ultrassom-microfocado
```

Gera `index.html` que abre direto no Chrome (file://), com o script embutido e caminhos relativos.
