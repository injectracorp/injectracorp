import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/catalogos/Banner";
import CatalogosGerais from "@/components/sections/catalogos/CatalogosGerais";
import LinhasMaquinas from "@/components/sections/catalogos/LinhasMaquinas";
import SolucoesDigitais from "@/components/sections/catalogos/SolucoesDigitais";
import CTA from "@/components/sections/catalogos/CTA";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/dictionary";
import { isValidLocale, LOCALES, type Locale } from "@/lib/i18n/locales";

export const metadata: Metadata = {
  title: "Catálogos | Injectra",
  description:
    "Acesse os materiais técnicos e comerciais das linhas de máquinas, robótica e plataforma digital Injectra.",
};

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

type Props = { params: Promise<{ lang: string }> };

export default async function Catalogos({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = await getDictionary(locale);

  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header dict={dict} />
      <main className="flex w-full flex-1 flex-col items-center">
        <Banner dict={dict} />
        <CatalogosGerais dict={dict} />
        <LinhasMaquinas dict={dict} />
        <SolucoesDigitais dict={dict} />
        <CTA dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}
