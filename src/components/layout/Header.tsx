"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/components/Logo";
import { MenuIcon, CloseIcon } from "@/components/icons";

// Itens exatos extraídos via Figma MCP (get_design_context, node 5057:1680).
const NAV_ITEMS = [
  "Soluções",
  "Máquinas",
  "Injectra AI",
  "Experience Center",
  "Representantes",
  "Empresa",
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="box-border flex w-full flex-col items-center bg-wt">
      <div className="flex h-20 w-full max-w-[1400px] items-center justify-between gap-2 px-5 xl:justify-center xl:gap-5">
        <a href="#top" className="flex shrink-0 items-center pr-5" aria-label="Injectra — início">
          <Logo />
        </a>

        <nav className="hidden flex-1 flex-nowrap items-center justify-center gap-0.5 px-2 xl:flex 2xl:px-[70px]">
          {NAV_ITEMS.map((label) => (
            <button
              key={label}
              type="button"
              className="flex max-w-[160px] shrink-0 items-center justify-center whitespace-nowrap rounded px-2.5 py-2 text-sm font-bold leading-[17px] tracking-normal text-texto transition-colors hover:bg-bg-light-clean hover:text-azul-claro 2xl:px-[15px]"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center justify-end gap-3 pl-2 xl:flex xl:gap-5 xl:pl-5">
          <button
            type="button"
            className="flex items-center gap-1.5 whitespace-nowrap rounded border border-border-line-bd p-2.5 text-sm font-bold text-texto hover:text-azul-claro"
          >
            <Image src="/assets/header/idioma-icon.svg" alt="" width={18} height={18} />
            BR
            <Image src="/assets/header/arrow-down.svg" alt="" width={10} height={10} />
          </button>
          <a
            href="#contato"
            className="flex h-10 shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-[15px] text-sm font-bold text-wt transition-opacity hover:opacity-90"
            style={{ backgroundImage: "var(--gradient-cta-header)" }}
          >
            Solicitar Cotação
            <Image src="/assets/header/arrow-side.svg" alt="" width={9} height={9} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 shrink-0 items-center justify-center text-dark-blue xl:hidden"
          aria-label="Abrir menu"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-wt p-5 xl:hidden">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center text-dark-blue"
              aria-label="Fechar menu"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="mt-8 flex flex-col gap-1">
            {NAV_ITEMS.map((label) => (
              <button
                key={label}
                type="button"
                className="flex items-center rounded-md px-4 py-3 text-left text-base font-bold text-texto hover:bg-bg-light-clean"
              >
                {label}
              </button>
            ))}
          </nav>
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-8 flex h-11 items-center justify-center gap-2.5 rounded-full px-4 text-sm font-bold text-wt"
            style={{ backgroundImage: "var(--gradient-cta-header)" }}
          >
            Solicitar Cotação
            <Image src="/assets/header/arrow-side.svg" alt="" width={9} height={9} />
          </a>
        </div>
      )}
    </header>
  );
}
