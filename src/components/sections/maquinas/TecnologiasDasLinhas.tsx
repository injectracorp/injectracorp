import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7110:3291 "Tecnologias das Linhas").
// O ícone de cada tag acompanha o texto correspondente em
// dict.maquinas.tecnologiasDasLinhas.tags (mesma ordem/índice).
const TAG_ICONS = [
  "/assets/maquinas/tag-hidraulica.svg",
  "/assets/maquinas/tag-eletrica.svg",
  "/assets/maquinas/tag-hibrida.svg",
  "/assets/maquinas/tag-robotica.svg",
  "/assets/maquinas/tag-injectra-ai.svg",
  "/assets/maquinas/tag-iot.svg",
  "/assets/maquinas/tag-analytics.svg",
  "/assets/maquinas/tag-mobile.svg",
  "/assets/maquinas/tag-assistencia.svg",
];

export default function TecnologiasDasLinhas({ dict }: { dict: Dictionary }) {
  const t = dict.maquinas.tecnologiasDasLinhas;
  return (
    <Section>
      <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
        {t.tags.map((label: string, i: number) => (
          <div
            key={label}
            className="flex min-w-[140px] flex-1 flex-col items-center justify-center gap-5 rounded-2xl bg-bg-cinza p-5"
          >
            <Image className="object-contain" src={TAG_ICONS[i]} alt="" width={40} height={40} />
            {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
            <span className="w-full text-center text-base font-bold leading-5 tracking-normal text-dark-blue">
              {label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
