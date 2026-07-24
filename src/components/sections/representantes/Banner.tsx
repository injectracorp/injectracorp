import Image from "next/image";
import Link from "@/components/LocaleLink";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7223:5914).
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
    <div
      className="relative flex w-full min-h-[calc(100vh-80px)] flex-col bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/representantes/banner-bg.webp)" }}
    >
      <Section innerClassName="flex-1 gap-10" className="flex-1 py-10">
        <div className="flex w-full flex-1 flex-col items-center gap-10 lg:flex-row">
          <div className="flex w-full min-w-[280px] max-w-[520px] flex-1 flex-col items-start gap-5">
            <div className="flex flex-col items-start gap-5">
              {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
              <span className="text-base font-bold leading-5 tracking-normal text-gradient-brand">
                {t.badge}
              </span>
              <span
                className="h-[3px] w-10 rounded-full"
                style={{ background: "var(--gradient-brand)" }}
              />
            </div>
            {/* TÍTULO 48 — 48px/55px, 95 Black (800) */}
            <h1 className="text-4xl font-extrabold leading-[42px] tracking-normal text-dark-blue sm:text-[48px] sm:leading-[55px]">
              {t.title}
            </h1>
            {/* Subtítulo 20 — 20px/26px, 55 Roman (400) */}
            <p className="text-xl font-normal leading-[26px] tracking-normal text-texto">
              {t.subtitle}
            </p>
            <div className="flex w-full flex-wrap items-center gap-5">
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
            <div className="flex w-full items-center gap-5">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-1 min-w-[110px] flex-col items-center justify-center gap-5"
                >
                  <Image className="object-contain" src={item.icon} alt="" width={40} height={40} />
                  {/* Label 14 — 14px/17px, 85 Heavy (700) */}
                  <p className="w-full text-sm font-bold leading-[17px] tracking-normal text-dark-blue">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Espaço reservado à direita — máquina + globo já fazem parte da
              imagem de fundo full-bleed da seção. */}
          <div className="hidden min-h-[280px] min-w-[280px] flex-1 lg:block" />
        </div>
      </Section>
    </div>
  );
}
