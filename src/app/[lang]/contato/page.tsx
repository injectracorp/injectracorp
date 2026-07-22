import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/contato/Banner";
import Formulario from "@/components/sections/contato/Formulario";
import Presenca from "@/components/sections/contato/Presenca";
import Cta from "@/components/sections/contato/Cta";
import TrustBar from "@/components/sections/contato/TrustBar";
import { isValidLocale, LOCALES, type Locale } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n/dictionary";

export const metadata: Metadata = {
  title: "Contato | Injectra",
  description:
    "Fale com a Injectra: telefones, e-mails, endereço e canais de atendimento para máquinas, robótica, plataforma AI e consultoria industrial.",
};

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

type Props = { params: Promise<{ lang: string }> };

export default async function Contato({ params }: Props) {
  const { lang: langParam } = await params;
  if (!isValidLocale(langParam)) notFound();
  const lang: Locale = langParam;
  const dict = await getDictionary(lang);

  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header dict={dict} />
      <main className="flex w-full flex-1 flex-col items-center">
        <Banner dict={dict} />
        <Formulario lang={lang} dict={dict} />
        <Presenca dict={dict} />
        <Cta dict={dict} />
        <TrustBar dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}
