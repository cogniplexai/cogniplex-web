// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Sitio estático desplegable en GitHub Pages.
// Cambia `site` al dominio definitivo cuando esté listo (cogniplex.es).
export default defineConfig({
  site: 'https://cogniplex.es',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // Páginas accesibles solo por URL directa: fuera del sitemap
      // mientras no se decida enlazarlas públicamente.
      filter: (page) =>
        !page.includes('/organizacion') && !page.includes('/colabora') && !page.includes('/sesion'),
    }),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    format: 'directory',
  },
});
