import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/experience-center/Banner";
import Experiencias from "@/components/sections/experience-center/Experiencias";
import Diferenciais from "@/components/sections/experience-center/Diferenciais";
import Agendamento from "@/components/sections/experience-center/Agendamento";
import Esperar from "@/components/sections/experience-center/Esperar";
import Confianca from "@/components/sections/experience-center/Confianca";

export const metadata: Metadata = {
  title: "Experience Center | Injectra",
  description:
    "O Experience Center Injectra foi criado para que você veja, teste e comprove na prática como nossas soluções podem elevar a produtividade, a qualidade e a competividade da sua indústria.",
};

export default function ExperienceCenter() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center">
        <Banner />
        <Experiencias />
        <Diferenciais />
        <Agendamento />
        <Esperar />
        <Confianca />
      </main>
      <Footer />
    </div>
  );
}
