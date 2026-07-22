"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "@/components/LocaleLink";
import Logo from "@/components/Logo";
import LanguageSelector from "@/components/LanguageSelector";
import DirToggle from "@/components/DirToggle";
import { MenuIcon, CloseIcon } from "@/components/icons";
import { getNavColumns, type NavItem } from "@/data/navColumns";
import type { Dictionary } from "@/lib/i18n/dictionary";

function NavDropdown({ label, items }: { label: string; items: NavItem[] }) {
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
        className="flex max-w-[160px] shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded px-2.5 py-2 text-[clamp(12px,calc(8px+0.39vw),14px)] font-bold leading-[17px] tracking-normal text-texto transition-colors hover:text-azul-claro 2xl:px-[15px]"
      >
        {label}
        <Image
          src="/assets/header/arrow-down.svg"
          alt=""
          width={10}
          height={10}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 w-[360px] -translate-x-1/2 pt-3">
          <div className="flex flex-col gap-5 rounded-2xl border border-border-line-bd bg-wt p-5 shadow-lg">
            {items.map((item) => (
              <Link key={item.title} href={item.href} className="group flex w-full items-center gap-2.5">
                <Image src={item.icon} alt="" width={36} height={36} className="shrink-0 object-contain" />
                <div className="flex flex-1 flex-col items-start gap-1 text-texto">
                  <span className="text-base font-bold leading-5 tracking-normal transition-colors group-hover:text-azul-claro">
                    {item.title}
                  </span>
                  <span className="text-sm font-normal leading-4 tracking-normal transition-colors group-hover:text-azul-claro">
                    {item.description}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileNavSection({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: NavItem[];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center justify-between rounded-md px-4 py-3 text-left text-base font-bold text-texto transition-colors hover:text-azul-claro"
      >
        {label}
        <Image
          src="/assets/header/arrow-down.svg"
          alt=""
          width={10}
          height={10}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="flex flex-col gap-4 px-4 pb-3">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={onNavigate}
              className="group flex w-full items-center gap-2.5"
            >
              <Image src={item.icon} alt="" width={30} height={30} className="shrink-0 object-contain" />
              <div className="flex flex-1 flex-col items-start gap-0.5 text-texto">
                <span className="text-sm font-bold leading-5 tracking-normal transition-colors group-hover:text-azul-claro">
                  {item.title}
                </span>
                <span className="text-xs font-normal leading-4 tracking-normal transition-colors group-hover:text-azul-claro">
                  {item.description}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header({ dict }: { dict?: Dictionary }) {
  const [open, setOpen] = useState(false);

  const navColumns = getNavColumns(dict ?? {});
  const PRODUTOS_ITEMS = navColumns[0].items;
  const DROPDOWN_COLUMNS = navColumns.slice(1).map((column) => ({
    label: column.title.charAt(0) + column.title.slice(1).toLowerCase(),
    items: column.items,
  }));
  const header = dict?.shared?.header ?? {};

  return (
    <header className="sticky top-0 z-50 box-border flex w-full flex-col items-center bg-wt px-5">
      <div className="flex h-20 w-full max-w-[1400px] items-center justify-between gap-2 lg:justify-center lg:gap-5">
        <Link href="/" className="flex shrink-0 items-center pr-5" aria-label={header.logoAriaLabel}>
          <Logo />
        </Link>

        <nav className="hidden flex-1 flex-nowrap items-center justify-center gap-0.5 px-2 lg:flex 2xl:px-[70px]">
          {PRODUTOS_ITEMS.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="flex max-w-[160px] shrink-0 items-center justify-center whitespace-nowrap rounded px-2.5 py-2 text-[clamp(12px,calc(8px+0.39vw),14px)] font-bold leading-[17px] tracking-normal text-texto transition-colors hover:text-azul-claro 2xl:px-[15px]"
            >
              {item.title}
            </Link>
          ))}
          {DROPDOWN_COLUMNS.map((column) => (
            <NavDropdown key={column.label} label={column.label} items={column.items} />
          ))}
        </nav>

        <div className="hidden shrink-0 items-center justify-end gap-3 pl-2 lg:flex lg:gap-5 lg:pl-5">
          <LanguageSelector />
          <DirToggle />
          <Link
            href="/solicitar-cotacao"
            className="flex h-10 shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-[15px] text-sm font-bold text-wt transition-opacity hover:opacity-90"
            style={{ backgroundImage: "var(--gradient-cta-header)" }}
          >
            {header.cta}
            <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 shrink-0 items-center justify-center text-dark-blue lg:hidden"
          aria-label={header.openMenuAriaLabel}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-wt p-5 lg:hidden">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center text-dark-blue"
              aria-label={header.closeMenuAriaLabel}
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="mt-8 flex flex-col gap-1">
            {PRODUTOS_ITEMS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center rounded-md px-4 py-3 text-left text-base font-bold text-texto transition-colors hover:text-azul-claro"
              >
                {item.title}
              </Link>
            ))}
            {DROPDOWN_COLUMNS.map((column) => (
              <MobileNavSection
                key={column.label}
                label={column.label}
                items={column.items}
                onNavigate={() => setOpen(false)}
              />
            ))}
          </nav>
          <Link
            href="/solicitar-cotacao"
            onClick={() => setOpen(false)}
            className="mt-8 flex h-11 items-center justify-center gap-2.5 rounded-full px-4 text-sm font-bold text-wt"
            style={{ backgroundImage: "var(--gradient-cta-header)" }}
          >
            {header.cta}
            <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
          </Link>
        </div>
      )}
    </header>
  );
}
