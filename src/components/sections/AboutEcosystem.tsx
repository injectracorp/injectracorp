import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

export default function AboutEcosystem({ dict }: { dict: Dictionary }) {
  const t = dict.home.aboutEcosystem;
  return (
    <Section direction="row" innerClassName="gap-10" className="bg-bg-cinza">
      <div className="flex w-full min-w-[280px] max-w-[450px] flex-1 flex-col items-start justify-center gap-5">
        <div className="flex flex-col gap-1">
          {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
          <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
            {t.titleLine1}
          </h2>
          {/* TÍTULO 48 — 48px/55px, 95 Black (800) */}
          <span className="text-4xl font-extrabold leading-[42px] tracking-normal text-azul-claro sm:text-[48px] sm:leading-[55px]">
            {t.titleLine2}
          </span>
        </div>
        {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
        <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
          {t.description}
        </p>
        {/* Label 14 — 14px/17px, 85 Heavy (700) */}
        <a
          href="#ecossistema"
          className="flex items-center gap-1.5 text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus hover:opacity-80"
        >
          {t.exploreLabel}
          <Image className="object-contain" src="/assets/shared/arrow-side-blue.svg" alt="" width={9} height={9} />
        </a>
      </div>

      <div className="relative flex w-full flex-1 items-center justify-center overflow-hidden rounded-2xl bg-bg-cinza">
        <video
          src="/assets/ecosystem/ecossistema-injectra.mp4"
          className="h-auto w-full max-w-[910px] mix-blend-multiply"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Tarja para esconder uma linha de artefato na borda inferior do vídeo */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2 bg-bg-cinza" />
      </div>
    </Section>
  );
}
