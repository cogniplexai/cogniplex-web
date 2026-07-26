/**
 * Consentimiento por categorías (RGPD).
 * Una sola fuente de verdad en localStorage['cgx-consent']:
 *   { v: 1, necessary: true, chat: boolean, ts: '<ISO>' }
 * Compatibilidad: la clave antigua 'cgx-cookies' ("solo técnico") cuenta como
 * decisión tomada SIN consentimiento de chat; el chat lo pedirá en contexto.
 * Lo comparten CookieBanner.astro (decisión global) y Chat.astro (activación).
 */
export interface Consent {
  v: 1;
  necessary: true;
  chat: boolean;
  ts: string;
}

const KEY = 'cgx-consent';
const LEGACY_KEY = 'cgx-cookies';

/** El banner escucha este evento para reabrirse ("Gestionar consentimiento"). */
export const MANAGE_EVENT = 'cgx:manage-consent';
/** Se emite al guardar cualquier decisión; detail = Consent. */
export const CONSENT_EVENT = 'cgx:consent-changed';

export function getConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw) as Consent;
  } catch {
    /* almacenamiento bloqueado o JSON corrupto: tratar como sin decisión */
  }
  return null;
}

/** ¿Hay ya una decisión (nueva o de la clave antigua)? Controla el banner. */
export function hasDecision(): boolean {
  return getConsent() !== null || localStorage.getItem(LEGACY_KEY) !== null;
}

/** ¿Está consentida la categoría de chat? */
export function chatAllowed(): boolean {
  return getConsent()?.chat === true;
}

export function saveConsent(chat: boolean): Consent {
  const consent: Consent = { v: 1, necessary: true, chat, ts: new Date().toISOString() };
  localStorage.setItem(KEY, JSON.stringify(consent));
  // La clave antigua deja de ser necesaria: la nueva ya registra la decisión.
  localStorage.removeItem(LEGACY_KEY);
  document.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: consent }));
  return consent;
}
