import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/solicitar-cotacao/Banner";
import FormularioInteligente from "@/components/sections/solicitar-cotacao/FormularioInteligente";
import Configurador from "@/components/sections/solicitar-cotacao/Configurador";
import EnvioDaProposta from "@/components/sections/solicitar-cotacao/EnvioDaProposta";
import PorQueEscolher from "@/components/sections/solicitar-cotacao/PorQueEscolher";
import Cta from "@/components/sections/solicitar-cotacao/Cta";
import TrustBar from "@/components/sections/solicitar-cotacao/TrustBar";
import { isValidLocale, LOCALES, type Locale } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n/dictionary";

export const metadata: Metadata = {
  title: "Solicitar Cotação | Injectra",
  description:
    "Solicite uma proposta personalizada para máquinas, robótica e plataforma industrial Injectra.",
};

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

type Props = { params: Promise<{ lang: string }> };

export default async function SolicitarCotacao({ params }: Props) {
  const { lang: langParam } = await params;
  if (!isValidLocale(langParam)) notFound();
  const lang: Locale = langParam;
  const dict = await getDictionary(lang);

  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header dict={dict} />
      <main className="flex w-full flex-1 flex-col items-center">
        <Banner dict={dict} />
        <FormularioInteligente lang={lang} dict={dict} />
        <Configurador dict={dict} />
        <EnvioDaProposta dict={dict} />
        <PorQueEscolher dict={dict} />
        <Cta dict={dict} />
        <TrustBar dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}
