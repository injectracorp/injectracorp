import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/contato/Banner";
import Formulario from "@/components/sections/contato/Formulario";
import Presenca from "@/components/sections/contato/Presenca";
import Cta from "@/components/sections/contato/Cta";
import TrustBar from "@/components/sections/contato/TrustBar";

export const metadata: Metadata = {
  title: "Contato | Injectra",
  description:
    "Fale com a Injectra: telefones, e-mails, endereço e canais de atendimento para máquinas, robótica, plataforma AI e consultoria industrial.",
};

export default function Contato() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center">
        <Banner />
        <Formulario />
        <Presenca />
        <Cta />
        <TrustBar />
      </main>
      <Footer />
    </div>
  );
}
