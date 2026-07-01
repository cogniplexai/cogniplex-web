// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Sitio estático desplegable en GitHub Pages.
// Cambia `site` al dominio definitivo cuando esté listo (cogniplex.es).
export default defineConfig({
  site: 'https://cogniplex.es',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
