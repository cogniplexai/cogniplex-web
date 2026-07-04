/**
 * Utilidades de internacionalización.
 * ES es el idioma por defecto (sin prefijo); EN vive bajo /en con los mismos slugs.
 */
export type Locale = 'es' | 'en';

export const locales: Locale[] = ['es', 'en'];
export const defaultLocale: Locale = 'es';

/** Normaliza Astro.currentLocale (puede ser undefined en 404, etc.). */
export function asLocale(value: string | undefined): Locale {
  return value === 'en' ? 'en' : 'es';
}

/** Ruta sin prefijo de idioma ni barra final ('/en/servicios' → '/servicios'). */
export function stripLocale(path: string): string {
  const clean = path.replace(/^\/en(?=\/|$)/, '').replace(/\/$/, '');
  return clean === '' ? '/' : clean;
}

/** La misma ruta en el idioma pedido ('/servicios', 'en' → '/en/servicios'). */
export function localizePath(path: string, locale: Locale): string {
  const base = stripLocale(path);
  if (locale === 'es') return base;
  return base === '/' ? '/en/' : `/en${base}`;
}
