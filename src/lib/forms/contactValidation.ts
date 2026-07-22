// Validação leve para os 3 formulários de contato do site (Contato,
// Fale com Especialista, Solicitar Cotação). Mantém a lógica de validação
// fora dos componentes para evitar duplicação entre eles.

import { parsePhoneNumberFromString, getExampleNumber, type CountryCode } from "libphonenumber-js";
import examplePhoneNumbers from "libphonenumber-js/examples.mobile.json";

// Regex simples e permissiva de formato de e-mail (não substitui verificação
// por envio de e-mail real, apenas valida formato antes do submit).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_RE.test(value.trim());
}

export type PhoneValidationResult = {
  valid: boolean;
  formatted?: string;
};

/**
 * Valida um número de telefone assumindo o país informado (ISO 3166-1
 * alpha-2, ex.: "BR", "US") como região padrão de discagem — permite que o
 * usuário digite tanto em formato local quanto internacional (+55 11...).
 */
export function validatePhoneForCountry(value: string, isoCountry: string): PhoneValidationResult {
  const trimmed = value.trim();
  if (!trimmed) {
    return { valid: false };
  }

  try {
    const phoneNumber = parsePhoneNumberFromString(trimmed, isoCountry as CountryCode);
    if (!phoneNumber || !phoneNumber.isValid()) {
      return { valid: false };
    }
    return { valid: true, formatted: phoneNumber.formatInternational() };
  } catch {
    return { valid: false };
  }
}

const FALLBACK_PHONE_PLACEHOLDER = "(11) 99999-9999";

/**
 * Placeholder de exemplo, formatado no padrão nacional do país informado
 * (ex.: "(11) 99999-9999" para BR, "(213) 373-4253" para US). Usado para que
 * o campo de telefone sempre mostre um exemplo coerente com o país
 * selecionado, em vez de um formato fixo/hardcoded.
 */
export function getPhoneExamplePlaceholder(isoCountry: string): string {
  try {
    const example = getExampleNumber(isoCountry as CountryCode, examplePhoneNumbers);
    return example ? example.formatNational() : FALLBACK_PHONE_PLACEHOLDER;
  } catch {
    return FALLBACK_PHONE_PLACEHOLDER;
  }
}
