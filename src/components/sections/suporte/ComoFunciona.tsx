import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7273:8832).
// Ícones permanecem no componente; title/description vêm de dict.suporte.comoFunciona.etapas.
const ETAPA_ICONS = [
  "/assets/suporte/icon-entre-em-contato-chat.svg",
  "/assets/suporte/icon-diagnostico-screen-search.svg",
  "/assets/capacidade/checkin.svg",
  "/assets/representantes/icon-pessoas.svg",
  "/assets/footer/icon-scale-graphic.svg",
];

export default function ComoFunciona({ dict }: { dict: Dictionary }) {
  const t = dict.suporte.comoFunciona;
  const etapas = t.etapas.map((etapa: { title: string; description: string }, index: number) => ({
    icon: ETAPA_ICONS[index],
    title: etapa.title,
    description: etapa.description,
  }));

  return (
    <Section className="bg-bg-cinza" innerClassName="gap-10">
      <div className="flex w-full flex-col items-start gap-5">
        {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
        <h2 className="w-full text-[26px] font-bold leading-[28px] tracking-normal text-dark-blue">
          {t.title}
        </h2>
        {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
        <p className="w-full text-lg font-normal leading-[22px] tracking-normal text-texto">
          {t.description}
        </p>
      </div>

      <div className="flex w-full flex-wrap items-start justify-center gap-5">
        {etapas.map((etapa: { icon: string; title: string; description: string }, index: number) => (
          <div key={etapa.title} className="flex flex-1 items-start">
            {index > 0 && (
              <Image
                src="/assets/suporte/connector-dashed.svg"
                alt=""
                width={110}
                height={11}
                className="mt-[35px] hidden shrink-0 sm:block"
              />
            )}
            <div className="flex min-w-[160px] flex-1 flex-col items-center gap-[30px]">
              <span className="flex size-20 shrink-0 items-center justify-center rounded-full bg-wt p-5 shadow-[2px_2px_3px_0px_rgba(76,95,224,0.25)]">
                <Image src={etapa.icon} alt="" width={30} height={30} />
              </span>
              <div className="flex flex-col items-center gap-2.5 text-center">
                {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
                <span className="w-full text-base font-bold leading-5 tracking-normal text-azul-claro-plus">
                  {etapa.title}
                </span>
                {/* Desc 14 — 14px/16px, 55 Roman (400) */}
                <span className="w-full text-sm font-normal leading-4 tracking-normal text-texto">
                  {etapa.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
