"use client";

import { useEffect, useId, useRef, useState } from "react";
import { companyAddress, companyMapsUrl } from "@/config/site";

export type HeadquartersLabels = {
  label: string;
  copy: string;
  copied: string;
  map: string;
};

const ICON_PROPS = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export default function AddressPopover({ labels }: { labels: HeadquartersLabels }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(id);
  }, [copied]);

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(`${companyAddress.legalName}, ${companyAddress.line}`);
      setCopied(true);
    } catch {
      /* clipboard unavailable — ignore */
    }
  }

  return (
    <div ref={rootRef} className="relative flex w-full flex-col items-center lg:items-start">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex min-h-12 w-fit cursor-pointer items-center justify-center gap-2.5 rounded-md border border-azul-claro-plus bg-wt px-5 py-[15px] text-left text-base font-bold leading-[normal] text-azul-claro-plus transition-colors hover:bg-bg-light-clean focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul-claro-plus"
      >
        <svg {...ICON_PROPS} width={20} height={20} className="shrink-0 text-azul-claro-plus">
          <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span>{labels.label}</span>
        <svg {...ICON_PROPS} width={16} height={16} className={`shrink-0 text-azul-claro-plus transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        id={panelId}
        role="group"
        aria-label={labels.label}
        hidden={!open}
        className="absolute left-1/2 top-full z-20 mt-3 flex w-[min(320px,calc(100vw-40px))] -translate-x-1/2 flex-col gap-3 rounded-2xl border border-border-line-bd bg-wt p-4 text-left shadow-lg lg:left-0 lg:translate-x-0"
      >
        <address className="flex flex-col gap-1 not-italic">
          <strong className="text-sm font-bold leading-[17px] text-dark-blue">
            {companyAddress.legalName}
          </strong>
          <span className="text-sm font-normal leading-4 text-texto">{companyAddress.line}</span>
        </address>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={copyAddress}
            className="flex items-center gap-1.5 rounded-lg bg-bg-cinza px-3 py-2 text-sm font-bold leading-4 text-dark-blue focus-visible:outline-2 focus-visible:outline-azul-claro"
          >
            <svg {...ICON_PROPS}>
              {copied ? (
                <path d="M20 6 9 17l-5-5" />
              ) : (
                <>
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </>
              )}
            </svg>
            <span aria-live="polite">{copied ? labels.copied : labels.copy}</span>
          </button>
          <a
            href={companyMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg bg-bg-cinza px-3 py-2 text-sm font-bold leading-4 text-dark-blue focus-visible:outline-2 focus-visible:outline-azul-claro"
          >
            <svg {...ICON_PROPS}>
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
            {labels.map}
          </a>
        </div>
      </div>
    </div>
  );
}
