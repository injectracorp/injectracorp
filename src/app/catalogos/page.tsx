import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/catalogos/Banner";
import CatalogosGerais from "@/components/sections/catalogos/CatalogosGerais";
import LinhasMaquinas from "@/components/sections/catalogos/LinhasMaquinas";
import SolucoesDigitais from "@/components/sections/catalogos/SolucoesDigitais";
import CTA from "@/components/sections/catalogos/CTA";

export const metadata: Metadata = {
  title: "Catálogos | Injectra",
  description:
    "Acesse os materiais técnicos e comerciais das linhas de máquinas, robótica e plataforma digital Injectra.",
};

export default function Catalogos() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center">
        <Banner />
        <CatalogosGerais />
        <LinhasMaquinas />
        <SolucoesDigitais />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
