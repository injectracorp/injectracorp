import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/plataforma-ai/Banner";
import Solucoes from "@/components/sections/plataforma-ai/Solucoes";
import Fluxo from "@/components/sections/plataforma-ai/Fluxo";
import Recursos from "@/components/sections/maquinas/Recursos";
import Confianca from "@/components/sections/experience-center/Confianca";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/dictionary";
import { isValidLocale, LOCALES, type Locale } from "@/lib/i18n/locales";

export const metadata: Metadata = {
  title: "Plataforma AI | Injectra",
  description:
    "A Plataforma Injectra AI conecta máquinas, pessoas e processos em um ecossistema inteligente para aumentar produtividade, reduzir paradas e gerar decisões em tempo real.",
};

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

type Props = { params: Promise<{ lang: string }> };

export default async function PlataformaAi({ params }: Props) {
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
        <Fluxo dict={dict} />
        <Recursos dict={dict} />
        <Confianca dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}
