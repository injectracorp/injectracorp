import Image from "next/image";
import Link from "@/components/LocaleLink";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7223:5914 —
// Padrão/>=1280, 7361:13121 — 1280/1024-1279, 7359:12966 — 1024/<1024). A
// linha de destaques só ganha o cartão bg-cinza em >=1280 (onde precisa se
// destacar contra a foto full-bleed) — em <1280 fica sem cartão, apoiada
// diretamente no fundo bg-cinza da própria página.
const HIGHLIGHT_ICONS = [
  "/assets/hero/globe.svg",
  "/assets/representantes/icon-speed-velocimetro.svg",
  "/assets/footer/icon-headset.svg",
  "/assets/footer/icon-scale-graphic.svg",
];

export default function Banner({ dict }: { dict: Dictionary }) {
  const t = dict.representantes.banner;
  const highlights = HIGHLIGHT_ICONS.map((icon: string, index: number) => ({
    icon,
    label: t.highlights[index],
  }));

  return (
    <div className="relative flex w-full flex-col bg-bg-cinza lg:min-h-[calc(100vh-80px)] xl:bg-cover xl:bg-center xl:bg-[url('/assets/representantes/banner-padrao.webp')]">
      <Section innerClassName="flex-1 gap-10" className="flex-1 py-10">
        <div className="flex w-full flex-1 flex-col items-center gap-10 lg:flex-row">
          <div className="flex w-full min-w-[280px] flex-1 flex-col items-center gap-10 text-center lg:max-w-[520px] lg:items-start lg:text-left">
            <div className="flex flex-col items-center gap-5 lg:items-start">
              {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
              <span className="text-base font-bold leading-5 tracking-normal text-gradient-brand">
                {t.badge}
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
              src="/assets/representantes/banner-1024.webp"
              alt=""
              width={2400}
              height={1315}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="hidden w-full flex-1 overflow-hidden rounded-2xl lg:block xl:hidden">
            <Image
              src="/assets/representantes/banner-1280.webp"
              alt=""
              width={2400}
              height={2094}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="hidden min-h-[280px] min-w-[280px] flex-1 xl:block" />
        </div>

        <div className="flex w-full flex-wrap items-center justify-center gap-5 xl:rounded-2xl xl:bg-bg-cinza xl:gap-10 xl:p-5">
          {highlights.map((item) => (
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
