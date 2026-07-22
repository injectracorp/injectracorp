import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/industria/Banner";
import Segmentos from "@/components/sections/industria/Segmentos";
import PorQueEscolher from "@/components/sections/industria/PorQueEscolher";
import Recursos from "@/components/sections/industria/Recursos";
import TrustBar from "@/components/sections/industria/TrustBar";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/dictionary";
import { isValidLocale, LOCALES, type Locale } from "@/lib/i18n/locales";

export const metadata: Metadata = {
  title: "Indústria | Injectra",
  description:
    "A Injectra oferece máquinas, robótica e plataformas inteligentes para aumentar produtividade, qualidade e competitividade em diferentes setores industriais.",
};

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

type Props = { params: Promise<{ lang: string }> };

export default async function Industria({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = await getDictionary(locale);

  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header dict={dict} />
      <main className="flex w-full flex-1 flex-col items-center">
        <Banner dict={dict} />
        <Segmentos dict={dict} />
        <PorQueEscolher dict={dict} />
        <Recursos dict={dict} />
        <TrustBar dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}
