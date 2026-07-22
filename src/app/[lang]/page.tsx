import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Pillars from "@/components/sections/Pillars";
import AboutEcosystem from "@/components/sections/AboutEcosystem";
import MachineLines from "@/components/sections/MachineLines";
import Capacidade from "@/components/sections/Capacidade";
import SetoresIndustriais from "@/components/sections/SetoresIndustriais";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/dictionary";
import { isValidLocale, LOCALES, type Locale } from "@/lib/i18n/locales";

export function generateStaticParams() {
  return LOCALES.map((l) => ({ lang: l.code }));
}

type Props = { params: Promise<{ lang: string }> };

export default async function Home({ params }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = await getDictionary(locale);

  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      <Header dict={dict} />
      <main className="flex w-full flex-1 flex-col items-center">
        <Hero dict={dict} />
        <Pillars dict={dict} />
        <AboutEcosystem dict={dict} />
        <MachineLines dict={dict} />
        <Capacidade dict={dict} />
        <SetoresIndustriais dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}
