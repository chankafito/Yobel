export const DEFAULT_LANG = "es";

// 🇵🇪 País por defecto
export const DEFAULT_COUNTRY = "pe";

// 🌍 Idiomas permitidos
export const SUPPORTED_LANGS = ["es", "en"] as const;

// 🌎 Idiomas disponibles
export const LANGUAGES = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
];

// 🏳️ Países donde opera tu empresa
export const SUPPORTED_COUNTRIES = [
  "pe",  // Perú
  "ec",  // Ecuador
  "co",  // Colombia
  "pa",  // Panamá
  "cr",  // Costa Rica
  "do",  // República Dominicana
  "sv",  // El Salvador
  "gt",  // Guatemala
  "mx",  // México
] as const;

// 🇵🇪 Países disponibles
export const COUNTRIES = [
  { code: "pe", label: "Perú" },
  { code: "co", label: "Colombia" },
  { code: "mx", label: "México" },
  { code: "ec", label: "Ecuador" },
  { code: "pa", label: "Panamá" },
  { code: "cr", label: "Costa Rica" },
  { code: "do", label: "R. Dominicana" },
  { code: "sv", label: "El Salvador" },
  { code: "gt", label: "Guatemala" }
];

// 🌐 Relación idioma–país por defecto (opcional)
export const COUNTRY_DEFAULT_LANG: Record<string, string> = {
  pe: "es",
  ec: "es",
  co: "es",
  pa: "es",
  cr: "es",
  do: "es",
  sv: "es",
  gt: "es",
  mx: "es",
};

// 🛣 Rutas de API según país (si tu backend sirve distinto contenido)
export const COUNTRY_API_BASE: Record<string, string> = {
  pe: "https://api.yobel.biz/pe",
  ec: "https://api.yobel.biz/ec",
  co: "https://api.yobel.biz/co",
  pa: "https://api.yobel.biz/pa",
  cr: "https://api.yobel.biz/cr",
  do: "https://api.yobel.biz/do",
  sv: "https://api.yobel.biz/sv",
  gt: "https://api.yobel.biz/gt",
  mx: "https://api.yobel.biz/mx",
};

// 📁 Data folder: dónde buscar JSON locales por país/idioma
export const DATA_PATH = (lang: string, country: string) => `/data/${lang}/${country}/`;

export const LOCALE_PATH = (lang: string) => `/src/locales/${lang}/`;

// 🌐 Formato estándar internacional (es-PE, es-MX)
export const LOCALE_CODE = (lang: string, country: string) => `${lang}-${country.toUpperCase()}`;