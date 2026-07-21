import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/sections/representantes/Banner";
import Beneficios from "@/components/sections/representantes/Beneficios";
import ComoFunciona from "@/components/sections/representantes/ComoFunciona";
import NossasExperiencias from "@/components/sections/representantes/NossasExperiencias";
import CTA from "@/components/sections/representantes/CTA";

export const metadata: Metadata = {
  title: "Representantes | Injectra",
  description:
    "Programa de representantes Injectra: expansão comercial, suporte completo e parceria para levar tecnologia industrial de ponta para sua região.",
};

export default function Representantes() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center">
        <Banner />
        <Beneficios />
        <ComoFunciona />
        <NossasExperiencias />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
