import Section from "@/components/layout/Section";
import CatalogCard, { CatalogItem } from "./CatalogCard";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7222:5157).
const ITEMS: CatalogItem[] = [
  {
    name: "Catálogo Geral",
    color: "var(--color-azul-claro-plus)",
    description: "Alta precisão e versatilidade para aplicações gerais.",
  },
];

export default function CatalogosGerais() {
  return (
    <Section innerClassName="gap-5">
      {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
      <h2 className="w-full text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
        Catálogos Gerais
      </h2>
      <div className="flex w-full flex-wrap items-stretch gap-5">
        {ITEMS.map((item) => (
          <CatalogCard key={item.name} {...item} />
        ))}
      </div>
    </Section>
  );
}
