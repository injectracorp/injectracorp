import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/sobre-nos/Banner";
import QuemSomos from "@/components/sections/sobre-nos/QuemSomos";
import GrupoInterfy from "@/components/sections/sobre-nos/GrupoInterfy";
import MissaoVisaoValores from "@/components/sections/sobre-nos/MissaoVisaoValores";
import Ecossistema from "@/components/sections/sobre-nos/Ecossistema";
import CTA from "@/components/sections/sobre-nos/CTA";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/dictionary";
import { isValidLocale, LOCALES, type Locale } from "@/lib/i18n/locales";

export const metadata: Metadata = {
  title: "Sobre Nós | Injectra",
  description:
    "A Injectra Corporation é uma empresa americana focada em máquinas injetoras, robótica, software industrial, IoT, cloud e inteligência artificial.",
};

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

type Props = { params: Promise<{ lang: string }> };

export default async function SobreNos({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = await getDictionary(locale);

  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header dict={dict} />
      <main className="flex w-full flex-1 flex-col items-center">
        <Banner dict={dict} />
        <QuemSomos dict={dict} />
        <GrupoInterfy dict={dict} />
        <MissaoVisaoValores dict={dict} />
        <Ecossistema dict={dict} />
        <CTA dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}
