import Image from "next/image";
import Link from "@/components/LocaleLink";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (componente com as 3 variações de
// breakpoint do banner, node 7301:8944 — "Padrão" >=1280 é node 7174:4362,
// "1279" (1024-1279px) é node 7301:8945, "1023" (<1024px) é node 7310:9118).
// - "Padrão": foto da máquina como background full-bleed da seção; título
//   48/55; subtítulo 20/26; coluna de texto max-w-520 alinhada à esquerda.
// - "1279": foto contida num card à direita (rounded-2xl, sem full-bleed);
//   título 40/40; subtítulo 18/22; mesmo alinhamento à esquerda do "Padrão".
// - "1023": tudo em coluna única centralizada; foto como card full-width
//   abaixo dos CTAs; título 32/39; subtítulo 18/22.
const HIGHLIGHT_ICONS = [
  "/assets/industria/icon-solucoes-personalizadas.svg",
  "/assets/industria/icon-produtividade.svg",
  "/assets/industria/icon-qualidade.svg",
  "/assets/industria/icon-presenca-americas.svg",
];

export default function Banner({ dict }: { dict: Dictionary }) {
  const t = dict.industria.banner;

  return (
    <div
      className="flex w-full flex-col bg-wt lg:min-h-[calc(100vh-80px)] xl:bg-cover xl:bg-center xl:bg-[url('/assets/industria/industria-banner-padrao.png')]"
    >
      <Section innerClassName="flex-1 gap-10" className="flex-1 py-10">
        <div className="flex w-full flex-1 flex-col items-center gap-10 lg:flex-row">
          <div className="flex w-full min-w-[280px] flex-1 flex-col items-center justify-center gap-5 text-center lg:max-w-[520px] lg:items-start lg:text-left">
            <div className="flex flex-col items-center gap-5 lg:items-start">
              {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
              <span className="text-base font-bold leading-5 tracking-normal text-gradient-brand">
                {t.kicker}
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
            {/* Subtítulo 18 (<1280) — 18px/22px | Subtítulo 20 (>=1280) — 20px/26px, 55 Roman (400) */}
            <p className="text-lg font-normal leading-[22px] tracking-normal text-texto xl:text-xl xl:leading-[26px]">
              {t.subtitle}
            </p>
            <div className="flex w-full flex-wrap items-center justify-center gap-5 lg:justify-start">
              <Link
                href="/catalogos"
                className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md bg-azul-claro-plus px-[15px] py-2.5 text-base font-bold leading-[normal] text-wt transition-opacity hover:opacity-90"
              >
                {t.ctaCatalogos}
                <Image className="object-contain" src="/assets/industria/arrow-side-white.svg" alt="" width={9} height={9} />
              </Link>
              <Link
                href="/fale-com-especialista"
                className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border border-azul-claro bg-wt px-[15px] py-2.5 text-base font-bold leading-[normal] text-azul-claro transition-colors hover:bg-bg-light-clean"
              >
                <Image className="object-contain" src="/assets/industria/mail-icon.svg" alt="" width={18} height={18} />
                {t.ctaEspecialista}
                <Image className="object-contain" src="/assets/industria/arrow-side-blue.svg" alt="" width={9} height={9} />
              </Link>
            </div>
            <div className="flex w-full items-center gap-5">
              {HIGHLIGHT_ICONS.map((icon, index) => (
                <div
                  key={icon}
                  className="flex flex-1 min-w-[110px] flex-col items-center justify-center gap-5"
                >
                  <Image className="object-contain" src={icon} alt="" width={40} height={40} />
                  {/* Label 14 — 14px/17px, 85 Heavy (700) */}
                  <p className="w-full text-sm font-bold leading-[17px] tracking-normal text-dark-blue">
                    {t.highlights[index]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* <1024: card inline abaixo do texto. 1024-1279: imagem contida
              dentro deste bloco (rounded-2xl, sem full-bleed). >=1280: a foto
              já é o background full-bleed da seção — este bloco só reserva o
              espaço à direita. */}
          <div className="w-full overflow-hidden rounded-2xl lg:hidden">
            <Image
              src="/assets/industria/industria-banner-1024.png"
              alt=""
              width={5372}
              height={2942}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="hidden w-full flex-1 overflow-hidden rounded-2xl lg:block xl:hidden">
            <Image
              src="/assets/industria/industria-banner-1280.png"
              alt=""
              width={3360}
              height={2942}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="hidden flex-1 xl:block xl:min-w-[800px]" />
        </div>
      </Section>
    </div>
  );
}
