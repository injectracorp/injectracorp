import Image from "next/image";
import Link from "@/components/LocaleLink";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7256:6457).
export default function CTA({ dict }: { dict: Dictionary }) {
  const t = dict.robotica.cta;

  return (
    <Section className="bg-bg-cinza">
      <div className="flex w-full flex-wrap items-center gap-5 overflow-hidden rounded-2xl bg-wt pl-5 pt-5">
        <span className="flex size-[110px] shrink-0 items-center justify-center rounded-full border-[0.5px] border-azul-claro-plus bg-azul-claro-plus p-7">
          <Image src="/assets/representantes/icon-pessoas.svg" alt="" width={46} height={46} />
        </span>
        <div className="flex min-w-[210px] max-w-[637px] flex-1 flex-col items-start gap-5 pb-5">
          {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
          <h2 className="w-full text-2xl font-bold leading-7 tracking-normal text-dark-blue">
            {t.title}
          </h2>
          {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
          <p className="w-full text-lg font-normal leading-[22px] tracking-normal text-texto">
            {t.description}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5 pb-5">
          <Link
            href="/solicitar-cotacao"
            className="flex min-h-12 items-center justify-center gap-2.5 rounded-md bg-azul-claro-plus px-5 py-[15px] text-sm font-bold leading-[17px] tracking-normal text-wt transition-opacity hover:opacity-90"
          >
            {t.quoteButton}
            <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
          </Link>
          <Link
            href="/fale-com-especialista"
            className="flex min-h-12 items-center justify-center gap-2.5 rounded-md border border-azul-claro-plus bg-wt px-5 py-[15px] text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus hover:bg-bg-light-clean"
          >
            {t.specialistButton}
            <Image className="object-contain" src="/assets/shared/arrow-side-blue.svg" alt="" width={9} height={9} />
          </Link>
        </div>
        <div className="flex w-[180px] shrink-0 items-end justify-center self-stretch pb-2.5 pr-5">
          <Image
            src="/assets/robotica/photo-braco-robo.webp"
            alt=""
            width={160}
            height={191}
            className="h-auto max-h-[191px] w-full object-contain"
          />
        </div>
      </div>
    </Section>
  );
}
