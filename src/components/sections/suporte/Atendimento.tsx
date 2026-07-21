import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7273:8757).
const STATS = [
  { value: "+30", label: "Países atendidos" },
  { value: "+100", label: "Técnicos certificados" },
  { value: "+5.000", label: "Clientes satisfeitos" },
];

export default function Atendimento() {
  return (
    <Section>
      <div
        className="flex w-full flex-wrap items-center gap-10 rounded-2xl bg-cover bg-center p-10"
        style={{ backgroundImage: "url(/assets/suporte/banner-atendimento-bg.png)" }}
      >
        <div className="flex min-w-[280px] max-w-[430px] flex-1 flex-col items-start gap-5">
          {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
          <h2 className="w-full text-[26px] font-bold leading-[28px] tracking-normal text-dark-blue">
            Atendimento em toda América
          </h2>
          {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
          <p className="w-full text-lg font-normal leading-[22px] tracking-normal text-texto">
            Suporte local e distribuidores autorizados prontos para atender
            você onde estiver.
          </p>
          <a
            href="#"
            className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border border-azul-claro-plus bg-wt px-5 py-[15px] text-base font-bold leading-5 text-azul-claro-plus transition-colors hover:bg-bg-light-clean"
          >
            Ver pontos de atendimento
            <Image className="object-contain" src="/assets/shared/arrow-side-blue.svg" alt="" width={9} height={9} />
          </a>
        </div>
        <div className="flex flex-1 flex-wrap items-center justify-end gap-5">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex min-w-[140px] flex-1 flex-col items-start gap-2.5">
              {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
              <span className="w-full text-2xl font-extrabold leading-[30px] tracking-normal text-azul-claro-plus sm:text-[32px] sm:leading-[39px]">
                {stat.value}
              </span>
              {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
              <span className="w-full text-base font-bold leading-5 tracking-normal text-texto">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
