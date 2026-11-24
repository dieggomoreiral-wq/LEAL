// Texto curto com marcação mínima, para os dados em src/data/*.ts:
//   [[CONFIRMAR: ...]]  → pílula de pendência (<span class="pend">)
//   {1064 nm}           → trecho que não quebra (<span class="nb">)
//   **694**             → destaque (<b>)
// O resto é escapado. Use com set:html.

const escapar = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function rico(texto: string): string {
  return escapar(texto)
    .replace(/\[\[(.+?)\]\]/g, '<span class="pend">$1</span>')
    .replace(/\{(.+?)\}/g, '<span class="nb">$1</span>')
    .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
}

/** Texto puro, sem a marcação (para copiar, aria-label etc.). */
export function puro(texto: string): string {
  return texto.replace(/\[\[(.+?)\]\]/g, '$1').replace(/[{}]/g, '').replace(/\*\*/g, '');
}

/** Texto de confiança (escrito por nós em src/data) com HTML permitido:
 *  só troca [[...]] por pílula e {...} por trecho sem quebra. Use com set:html. */
export function marca(texto: string): string {
  return texto
    .replace(/\[\[(.+?)\]\]/g, '<span class="pend">$1</span>')
    .replace(/\{([^{}]+?)\}/g, '<span class="nb">$1</span>');
}
