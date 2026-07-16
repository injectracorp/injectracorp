import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Pillars from "@/components/sections/Pillars";
import AboutEcosystem from "@/components/sections/AboutEcosystem";
import MachineLines from "@/components/sections/MachineLines";
import Capacidade from "@/components/sections/Capacidade";
import SetoresIndustriais from "@/components/sections/SetoresIndustriais";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center">
        <Hero />
        <Pillars />
        <AboutEcosystem />
        <MachineLines />
        <Capacidade />
        <SetoresIndustriais />
      </main>
      <Footer />
    </div>
  );
}
