import type { Locale } from "@/lib/i18n/locales";
import { DEFAULT_LOCALE } from "@/lib/i18n/locales";

// Shape deliberadamente solto — a estrutura real é grande e será montada por
// etapas futuras (fragments em src/dictionaries/fragments/*.json mesclados
// em src/dictionaries/<locale>.json).
export type Dictionary = Record<string, any>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  try {
    const mod = await import(`@/dictionaries/${locale}.json`);
    return mod.default ?? mod;
  } catch {
    const fallback = await import(`@/dictionaries/${DEFAULT_LOCALE}.json`);
    return fallback.default ?? fallback;
  }
}
