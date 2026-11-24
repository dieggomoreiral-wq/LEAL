// @ts-check
import { defineConfig } from 'astro/config';

// Domínio definitivo: SITE_URL=https://dominio.com.br no build de publicação.
// Sem ele, o build sai sem canonical (serve para rascunho e aprovação).
export default defineConfig({
  // @ts-ignore: process existe no Node, que roda este arquivo
  site: process.env.SITE_URL || undefined,
  trailingSlash: 'never',
  build: {
    format: 'file',
    // CSS embutido no HTML: um pedido a menos bloqueando a primeira pintura.
    inlineStylesheets: 'always',
  },
  devToolbar: { enabled: false },
});
