/**
 * Genera el corpus de conocimiento del bot de atención (Cogni) a partir del
 * HTML ya construido en dist/. Indexar el build (y no los .ts/.md fuente)
 * garantiza que el bot ve exactamente lo que ve el visitante, con los dos
 * idiomas y sin duplicar la lógica de datos.
 *
 * Salida: dist/chat-corpus.json — público a propósito: es el propio contenido
 * de la web. El bot lo descarga de https://cogniplex.es/chat-corpus.json y
 * detecta cambios por el campo `version` (hash del contenido).
 *
 * Uso: npm run chat:index  (tras `astro build`; el script build ya lo encadena)
 */
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const DIST = new URL('../dist', import.meta.url).pathname;

/** Rutas que no aportan conocimiento útil al bot. */
const esExcluida = (ruta) => ruta.startsWith('404');

function paginasHtml(dir) {
  const out = [];
  for (const nombre of readdirSync(dir)) {
    const p = join(dir, nombre);
    if (statSync(p).isDirectory()) out.push(...paginasHtml(p));
    else if (nombre.endsWith('.html')) out.push(p);
  }
  return out;
}

/** Extrae texto legible de un HTML: <title> + contenido de <main>, sin etiquetas. */
function extraer(html) {
  const titulo = (html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? '').trim();
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? '';
  const texto = main
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    // Los cierres de bloque se vuelven saltos de línea para conservar la estructura.
    .replace(/<\/(p|h1|h2|h3|h4|li|blockquote|dt|dd|tr)>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .replace(/ ?\n[ \n]*/g, '\n')
    .trim();
  return { titulo, texto };
}

const documentos = [];
for (const archivo of paginasHtml(DIST)) {
  const ruta = relative(DIST, archivo).split(sep).join('/');
  if (esExcluida(ruta)) continue;

  // 'index.html' → '/', 'servicios/index.html' → '/servicios', 'en/...' → '/en/...'
  const url = '/' + ruta.replace(/index\.html$/, '').replace(/\.html$/, '').replace(/\/$/, '');
  const idioma = url === '/en' || url.startsWith('/en/') ? 'en' : 'es';
  const { titulo, texto } = extraer(readFileSync(archivo, 'utf8'));
  if (!texto) continue;

  documentos.push({ url: url || '/', idioma, titulo, texto });
}

documentos.sort((a, b) => a.url.localeCompare(b.url));
const version = createHash('sha256')
  .update(documentos.map((d) => d.url + '\n' + d.texto).join('\n---\n'))
  .digest('hex')
  .slice(0, 16);

const corpus = {
  version,
  generado: new Date().toISOString(),
  // Aviso para el bot: los casos son escenarios ilustrativos, no clientes reales.
  nota: 'Los contenidos de /casos son escenarios ilustrativos del enfoque, no referencias verificadas de clientes.',
  documentos,
};

writeFileSync(join(DIST, 'chat-corpus.json'), JSON.stringify(corpus));
console.log(`chat-corpus.json: ${documentos.length} documentos · version ${version}`);
