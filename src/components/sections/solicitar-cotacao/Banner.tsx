import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7268:9532).
// Breakpoints e imagens reaproveitados do banner da INDÚSTRIA a pedido do
// usuário — mesma estrutura de 3 variações usada nos demais banners.
const DESTAQUE_ICONS = [
  "/assets/footer/usa-flag.svg",
  "/assets/sobre-nos/icon-planet-web.svg",
  "/assets/footer/icon-scale-graphic.svg",
];

export default function Banner({ dict }: { dict: Dictionary }) {
  const t = dict.solicitarCotacao.banner;
  const highlights = DESTAQUE_ICONS.map((icon: string, index: number) => ({
    icon,
    lines: t.highlights[index].lines as string[],
  }));

  return (
    <div className="relative flex w-full flex-col bg-bg-cinza lg:min-h-[calc(100vh-80px)] xl:bg-cover xl:bg-center xl:bg-[url('/assets/industria/industria-banner-padrao.webp')]">
      <Section innerClassName="flex-1 gap-10" className="flex-1 py-10">
        <div className="flex w-full flex-1 flex-col items-center gap-10 lg:flex-row">
          <div className="flex w-full min-w-[280px] flex-1 flex-col items-center justify-center gap-10 text-center lg:max-w-[560px] lg:items-start lg:text-left">
            <div className="flex flex-col items-center gap-5 lg:items-start">
              {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
              <span className="text-base font-bold leading-5 tracking-normal text-gradient-injectra">
                {t.eyebrow}
              </span>
              <span
                className="h-[3px] w-10 rounded-full"
                style={{ background: "var(--gradient-injectra)" }}
              />
            </div>
            {/* Título 32 (<1024) — 32px/36px | 44 (1024-1279) — 44px/48px |
                56 (>=1280) — 56px/60px, 95 Black (800) */}
            <h1 className="text-[32px] font-extrabold leading-[36px] tracking-normal text-dark-blue lg:text-[44px] lg:leading-[48px] xl:text-[56px] xl:leading-[60px]">
              {t.title}
            </h1>
            {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
            <p className="text-2xl font-bold leading-7 tracking-normal text-dark-blue">
              {t.subtitle}
            </p>
            {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
            <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
              {t.description}
            </p>
            <div className="flex w-full flex-wrap items-center justify-center gap-[15px] lg:justify-start">
              {highlights.map((item) => (
                <div key={item.lines.join(" ")} className="flex min-w-[110px] flex-1 items-center justify-center gap-2.5">
                  <Image src={item.icon} alt="" width={30} height={30} className="shrink-0 object-contain" />
                  {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
                  <div className="flex flex-1 flex-col items-start text-base font-bold leading-5 tracking-normal text-dark-blue">
                    {item.lines.map((line) => (
                      <span key={line} className="w-full">
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <1024: card inline abaixo do texto. 1024-1279: imagem contida
              dentro deste bloco (bg-cinza sólido, sem full-bleed). >=1280: a
              ilustração já é o background full-bleed da seção — este bloco
              só reserva o espaço à direita. */}
          <div className="w-full overflow-hidden rounded-2xl lg:hidden">
            <Image
              src="/assets/industria/industria-banner-1024.webp"
              alt=""
              width={2400}
              height={1314}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="hidden w-full flex-1 overflow-hidden rounded-2xl lg:block xl:hidden">
            <Image
              src="/assets/industria/industria-banner-1280.webp"
              alt=""
              width={2400}
              height={2101}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="hidden min-h-[280px] min-w-[280px] flex-1 xl:block" />
        </div>
      </Section>
    </div>
  );
}
