import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/sobre-nos/Banner";
import QuemSomos from "@/components/sections/sobre-nos/QuemSomos";
import GrupoInterfy from "@/components/sections/sobre-nos/GrupoInterfy";
import MissaoVisaoValores from "@/components/sections/sobre-nos/MissaoVisaoValores";
import Ecossistema from "@/components/sections/sobre-nos/Ecossistema";
import CTA from "@/components/sections/sobre-nos/CTA";

export const metadata: Metadata = {
  title: "Sobre Nós | Injectra",
  description:
    "A Injectra Corporation é uma empresa americana focada em máquinas injetoras, robótica, software industrial, IoT, cloud e inteligência artificial.",
};

export default function SobreNos() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center">
        <Banner />
        <QuemSomos />
        <GrupoInterfy />
        <MissaoVisaoValores />
        <Ecossistema />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
