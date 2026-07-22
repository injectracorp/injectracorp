import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/maquinas/Banner";
import LinhasDeMaquinas from "@/components/sections/maquinas/LinhasDeMaquinas";
import ComoFunciona from "@/components/sections/maquinas/ComoFunciona";
import TecnologiasDasLinhas from "@/components/sections/maquinas/TecnologiasDasLinhas";
import Comparativo from "@/components/sections/maquinas/Comparativo";
import Tecnologias from "@/components/sections/maquinas/Tecnologias";
import Recursos from "@/components/sections/maquinas/Recursos";
import TrustBar from "@/components/sections/maquinas/TrustBar";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/dictionary";
import { isValidLocale, LOCALES, type Locale } from "@/lib/i18n/locales";

export const metadata: Metadata = {
  title: "Máquinas | Injectra",
  description:
    "Nove linhas de máquinas hidráulicas e elétricas completas, desenvolvidas para máxima performance, precisão e eficiência em qualquer aplicação.",
};

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

type Props = { params: Promise<{ lang: string }> };

export default async function Maquinas({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = await getDictionary(locale);

  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header dict={dict} />
      <main className="flex w-full flex-1 flex-col items-center">
        <Banner dict={dict} />
        <LinhasDeMaquinas dict={dict} />
        <ComoFunciona dict={dict} />
        <TecnologiasDasLinhas dict={dict} />
        <Comparativo dict={dict} />
        <Tecnologias dict={dict} />
        <Recursos dict={dict} />
        <TrustBar dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}
