import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7008:2551).
// Cada pilar usa a cor de uma linha de máquina específica (atualizado no Figma).
// Textos (traduzíveis) vivem em dict.home.pillars.items, na mesma ordem.
const PILLARS_STYLE = [
  { icon: "/assets/pillars/machine.svg", bg: "bg-[#eef5fd]", color: "var(--color-prime-ip)" },
  { icon: "/assets/pillars/robotica.svg", bg: "bg-[#f3faf3]", color: "var(--color-hydro-ih)" },
  { icon: "/assets/pillars/ia.svg", bg: "bg-[#f6f3fc]", color: "var(--color-titan-it)" },
  { icon: "/assets/pillars/iot.svg", bg: "bg-[#fcf3f7]", color: "var(--color-max-im)" },
  { icon: "/assets/pillars/software.svg", bg: "bg-[#fef7ef]", color: "var(--color-atlas-ia)" },
  { icon: "/assets/pillars/servicos.svg", bg: "bg-[#f4fbfb]", color: "var(--color-form-if)" },
];

export default function Pillars({ dict }: { dict: Dictionary }) {
  const t = dict.home.pillars;
  const pillars = PILLARS_STYLE.map((style, i) => ({
    ...style,
    label: t.items[i].label,
    description: t.items[i].description,
  }));
  return (
    <Section innerClassName="gap-5">
      <div className="flex w-full flex-col items-center gap-5 text-center">
        {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
        <span className="text-lg font-normal leading-[22px] tracking-normal text-dark-blue">
          {t.eyebrow}
        </span>
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="max-w-3xl text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          {t.titlePrefix}<span className="text-gradient-brand">{t.titleHighlight}</span>
        </h2>
        <span
          className="h-[2px] w-[60px] rounded-full"
          style={{ background: "var(--gradient-brand)" }}
        />
      </div>

      {/* Cards sem largura máxima — só a mínima (216.67px, igual ao Figma) —
          para crescerem de forma responsiva e quebrar linha livremente. */}
      <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
        {pillars.map((pillar) => (
          <div
            key={pillar.label}
            className={`flex min-h-[235px] min-w-[216.67px] flex-1 flex-col items-center justify-center gap-5 rounded-2xl px-5 py-[30px] ${pillar.bg}`}
          >
            <Image src={pillar.icon} alt="" width={60} height={60} />
            {/* Subtítulo BK 20 — 20px/22px, 85 Heavy (700) */}
            <span
              className="text-xl font-bold leading-[22px] tracking-normal"
              style={{ color: pillar.color }}
            >
              {pillar.label}
            </span>
            {/* Desc 14 — 14px/16px, 55 Roman (400) */}
            <p className="text-center text-sm font-normal leading-4 tracking-normal text-texto">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
