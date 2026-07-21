import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/robotica/Banner";
import Solucoes from "@/components/sections/robotica/Solucoes";
import Capacidade from "@/components/sections/robotica/Capacidade";
import Aplicacoes from "@/components/sections/robotica/Aplicacoes";
import Integracao from "@/components/sections/robotica/Integracao";
import Comparativo from "@/components/sections/robotica/Comparativo";
import CTA from "@/components/sections/robotica/CTA";
import TrustBar from "@/components/sections/robotica/TrustBar";

export const metadata: Metadata = {
  title: "Robótica | Injectra",
  description:
    "Soluções completas em robótica e automação para movimentação, manuseio, paletização e integração com máquinas Injectra.",
};

export default function Robotica() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center">
        <Banner />
        <Solucoes />
        <Capacidade />
        <Aplicacoes />
        <Integracao />
        <Comparativo />
        <CTA />
        <TrustBar />
      </main>
      <Footer />
    </div>
  );
}
