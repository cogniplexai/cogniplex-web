/**
 * Tipos mínimos del SDK del widget de Chatwoot (solo lo que usamos).
 * El SDK se inyecta en tiempo de ejecución desde chatwoot.cogniplex.es.
 */
interface ChatwootSDK {
  run(opts: { websiteToken: string; baseUrl: string }): void;
}

interface ChatwootWidget {
  toggle(state?: 'open' | 'close'): void;
  setLocale(locale: string): void;
  setCustomAttributes(attrs: Record<string, string | number | boolean>): void;
  reset(): void;
}

interface Window {
  chatwootSettings?: Record<string, unknown>;
  chatwootSDK?: ChatwootSDK;
  $chatwoot?: ChatwootWidget;
}
