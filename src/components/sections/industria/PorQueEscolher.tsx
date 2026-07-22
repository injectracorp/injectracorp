import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7186:4146).
const RAZOES_ICONS = [
  "/assets/industria/icon-tecnologia-avancada.svg",
  "/assets/industria/icon-automacao-inteligente.svg",
  "/assets/industria/icon-suporte-especializado.svg",
  "/assets/industria/icon-desempenho-comprovado.svg",
];

export default function PorQueEscolher({ dict }: { dict: Dictionary }) {
  const t = dict.industria.porQueEscolher;

  return (
    <Section className="bg-bg-cinza" innerClassName="gap-10">
      {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
      <h2 className="w-full text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
        {t.title}
      </h2>
      <div className="flex w-full flex-wrap items-center justify-center gap-10">
        {RAZOES_ICONS.map((icon, index) => {
          const razao = t.items[index];
          return (
            <div
              key={icon}
              className="flex min-w-[180px] flex-1 items-center gap-5"
            >
              <Image src={icon} alt="" width={50} height={50} className="shrink-0 object-contain" />
              <div className="flex flex-1 flex-col items-start gap-[15px]">
                {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
                <span className="w-full text-base font-bold leading-5 tracking-normal text-dark-blue">
                  {razao.title}
                </span>
                {/* Desc 14 — 14px/16px, 55 Roman (400) */}
                <p className="w-full text-sm font-normal leading-4 tracking-normal text-texto">
                  {razao.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
