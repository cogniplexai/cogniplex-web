/**
 * Configuración del chat de atención (Chatwoot auto-hospedado + bot Cogni).
 * Misma filosofía que brand.ts: una sola fuente, textos por idioma.
 * El widget SOLO se carga tras consentimiento explícito y primer clic
 * en el lanzador (ver components/Chat.astro).
 */
import type { Locale } from '@/i18n';

const base = {
  /** Interruptor general: en false no se renderiza ni el lanzador. */
  enabled: true,

  /** Servidor Chatwoot propio (Hetzner, datacenter UE — Helsinki). */
  baseUrl: 'https://chatwoot.cogniplex.es',

  /**
   * Token público del inbox "Cogniplex Web". No es un secreto: viaja en
   * cada página igual que lo haría el snippet oficial del widget.
   */
  websiteToken: 'L389cMKvHMBgf6p7WpGoniZw',

  /**
   * Escala de z-index documentada (no cambiar una capa sin revisar el resto):
   *   100 cabecera · 150 tarjeta de consentimiento · 190 panel del widget
   *   195 lanzador · 200 banner de cookies · 300 skip-link
   * El banner de cookies queda SIEMPRE por encima del chat.
   */
  zIndex: { consentCard: 150, widget: 190, launcher: 195 },

  /** Milisegundos de espera del sdk.js antes de degradar a CTA de contacto. */
  loadTimeoutMs: 10000,
} as const;

const texts = {
  es: {
    /** Texto del lanzador (pill). Sin emojis, sin exclamaciones. */
    launcher: 'Hablemos',
    launcherAria: 'Abrir el chat de atención',
    launcherClose: 'Cerrar el chat',
    loading: 'Conectando…',

    /** Tarjeta de consentimiento previa a cargar nada de terceros. */
    consentTitle: 'Antes de empezar',
    consentBody:
      'El chat guarda tu conversación en nuestro servidor (UE) para poder atenderte. Se activa solo si lo aceptas.',
    consentAccept: 'Activar el chat',
    consentMore: 'Más información',
    consentHref: '/cookies',

    /** Degradación si el servidor de chat no responde. */
    fallbackLabel: 'Escríbenos',
    fallbackHref: '/contacto',

    /** Textos del widget (sobrescriben los del inbox según el idioma). */
    welcomeTitle: 'Hable con nosotros',
    welcomeDescription:
      'Un asistente automático le atiende al momento. Una persona del equipo puede intervenir cuando haga falta.',
    unavailableMessage:
      'Ahora mismo estamos fuera del horario de atención (lunes a viernes, 9:00 a 18:00). Déjenos su mensaje y le responderemos en un plazo máximo de 48 horas laborables.',
  },
  en: {
    launcher: 'Talk to us',
    launcherAria: 'Open the support chat',
    launcherClose: 'Close the chat',
    loading: 'Connecting…',

    consentTitle: 'Before we start',
    consentBody:
      'The chat stores your conversation on our server (EU) so we can help you. It is only activated if you accept.',
    consentAccept: 'Enable the chat',
    consentMore: 'More information',
    consentHref: '/en/cookies',

    fallbackLabel: 'Write to us',
    fallbackHref: '/en/contacto',

    welcomeTitle: 'Talk to us',
    welcomeDescription:
      'An automated assistant replies right away. A member of our team can step in when needed.',
    unavailableMessage:
      'We are currently outside our business hours (Monday to Friday, 9:00 to 18:00 CET). Leave your message and we will reply within 48 working hours.',
  },
} as const;

export const chatFor = (locale: Locale = 'es') => ({ ...base, ...texts[locale] });

export type ChatConfig = ReturnType<typeof chatFor>;
