export const DEFAULT_LANG = "en";
export const GLOBAL_LANG = "global";

/**
 * Devuelve el prefijo para rutas según el idioma.
 * - Si lang es DEFAULT_LANG o GLOBAL_LANG => devuelve "" (ruta raíz).
 * - Si lang es otro código => devuelve "/{lang}".
 */
export function getLangPrefix(lang?: string) {
  if (!lang) return "";
  const code = lang.toLowerCase();
  if (code === DEFAULT_LANG || code === GLOBAL_LANG) return "";
  return `/${code}`;
}
