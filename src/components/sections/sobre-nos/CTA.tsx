import Image from "next/image";
import Link from "@/components/LocaleLink";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7260:7827).
const TRUST_ICONS = [
  "/assets/footer/usa-flag.svg",
  "/assets/shared/icon-presenca-americas.svg",
  "/assets/shared/icon-experiencia-anos.svg",
  "/assets/footer/icon-headset.svg",
  "/assets/shared/icon-sustentabilidade.svg",
];

export default function CTA({ dict }: { dict: Dictionary }) {
  const t = dict.sobreNos.cta;
  return (
    <Section innerClassName="gap-10">
      <div
        className="flex w-full flex-wrap items-center gap-10 rounded-2xl bg-cover bg-center px-5 py-10 sm:px-20"
        style={{ backgroundImage: "url(/assets/sobre-nos/cta-bg.webp)" }}
      >
        <div className="flex w-[110px] shrink-0 items-center justify-center">
          <span className="flex size-[110px] items-center justify-center rounded-full border-[0.5px] border-azul-claro-plus p-1">
            <span className="flex size-[102px] items-center justify-center rounded-full bg-azul-claro-plus px-7 py-5">
              <Image src="/assets/sobre-nos/icon-injectra-mark.svg" alt="" width={40} height={51} className="object-contain" />
            </span>
          </span>
        </div>
        <div className="flex min-w-[210px] flex-1 flex-col items-center justify-center gap-5">
          {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
          <h2 className="w-full text-2xl font-bold leading-7 tracking-normal text-dark-blue">
            {t.title}
          </h2>
          {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
          <p className="w-full text-lg font-normal leading-[22px] tracking-normal text-texto">
            {t.description}
          </p>
        </div>
        <div className="flex flex-1 flex-wrap items-center justify-end gap-5">
          <Link
            href="/solicitar-cotacao"
            className="flex min-h-12 items-center justify-center gap-2.5 rounded-md bg-azul-claro-plus px-5 py-[15px] text-base font-bold leading-[normal] text-wt transition-opacity hover:opacity-90"
          >
            {t.quoteButton}
            <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
          </Link>
          <Link
            href="/fale-com-especialista"
            className="flex min-h-12 items-center justify-center gap-2.5 rounded-md border border-azul-claro-plus bg-wt px-5 py-[15px] text-base font-bold leading-[normal] text-azul-claro-plus transition-colors hover:bg-bg-light-clean"
          >
            {t.specialistButton}
            <Image className="object-contain" src="/assets/shared/arrow-side-blue.svg" alt="" width={9} height={9} />
          </Link>
        </div>
      </div>

      <div className="flex w-full flex-wrap items-center justify-center gap-5 rounded-2xl bg-bg-cinza px-5 py-10">
        {t.trustItems.map((item: { title: string; subtitle: string }, i: number) => (
          <div key={item.title} className="flex min-w-[180px] flex-1 items-center gap-5">
            <Image src={TRUST_ICONS[i]} alt="" width={40} height={40} className="shrink-0 object-contain" />
            <div className="flex flex-1 flex-col items-start gap-2.5">
              {/* Label 12 — 12px/13px, 85 Heavy (700) */}
              <span className="w-full text-xs font-bold leading-[13px] tracking-normal text-dark-blue">
                {item.title}
              </span>
              {/* Desc 12 — 12px/14px, 55 Roman (400) */}
              <p className="w-full text-xs font-normal leading-[14px] tracking-normal text-texto">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
