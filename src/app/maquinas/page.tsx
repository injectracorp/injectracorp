import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/maquinas/Banner";
import Seletor from "@/components/sections/maquinas/Seletor";
import Comparativo from "@/components/sections/maquinas/Comparativo";
import Tecnologias from "@/components/sections/maquinas/Tecnologias";
import Recursos from "@/components/sections/maquinas/Recursos";

export const metadata: Metadata = {
  title: "Máquinas | Injectra",
  description:
    "Nove linhas de máquinas hidráulicas e elétricas completas, desenvolvidas para máxima performance, precisão e eficiência em qualquer aplicação.",
};

export default function Maquinas() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center">
        <Banner />
        <Seletor />
        <Comparativo />
        <Tecnologias />
        <Recursos />
      </main>
      <Footer />
    </div>
  );
}
