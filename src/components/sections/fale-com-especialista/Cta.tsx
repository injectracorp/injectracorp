import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7222:8811).
export default function Cta() {
  return (
    <Section innerClassName="gap-5">
      <div className="flex w-full flex-wrap items-center justify-center gap-10 rounded-2xl bg-bg-cinza p-10">
        <div className="flex min-w-[280px] flex-1 flex-col items-start gap-2.5">
          {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
          <h2 className="text-[26px] font-bold leading-[28px] tracking-normal text-dark-blue">
            Atendimento consultivo para acelerar sua decisão industrial.
          </h2>
          {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
          <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
            Fale com um especialista e descubra como a Injectra pode
            transformar sua produção com tecnologia e inteligência.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Link
            href="/solicitar-cotacao"
            className="flex min-h-[48px] items-center justify-center gap-2.5 rounded-md bg-azul-claro-plus px-5 py-[15px] text-sm font-bold leading-[17px] tracking-normal text-wt transition-opacity hover:opacity-90"
          >
            Solicitar Cotação
            <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
          </Link>
          <a
            href="#contato"
            className="flex min-h-[48px] items-center justify-center gap-2.5 rounded-md border border-azul-claro-plus bg-wt px-5 py-[15px] text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus transition-colors hover:bg-bg-light-clean"
          >
            Marcar Reunião
            <Image className="object-contain" src="/assets/shared/arrow-side-blue-light.svg" alt="" width={9} height={9} />
          </a>
        </div>
        <div className="relative h-[191px] w-[298px] shrink-0 overflow-hidden rounded-2xl">
          <Image
            src="/assets/fale-com-especialista/machine-cta.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
