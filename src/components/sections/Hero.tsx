import Image from "next/image";
import Link from "@/components/LocaleLink";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 5161:2417 —
// textos/trust items — node 7292:8663, componente com as 3 variações de
// breakpoint do banner — e node 7292:8664, leitura direta da variação
// "1279" (1024-1279px), que substitui a leitura anterior feita a partir do
// componente mesclado).
// - "Padrão" (>=1280px): ilustração como background full-bleed da seção;
//   título 56/60; coluna de texto max-w-540; trust-bar centralizada.
// - "1279" (1024-1279px): ilustração como imagem contida dentro do bloco à
//   direita (bg-cinza sólido, sem full-bleed); título 48/55; coluna de texto
//   max-w-492; trust-bar com justify-between.
// - "Variante 3" (<1024px): tudo em coluna única centralizada; ilustração
//   como card inline abaixo do CTA; título 40/40; trust-bar em grade 3+2.
// O primeiro item (bandeira) preenche o círculo inteiro sem padding interno;
// os outros 4 têm o ícone menor, com respiro ao redor (12px) — diferença real do Figma.
const TRUST_ITEM_ICONS = [
  { icon: "/assets/footer/usa-flag.svg", bg: "bg-[#F4F4F5]", iconSize: 60, padded: false },
  { icon: "/assets/hero/globe.svg", bg: "bg-azul-light-bg", iconSize: 36, padded: true },
  { icon: "/assets/hero/pet-bottle.svg", bg: "bg-azul-light-bg", iconSize: 36, padded: true },
  { icon: "/assets/hero/handshake.svg", bg: "bg-azul-light-bg", iconSize: 36, padded: true },
  { icon: "/assets/hero/ai-chip.svg", bg: "bg-azul-light-bg", iconSize: 36, padded: true },
];

export default function Hero({ dict }: { dict: Dictionary }) {
  const t = dict.home.hero;
  const trustItems = TRUST_ITEM_ICONS.map((icon, i) => ({
    ...icon,
    title: t.trustItems[i].title,
    subtitle: t.trustItems[i].subtitle,
  }));
  return (
    <div
      id="top"
      className="relative flex w-full flex-col bg-bg-cinza lg:min-h-[calc(100vh-80px)] xl:bg-cover xl:bg-center xl:bg-[url('/assets/hero/hero-banner-padrao.webp')]"
    >
      <Section innerClassName="flex-1 gap-10" className="flex-1 py-10">
        {/* Ocupa todo o espaço acima da barra de confiança e centraliza o conteúdo
            verticalmente nele — a barra de confiança fica sempre colada na base do banner. */}
        <div className="flex w-full flex-1 items-center">
          <div className="flex w-full flex-col items-center gap-10 lg:flex-row">
            <div className="flex w-full min-w-[280px] flex-1 flex-col items-center justify-center gap-5 text-center lg:max-w-[492px] lg:items-start lg:text-left xl:max-w-[540px]">
              {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
              <span className="text-base font-bold leading-5 tracking-normal text-dark-blue">
                {t.eyebrow}
              </span>
              {/* TÍTULO 40 (<1024) — 40px/40px | TÍTULO 48 (1024-1279) — 48px/55px |
                  Título 56 (>=1280) — 56px/60px, 95 Black (800) */}
              <h1 className="text-[40px] font-extrabold leading-[40px] tracking-normal text-dark-blue lg:text-[48px] lg:leading-[55px] xl:text-[56px] xl:leading-[60px]">
                {t.titlePrefix}{" "}
                <span className="text-gradient-brand">{t.titleHighlight}</span>
              </h1>
              {/* Subtítulo 20 — 20px/26px, 55 Roman (400) */}
              <p className="text-xl font-normal leading-[26px] tracking-normal text-texto">
                {t.subtitleLine1}
                <br />
                {t.subtitleLine2}
              </p>
              <div className="flex w-full flex-wrap items-center justify-center gap-5 lg:justify-start">
                <Link
                  href="/plataforma-ai"
                  className="flex h-[42px] items-center justify-center gap-2.5 rounded-md bg-azul-claro-plus px-[15px] text-base font-bold leading-[normal] text-wt transition-opacity hover:opacity-90"
                >
                  {t.ctaPrimary}
                  <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
                </Link>
                <Link
                  href="/fale-com-especialista"
                  className="flex h-[42px] items-center justify-center gap-2.5 rounded-md border border-azul-claro bg-wt px-[15px] text-base font-bold leading-[normal] text-azul-claro transition-colors hover:bg-bg-light-clean"
                >
                  <Image src="/assets/shared/mail-icon.svg" alt="" width={18} height={18} />
                  {t.ctaSecondary}
                  <Image className="object-contain" src="/assets/shared/arrow-side-blue-light.svg" alt="" width={9} height={9} />
                </Link>
              </div>
            </div>

            {/* <1024: card inline abaixo do texto. 1024-1279: imagem contida dentro
                deste bloco (bg-cinza sólido, sem full-bleed). >=1280: a
                ilustração já é o background full-bleed da seção — este bloco
                só reserva o espaço à direita (800px). */}
            <div className="w-full overflow-hidden rounded-2xl lg:hidden">
              <Image
                src="/assets/hero/hero-banner-1024.webp"
                alt=""
                width={2400}
                height={1314}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="hidden w-full flex-1 overflow-hidden rounded-2xl lg:block xl:hidden">
              <Image
                src="/assets/hero/hero-banner-1280.webp"
                alt=""
                width={2400}
                height={2102}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="hidden flex-1 xl:block xl:min-w-[800px]" />
          </div>
        </div>

        <div className="flex w-full shrink-0 flex-col items-center justify-center gap-2.5 rounded-[20px]">
          <div className="flex w-full flex-wrap items-center justify-center gap-2.5">
            {trustItems.map((item) => (
              <div
                key={item.title}
                className="flex min-w-[160px] flex-1 flex-col flex-wrap items-center justify-center gap-5"
              >
                <span
                  className={`flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full ${item.bg}`}
                >
                  <Image src={item.icon} alt="" width={item.iconSize} height={item.iconSize} />
                </span>
                <div className="flex w-full flex-1 flex-col items-center gap-1 text-center">
                  {/* Subtítulo BK 20 — 20px/22px, 85 Heavy (700) */}
                  <span className="text-xl font-bold leading-[22px] tracking-normal text-dark-blue">
                    {item.title}
                  </span>
                  {/* Texto menor 16 — 16px/20px, 55 Roman (400) */}
                  <span className="text-base font-normal leading-5 tracking-normal text-texto">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
