"use client";

import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from "react";
import { LOCALES, type LocaleDir } from "@/lib/i18n/locales";

export type Lang =
  | "pt"
  | "pt-pt"
  | "en"
  | "en-gb"
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

export const ALL_LANGS: Lang[] = [
  "pt",
  "pt-pt",
  "en",
  "en-gb",
  "es",
  "fr",
  "de",
  "it",
  "zh",
  "ja",
  "ko",
  "sv",
  "fi",
  "ru",
  "ro",
  "he",
];

export const LANG_COOKIE = "injectra-lang";
const COOKIE = LANG_COOKIE;
const MAX_AGE = 60 * 60 * 24 * 365;

const DIR_OVERRIDE_KEY = "injectra-dir-override";

// Guarda o scroll de antes da troca de idioma (ver LanguageSelector) — o
// key={locale} abaixo remonta a árvore inteira, o que reseta o scroll mesmo
// com router.push({ scroll: false }); restauramos no mount deste provider.
export const SCROLL_RESTORE_KEY = "injectra-scroll-restore";

export type DirOverride = "auto" | "ltr" | "rtl";

// Direção nativa de cada idioma, derivada de src/lib/i18n/locales.ts (rtl só
// para "he", ltr para os demais 15).
const NATIVE_DIR_BY_LANG: Record<Lang, LocaleDir> = LOCALES.reduce(
  (acc, l) => ({ ...acc, [l.code]: l.dir }),
  {} as Record<Lang, LocaleDir>
);

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  dirOverride: DirOverride;
  setDirOverride: (d: DirOverride) => void;
  nativeDir: LocaleDir;
  effectiveDir: LocaleDir;
};

const Ctx = createContext<LanguageContextValue>({
  lang: "pt",
  setLang: () => {},
  dirOverride: "auto",
  setDirOverride: () => {},
  nativeDir: "ltr",
  effectiveDir: "ltr",
});

function writeCookie(l: Lang) {
  document.cookie = `${COOKIE}=${l}; path=/; max-age=${MAX_AGE}; SameSite=Lax`;
}

function readDirOverride(): DirOverride {
  if (typeof window === "undefined") return "auto";
  const saved = window.localStorage.getItem(DIR_OVERRIDE_KEY);
  if (saved === "ltr" || saved === "rtl" || saved === "auto") return saved;
  return "auto";
}

export function LanguageProvider({
  children,
  initialLang = "pt",
}: {
  children: ReactNode;
  initialLang?: Lang;
}) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [dirOverride, setDirOverrideState] = useState<DirOverride>("auto");

  useEffect(() => {
    // Desliga a restauração automática de scroll do navegador — ela compete
    // com a nossa própria (abaixo) no remount por key={locale}, e "ganhar"
    // essa disputa era o que fazia a posição restaurada ser sobrescrita.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // A URL (via initialLang, vindo de src/app/[lang]/layout.tsx) é a fonte da
    // verdade do idioma atual — aqui só espelhamos isso no cookie, para que o
    // proxy.ts redirecione "/" para o último idioma confirmado por URL.
    writeCookie(initialLang);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- leitura de localStorage só é possível no client
    setDirOverrideState(readDirOverride());

    const savedScroll = sessionStorage.getItem(SCROLL_RESTORE_KEY);
    if (savedScroll !== null) {
      sessionStorage.removeItem(SCROLL_RESTORE_KEY);
      const y = Number(savedScroll);
      // A árvore inteira remonta aqui, e (em dev, a rota pode ainda estar
      // compilando sob demanda) o layout/imagens continuam assentando por um
      // tempo variável depois do mount — um scrollTo único é sobrescrito
      // logo em seguida. Reafirmamos a posição por ~1.2s em vez de confiar
      // num número fixo de frames.
      const start = performance.now();
      const reassert = () => {
        window.scrollTo(0, y);
        if (performance.now() - start < 1200) requestAnimationFrame(reassert);
      };
      requestAnimationFrame(reassert);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- deve rodar só uma vez por montagem (remonta por `key={locale}` no layout)
  }, []);

  function changeLang(l: Lang) {
    setLang(l);
    localStorage.setItem(COOKIE, l);
    writeCookie(l);
  }

  function changeDirOverride(d: DirOverride) {
    setDirOverrideState(d);
    localStorage.setItem(DIR_OVERRIDE_KEY, d);
  }

  const nativeDir = NATIVE_DIR_BY_LANG[lang] ?? "ltr";
  const effectiveDir: LocaleDir = useMemo(() => {
    if (dirOverride === "auto") return nativeDir;
    return dirOverride;
  }, [dirOverride, nativeDir]);

  useEffect(() => {
    document.documentElement.dir = effectiveDir;
  }, [effectiveDir]);

  return (
    <Ctx.Provider
      value={{
        lang,
        setLang: changeLang,
        dirOverride,
        setDirOverride: changeDirOverride,
        nativeDir,
        effectiveDir,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useLang() {
  return useContext(Ctx);
}
