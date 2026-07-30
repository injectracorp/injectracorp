import Image from "next/image";
import Link from "@/components/LocaleLink";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7174:3553).
// Slot de imagem com aspect-ratio 4:3 (375/281.25 no Figma) preenchido por
// foto real (object-cover); badge do ícone mora dentro do slot, ancorado ao
// bottom (bottom-0) — assim ele fica sempre encostado no limite inferior da
// foto mesmo com a altura variando de forma responsiva (equivalente ao
// top:221.25px fixo do Figma, calculado para a largura de referência 375px).
const SEGMENTOS_ICONS = [
  "/assets/industria/icon-automotiva.svg",
  "/assets/industria/icon-embalagens.svg",
  "/assets/industria/icon-medico.svg",
  "/assets/industria/icon-consumo.svg",
  "/assets/industria/icon-eletronicos.svg",
  "/assets/industria/icon-construcao.svg",
  "/assets/industria/icon-logistica.svg",
  "/assets/industria/icon-outros-segmentos.svg",
];
const SEGMENTOS_IMAGES = [
  "/assets/industria/segmento-automotiva.webp",
  "/assets/industria/segmento-embalagens.webp",
  "/assets/industria/segmento-medico.webp",
  "/assets/industria/segmento-consumo.webp",
  "/assets/industria/segmento-eletronicos.webp",
  "/assets/industria/segmento-construcao.webp",
  "/assets/industria/segmento-logistica.webp",
  "/assets/industria/segmento-outros.webp",
];

export default function Segmentos({ dict }: { dict: Dictionary }) {
  const t = dict.industria.segmentos;

  return (
    <Section innerClassName="gap-5">
      <div className="flex flex-col items-start gap-5">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          {t.title}
        </h2>
        <span
          className="h-0.5 w-[60px] rounded-full"
          style={{ background: "var(--gradient-brand)" }}
        />
      </div>

      <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
        {SEGMENTOS_ICONS.map((icon, index) => {
          const segmento = t.items[index];
          return (
            <div
              key={icon}
              className="flex min-w-[320px] flex-1 flex-col items-center gap-[50px] overflow-hidden rounded-2xl bg-wt pb-10 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)]"
            >
              <div className="relative aspect-[4/3] w-full shrink-0 bg-bg-cinza">
                <Image
                  src={SEGMENTOS_IMAGES[index]}
                  alt={segmento.title}
                  fill
                  sizes="(min-width: 1024px) 320px, 100vw"
                  className="object-cover"
                />
                <span className="absolute -bottom-[30px] left-5 flex size-[60px] items-center justify-center rounded-full bg-wt p-4 shadow-[2px_2px_6px_0px_rgba(76,95,224,0.25)]">
                  <Image src={icon} alt="" width={30} height={30} />
                </span>
              </div>
              <div className="flex w-full flex-col items-start justify-center gap-5 px-5">
                {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
                <span className="min-h-[25px] w-full text-lg font-bold leading-[22px] tracking-normal text-azul-claro-plus">
                  {segmento.title}
                </span>
                {/* Texto menor 16 — 16px/20px, 55 Roman (400) */}
                <p className="min-h-[55px] w-full text-base font-normal leading-5 tracking-normal text-texto">
                  {segmento.description}
                </p>
                <Link
                  href="/fale-com-especialista"
                  className="flex items-center gap-1.5 text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus hover:opacity-80"
                >
                  {t.ctaLabel}
                  <Image className="object-contain" src="/assets/shared/arrow-side-blue.svg" alt="" width={9} height={9} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
