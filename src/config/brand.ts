/**
 * Configuración única de marca.
 * Cambia el nombre visible, el claim, el contacto o la navegación desde aquí:
 * todo el sitio lo lee de este archivo. Los textos dependen del idioma
 * (ES por defecto en la raíz, EN bajo /en): usa brandFor(locale).
 */
import type { Locale } from '@/i18n';

const base = {
  /** Nombre visible de la marca. Cámbialo aquí y se actualiza en toda la web. */
  name: 'Cogniplex',
  /** Dominio de producción (sin barra final). */
  url: 'https://cogniplex.es',
  /** Email de contacto principal. */
  email: 'hola@cogniplex.es',

  /**
   * Endpoint del formulario (Formspree). Vacío = los formularios se envían por email
   * (mailto a brand.email). Poner aquí la URL real cuando exista la cuenta de Formspree.
   */
  formEndpoint: '',

  /** Redes sociales. Vacío = no se muestra. Rellenar cuando exista la página de empresa. */
  social: {
    linkedin: '',
  },

  /** Año para el copyright del footer. */
  year: 2026,
} as const;

const texts = {
  es: {
    /** Claim corto de marca (footer, meta). */
    claim: 'Diseñamos empresas aumentadas por IA.',
    /** Descripción por defecto para SEO. */
    description:
      'Cogniplex es una firma boutique de transformación empresarial impulsada por IA. Ayudamos a tu empresa a crecer sin multiplicar su estructura: estrategia, datos, IA y adopción.',
    /** Ubicación mostrada en contacto/footer. */
    location: 'España · Remoto y presencial',
    /** CTA principal de toda la web. */
    cta: {
      label: 'Solicitar Diagnóstico Empresa Aumentada',
      labelShort: 'Solicitar Diagnóstico',
      href: '/diagnostico',
    },
    /** Navegación principal. */
    nav: [
      { label: 'Empresa aumentada', href: '/empresa-aumentada' },
      { label: 'Servicios', href: '/servicios' },
      { label: 'Escenarios', href: '/casos' },
      { label: 'Ideas', href: '/ideas' },
      { label: 'Contacto', href: '/contacto' },
    ],
  },
  en: {
    claim: 'We design AI-augmented companies.',
    description:
      'Cogniplex is a boutique AI-driven business transformation firm. We help your company grow without multiplying its structure: strategy, data, AI and adoption.',
    location: 'Spain · Remote and on-site',
    cta: {
      label: 'Request the Augmented Company Assessment',
      labelShort: 'Request Assessment',
      href: '/en/diagnostico',
    },
    nav: [
      { label: 'Augmented company', href: '/en/empresa-aumentada' },
      { label: 'Services', href: '/en/servicios' },
      { label: 'Scenarios', href: '/en/casos' },
      { label: 'Insights', href: '/en/ideas' },
      { label: 'Contact', href: '/en/contacto' },
    ],
  },
} as const;

export const brandFor = (locale: Locale = 'es') => ({ ...base, ...texts[locale] });

/** Compatibilidad: la marca en español (idioma por defecto). */
export const brand = brandFor('es');

export type Brand = ReturnType<typeof brandFor>;
