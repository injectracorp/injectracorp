import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/representantes/Banner";
import Beneficios from "@/components/sections/representantes/Beneficios";
import ComoFunciona from "@/components/sections/representantes/ComoFunciona";
import NossasExperiencias from "@/components/sections/representantes/NossasExperiencias";
import CTA from "@/components/sections/representantes/CTA";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/dictionary";
import { isValidLocale, LOCALES, type Locale } from "@/lib/i18n/locales";

export const metadata: Metadata = {
  title: "Representantes | Injectra",
  description:
    "Programa de representantes Injectra: expansão comercial, suporte completo e parceria para levar tecnologia industrial de ponta para sua região.",
};

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

type Props = { params: Promise<{ lang: string }> };

export default async function Representantes({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = await getDictionary(locale);

  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header dict={dict} />
      <main className="flex w-full flex-1 flex-col items-center">
        <Banner dict={dict} />
        <Beneficios dict={dict} />
        <ComoFunciona dict={dict} />
        <NossasExperiencias dict={dict} />
        <CTA dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}
