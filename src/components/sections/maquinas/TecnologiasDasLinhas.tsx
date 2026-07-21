import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7110:3291 "Tecnologias das Linhas").
const TAGS = [
  { icon: "/assets/maquinas/tag-hidraulica.svg", label: "Hidráulica" },
  { icon: "/assets/maquinas/tag-eletrica.svg", label: "100% Elétrica" },
  { icon: "/assets/maquinas/tag-hibrida.svg", label: "Híbrida" },
  { icon: "/assets/maquinas/tag-robotica.svg", label: "Robótica" },
  { icon: "/assets/maquinas/tag-injectra-ai.svg", label: "Injectra AI" },
  { icon: "/assets/maquinas/tag-iot.svg", label: "IoT Industrial" },
  { icon: "/assets/maquinas/tag-analytics.svg", label: "OEE & Analyticsv" },
  { icon: "/assets/maquinas/tag-mobile.svg", label: "App Mobile" },
  { icon: "/assets/maquinas/tag-assistencia.svg", label: "Assistência Técnica" },
];

export default function TecnologiasDasLinhas() {
  return (
    <Section>
      <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
        {TAGS.map((tag) => (
          <div
            key={tag.label}
            className="flex min-w-[140px] flex-1 flex-col items-center justify-center gap-5 rounded-2xl bg-bg-cinza p-5"
          >
            <Image className="object-contain" src={tag.icon} alt="" width={40} height={40} />
            {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
            <span className="w-full text-center text-base font-bold leading-5 tracking-normal text-dark-blue">
              {tag.label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
