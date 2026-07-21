import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/suporte/Banner";
import Solucoes from "@/components/sections/suporte/Solucoes";
import ComoFuncionaRepresentante from "@/components/sections/representantes/ComoFunciona";
import Atendimento from "@/components/sections/suporte/Atendimento";
import ComoFunciona from "@/components/sections/suporte/ComoFunciona";
import Pecas from "@/components/sections/suporte/Pecas";
import NossasExperiencias from "@/components/sections/representantes/NossasExperiencias";
import CTA from "@/components/sections/representantes/CTA";

export const metadata: Metadata = {
  title: "Suporte | Injectra",
  description:
    "Suporte completo e especializado Injectra: assistência técnica, garantia, manuais, downloads, FAQ e solicitação de peças originais.",
};

export default function Suporte() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center">
        <Banner />
        <Solucoes />
        <ComoFuncionaRepresentante />
        <Atendimento />
        <ComoFunciona />
        <Pecas />
        <NossasExperiencias />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
