import Section from "@/components/layout/Section";
import CatalogCard, { CatalogItem } from "./CatalogCard";

// Mesmos dados/textos da seção "Nossas Linhas de Máquinas" da HOME
// (MachineLines.tsx) — conteúdo exato extraído via Figma MCP (node 7222:6662).
const ITEMS: CatalogItem[] = [
  {
    name: "PRIME - IP",
    color: "var(--color-prime-ip)",
    description: "Alta precisão e versatilidade para aplicações gerais.",
  },
  {
    name: "SPEED - IS",
    color: "var(--color-speed-is)",
    description: "Ciclos rápidos e máxima eficiência para alta produtividade.",
  },
  {
    name: "VELOCITY - IV",
    color: "var(--color-velocity-iv)",
    description:
      "Ultra alta velocidade e ciclos extremamente rápidos para máxima produtividade.",
  },
  {
    name: "FORM - IF",
    color: "var(--color-form-if)",
    description:
      "Soluções otimizadas para peças técnicas com alta precisão e acabamento.",
  },
  {
    name: "NEO EX - IE",
    color: "var(--color-neo-ex-ie)",
    description:
      "Linha elétrica de alta precisão, repetibilidade e eficiência energética.",
  },
  {
    name: "ATLAS - IA",
    color: "var(--color-atlas-ia)",
    description:
      "Especializada em caixas plásticas, palets e peças de grande porte. Estrutura robusta e alto desempenho.",
  },
  {
    name: "HYDRO - IH",
    color: "var(--color-hydro-ih)",
    description:
      "Sistema hidráulico de alta potência para aplicações exigentes e peças de grandes dimensões.",
  },
  {
    name: "TITAN - IT",
    color: "var(--color-titan-it)",
    description:
      "Potência extrema para moldes grandes e aplicações industriais de alta exigência.",
  },
  {
    name: "MAX - IM",
    color: "var(--color-max-im)",
    description: "Máxima capacidade e robustez para os maiores desafios da indústria.",
  },
  {
    name: "EQUORA - IQ",
    color: "var(--color-equora-iq)",
    description: "Híbrida, entregando alta eficiência energética e robustez.",
  },
];

export default function LinhasMaquinas() {
  return (
    <Section innerClassName="gap-5">
      {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
      <h2 className="w-full text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
        Linhas de Máquinas
      </h2>
      <div className="flex w-full flex-wrap items-stretch gap-5">
        {ITEMS.map((item) => (
          <CatalogCard key={item.name} {...item} />
        ))}
      </div>
    </Section>
  );
}
