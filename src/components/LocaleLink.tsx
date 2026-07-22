"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useLang } from "@/context/LanguageContext";

type Props = ComponentProps<typeof Link>;

// Substituto direto de next/link: prefixa hrefs internos (que começam com
// "/") com o idioma atual (ex.: "/maquinas" -> "/en/maquinas"), lido do
// LanguageContext (fonte da verdade = idioma da URL atual, ver
// src/app/[lang]/layout.tsx). Links externos, âncoras e hrefs já
// prefixados passam intactos.
export default function LocaleLink({ href, ...props }: Props) {
  const { lang } = useLang();

  const finalHref = (() => {
    if (typeof href !== "string") return href;
    if (!href.startsWith("/") || href.startsWith("//")) return href;
    if (href === `/${lang}` || href.startsWith(`/${lang}/`)) return href;
    return href === "/" ? `/${lang}` : `/${lang}${href}`;
  })();

  return <Link href={finalHref} {...props} />;
}
