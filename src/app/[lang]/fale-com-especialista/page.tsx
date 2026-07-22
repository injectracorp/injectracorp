import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/fale-com-especialista/Banner";
import ComoAjudamos from "@/components/sections/fale-com-especialista/ComoAjudamos";
import ComoFunciona from "@/components/sections/fale-com-especialista/ComoFunciona";
import Contato from "@/components/sections/fale-com-especialista/Contato";
import Cta from "@/components/sections/fale-com-especialista/Cta";
import TrustBar from "@/components/sections/fale-com-especialista/TrustBar";
import { isValidLocale, LOCALES, type Locale } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n/dictionary";

export const metadata: Metadata = {
  title: "Fale com um Especialista | Injectra",
  description:
    "Consultoria comercial, técnica e de engenharia da Injectra para ajudar sua operação a escolher a solução ideal.",
};

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

type Props = { params: Promise<{ lang: string }> };

export default async function FaleComEspecialista({ params }: Props) {
  const { lang: langParam } = await params;
  if (!isValidLocale(langParam)) notFound();
  const lang: Locale = langParam;
  const dict = await getDictionary(lang);

  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header dict={dict} />
      <main className="flex w-full flex-1 flex-col items-center">
        <Banner dict={dict} />
        <ComoAjudamos dict={dict} />
        <ComoFunciona dict={dict} />
        <Contato lang={lang} dict={dict} />
        <Cta dict={dict} />
        <TrustBar dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}
