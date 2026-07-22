// Lista estática de países relevantes para um exportador industrial B2B
// global (todas as Américas, Europa e principais mercados da Ásia/Oceania).
// Os nomes exibidos são traduzidos automaticamente para o idioma da página
// via Intl.DisplayNames — não há tradução manual de nomes de país em lugar
// nenhum do código.

import { getCountryCallingCode, type CountryCode } from "libphonenumber-js";

// ISO 3166-1 alpha-2. Ordem: Américas, Europa, Ásia/Oceania/Oriente Médio/África.
const COUNTRY_CODES: CountryCode[] = [
  // Américas
  "US", "CA", "MX", "BR", "AR", "CL", "CO", "PE", "UY", "PY",
  "BO", "EC", "VE", "PA", "CR", "GT", "HN", "SV", "NI", "DO",
  "PR", "JM", "TT",
  // Europa
  "GB", "FR", "DE", "IT", "ES", "PT", "NL", "BE", "CH", "AT",
  "SE", "NO", "DK", "FI", "IE", "PL", "CZ", "RO", "HU", "GR",
  "RU", "UA",
  // Ásia, Oceania, Oriente Médio e África
  "CN", "JP", "KR", "IN", "SG", "TH", "VN", "MY", "ID", "PH",
  "TW", "HK", "IL", "AE", "SA", "AU", "NZ", "ZA",
];

export type CountryOption = {
  code: string;
  name: string;
  dial: string;
};

/**
 * Retorna a lista de países (código ISO, nome traduzido no locale informado
 * e DDI), ordenada alfabeticamente pelo nome traduzido.
 */
export function getCountryOptions(bcp47Locale: string): CountryOption[] {
  let displayNames: Intl.DisplayNames | null = null;
  try {
    displayNames = new Intl.DisplayNames([bcp47Locale], { type: "region" });
  } catch {
    displayNames = null;
  }

  const options = COUNTRY_CODES.map((code) => {
    let name: string = code;
    try {
      name = displayNames?.of(code) ?? code;
    } catch {
      name = code;
    }

    let dial = "";
    try {
      dial = `+${getCountryCallingCode(code)}`;
    } catch {
      dial = "";
    }

    return { code, name, dial };
  });

  return options.sort((a, b) => a.name.localeCompare(b.name, bcp47Locale));
}
