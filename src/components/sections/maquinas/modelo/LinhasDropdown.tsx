"use client";

import { useState } from "react";
import Link from "@/components/LocaleLink";
import { ChevronDownIcon } from "./icons";

export type LinhaDropdownItem = {
  slug: string;
  shortName: string;
  color: string;
  href: string;
};

// Dropdown do breadcrumb "Máquinas" na página de modelo — lista todas as
// linhas cadastradas em machineModels.ts para trocar de linha sem precisar
// voltar para /maquinas primeiro.
export default function LinhasDropdown({
  label,
  items,
  activeSlug,
}: {
  label: string;
  items: LinhaDropdownItem[];
  activeSlug: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative flex shrink-0 items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        className="flex items-center gap-1.5 text-lg font-normal leading-[22px] tracking-normal text-texto-sem-destaque-2 transition-colors hover:text-azul-claro-plus"
      >
        {label}
        <ChevronDownIcon className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 w-[220px] pt-3 sm:w-[300px]">
          <div className="grid grid-cols-1 gap-1 rounded-2xl border border-border-line-bd bg-wt p-2.5 shadow-lg sm:grid-cols-2">
            {items.map((item) => {
              const active = item.slug === activeSlug;
              return (
                <Link
                  key={item.slug}
                  href={item.href}
                  className={`flex items-center rounded-lg px-3 py-2 text-base font-bold leading-5 tracking-normal transition-colors ${
                    active ? "text-wt" : "text-texto hover:bg-bg-light-clean"
                  }`}
                  style={active ? { backgroundColor: item.color } : undefined}
                >
                  {item.shortName}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
