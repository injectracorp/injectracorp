import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7199:4497).
const ICONS = [
  "/assets/experience-center/icon-atendimento-personalizado.svg",
  "/assets/experience-center/icon-solucoes-adaptadas.svg",
  "/assets/experience-center/icon-tecnologia-ultima-geracao.svg",
  "/assets/experience-center/icon-ambiente-moderno.svg",
  "/assets/experience-center/icon-resultados-reais.svg",
];

export default function Esperar({ dict }: { dict: Dictionary }) {
  const t = dict.experienceCenter.esperar;
  const items: { label: string }[] = t.items;

  return (
    <Section className="bg-bg-cinza" innerClassName="gap-10">
      <h2 className="w-full text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
        {t.title}
      </h2>

      <div className="flex w-full flex-wrap items-start justify-center gap-10">
        {items.map((item, index) => (
          <div
            key={item.label}
            className="flex min-w-[180px] flex-1 flex-col items-center gap-5"
          >
            <Image src={ICONS[index]} alt="" width={50} height={50} />
            {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
            <span className="min-h-[35px] w-full text-center text-lg font-bold leading-[22px] tracking-normal text-dark-blue">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
