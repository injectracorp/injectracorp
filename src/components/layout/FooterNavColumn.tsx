"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "@/components/LocaleLink";
import type { NavColumn } from "@/data/navColumns";

export default function FooterNavColumn({ column }: { column: NavColumn }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full flex-col gap-10 md:min-w-px md:flex-1 lg:min-w-[220px] lg:flex-1">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-2.5 text-left md:pointer-events-none"
      >
        <div className="flex flex-col items-start gap-2.5">
          {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
          <span className="text-gradient-navy text-lg font-bold leading-[22px] tracking-normal">
            {column.title}
          </span>
          <span className="h-[1.5px] w-[30px] rounded-full bg-azul-claro-plus" />
        </div>
        <Image
          src="/assets/header/arrow-down.svg"
          alt=""
          width={14}
          height={14}
          className={`shrink-0 transition-transform md:hidden ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`${open ? "flex" : "hidden"} w-full flex-col items-start gap-5 md:flex`}>
        {column.items.map((item) => (
          <Link key={item.title} href={item.href} className="group flex w-full items-center gap-2.5">
            <Image src={item.icon} alt="" width={36} height={36} className="shrink-0 object-contain" />
            <div className="flex flex-1 flex-col items-start gap-1 text-texto">
              {/* 16px/20px, 85 Heavy (700) */}
              <span className="text-base font-bold leading-5 tracking-normal transition-colors group-hover:text-azul-claro">
                {item.title}
              </span>
              {/* Desc 14 — 14px/16px, 55 Roman (400) */}
              <span className="text-sm font-normal leading-4 tracking-normal transition-colors group-hover:text-azul-claro">
                {item.description}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
