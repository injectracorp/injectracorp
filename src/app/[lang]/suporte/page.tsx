import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/suporte/Banner";
import Solucoes from "@/components/sections/suporte/Solucoes";
import ComoFuncionaRepresentante from "@/components/sections/representantes/ComoFunciona";
import Atendimento from "@/components/sections/suporte/Atendimento";
import ComoFunciona from "@/components/sections/suporte/ComoFunciona";
import Pecas from "@/components/sections/suporte/Pecas";
import NossasExperiencias from "@/components/sections/representantes/NossasExperiencias";
import CTA from "@/components/sections/representantes/CTA";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/dictionary";
import { isValidLocale, LOCALES, type Locale } from "@/lib/i18n/locales";

export const metadata: Metadata = {
  title: "Suporte | Injectra",
  description:
    "Suporte completo e especializado Injectra: assistência técnica, garantia, manuais, downloads, FAQ e solicitação de peças originais.",
};

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

type Props = { params: Promise<{ lang: string }> };

export default async function Suporte({ params }: Props) {
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
        <ComoFuncionaRepresentante dict={dict} />
        <Atendimento dict={dict} />
        <ComoFunciona dict={dict} />
        <Pecas dict={dict} />
        <NossasExperiencias dict={dict} />
        <CTA dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}
