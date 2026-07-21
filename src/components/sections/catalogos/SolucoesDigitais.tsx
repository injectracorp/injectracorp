import Section from "@/components/layout/Section";
import CatalogCard, { CatalogItem } from "./CatalogCard";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7222:6991).
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
];

export default function SolucoesDigitais() {
  return (
    <Section innerClassName="gap-5">
      {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
      <h2 className="w-full text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
        Soluções Digitais e Automação
      </h2>
      <div className="flex w-full flex-wrap items-stretch gap-5">
        {ITEMS.map((item) => (
          <CatalogCard key={item.name} {...item} />
        ))}
      </div>
    </Section>
  );
}
