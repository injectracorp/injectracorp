import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/solicitar-cotacao/Banner";
import FormularioInteligente from "@/components/sections/solicitar-cotacao/FormularioInteligente";
import Configurador from "@/components/sections/solicitar-cotacao/Configurador";
import EnvioDaProposta from "@/components/sections/solicitar-cotacao/EnvioDaProposta";
import PorQueEscolher from "@/components/sections/solicitar-cotacao/PorQueEscolher";
import Cta from "@/components/sections/solicitar-cotacao/Cta";
import TrustBar from "@/components/sections/solicitar-cotacao/TrustBar";

export const metadata: Metadata = {
  title: "Solicitar Cotação | Injectra",
  description:
    "Solicite uma proposta personalizada para máquinas, robótica e plataforma industrial Injectra.",
};

export default function SolicitarCotacao() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center">
        <Banner />
        <FormularioInteligente />
        <Configurador />
        <EnvioDaProposta />
        <PorQueEscolher />
        <Cta />
        <TrustBar />
      </main>
      <Footer />
    </div>
  );
}
