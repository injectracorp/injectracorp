import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOCALES, DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/i18n/locales";

const COOKIE = "injectra-lang";

const LOCALE_CODES: readonly string[] = LOCALES.map((l) => l.code);

// Mesma prioridade de matching implementada em
// src/context/LanguageContext.tsx (detectClientLang(), linhas ~54-68),
// estendida para cobrir os 16 locais suportados (sv/fi/ru/ro/he/en-gb).
function matchAcceptLanguage(acceptLanguage: string | null): Locale {
  const nav = (acceptLanguage ?? "").toLowerCase();

  if (nav.includes("pt-pt") || nav.includes("pt-mz") || nav.includes("pt-ao")) return "pt-pt";
  if (nav.includes("pt")) return "pt";
  if (nav.includes("en-gb")) return "en-gb";
  if (nav.includes("es")) return "es";
  if (nav.includes("fr")) return "fr";
  if (nav.includes("de")) return "de";
  if (nav.includes("it")) return "it";
  if (nav.includes("zh")) return "zh";
  if (nav.includes("ja")) return "ja";
  if (nav.includes("ko")) return "ko";
  if (nav.includes("sv")) return "sv";
  if (nav.includes("fi")) return "fi";
  if (nav.includes("ru")) return "ru";
  if (nav.includes("ro")) return "ro";
  if (nav.includes("he")) return "he";
  if (nav.includes("en")) return "en";

  return DEFAULT_LOCALE;
}

function getLocale(request: NextRequest): Locale {
  const cookieLang = request.cookies.get(COOKIE)?.value;
  if (cookieLang && isValidLocale(cookieLang)) return cookieLang;

  return matchAcceptLanguage(request.headers.get("accept-language"));
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  const pathnameHasLocale = LOCALE_CODES.some(
    (code) => pathname === `/${code}` || pathname.startsWith(`/${code}/`)
  );
  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  url.search = search;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Ignora /_next, /api e qualquer caminho com extensão de arquivo (assets estáticos).
    "/((?!_next|api|.*\\..*).*)",
  ],
};
