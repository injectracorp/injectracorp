import Section from "@/components/layout/Section";
import CatalogCard from "./CatalogCard";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Cores extraídas via Figma MCP (get_design_context, node 7222:6991) — nome e
// descrição de cada item vêm de dict.catalogos.solucoesDigitais.items, na
// mesma ordem.
const COLORS = ["var(--color-prime-ip)", "var(--color-speed-is)"];

export default function SolucoesDigitais({ dict }: { dict: Dictionary }) {
  return (
    <Section innerClassName="gap-5">
      {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
      <h2 className="w-full text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
        {dict.catalogos.solucoesDigitais.title}
      </h2>
      <div className="flex w-full flex-wrap items-stretch gap-5">
        {dict.catalogos.solucoesDigitais.items.map(
          (item: { name: string; description: string }, index: number) => (
            <CatalogCard
              key={item.name}
              name={item.name}
              description={item.description}
              color={COLORS[index]}
              dict={dict}
            />
          )
        )}
      </div>
    </Section>
  );
}
