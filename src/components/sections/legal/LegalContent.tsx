import { ReactNode } from "react";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";
import type { LegalPageKey } from "./LegalBanner";

export type LegalNavItem = { id: string; label: string };

type LegalContentProps = {
  dict: Dictionary;
  page: LegalPageKey;
  /** Apenas os ids (âncoras) de navegação; os labels vêm de dict.legal.<page>.nav, na mesma ordem. */
  navIds: string[];
  children: ReactNode;
};

// Miolo padrão das páginas institucionais/legais: sidebar de navegação (TOC)
// sticky + artigo com as seções. Mesmo padrão estrutural usado nas páginas de
// Termos de Uso / Política de Privacidade de referência, com a identidade
// visual (cores, tipografia) do projeto Injectra.
export default function LegalContent({ dict, page, navIds, children }: LegalContentProps) {
  const navLabels: string[] = dict.legal[page].nav;
  const navItems: LegalNavItem[] = navIds.map((id, i) => ({ id, label: navLabels[i] }));
  const tocHeading = dict.legal.shared.tocHeading;

  return (
    <Section className="py-16" innerClassName="items-start gap-[60px]" direction="row">
      <aside className="hidden w-[260px] shrink-0 flex-col gap-2 self-start xl:sticky xl:top-[100px] xl:flex">
        <p className="mb-2 text-xs font-bold uppercase leading-4 tracking-[1px] text-texto-sem-destaque-2">
          {tocHeading}
        </p>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="border-l-2 border-transparent py-1 pl-3 text-sm font-normal leading-5 tracking-normal text-texto transition-colors hover:border-azul-claro hover:text-azul-claro"
          >
            {item.label}
          </a>
        ))}
      </aside>

      <article className="flex min-w-0 flex-1 flex-col gap-14">{children}</article>
    </Section>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="flex flex-col gap-6 scroll-mt-[100px]">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold leading-7 tracking-normal text-dark-blue sm:text-[28px] sm:leading-[34px]">
          {title}
        </h2>
        <span
          className="h-[3px] w-12 rounded-full"
          style={{ background: "var(--gradient-brand)" }}
        />
      </div>
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
}

export function LegalSubsection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-bold leading-[22px] tracking-normal text-azul-claro-plus">
        {title}
      </h3>
      {children}
    </div>
  );
}

export function LegalP({ children }: { children: ReactNode }) {
  return (
    <p className="text-base font-normal leading-[26px] tracking-normal text-texto">{children}</p>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-2.5 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="mt-2 size-1.5 shrink-0 rounded-full"
            style={{ background: "var(--gradient-brand)" }}
          />
          <span className="text-base font-normal leading-[26px] tracking-normal text-texto">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function LegalHighlight({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border-line-bd bg-bg-cinza p-8">
      {children}
    </div>
  );
}

export function LegalContactCard({
  dict,
  items,
}: {
  dict: Dictionary;
  items: { label: string; value: string }[];
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-border-line-bd bg-bg-cinza p-7">
      <p className="mb-4 text-base font-bold leading-5 tracking-normal text-dark-blue">
        {dict.legal.shared.contactCardTitle}
      </p>
      {items.map(({ label, value }) => (
        <div
          key={label}
          className="flex items-center gap-3 border-b border-border-line-bd py-2 last:border-0"
        >
          <span className="w-[90px] shrink-0 text-sm font-bold leading-4 tracking-normal text-dark-blue">
            {label}:
          </span>
          <span className="text-sm font-normal leading-4 tracking-normal text-texto">{value}</span>
        </div>
      ))}
    </div>
  );
}
