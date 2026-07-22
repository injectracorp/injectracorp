import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7222:8332).
const STEP_META = [
  { number: 1, icon: "/assets/fale-com-especialista/icon-envie-necessidade.svg" },
  { number: 2, icon: "/assets/fale-com-especialista/icon-equipe-analisa.svg" },
  { number: 3, icon: "/assets/fale-com-especialista/icon-melhor-solucao.svg" },
  { number: 4, icon: "/assets/fale-com-especialista/icon-agendamento-reuniao.svg" },
];

type Props = {
  dict: Dictionary;
};

export default function ComoFunciona({ dict }: Props) {
  const t = dict.faleComEspecialista.comoFunciona;
  const steps = (t.steps as { title: string; description: string }[]).map(
    (step, index) => ({ ...step, ...STEP_META[index] })
  );

  return (
    <Section innerClassName="gap-5" className="bg-bg-cinza">
      <div className="flex flex-col items-start gap-5">
        {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
        <h2 className="text-[26px] font-bold leading-[28px] tracking-normal text-dark-blue">
          {t.title}
        </h2>
        {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
        <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
          {t.subtitle}
        </p>
      </div>

      <div className="flex w-full flex-wrap items-center justify-center gap-5">
        {steps.map((step, index) => (
          <div className="flex items-center gap-5" key={step.number}>
            <div className="flex min-w-[160px] flex-1 flex-col items-center gap-[30px]">
              <div className="flex flex-col items-center gap-2.5">
                <span className="flex size-6 items-center justify-center rounded-full bg-azul-claro-plus text-base font-bold leading-5 tracking-normal text-wt">
                  {step.number}
                </span>
                <div className="flex size-20 items-center justify-center rounded-full bg-wt p-5 shadow-[2px_2px_3px_0px_rgba(76,95,224,0.25)]">
                  <Image src={step.icon} alt="" width={30} height={30} />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2.5 text-center">
                {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
                <span className="text-base font-bold leading-5 tracking-normal text-azul-claro-plus">
                  {step.title}
                </span>
                {/* Desc 14 — 14px/16px, 55 Roman (400) */}
                <p className="text-sm font-normal leading-4 tracking-normal text-texto">
                  {step.description}
                </p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <Image
                src="/assets/fale-com-especialista/connector-arrow-long.svg"
                alt=""
                width={120}
                height={115}
                className="hidden shrink-0 sm:block"
              />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
