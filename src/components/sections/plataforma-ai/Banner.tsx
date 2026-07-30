import Image from "next/image";
import Link from "@/components/LocaleLink";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7349:12314 —
// componente com as 3 variações de breakpoint do banner).
// - "Padrão" (>=1280px): ilustração como background full-bleed da seção;
//   título 48/55; coluna de texto max-w-610.
// - "1280" (1024-1279px): ilustração como imagem contida dentro do bloco à
//   direita (bg-cinza sólido, sem full-bleed); título 40/40; coluna de
//   texto max-w-490.
// - "1024" (<1024px): tudo em coluna única centralizada; ilustração como
//   card inline abaixo do CTA; título 32/39.
// Ícones fixos no código — os labels (texto) vêm de dict.plataformaAi.banner.trustItems.
const TRUST_ICONS = [
  "/assets/plataforma-ai/icon-cloud-segura.svg",
  "/assets/plataforma-ai/icon-inteligencia-artificial.svg",
  "/assets/plataforma-ai/icon-decisoes-tempo-real.svg",
  "/assets/plataforma-ai/icon-maxima-seguranca.svg",
];

export default function Banner({ dict }: { dict: Dictionary }) {
  const t = dict.plataformaAi.banner;
  const trustItems = TRUST_ICONS.map((icon, index) => ({
    icon,
    label: t.trustItems[index].label,
  }));

  return (
    <div className="relative flex w-full flex-col bg-bg-cinza lg:min-h-[calc(100vh-80px)] xl:bg-cover xl:bg-center xl:bg-[url('/assets/plataforma-ai/banner-padrao.webp')]">
      <Section innerClassName="flex-1 gap-10" className="flex-1 py-10">
        <div className="flex w-full flex-1 flex-col items-center gap-10 lg:flex-row">
          <div className="flex w-full min-w-[280px] flex-1 flex-col items-center gap-10 text-center lg:max-w-[490px] lg:items-start lg:text-left xl:max-w-[610px]">
            <div className="flex flex-col items-center gap-5 lg:items-start">
              {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
              <span className="text-base font-bold leading-5 tracking-normal text-gradient-brand">
                {t.eyebrow}
              </span>
              <span
                className="h-[3px] w-10 rounded-full"
                style={{ background: "var(--gradient-brand)" }}
              />
            </div>
            {/* TÍTULO 32 (<1024) — 32px/39px | TÍTULO 40 (1024-1279) — 40px/40px |
                TÍTULO 48 (>=1280) — 48px/55px, 95 Black (800) */}
            <h1 className="text-[32px] font-extrabold leading-[39px] tracking-normal text-dark-blue lg:text-[40px] lg:leading-[40px] xl:text-[48px] xl:leading-[55px]">
              {t.title}
            </h1>
            {/* Subtítulo 20 — 20px/26px, 55 Roman (400) */}
            <p className="text-xl font-normal leading-[26px] tracking-normal text-texto">
              {t.subtitle}
            </p>
            <div className="flex w-full flex-wrap items-center justify-center gap-5 lg:justify-start">
              <a
                href="#contato"
                className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md bg-azul-claro-plus px-[15px] py-2.5 text-base font-bold leading-[normal] text-wt transition-opacity hover:opacity-90"
              >
                {t.ctaPrimary}
                <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
              </a>
              <Link
                href="/fale-com-especialista"
                className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border border-azul-claro bg-wt px-[15px] py-2.5 text-base font-bold leading-[normal] text-azul-claro transition-colors hover:bg-bg-light-clean"
              >
                {t.ctaSecondary}
                <Image className="object-contain" src="/assets/shared/arrow-side-blue-light.svg" alt="" width={9} height={9} />
              </Link>
            </div>
          </div>

          {/* <1024: card inline abaixo do texto. 1024-1279: imagem contida
              dentro deste bloco (bg-cinza sólido, sem full-bleed). >=1280: a
              ilustração já é o background full-bleed da seção — este bloco
              só reserva o espaço à direita. */}
          <div className="w-full overflow-hidden rounded-2xl lg:hidden">
            <Image
              src="/assets/plataforma-ai/banner-1024.webp"
              alt=""
              width={2400}
              height={1315}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="hidden w-full flex-1 overflow-hidden rounded-2xl lg:block xl:hidden">
            <Image
              src="/assets/plataforma-ai/banner-1280.webp"
              alt=""
              width={2400}
              height={2068}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="hidden min-h-[280px] min-w-[280px] flex-1 xl:block" />
        </div>

        <div className="flex w-full items-start gap-5">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-1 min-w-[110px] flex-col items-center justify-center gap-5"
            >
              <Image className="object-contain" src={item.icon} alt="" width={40} height={40} />
              {/* Label 14 — 14px/17px, 85 Heavy (700) */}
              <p className="w-full text-center text-sm font-bold leading-[17px] tracking-normal text-dark-blue">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
