import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7233:5886).
const STATS_VALUES = ["+50", "+20", "+1000", "+15 anos"];

// A tira de selos é a mesma da INDÚSTRIA (TrustBar.tsx), EXPERIENCE CENTER
// (Confianca.tsx) e CATÁLOGOS (CTA.tsx).
const TRUST_ICONS = [
  "/assets/footer/usa-flag.svg",
  "/assets/shared/icon-presenca-americas.svg",
  "/assets/shared/icon-experiencia-anos.svg",
  "/assets/shared/icon-suporte-247.svg",
  "/assets/shared/icon-sustentabilidade.svg",
];

export default function CTA({ dict }: { dict: Dictionary }) {
  const t = dict.representantes.cta;
  const stats = STATS_VALUES.map((value: string, index: number) => ({
    value,
    label: t.stats[index].label,
  }));
  const trustItems = TRUST_ICONS.map((icon: string, index: number) => ({
    icon,
    title: t.trustItems[index].title,
    description: t.trustItems[index].description,
  }));

  return (
    <Section innerClassName="gap-10">
      <div className="flex w-full flex-wrap items-center gap-10 rounded-2xl bg-bg-cinza p-10">
        <span className="flex size-[110px] shrink-0 items-center justify-center rounded-full border-[0.5px] border-azul-claro-plus bg-azul-claro-plus p-7">
          <Image src="/assets/representantes/icon-pessoas.svg" alt="" width={46} height={46} />
        </span>
        <div className="flex min-w-[200px] max-w-[389px] flex-1 flex-col items-start gap-5">
          {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
          <h2 className="w-full text-[26px] font-bold leading-[28px] tracking-normal text-dark-blue">
            {t.title}
          </h2>
          {/* Texto menor 16 — 16px/20px, 55 Roman (400) */}
          <p className="w-full text-base font-normal leading-5 tracking-normal text-texto">
            {t.description}
          </p>
        </div>
        <div className="flex flex-1 flex-wrap items-center justify-end gap-5">
          {stats.map((stat) => (
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

      <div className="flex w-full flex-wrap items-center justify-center gap-5 rounded-2xl bg-bg-cinza px-5 py-10">
        {trustItems.map((item) => (
          <div key={item.title} className="flex min-w-[180px] flex-1 items-center gap-5">
            <Image src={item.icon} alt="" width={40} height={40} className="shrink-0 object-contain" />
            <div className="flex flex-1 flex-col items-start gap-2.5">
              {/* Label 14 — 14px/13px, 85 Heavy (700) */}
              <span className="w-full text-sm font-bold leading-[13px] tracking-normal text-dark-blue">
                {item.title}
              </span>
              {/* Desc 14 — 14px/14px, 55 Roman (400) */}
              <p className="w-full text-sm font-normal leading-[14px] tracking-normal text-texto">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
