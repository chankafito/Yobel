export const DEFAULT_LANG = "es";
export const DEFAULT_COUNTRY = "pe";

/**
 * Devuelve el prefijo para rutas según idioma y país.
 * Siempre devuelve /${lang}/${country}
 */
export function getLangPrefix(lang?: string, country?: string) {
  const currentLang = lang || DEFAULT_LANG;
  const currentCountry = country || DEFAULT_COUNTRY;
  return `/${currentLang}/${currentCountry}`;
}

/**
 * Construye una URL completa con idioma y país
 */
export function buildLocalizedPath(path: string, lang?: string, country?: string) {
  const prefix = getLangPrefix(lang, country);
  // Evitar doble slash si path ya empieza con /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${prefix}${cleanPath}`;
}
