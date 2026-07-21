import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getMachineModel } from "@/data/machineModels";
import Hero from "@/components/sections/maquinas/modelo/Hero";
import Comparativo from "@/components/sections/maquinas/modelo/Comparativo";
import AplicacoesBeneficios from "@/components/sections/maquinas/modelo/AplicacoesBeneficios";
import CtaConfigurar from "@/components/sections/maquinas/modelo/CtaConfigurar";

type Props = {
  params: Promise<{ linha: string; modelo: string }>;
};

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
  const { linha, modelo } = await params;
  const found = getMachineModel(linha, modelo);

  if (!found) notFound();
  const { line, model } = found;
  if (!model.specs) notFound();

  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center">
        <Hero line={line} model={model} specs={model.specs} />
        <Comparativo line={line} specs={model.specs} />
        <AplicacoesBeneficios items={line.applicationsAndBenefits} />
        <CtaConfigurar model={model} />
      </main>
      <Footer />
    </div>
  );
}
