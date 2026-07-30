import { Fragment } from "react";
import Image from "next/image";
import Link from "@/components/LocaleLink";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7133:3394 —
// Padrão/>=1280, 7372:8744 — 1280/1024-1279, 7362:13236 — 1024/<1024). O
// Figma foi reformulado desde a implementação original: título "Linhas de
// Máquinas Injectra", nova linha de subtítulo em negrito ("10 Linhas
// industriais...") e uma nova barra de 4 passos ("Escolha a Linha" etc.) —
// cartão branco h-120/justify-between em >=1024, sem cartão e com círculos
// menores em <1024.
const STAT_ICONS = [
  "/assets/maquinas/icon-machine-stat.svg",
  "/assets/maquinas/icon-acessorios-stat.svg",
  "/assets/maquinas/icon-tecnologia-stat.svg",
];

const NAV_STEP_ICONS = [
  "/assets/maquinas/icon-escolha-linha.svg",
  "/assets/maquinas/icon-navegue-modelos.svg",
  "/assets/maquinas/icon-compare-tecnologias.svg",
  "/assets/maquinas/icon-solicite-cotacao.svg",
];

export default function Banner({ dict }: { dict: Dictionary }) {
  const t = dict.maquinas.banner;
  const navSteps: string[] = t.navSteps;

  return (
    <div className="relative flex w-full flex-col bg-bg-cinza lg:min-h-[calc(100vh-80px)] xl:bg-cover xl:bg-center xl:bg-[url('/assets/maquinas/banner-padrao.webp')]">
      <Section innerClassName="flex-1 gap-10" className="flex-1 py-10">
        <div className="flex w-full flex-1 flex-col items-center gap-10 lg:flex-row">
          <div className="flex w-full min-w-[280px] flex-1 flex-col items-center gap-10 text-center lg:max-w-[650px] lg:items-start lg:text-left xl:max-w-[600px]">
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
            {/* Subtítulo BK 20 — 20px/22px, 85 Heavy (700) */}
            <p className="text-xl font-bold leading-[22px] tracking-normal text-dark-blue">
              {t.subtitle2}
            </p>
            {/* Subtítulo 20 — 20px/26px, 55 Roman (400) */}
            <p className="text-xl font-normal leading-[26px] tracking-normal text-texto">
              {t.subtitle}
            </p>
            <div className="flex w-full flex-wrap items-center justify-center gap-5 lg:justify-start">
              <Link
                href="/catalogos"
                className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md bg-azul-claro-plus px-[15px] py-2.5 text-base font-bold leading-[normal] text-wt transition-opacity hover:opacity-90"
              >
                {t.ctaCatalogos}
                <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
              </Link>
              <Link
                href="/fale-com-especialista"
                className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border border-azul-claro bg-wt px-[15px] py-2.5 text-base font-bold leading-[normal] text-azul-claro transition-colors hover:bg-bg-light-clean"
              >
                <Image src="/assets/shared/mail-icon.svg" alt="" width={18} height={18} />
                {t.ctaEspecialista}
                <Image className="object-contain" src="/assets/shared/arrow-side-blue-light.svg" alt="" width={9} height={9} />
              </Link>
            </div>
            <div className="flex w-full flex-wrap items-center justify-center gap-5 lg:justify-start">
              {t.stats.map((label: string, i: number) => (
                <div
                  key={label}
                  className="flex flex-1 min-w-[110px] flex-col items-center justify-center gap-5"
                >
                  <Image src={STAT_ICONS[i]} alt="" width={40} height={40} />
                  {/* Label 14 — 14px/17px, 85 Heavy (700) */}
                  <p className="w-full text-center text-sm font-bold leading-[17px] tracking-normal text-dark-blue">
                    {label}
                  </p>
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
              src="/assets/maquinas/banner-1024.webp"
              alt=""
              width={2400}
              height={1319}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="hidden w-full flex-1 overflow-hidden rounded-2xl lg:block xl:hidden">
            <Image
              src="/assets/maquinas/banner-1280.webp"
              alt=""
              width={2400}
              height={2101}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="hidden min-h-[280px] min-w-[280px] flex-1 xl:block" />
        </div>

        {/* Barra "Escolha a Linha" — 4 passos com chevron entre eles. Em
            >=1024 é um cartão branco h-120/justify-between; em <1024 fica
            sem cartão, com círculos menores e quebra de linha livre. */}
        <div className="flex w-full flex-wrap items-center justify-center gap-5 lg:h-[120px] lg:justify-between lg:rounded-2xl lg:bg-wt lg:px-10 lg:py-5">
          {navSteps.map((step, i) => (
            <Fragment key={step}>
              <div className="flex items-center gap-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-[0.5px] border-border-line-bd bg-wt lg:size-20">
                  <Image
                    src={NAV_STEP_ICONS[i]}
                    alt=""
                    width={24}
                    height={24}
                    className="h-5 w-5 object-contain lg:h-10 lg:w-10"
                  />
                </span>
                {/* Texto BK 18 (>=1024) / Label 14 (<1024) */}
                <span className="text-sm font-bold leading-[17px] tracking-normal text-dark-blue lg:whitespace-nowrap lg:text-lg lg:leading-[22px]">
                  {step}
                </span>
              </div>
              {i < navSteps.length - 1 && (
                <Image src="/assets/maquinas/icon-chevron-step.svg" alt="" width={10} height={20} />
              )}
            </Fragment>
          ))}
        </div>
      </Section>
    </div>
  );
}
