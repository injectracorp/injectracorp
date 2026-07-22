import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/experience-center/Banner";
import Experiencias from "@/components/sections/experience-center/Experiencias";
import Diferenciais from "@/components/sections/experience-center/Diferenciais";
import Agendamento from "@/components/sections/experience-center/Agendamento";
import Esperar from "@/components/sections/experience-center/Esperar";
import Confianca from "@/components/sections/experience-center/Confianca";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/dictionary";
import { isValidLocale, LOCALES, type Locale } from "@/lib/i18n/locales";

export const metadata: Metadata = {
  title: "Experience Center | Injectra",
  description:
    "O Experience Center Injectra foi criado para que você veja, teste e comprove na prática como nossas soluções podem elevar a produtividade, a qualidade e a competividade da sua indústria.",
};

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

type Props = { params: Promise<{ lang: string }> };

export default async function ExperienceCenter({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = await getDictionary(locale);

  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header dict={dict} />
      <main className="flex w-full flex-1 flex-col items-center">
        <Banner dict={dict} />
        <Experiencias dict={dict} />
        <Diferenciais dict={dict} />
        <Agendamento dict={dict} />
        <Esperar dict={dict} />
        <Confianca dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}
