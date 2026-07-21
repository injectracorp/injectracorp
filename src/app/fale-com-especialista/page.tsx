import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/fale-com-especialista/Banner";
import ComoAjudamos from "@/components/sections/fale-com-especialista/ComoAjudamos";
import ComoFunciona from "@/components/sections/fale-com-especialista/ComoFunciona";
import Contato from "@/components/sections/fale-com-especialista/Contato";
import Cta from "@/components/sections/fale-com-especialista/Cta";
import TrustBar from "@/components/sections/fale-com-especialista/TrustBar";

export const metadata: Metadata = {
  title: "Fale com um Especialista | Injectra",
  description:
    "Consultoria comercial, técnica e de engenharia da Injectra para ajudar sua operação a escolher a solução ideal.",
};

export default function FaleComEspecialista() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center">
        <Banner />
        <ComoAjudamos />
        <ComoFunciona />
        <Contato />
        <Cta />
        <TrustBar />
      </main>
      <Footer />
    </div>
  );
}
