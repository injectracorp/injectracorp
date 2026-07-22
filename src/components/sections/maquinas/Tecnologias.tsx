import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7110:3291).
// O ícone de cada item acompanha o item correspondente em
// dict.maquinas.tecnologias.items (mesma ordem/índice).
const TECNOLOGIA_ICONS = [
  "/assets/maquinas/icon-servo-drive.svg",
  "/assets/maquinas/icon-hidraulica-avancada.svg",
  "/assets/maquinas/icon-injecao-precisao.svg",
  "/assets/maquinas/icon-eficiencia-energetica.svg",
  "/assets/maquinas/icon-conectividade-total.svg",
  "/assets/maquinas/icon-seguranca-integrada.svg",
];

export default function Tecnologias({ dict }: { dict: Dictionary }) {
  const t = dict.maquinas.tecnologias;
  return (
    <Section innerClassName="gap-10">
      <div className="flex w-full flex-col items-start gap-5">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          {t.title}
        </h2>
        {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
        <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
          {t.subtitle}
        </p>
      </div>

      <div className="flex w-full flex-wrap items-start justify-center gap-5">
        {t.items.map((item: { title: string; description: string }, i: number) => (
          <div
            key={item.title}
            className="flex min-w-[180px] flex-1 flex-col items-center gap-5"
          >
            <div className="flex w-full items-center gap-5">
              <Image src={TECNOLOGIA_ICONS[i]} alt="" width={40} height={40} className="shrink-0" />
              {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
              <span className="flex-1 text-base font-bold leading-5 tracking-normal text-dark-blue">
                {item.title}
              </span>
            </div>
            {/* Desc 14 — 14px/16px, 55 Roman (400) */}
            <p className="w-full text-sm font-normal leading-4 tracking-normal text-texto">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
