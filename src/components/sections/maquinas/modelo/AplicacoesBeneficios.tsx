import Image from "next/image";
import Section from "@/components/layout/Section";
import type { ApplicationBenefit } from "@/data/machineModels";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7234:6819).
// `items` traz apenas o ícone e a chave estável de cada card (dados
// estruturais de machineModels.ts); o título/descrição de cada um vive em
// dict.maquinas.modelo.aplicacoesBeneficios.items[item.key].

export default function AplicacoesBeneficios({
  items,
  dict,
}: {
  items: ApplicationBenefit[];
  dict: Dictionary;
}) {
  const t = dict.maquinas.modelo.aplicacoesBeneficios;
  return (
    <Section innerClassName="gap-10">
      <div className="flex w-full flex-col items-start gap-5">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          {t.title}
        </h2>
        <span className="h-0.5 w-[60px] rounded-full" style={{ background: "var(--gradient-brand)" }} />
      </div>

      <div className="flex w-full flex-wrap items-start justify-center gap-5">
        {items.map((item) => {
          const text = t.items[item.key];
          return (
            <div key={item.key} className="flex min-w-[180px] flex-1 flex-col items-start gap-5">
              <div className="flex w-full items-center gap-5">
                <Image src={item.icon} alt="" width={40} height={40} className="shrink-0 object-contain" />
                {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
                <span className="flex-1 text-base font-bold leading-5 tracking-normal text-dark-blue">
                  {text.title}
                </span>
              </div>
              {/* Desc 14 — 14px/16px, 55 Roman (400) */}
              <p className="w-full text-sm font-normal leading-4 tracking-normal text-texto">
                {text.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
