import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7199:4291).
export default function Agendamento() {
  return (
    <Section>
      <div
        className="flex w-full flex-wrap items-center gap-5 rounded-2xl bg-cover bg-center p-5"
        style={{ backgroundImage: "url(/assets/shared/panel-gradient-bg.png)" }}
      >
        <div className="flex min-w-[200px] max-w-[520px] flex-1 flex-col items-start gap-5">
          {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
          <h2 className="text-[26px] font-bold leading-[28px] tracking-normal text-dark-blue">
            Agende sua experiência agora
          </h2>
          {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
          <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
            Viva a tecnologia Injectra na prática e descubra como podemos
            levar sua produção para o próximo nível.
          </p>
          <div className="flex w-full flex-wrap items-center gap-5">
            <a
              href="#contato"
              className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md bg-azul-claro-plus px-[15px] py-2.5 text-base font-bold leading-[normal] text-wt transition-opacity hover:opacity-90"
            >
              Agendar uma Visita
              <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
            </a>
            <Link
              href="/fale-com-especialista"
              className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border border-azul-claro bg-wt px-[15px] py-2.5 text-base font-bold leading-[normal] text-azul-claro transition-colors hover:bg-bg-light-clean"
            >
              Falar com um Especialista
              <Image className="object-contain" src="/assets/shared/arrow-side-blue-light.svg" alt="" width={9} height={9} />
            </Link>
          </div>
        </div>
        <div className="min-h-[135px] min-w-[200px] flex-1" />
      </div>
    </Section>
  );
}
