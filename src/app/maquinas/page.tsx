import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/maquinas/Banner";
import LinhasDeMaquinas from "@/components/sections/maquinas/LinhasDeMaquinas";
import ComoFunciona from "@/components/sections/maquinas/ComoFunciona";
import TecnologiasDasLinhas from "@/components/sections/maquinas/TecnologiasDasLinhas";
import Comparativo from "@/components/sections/maquinas/Comparativo";
import Tecnologias from "@/components/sections/maquinas/Tecnologias";
import Recursos from "@/components/sections/maquinas/Recursos";
import TrustBar from "@/components/sections/maquinas/TrustBar";

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
        <LinhasDeMaquinas />
        <ComoFunciona />
        <TecnologiasDasLinhas />
        <Comparativo />
        <Tecnologias />
        <Recursos />
        <TrustBar />
      </main>
      <Footer />
    </div>
  );
}
