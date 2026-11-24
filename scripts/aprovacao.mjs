// Gera a cópia de aprovação que abre direto no Chrome (file://), sem servidor:
// caminhos /_astro/ viram relativos e o script (um arquivo só, sem import)
// entra embutido, porque módulo externo não carrega em file://.
// Uso: npm run build && node scripts/aprovacao.mjs "<pasta de saída>" [página, padrão depilacao-a-laser]
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const saida = process.argv[2];
if (!saida) throw new Error('Informe a pasta de saída.');
rmSync(saida, { recursive: true, force: true });
mkdirSync(saida, { recursive: true });
cpSync('dist/_astro', join(saida, '_astro'), { recursive: true });

const pagina = process.argv[3] ?? 'depilacao-a-laser';
let html = readFileSync(`dist/${pagina}.html`, 'utf8');
html = html.replace(/<script type="module" src="\/_astro\/([^"]+)"><\/script>/g, (_, arq) => {
  const js = readFileSync(join('dist/_astro', arq), 'utf8').replace(/<\/script/gi, '<\/script');
  return `<script type="module">${js}</script>`;
});
html = html.replaceAll('/_astro/', '_astro/');
writeFileSync(join(saida, 'index.html'), html);
console.log('ok', join(saida, 'index.html'));
