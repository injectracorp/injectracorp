import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/plataforma-ai/Banner";
import Solucoes from "@/components/sections/plataforma-ai/Solucoes";
import Fluxo from "@/components/sections/plataforma-ai/Fluxo";
import Recursos from "@/components/sections/maquinas/Recursos";
import Confianca from "@/components/sections/experience-center/Confianca";

export const metadata: Metadata = {
  title: "Plataforma AI | Injectra",
  description:
    "A Plataforma Injectra AI conecta máquinas, pessoas e processos em um ecossistema inteligente para aumentar produtividade, reduzir paradas e gerar decisões em tempo real.",
};

export default function PlataformaAi() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center">
        <Banner />
        <Solucoes />
        <Fluxo />
        <Recursos />
        <Confianca />
      </main>
      <Footer />
    </div>
  );
}
