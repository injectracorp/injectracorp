import Section from "@/components/layout/Section";
import CatalogCard from "./CatalogCard";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Mesmas cores da seção "Nossas Linhas de Máquinas" da HOME (MachineLines.tsx)
// — extraídas via Figma MCP (node 7222:6662). Nome e descrição de cada item
// vêm de dict.catalogos.linhasMaquinas.items, na mesma ordem.
const COLORS = [
  "var(--color-prime-ip)",
  "var(--color-speed-is)",
  "var(--color-velocity-iv)",
  "var(--color-form-if)",
  "var(--color-neo-ex-ie)",
  "var(--color-atlas-ia)",
  "var(--color-hydro-ih)",
  "var(--color-titan-it)",
  "var(--color-max-im)",
  "var(--color-equora-iq)",
];

export default function LinhasMaquinas({ dict }: { dict: Dictionary }) {
  return (
    <Section innerClassName="gap-5">
      {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
      <h2 className="w-full text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
        {dict.catalogos.linhasMaquinas.title}
      </h2>
      <div className="flex w-full flex-wrap items-stretch gap-5">
        {dict.catalogos.linhasMaquinas.items.map(
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
