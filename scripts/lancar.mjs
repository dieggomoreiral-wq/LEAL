// Build de lançamento (24/11/2026): o dono mandou ir ao ar com as travas
// abertas. O que não está confirmado some da página; nada é inventado.
// Uso: node scripts/lancar.mjs https://dominio [GTM-XXXXXXX]
// Depois: a pasta dist/ é o site inteiro, pronta para subir (Vercel ou outro).
import { execSync } from 'node:child_process';
import { copyFileSync, readdirSync, readFileSync } from 'node:fs';

const [site, gtm = ''] = process.argv.slice(2);
if (!/^https:\/\/[^/]+$/.test(site ?? '')) {
  console.error('Uso: node scripts/lancar.mjs https://dominio [GTM-XXXXXXX]');
  process.exit(1);
}
if (gtm && !/^GTM-[A-Z0-9]+$/.test(gtm)) {
  console.error('ID do GTM inválido: ' + gtm);
  process.exit(1);
}

execSync('npx astro build', {
  stdio: ['ignore', 'ignore', 'inherit'],
  env: { ...process.env, MODO: 'publicacao', LANCAR: '1', SITE_URL: site, PUBLIC_GTM_ID: gtm },
});
copyFileSync('vercel.json', 'dist/vercel.json');

// Conferência por código: nada de pendência na página, todo botão no número certo.
const problemas = [];
for (const f of readdirSync('dist').filter((x) => x.endsWith('.html'))) {
  const h = readFileSync('dist/' + f, 'utf8');
  if (/class="pend"|\[\[|CONFIRMAR|CONFERIR/.test(h)) problemas.push(`${f}: pendência visível`);
  const wa = [...h.matchAll(/https:\/\/wa\.me\/(\w+)/g)].map((m) => m[1]);
  if (wa.some((n) => n !== '5545988092693')) problemas.push(`${f}: link de WhatsApp errado (${wa.join(', ')})`);
  if (gtm && !h.includes('<meta http-equiv="refresh"') && !h.includes(gtm)) problemas.push(`${f}: sem o GTM`);
}
if (problemas.length) {
  console.error('NÃO PUBLICAR:\n' + problemas.map((p) => '  - ' + p).join('\n'));
  process.exit(1);
}
console.log(`ok: dist/ pronta para ${site}${gtm ? ' com ' + gtm : ' (sem GTM: o Google Ads não vai contar conversão)'}`);
