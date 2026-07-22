import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7270:8228).
const ETAPA_ICONS = [
  "/assets/footer/icon-doc.svg",
  "/assets/representantes/icon-pessoas.svg",
  "/assets/solicitar-cotacao/icon-doc-check.svg",
  "/assets/contato/icon-especialista-certificado.svg",
];

export default function EnvioDaProposta({ dict }: { dict: Dictionary }) {
  const t = dict.solicitarCotacao.envioDaProposta;
  const etapas = ETAPA_ICONS.map((icon: string, index: number) => ({
    icon,
    ...(t.etapas[index] as { title: string; description: string }),
  }));

  return (
    <Section className="bg-bg-cinza" innerClassName="gap-5">
      <div className="flex w-full flex-col items-start gap-5">
        {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
        <h2 className="w-full text-2xl font-bold leading-7 tracking-normal text-azul-claro-plus">
          {t.title}
        </h2>
        <span
          className="h-0.5 w-[60px] rounded-full"
          style={{ background: "var(--gradient-injectra)" }}
        />
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-5">
        {etapas.map((etapa, index) => (
          <div
            key={etapa.title}
            className="relative flex min-h-[150px] min-w-[180px] flex-1 items-center gap-5 rounded-2xl bg-wt px-5 py-10"
          >
            <span className="absolute left-2.5 top-2.5 flex size-6 items-center justify-center rounded-full bg-azul-claro-plus text-base font-bold leading-5 text-wt">
              {index + 1}
            </span>
            <Image src={etapa.icon} alt="" width={40} height={40} className="shrink-0 object-contain" />
            <div className="flex flex-1 flex-col items-start gap-2.5">
              {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
              <h3 className="w-full text-lg font-bold leading-[22px] tracking-normal text-prime-ip">
                {etapa.title}
              </h3>
              {/* Desc 14 — 14px/16px, 55 Roman (400) */}
              <p className="w-full text-sm font-normal leading-4 tracking-normal text-texto">
                {etapa.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
