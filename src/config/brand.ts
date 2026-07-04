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
    'Cogniplex es una firma boutique de transformación empresarial impulsada por IA. Ayudamos a tu empresa a crecer sin multiplicar su estructura: estrategia, datos, IA y adopción.',
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

  /**
   * Endpoint del formulario (Formspree). Vacío = los formularios se envían por email
   * (mailto a brand.email). Poner aquí la URL real cuando exista la cuenta de Formspree.
   */
  formEndpoint: '',

  /** Navegación principal. */
  nav: [
    { label: 'Empresa aumentada', href: '/empresa-aumentada' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Escenarios', href: '/casos' },
    { label: 'Ideas', href: '/ideas' },
    { label: 'Contacto', href: '/contacto' },
  ],

  /** Redes sociales. Vacío = no se muestra. Rellenar cuando exista la página de empresa. */
  social: {
    linkedin: '',
  },

  /** Año para el copyright del footer. */
  year: 2026,
} as const;

export type Brand = typeof brand;
