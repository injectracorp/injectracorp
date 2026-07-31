import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7191:3821).
const STATS = [
  { icon: "/assets/experience-center/icon-visitas.svg", value: "+2.000" },
  { icon: "/assets/experience-center/icon-testes-aplicacao-stat.svg", value: "+1.500" },
  { icon: "/assets/experience-center/icon-clientes-satisfeitos.svg", value: "+95%" },
  { icon: "/assets/experience-center/icon-especialistas.svg", value: "+30" },
];

export default function Diferenciais({ dict }: { dict: Dictionary }) {
  const t = dict.experienceCenter.diferenciais;
  const stats: { label: string }[] = t.stats;

  return (
    <Section className="bg-bg-cinza" innerClassName="flex-col gap-10 lg:flex-row lg:flex-wrap">
      <div className="flex max-w-[510px] flex-1 flex-col items-start gap-5">
        {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
        <h2 className="text-[26px] font-bold leading-[28px] tracking-normal text-dark-blue">
          {t.title}
        </h2>
      </div>

      <div className="flex flex-1 flex-wrap items-center justify-center gap-10">
        {stats.map((stat, index) => (
          <div key={stat.label} className="flex items-center gap-10">
            {index > 0 && <span className="h-[120px] w-px shrink-0 bg-border-line-bd" />}
            <div className="flex min-w-[110px] flex-1 flex-col items-center justify-center gap-5">
              <Image src={STATS[index].icon} alt="" width={40} height={40} />
              <div className="flex flex-col items-center gap-[15px] text-center">
                {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
                <span className="text-lg font-bold leading-[22px] tracking-normal text-azul-claro-plus">
                  {STATS[index].value}
                </span>
                {/* Desc 14 — 14px/16px, 55 Roman (400) */}
                <span className="text-sm font-normal leading-4 tracking-normal text-texto">
                  {stat.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
