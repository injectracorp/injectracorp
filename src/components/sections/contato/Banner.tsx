import Image from "next/image";
import Link from "@/components/LocaleLink";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7382:9216 —
// Padrão/>=1280, 7386:11618 — 1280/1024-1279, 7382:10077 — 1024/<1024).
// Nas 3 variações o título/eyebrow/descrição/botões usam o mesmo tamanho
// (TÍTULO 48 — 48px/55px); o que muda é só a estrutura: o layout em duas
// colunas (texto à esquerda + cartão à direita) só aparece em >=1280 — nas
// outras duas o texto fica centralizado acima do cartão (empilhado), e o
// cartão ocupa a largura toda. A linha de 5 cartões de contato só existe na
// variação Padrão (>=1280) — não existe nas variações 1280 nem 1024.
//
// Os dois blocos de "Robótica Neo" (Frame321 — Crescimento de Produção — e o
// cartão de Unidades Ativas) não são imagens de cartão inteiras: o título, os
// rótulos do eixo Y (50/40/30/20/10/0), os meses e o bloco "Américas / 1.250+
// / unidades" são texto de verdade (traduzível). O mapa (world-map-unidades.webp)
// é uma imagem recortada (via get_screenshot do node 7382:9603, sem texto
// "queimado" no pixel) porque é uma ilustração, não dá pra "desenhar" um mapa
// mundi em SVG à mão com fidelidade. Já o gráfico de linha em si é um
// gráfico de verdade — SVG desenhado a partir dos dados (linha, pontos,
// área e grade), responsivo via viewBox, e não uma imagem — só assim ele
// escala com nitidez em qualquer largura sem depender de nenhum raster.
const PERFORMANCE_STATS_VALUES = ["+18,6%", "92.4%", "95.2%"];
const CRESCIMENTO_Y_AXIS = [50, 40, 30, 20, 10, 0];
// Série ilustrativa (mesmo formato de tendência do Figma); os 6 meses caem
// exatamente nos índices pares (0,2,4,6,8,10) dos 11 pontos.
const CRESCIMENTO_DATA = [8, 20, 13, 22, 27, 24, 29, 39, 47, 42, 44];
const CHART_WIDTH = 340;
const CHART_HEIGHT = 147.68;

function CrescimentoChart({ data, max }: { data: number[]; max: number }) {
  const stepX = CHART_WIDTH / (data.length - 1);
  const points = data.map((value, index) => [
    index * stepX,
    CHART_HEIGHT - (value / max) * CHART_HEIGHT,
  ]);
  const linePath = points
    .map(([x, y], index) => `${index === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`)
    .join(" ");
  const areaPath = `${linePath} L${CHART_WIDTH},${CHART_HEIGHT} L0,${CHART_HEIGHT} Z`;
  const gridCount = CRESCIMENTO_Y_AXIS.length - 1;

  return (
    <svg
      viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
      preserveAspectRatio="none"
      className="absolute inset-0 size-full overflow-visible"
      aria-hidden
    >
      {Array.from({ length: gridCount + 1 }, (_, index) => (
        <line
          key={`h-${index}`}
          x1={0}
          y1={(CHART_HEIGHT / gridCount) * index}
          x2={CHART_WIDTH}
          y2={(CHART_HEIGHT / gridCount) * index}
          className="stroke-border-line-bd"
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: 6 }, (_, index) => (
        <line
          key={`v-${index}`}
          x1={(CHART_WIDTH / 5) * index}
          y1={0}
          x2={(CHART_WIDTH / 5) * index}
          y2={CHART_HEIGHT}
          className="stroke-border-line-bd"
          strokeWidth="1"
        />
      ))}
      <path d={areaPath} className="fill-azul-claro-plus" fillOpacity={0.12} stroke="none" />
      <path
        d={linePath}
        fill="none"
        className="stroke-azul-claro-plus"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {points.map(([x, y], index) => (
        <circle key={index} cx={x} cy={y} r="3.5" className="fill-azul-claro-plus" />
      ))}
    </svg>
  );
}

const INFO_CARDS_ICONS = [
  "/assets/footer/icon-local.svg",
  "/assets/footer/icon-telefone.svg",
  "/assets/footer/icon-mail.svg",
  "/assets/sobre-nos/icon-planet-web.svg",
  "/assets/footer/icon-headset.svg",
];

export default function Banner({ dict }: { dict: Dictionary }) {
  const t = dict.contato.banner;
  return (
    <div
      className="relative flex w-full flex-col items-center gap-5 bg-cover bg-center px-5 py-10"
      style={{ backgroundImage: "url(/assets/contato/banner-bg.webp)" }}
    >
      <div className="absolute inset-0 bg-white/35" />
      <Section innerClassName="flex-1 gap-10" className="relative flex-1 !p-0">
        <div className="flex w-full flex-1 flex-col items-center gap-10 xl:flex-row xl:items-stretch">
          <div className="flex w-full min-w-[280px] flex-1 flex-col items-center justify-center gap-10 text-center lg:max-w-[520px] xl:items-start xl:text-left">
            <div className="flex flex-col items-center gap-5 xl:items-start">
              <span className="text-base font-bold leading-5 tracking-normal text-gradient-injectra">
                {t.eyebrow}
              </span>
              <span
                className="h-[3px] w-10 rounded-full"
                style={{ background: "var(--gradient-injectra)" }}
              />
            </div>
            {/* TÍTULO 48 — 48px/55px, 95 Black (800) — igual nas 3 variações */}
            <h1 className="text-[48px] font-extrabold leading-[55px] tracking-normal text-dark-blue">
              {t.titlePrefix}
              <span className="text-[#1441e8]">{t.titleHighlight}</span>
            </h1>
            <p className="text-xl font-normal leading-[26px] tracking-normal text-texto">
              {t.description}
            </p>
            <div className="flex w-full flex-wrap items-center justify-center gap-5 xl:justify-start">
              <Link
                href="/solicitar-cotacao"
                className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md bg-azul-claro-plus px-[15px] py-2.5 text-base font-bold leading-[normal] text-wt transition-opacity hover:opacity-90"
              >
                {t.quoteButton}
                <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
              </Link>
              <Link
                href="/fale-com-especialista"
                className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border border-azul-claro bg-wt px-[15px] py-2.5 text-base font-bold leading-[normal] text-azul-claro transition-colors hover:bg-bg-light-clean"
              >
                <Image src="/assets/footer/icon-headset.svg" alt="" width={18} height={18} />
                {t.specialistButton}
              </Link>
            </div>
          </div>

          {/* Cartão único "Performance da Indústria" (Frame320 no Figma) —
              antes eram 2 cartões lado a lado (Atendimento + Performance). */}
          <div className="relative flex w-full flex-1 flex-col gap-5 overflow-hidden rounded-2xl px-5 py-[30px] xl:max-w-[840px]">
            <div className="absolute inset-0 bg-white/80 mix-blend-soft-light" />
            <span className="relative text-xl font-bold leading-[22px] tracking-normal text-gradient-injectra">
              {t.performance.title}
            </span>
            <div className="relative flex flex-wrap items-center gap-5">
              {t.performance.stats.map((stat: { label: string; description: string }, index: number) => (
                <div
                  key={stat.label}
                  className="flex min-w-[130px] flex-1 flex-col items-center justify-center gap-10 rounded-xl border-[0.5px] border-border-line-bd bg-bg-cinza px-[15px] py-5"
                >
                  <span className="w-full text-base font-normal leading-5 tracking-normal text-texto">
                    {stat.label}
                  </span>
                  <div className="flex w-full flex-col items-start gap-5">
                    <span className="w-full text-2xl font-bold leading-7 tracking-normal text-positivo-verde">
                      {PERFORMANCE_STATS_VALUES[index]}
                    </span>
                    <span className="w-full text-sm font-normal leading-4 tracking-normal text-texto">
                      {stat.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <span className="relative text-xl font-bold leading-[22px] tracking-normal text-gradient-injectra">
              {t.performance.roboticaTitle}
            </span>
            <div className="relative flex w-full flex-wrap items-stretch justify-center gap-5">
              <div className="relative flex w-full flex-col items-start gap-5 overflow-hidden rounded-2xl border-[0.5px] border-border-line-bd bg-wt px-[15px] py-5 sm:w-auto sm:min-w-[400px] sm:max-w-[400px] sm:shrink-0">
                <span className="relative w-full text-sm font-bold leading-[17px] tracking-normal text-texto">
                  {t.performance.crescimento.title}
                </span>
                <div className="relative flex w-full flex-1 items-stretch gap-2.5">
                  <div className="flex shrink-0 flex-col items-end justify-between text-xs font-normal leading-[14px] tracking-normal text-texto">
                    {CRESCIMENTO_Y_AXIS.map((value) => (
                      <span key={value}>{value}</span>
                    ))}
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col items-start gap-2.5">
                    {/* Gráfico de linha real (SVG desenhado a partir de
                        CRESCIMENTO_DATA), não uma imagem — escala com
                        nitidez em qualquer largura via viewBox. */}
                    <div className="relative w-full flex-1" style={{ aspectRatio: `${CHART_WIDTH} / ${CHART_HEIGHT}` }}>
                      <CrescimentoChart data={CRESCIMENTO_DATA} max={CRESCIMENTO_Y_AXIS[0]} />
                    </div>
                    <div className="flex w-full items-center justify-between text-xs font-normal leading-[14px] tracking-normal text-texto">
                      {t.performance.crescimento.months.map((month: string) => (
                        <span key={month}>{month}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-1 flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl border-[0.5px] border-border-line-bd bg-wt px-[15px] py-5 sm:min-w-[220px]">
                <span className="relative w-full text-sm font-bold leading-[17px] tracking-normal text-texto">
                  {t.performance.unidadesAtivas.title}
                </span>
                <div className="relative flex w-full flex-1 items-center justify-center">
                  <Image
                    src="/assets/contato/world-map-unidades.webp"
                    alt=""
                    width={213}
                    height={111}
                    className="h-[111px] max-h-[120px] w-[213px] max-w-[230px] object-contain"
                  />
                </div>
                <div className="relative flex w-full flex-col items-start gap-1">
                  <span className="w-full text-xs font-bold leading-[13px] tracking-normal text-texto">
                    {t.performance.unidadesAtivas.region}
                  </span>
                  <div className="flex w-full items-center gap-1.5">
                    <span className="text-lg font-bold leading-[22px] tracking-normal text-verde-pvc">
                      {t.performance.unidadesAtivas.value}
                    </span>
                    <span className="text-lg font-bold leading-[22px] tracking-normal text-verde-pvc">
                      {t.performance.unidadesAtivas.unit}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha de 5 cartões de contato — existe só na variação Padrão
            (>=1280); não existe nas variações 1280 nem 1024. */}
        <div className="hidden w-full flex-wrap items-stretch justify-center gap-5 xl:flex">
          {t.infoCards.map((card: { title: string; description: string }, index: number) => (
            <div
              key={card.title}
              className="flex min-h-[130px] min-w-[250px] flex-1 items-center justify-center gap-[15px] rounded-2xl bg-wt px-[15px] py-[30px]"
            >
              <Image src={INFO_CARDS_ICONS[index]} alt="" width={40} height={40} className="shrink-0 object-contain" />
              <div className="flex flex-1 flex-col items-start gap-2.5 text-dark-blue">
                <span className="w-full text-base font-bold leading-5 tracking-normal">
                  {card.title}
                </span>
                <p className="w-full text-sm font-normal leading-4 tracking-normal">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
