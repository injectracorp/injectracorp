"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLang, type Lang } from "@/context/LanguageContext";

// Conteúdo replicado do seletor de idiomas do projeto ACQUAFY (mesma lista de
// idiomas, bandeiras e comportamento), adaptado aos tokens visuais da Injectra.
type Language = {
  langCode: Lang;
  label: string;
  flag: string;
  aspectW: number;
  aspectH: number;
};

const LANGUAGES: Language[] = [
  { langCode: "pt", label: "Português (BR)", flag: "/assets/flags/flag-br.svg", aspectW: 512, aspectH: 512 },
  { langCode: "en-gb", label: "English (England)", flag: "/assets/flags/flag-uk.svg", aspectW: 20, aspectH: 20 },
  { langCode: "en", label: "English (USA)", flag: "/assets/flags/flag-usa-30px.svg", aspectW: 18, aspectH: 18 },
  { langCode: "pt-pt", label: "Português (Portugal)", flag: "/assets/flags/flag-pt.svg", aspectW: 1, aspectH: 1 },
  { langCode: "es", label: "Español", flag: "/assets/flags/flag-es.svg", aspectW: 22, aspectH: 22 },
  { langCode: "fr", label: "Français", flag: "/assets/flags/flag-fr.svg", aspectW: 30, aspectH: 30 },
  { langCode: "de", label: "Deutsch", flag: "/assets/flags/flag-de.svg", aspectW: 306.6, aspectH: 306.7 },
  { langCode: "it", label: "Italiano", flag: "/assets/flags/flag-it.svg", aspectW: 30, aspectH: 30 },
  { langCode: "zh", label: "中文", flag: "/assets/flags/flag-zh.svg", aspectW: 512, aspectH: 512 },
  { langCode: "ja", label: "日本語", flag: "/assets/flags/flag-ja.svg", aspectW: 512, aspectH: 512 },
  { langCode: "ko", label: "한국어", flag: "/assets/flags/flag-ko.svg", aspectW: 374, aspectH: 374 },
  { langCode: "sv", label: "Svenska", flag: "/assets/flags/flag-sv.svg", aspectW: 512, aspectH: 512 },
  { langCode: "fi", label: "Suomi", flag: "/assets/flags/flag-fi.svg", aspectW: 512, aspectH: 512 },
  { langCode: "ru", label: "Русский", flag: "/assets/flags/flag-ru.svg", aspectW: 512, aspectH: 512 },
  { langCode: "ro", label: "Română", flag: "/assets/flags/flag-ro.svg", aspectW: 326, aspectH: 326 },
  { langCode: "he", label: "עברית", flag: "/assets/flags/flag-he.svg", aspectW: 512, aspectH: 512 },
];

const COMPACT_LABEL: Record<Lang, string> = {
  pt: "BR",
  "pt-pt": "PT",
  en: "EN",
  "en-gb": "GB",
  es: "ES",
  fr: "FR",
  de: "DE",
  it: "IT",
  zh: "中文",
  ja: "日本語",
  ko: "한국어",
  sv: "SV",
  fi: "FI",
  ru: "RU",
  ro: "RO",
  he: "HE",
};

const FLAG_BY_LANG: Record<Lang, Language> = LANGUAGES.reduce(
  (acc, l) => ({ ...acc, [l.langCode]: l }),
  {} as Record<Lang, Language>
);

function FlagImg({ flag, aspectW, aspectH }: Pick<Language, "flag" | "aspectW" | "aspectH">) {
  return (
    <div className="flex size-5 shrink-0 items-center justify-center overflow-hidden">
      <div className="relative w-full flex-1" style={{ aspectRatio: `${aspectW}/${aspectH}` }}>
        <Image src={flag} alt="" fill className="absolute inset-0 object-contain" />
      </div>
    </div>
  );
}

function useClickOutside(onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [onClose]);
  return ref;
}

function DropdownMenu({ lang, setLang, onClose }: { lang: Lang; setLang: (l: Lang) => void; onClose: () => void }) {
  return (
    <div className="absolute right-0 top-[calc(100%+8px)] z-50 flex w-[290px] flex-col gap-3 rounded-md border border-border-line-bd bg-wt p-5">
      {LANGUAGES.map((item) => {
        const isActive = item.langCode === lang;
        return (
          <button
            key={item.langCode}
            type="button"
            onClick={() => {
              setLang(item.langCode);
              onClose();
            }}
            className="flex w-full shrink-0 items-center gap-2.5 overflow-hidden transition-opacity hover:opacity-70"
          >
            <FlagImg flag={item.flag} aspectW={item.aspectW} aspectH={item.aspectH} />
            <p
              className={`min-w-0 flex-1 shrink-0 whitespace-nowrap text-left text-base leading-5 tracking-normal text-texto ${
                isActive ? "font-bold" : "font-normal"
              }`}
            >
              {item.label}
            </p>
          </button>
        );
      })}
    </div>
  );
}

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();
  const ref = useClickOutside(() => setOpen(false));
  const current = FLAG_BY_LANG[lang];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 whitespace-nowrap rounded-full border p-2.5 text-sm font-bold transition-colors ${
          open ? "border-azul-claro-plus text-azul-claro-plus" : "border-border-line-bd text-texto hover:text-azul-claro"
        }`}
      >
        <FlagImg flag={current.flag} aspectW={current.aspectW} aspectH={current.aspectH} />
        {COMPACT_LABEL[lang]}
        <Image
          src="/assets/header/arrow-down.svg"
          alt=""
          width={10}
          height={10}
          className={`object-contain transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <DropdownMenu lang={lang} setLang={setLang} onClose={() => setOpen(false)} />}
    </div>
  );
}
