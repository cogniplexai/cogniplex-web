# Cogniplex — web

Sitio corporativo de **Cogniplex**, firma boutique de transformación empresarial impulsada por IA
para pymes y empresas familiares. Construido con [Astro](https://astro.build) (salida estática) y
desplegable en GitHub Pages.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/ (sitio estático)
npm run preview  # sirve dist/ localmente
```

## Estructura

```
src/
  config/brand.ts        ← Nombre, claim, email, CTA y navegación (fuente única de marca)
  styles/global.css      ← Design tokens (teal/navy/granate), reset y utilidades
  data/                  ← Contenido estructurado (pilares, COGNI, resultados, soluciones)
  content/               ← Colecciones Markdown (casos/, ideas/) — fáciles de editar
  components/            ← Componentes reutilizables (Hero, CogniSteps, ServiceCard, FAQ…)
  layouts/               ← BaseLayout y LegalLayout
  pages/                 ← Rutas del sitio
public/                  ← logo, favicon, hero.jpg, CNAME, robots.txt
```

## Cómo cambiar la marca

Casi todo se controla desde `src/config/brand.ts` (nombre visible, claim, email, CTA, navegación,
redes) y `src/styles/global.css` (paleta y tipografía). El nombre "Cogniplex" se lee de la config
en toda la web.

## Pendiente de rellenar (buscar `[PLACEHOLDER]`)

- **`src/config/brand.ts`**: `formEndpoint` (ID real de Formspree), URL de LinkedIn, email definitivo.
- **Casos** (`src/content/casos/*.md`): sustituir casos ilustrativos por casos reales con métricas
  verificables (documentados con permiso del cliente). No publicar cifras sin validar.
- **Ideas** (`src/content/ideas/*.md`): sustituir los 2 artículos de ejemplo por el plan editorial real.
- **Métricas de credibilidad** (`src/components/CredibilityStats.astro`): bloque de métricas de
  clientes reales.
- **Legales** (`aviso-legal`, `privacidad`, `cookies`): datos registrales (razón social, CIF,
  domicilio, registro), proveedor del formulario. Revisión por un profesional.
- **Precios/alcance del Diagnóstico**: la página `/diagnostico` describe el servicio pero no fija
  precio; añadir si se decide mostrarlo.

## Despliegue (GitHub Pages)

El sitio es estático (`dist/`). `public/CNAME` apunta a `cogniplex.es`. Para GitHub Pages con Astro
conviene un workflow de GitHub Actions que ejecute `npm run build` y publique `dist/`.
