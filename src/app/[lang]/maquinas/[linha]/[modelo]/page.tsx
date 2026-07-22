import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getMachineModel, MACHINE_LINE_DETAILS } from "@/data/machineModels";
import Hero from "@/components/sections/maquinas/modelo/Hero";
import Comparativo from "@/components/sections/maquinas/modelo/Comparativo";
import AplicacoesBeneficios from "@/components/sections/maquinas/modelo/AplicacoesBeneficios";
import CtaConfigurar from "@/components/sections/maquinas/modelo/CtaConfigurar";
import { getDictionary } from "@/lib/i18n/dictionary";
import { isValidLocale, LOCALES, type Locale } from "@/lib/i18n/locales";

type Props = {
  params: Promise<{ lang: string; linha: string; modelo: string }>;
};

export function generateStaticParams() {
  return LOCALES.flatMap((l) =>
    MACHINE_LINE_DETAILS.flatMap((line) =>
      line.models.map((model) => ({ lang: l.code, linha: line.slug, modelo: model.slug }))
    )
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { linha, modelo } = await params;
  const found = getMachineModel(linha, modelo);

  if (!found || !found.model.specs) {
    return { title: "Máquinas | Injectra" };
  }

  return {
    title: `${found.model.name} | Injectra`,
    description: found.model.specs.tecnologia,
  };
}

export default async function ModeloMaquina({ params }: Props) {
  const { lang, linha, modelo } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale: Locale = lang;

  const found = getMachineModel(linha, modelo);

  if (!found) notFound();
  const { line, model } = found;
  if (!model.specs) notFound();

  const dict = await getDictionary(locale);

  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header dict={dict} />
      <main className="flex w-full flex-1 flex-col items-center">
        <Hero line={line} model={model} specs={model.specs} dict={dict} />
        <Comparativo line={line} specs={model.specs} dict={dict} />
        <AplicacoesBeneficios items={line.applicationsAndBenefits} dict={dict} />
        <CtaConfigurar model={model} dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}
