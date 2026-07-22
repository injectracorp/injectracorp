import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/robotica/Banner";
import Solucoes from "@/components/sections/robotica/Solucoes";
import Capacidade from "@/components/sections/robotica/Capacidade";
import Aplicacoes from "@/components/sections/robotica/Aplicacoes";
import Integracao from "@/components/sections/robotica/Integracao";
import Comparativo from "@/components/sections/robotica/Comparativo";
import CTA from "@/components/sections/robotica/CTA";
import TrustBar from "@/components/sections/robotica/TrustBar";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/dictionary";
import { isValidLocale, LOCALES, type Locale } from "@/lib/i18n/locales";

export const metadata: Metadata = {
  title: "Robótica | Injectra",
  description:
    "Soluções completas em robótica e automação para movimentação, manuseio, paletização e integração com máquinas Injectra.",
};

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

type Props = { params: Promise<{ lang: string }> };

export default async function Robotica({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = await getDictionary(locale);

  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header dict={dict} />
      <main className="flex w-full flex-1 flex-col items-center">
        <Banner dict={dict} />
        <Solucoes dict={dict} />
        <Capacidade dict={dict} />
        <Aplicacoes dict={dict} />
        <Integracao dict={dict} />
        <Comparativo dict={dict} />
        <CTA dict={dict} />
        <TrustBar dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}
