import Image from "next/image";
import Link from "@/components/LocaleLink";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7413:9554 —
// Padrão/>=1280, 7272:8655 — 1280/1024-1279, 7413:9660 — 1024/<1024).
// - "Padrão" (>=1280px): foto como background full-bleed da seção; título
//   48/55; coluna de texto com gap-10 entre os blocos.
// - "1280" (1024-1279px): foto como card contido à direita (bg-cinza sólido,
//   sem full-bleed); título 40/40; coluna de texto com gap-5.
// - "1024" (<1024px): tudo em coluna única centralizada; foto como card
//   inline abaixo do CTA; título 40/40 (igual ao 1280 — só o Padrão aumenta).
// Ícones permanecem no componente; labels vêm de dict.suporte.banner.highlights.
const HIGHLIGHT_ICONS = [
  "/assets/suporte/icon-especialista-dedicado.svg",
  "/assets/representantes/icon-speed-velocimetro.svg",
  "/assets/suporte/icon-atendimento-americas.svg",
  "/assets/footer/icon-scale-graphic.svg",
];

export default function Banner({ dict }: { dict: Dictionary }) {
  const t = dict.suporte.banner;
  const highlights = t.highlights.map((h: { label: string }, index: number) => ({
    icon: HIGHLIGHT_ICONS[index],
    label: h.label,
  }));

  return (
    <div className="relative flex w-full flex-col bg-bg-cinza lg:min-h-[calc(100vh-80px)] xl:bg-cover xl:bg-center xl:bg-[url('/assets/suporte/banner-padrao.webp')]">
      <Section innerClassName="flex-1 gap-10" className="flex-1 py-10">
        <div className="flex w-full flex-1 flex-col items-center gap-10 lg:flex-row">
          <div className="flex w-full min-w-[280px] flex-1 flex-col items-center gap-10 text-center lg:max-w-[520px] lg:items-start lg:text-left">
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
            {/* TÍTULO 40 (<1280) — 40px/40px | TÍTULO 48 (>=1280) — 48px/55px, 95 Black (800) */}
            <h1 className="text-[40px] font-extrabold leading-[40px] tracking-normal text-dark-blue xl:text-[48px] xl:leading-[55px]">
              {t.title}
            </h1>
            {/* Subtítulo 20 — 20px/26px, 55 Roman (400) */}
            <p className="text-xl font-normal leading-[26px] tracking-normal text-texto">
              {t.description}
            </p>
            <div className="flex w-full flex-wrap items-center justify-center gap-5 lg:justify-start">
              <a
                href="#contato"
                className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md bg-azul-claro-plus px-[15px] py-2.5 text-base font-bold leading-[normal] text-wt transition-opacity hover:opacity-90"
              >
                {t.openTicketLabel}
                <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
              </a>
              <Link
                href="/fale-com-especialista"
                className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border border-azul-claro bg-wt px-[15px] py-2.5 text-base font-bold leading-[normal] text-azul-claro transition-colors hover:bg-bg-light-clean"
              >
                {t.talkToSpecialistLabel}
                <Image className="object-contain" src="/assets/shared/arrow-side-blue-light.svg" alt="" width={9} height={9} />
              </Link>
            </div>
            <div className="flex w-full items-center gap-5">
              {highlights.map((item: { icon: string; label: string }) => (
                <div
                  key={item.label}
                  className="flex flex-1 min-w-[80px] flex-col items-center justify-center gap-5"
                >
                  <Image className="object-contain" src={item.icon} alt="" width={40} height={40} />
                  {/* Label 14 — 14px/17px, 85 Heavy (700) */}
                  <p className="w-full text-center text-sm font-bold leading-[17px] tracking-normal text-dark-blue">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* <1024: card inline abaixo do texto. 1024-1279: imagem contida
              dentro deste bloco (bg-cinza sólido, sem full-bleed). >=1280: a
              foto já é o background full-bleed da seção — este bloco só
              reserva o espaço à direita. */}
          <div className="w-full overflow-hidden rounded-2xl lg:hidden">
            <Image
              src="/assets/suporte/banner-1024.webp"
              alt=""
              width={2400}
              height={1315}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="hidden w-full flex-1 overflow-hidden rounded-2xl lg:block xl:hidden">
            <Image
              src="/assets/suporte/banner-1280.webp"
              alt=""
              width={2400}
              height={2068}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="hidden min-h-[280px] min-w-[280px] flex-1 xl:block" />
        </div>
      </Section>
    </div>
  );
}
