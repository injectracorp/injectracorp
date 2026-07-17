import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/industria/Banner";
import Segmentos from "@/components/sections/industria/Segmentos";
import PorQueEscolher from "@/components/sections/industria/PorQueEscolher";
import Recursos from "@/components/sections/industria/Recursos";
import TrustBar from "@/components/sections/industria/TrustBar";

export const metadata: Metadata = {
  title: "Indústria | Injectra",
  description:
    "A Injectra oferece máquinas, robótica e plataformas inteligentes para aumentar produtividade, qualidade e competitividade em diferentes setores industriais.",
};

export default function Industria() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center">
        <Banner />
        <Segmentos />
        <PorQueEscolher />
        <Recursos />
        <TrustBar />
      </main>
      <Footer />
    </div>
  );
}
