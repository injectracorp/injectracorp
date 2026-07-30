"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "@/components/LocaleLink";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7113:3844 —
// versão reformulada: fotos reais em vez dos ícones 3D anteriores, cards com
// a imagem ocupando o quadrado inteiro (object-cover, sem padding), min-w
// reduzido para 120px, título 32/39 (antes 26/28)).
// Labels (traduzíveis) vivem em dict.home.setoresIndustriais.items, na mesma ordem.
const SETORES_IMAGES = [
  "/assets/setores/automotivo.webp",
  "/assets/setores/embalagens.webp",
  "/assets/setores/medico.webp",
  "/assets/setores/construcao.webp",
  "/assets/setores/eletronicos.webp",
  "/assets/setores/utilidades-domesticas.webp",
  "/assets/setores/logistica.webp",
];

function ExpandIcon() {
  return (
    <svg viewBox="0 0 16 16" width={16} height={16} fill="none" aria-hidden="true">
      <path
        d="M6 2H2v4M10 2h4v4M6 14H2v-4M10 14h4v-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" width={20} height={20} fill="none" aria-hidden="true">
      <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width={20}
      height={20}
      fill="none"
      aria-hidden="true"
      style={direction === "right" ? { transform: "rotate(180deg)" } : undefined}
    >
      <path d="M12.5 4L6.5 10L12.5 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SetoresIndustriais({ dict }: { dict: Dictionary }) {
  const t = dict.home.setoresIndustriais;
  const setores = SETORES_IMAGES.map((image, i) => ({
    image,
    label: t.items[i].label,
  }));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const zoomImageRef = useRef<HTMLImageElement>(null);

  const goTo = (index: number) => setActiveIndex((index + setores.length) % setores.length);

  // Time lapse — troca para a próxima foto automaticamente a cada 5s
  // enquanto o pop-up está aberto; reinicia a contagem a cada troca (manual
  // ou automática) já que activeIndex está nas dependências do efeito.
  useEffect(() => {
    if (activeIndex === null) return;
    const timer = setInterval(() => {
      goTo(activeIndex + 1);
    }, 5000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const handleZoomMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    if (zoomImageRef.current) {
      zoomImageRef.current.style.transformOrigin = `${x}% ${y}%`;
    }
  };

  const resetZoomOrigin = () => {
    if (zoomImageRef.current) {
      zoomImageRef.current.style.transformOrigin = "center";
    }
  };

  return (
    <Section innerClassName="gap-5">
      {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
      <h2 className="w-full text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
        {t.title}
      </h2>
      {/* Sem largura máxima nos cards — só a mínima (120px, igual ao Figma) —
          para crescerem de forma responsiva e quebrar linha livremente. */}
      <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
        {setores.map((setor, index) => (
          <div
            key={setor.label}
            className="flex min-w-[120px] flex-1 flex-col items-center gap-2.5 overflow-hidden rounded-xl bg-bg-cinza pb-5"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={t.expandLabel}
              className="group relative aspect-square w-full cursor-pointer"
            >
              <Image
                src={setor.image}
                alt={setor.label}
                fill
                sizes="(min-width: 1024px) 200px, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-dark-blue/0 transition-colors duration-300 group-hover:bg-dark-blue/30" />
              <span className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-wt/85 text-dark-blue transition-colors group-hover:bg-wt">
                <ExpandIcon />
              </span>
            </button>
            {/* Label 14 — 14px/17px, 85 Heavy (700) — min-h reserva 2 linhas p/ labels longos (ex.: "Utilidades Domésticas") */}
            <span className="flex min-h-[34px] w-full items-center justify-center px-2.5 text-center text-sm font-bold leading-[17px] tracking-normal text-dark-blue">
              {setor.label}
            </span>
          </div>
        ))}
        <Link
          href="/industria"
          className="flex min-w-[120px] flex-1 flex-col items-center gap-2.5 rounded-xl bg-bg-cinza p-5 transition-opacity hover:opacity-80"
        >
          <div className="flex h-[120px] w-full items-center justify-center">
            <span className="flex h-[70px] w-[70px] items-center justify-center rounded-full border border-border-line-bd bg-wt">
              <Image src="/assets/setores/mais-icon-dots.svg" alt="" width={40} height={8} />
            </span>
          </div>
          <span className="flex min-h-[34px] w-full items-center justify-center text-center text-sm font-bold leading-[17px] tracking-normal text-dark-blue">
            {t.moreLabel}
          </span>
        </Link>
      </div>

      {/* Pop-up de slide — abre a foto do card clicado em tela cheia, com
          navegação anterior/próximo em sequência e uma faixa de miniaturas
          na parte inferior para pular direto para qualquer setor. */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-wt/50 p-5 backdrop-blur-2xl"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            const target = e.target as HTMLElement;
            if (!target.closest("button, a, img")) setActiveIndex(null);
          }}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label={t.closeLabel}
            className="absolute right-5 top-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-wt text-dark-blue shadow-md transition-colors hover:bg-bg-light-clean"
          >
            <CloseIcon />
          </button>

          <div className="relative flex w-full max-w-4xl flex-1 items-center justify-center gap-2.5">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              aria-label={t.prevLabel}
              className="z-10 flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-wt text-dark-blue shadow-md transition-colors hover:bg-bg-light-clean"
            >
              <ChevronIcon direction="left" />
            </button>

            <div
              className="group relative aspect-square h-full w-full max-h-[65vh] max-w-[65vh] overflow-hidden rounded-[30px]"
              onMouseMove={handleZoomMove}
              onMouseLeave={resetZoomOrigin}
            >
              <Image
                key={setores[activeIndex].image}
                ref={zoomImageRef}
                src={setores[activeIndex].image}
                alt={setores[activeIndex].label}
                fill
                sizes="65vh"
                className="object-cover transition-transform duration-300 group-hover:scale-150"
              />
            </div>

            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              aria-label={t.nextLabel}
              className="z-10 flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-wt text-dark-blue shadow-md transition-colors hover:bg-bg-light-clean"
            >
              <ChevronIcon direction="right" />
            </button>
          </div>

          <p className="max-w-md text-center text-sm font-normal leading-4 tracking-normal text-texto-com-menos-destaque">
            {t.plasticDisclaimer}
          </p>

          <Link
            href="/industria"
            className="flex items-center gap-2.5 rounded-md bg-azul-claro-plus px-[15px] py-2.5 text-sm font-bold leading-[normal] text-wt transition-opacity hover:opacity-90"
          >
            {t.seeMoreLabel}
            <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
          </Link>

          <span className="text-center text-lg font-bold leading-[22px] tracking-normal text-dark-blue">
            {setores[activeIndex].label}
          </span>

          <div className="flex w-full max-w-2xl flex-wrap items-center justify-center gap-2.5">
            {setores.map((setor, index) => (
              <button
                key={setor.label}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={setor.label}
                className={`relative h-14 w-14 shrink-0 cursor-pointer overflow-hidden rounded-xl ring-2 transition-opacity ${
                  index === activeIndex ? "opacity-100 ring-azul-claro-plus" : "opacity-60 ring-transparent hover:opacity-90"
                }`}
              >
                <Image src={setor.image} alt="" fill sizes="56px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
