// Fonte única dos 16 locais suportados pelo site (rota, bcp47, label exibido
// no seletor de idioma, país ISO alpha-2, DDI e direção nativa de escrita).
// Usado por proxy.ts, dictionary.ts, LanguageContext.tsx e app/[lang]/layout.tsx.

export type LocaleDir = "ltr" | "rtl";

export type LocaleEntry = {
  /** Segmento de rota usado literalmente na URL, ex.: /pt/, /en-gb/. */
  code: string;
  /** Tag BCP-47 completa, usada no atributo lang do <html>. */
  bcp47: string;
  /** Rótulo exibido no seletor de idiomas. */
  label: string;
  /** País ISO 3166-1 alpha-2 associado (para bandeiras/formatting). */
  country: string;
  /** Código de discagem internacional (DDI). */
  dial: string;
  /** Direção de escrita nativa do idioma. */
  dir: LocaleDir;
};

export const LOCALES: LocaleEntry[] = [
  { code: "pt", bcp47: "pt-BR", label: "Português (BR)", country: "BR", dial: "+55", dir: "ltr" },
  { code: "en-gb", bcp47: "en-GB", label: "English (England)", country: "GB", dial: "+44", dir: "ltr" },
  { code: "en", bcp47: "en-US", label: "English (USA)", country: "US", dial: "+1", dir: "ltr" },
  { code: "pt-pt", bcp47: "pt-PT", label: "Português (Portugal)", country: "PT", dial: "+351", dir: "ltr" },
  { code: "es", bcp47: "es-MX", label: "Español", country: "MX", dial: "+52", dir: "ltr" },
  { code: "fr", bcp47: "fr-FR", label: "Français", country: "FR", dial: "+33", dir: "ltr" },
  { code: "de", bcp47: "de-DE", label: "Deutsch", country: "DE", dial: "+49", dir: "ltr" },
  { code: "it", bcp47: "it-IT", label: "Italiano", country: "IT", dial: "+39", dir: "ltr" },
  { code: "zh", bcp47: "zh-CN", label: "中文", country: "CN", dial: "+86", dir: "ltr" },
  { code: "ja", bcp47: "ja-JP", label: "日本語", country: "JP", dial: "+81", dir: "ltr" },
  { code: "ko", bcp47: "ko-KR", label: "한국어", country: "KR", dial: "+82", dir: "ltr" },
  { code: "sv", bcp47: "sv-SE", label: "Svenska", country: "SE", dial: "+46", dir: "ltr" },
  { code: "fi", bcp47: "fi-FI", label: "Suomi", country: "FI", dial: "+358", dir: "ltr" },
  { code: "ru", bcp47: "ru-RU", label: "Русский", country: "RU", dial: "+7", dir: "ltr" },
  { code: "ro", bcp47: "ro-RO", label: "Română", country: "RO", dial: "+40", dir: "ltr" },
  { code: "he", bcp47: "he-IL", label: "עברית", country: "IL", dial: "+972", dir: "rtl" },
];

export type Locale =
  | "pt"
  | "en-gb"
  | "en"
  | "pt-pt"
  | "es"
  | "fr"
  | "de"
  | "it"
  | "zh"
  | "ja"
  | "ko"
  | "sv"
  | "fi"
  | "ru"
  | "ro"
  | "he";

export const DEFAULT_LOCALE: Locale = "pt";

const LOCALE_CODES: readonly string[] = LOCALES.map((l) => l.code);

export function isValidLocale(x: string): x is Locale {
  return LOCALE_CODES.includes(x);
}

export function getLocaleEntry(code: Locale): LocaleEntry {
  return LOCALES.find((l) => l.code === code) ?? LOCALES[0];
}
