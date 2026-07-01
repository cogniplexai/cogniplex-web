/**
 * Configuración única de marca.
 * Cambia el nombre visible, el claim, el contacto o la navegación desde aquí:
 * todo el sitio lo lee de este archivo.
 */

export const brand = {
  /** Nombre visible de la marca. Cámbialo aquí y se actualiza en toda la web. */
  name: 'Cogniplex',
  /** Claim corto de marca (footer, meta). */
  claim: 'Diseñamos empresas aumentadas por IA.',
  /** Descripción por defecto para SEO. */
  description:
    'Cogniplex es una firma boutique de transformación empresarial impulsada por IA. Ayudamos a tu pyme a crecer sin multiplicar su estructura: estrategia, datos, IA y adopción.',
  /** Dominio de producción (sin barra final). */
  url: 'https://cogniplex.es',
  /** Email de contacto principal. */
  email: 'hola@cogniplex.es',
  /** Ubicación mostrada en contacto/footer. */
  location: 'España · Remoto y presencial',

  /** CTA principal de toda la web. */
  cta: {
    label: 'Solicitar Diagnóstico Empresa Aumentada',
    labelShort: 'Solicitar Diagnóstico',
    href: '/diagnostico',
  },

  /** Endpoint del formulario (Formspree). Sustituir por el ID real de la cuenta Cogniplex. */
  formEndpoint: 'https://formspree.io/f/XXXXXXXX', // [PLACEHOLDER] ID de Formspree

  /** Navegación principal. */
  nav: [
    { label: 'Empresa aumentada', href: '/empresa-aumentada' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Casos', href: '/casos' },
    { label: 'Ideas', href: '/ideas' },
    { label: 'Contacto', href: '/contacto' },
  ],

  /** Redes sociales. Rellenar con las URL reales. */
  social: {
    linkedin: 'https://www.linkedin.com/company/cogniplex', // [PLACEHOLDER]
  },

  /** Año para el copyright del footer. */
  year: 2026,
} as const;

export type Brand = typeof brand;
