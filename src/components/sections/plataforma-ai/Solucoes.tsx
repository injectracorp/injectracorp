import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7202:4575).
// Ícones fixos no código — title/description vêm de dict.plataformaAi.solucoes.items.
const SOLUCOES_ICONS = [
  "/assets/plataforma-ai/icon-dashboard-cloud.svg",
  "/assets/plataforma-ai/icon-app-mobile.svg",
  "/assets/plataforma-ai/icon-iot-industrial.svg",
  "/assets/plataforma-ai/icon-oee.svg",
  "/assets/plataforma-ai/icon-analiticas.svg",
  "/assets/plataforma-ai/icon-manutencao-preditiva.svg",
  "/assets/plataforma-ai/icon-alertas-inteligentes.svg",
  "/assets/plataforma-ai/icon-atualizacoes-ota.svg",
  "/assets/plataforma-ai/icon-injectra-ai.svg",
];

export default function Solucoes({ dict }: { dict: Dictionary }) {
  const t = dict.plataformaAi.solucoes;
  const solucoes = SOLUCOES_ICONS.map((icon, index) => ({
    icon,
    title: t.items[index].title,
    description: t.items[index].description,
  }));

  return (
    <Section innerClassName="gap-5">
      <div className="flex w-full flex-col items-start gap-5">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          {t.title}
        </h2>
        <span
          className="h-[2px] w-[60px] rounded-full"
          style={{ background: "var(--gradient-brand)" }}
        />
      </div>

      <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
        {solucoes.map((item) => (
          <div
            key={item.title}
            className="flex min-w-[240px] flex-1 flex-col items-center gap-5 rounded-2xl bg-bg-cinza px-5 py-[30px]"
          >
            <Image className="object-contain" src={item.icon} alt="" width={40} height={40} />
            <div className="flex w-full flex-col items-center gap-[15px]">
              {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
              <h3 className="min-h-[25px] w-full text-center text-lg font-bold leading-[22px] tracking-normal text-gradient-brand">
                {item.title}
              </h3>
              <span
                className="h-[3px] w-10 rounded-full"
                style={{ background: "var(--gradient-brand)" }}
              />
              {/* Texto menor 16 — 16px/20px, 55 Roman (400) */}
              <p className="min-h-[95px] w-full text-center text-base font-normal leading-5 tracking-normal text-texto">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
