import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7258:6802).
const SPEC_ICONS = [
  "/assets/robotica/icon-grau-liberdade.svg",
  "/assets/robotica/icon-visao-percepcao.svg",
  "/assets/robotica/icon-velocidade-maxima.svg",
  "/assets/robotica/icon-carga-util.svg",
  "/assets/robotica/icon-protecao-industrial.svg",
];
const SPEC_VALUES = ["24", "360º", "5+ km/h", "10+ kg", "IPS4"];

export default function Capacidade({ dict }: { dict: Dictionary }) {
  const t = dict.robotica.capacidade;
  const checklist: string[] = t.checklist;
  const specLabels: string[] = t.specs;

  return (
    <Section className="bg-bg-cinza">
      <div className="flex w-full flex-wrap items-stretch justify-center gap-x-10 gap-y-10 rounded-2xl border-[0.5px] border-border-line-bd bg-wt px-10 pt-10">
        <div className="flex min-w-[200px] flex-1 flex-col items-start gap-5 pb-10">
          {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
          <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal text-gradient-brand sm:text-[32px] sm:leading-[39px]">
            {t.title}
          </h2>
          {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
          <p className="text-lg font-bold leading-[22px] tracking-normal text-texto">
            {t.subtitle}
          </p>
          <div className="flex w-full min-w-[200px] flex-col items-start gap-5">
            {checklist.map((item) => (
              <div key={item} className="flex w-full items-center gap-2.5">
                <Image src="/assets/capacidade/checkin.svg" alt="" width={14} height={14} className="shrink-0" />
                {/* Texto menor 16 — 16px/20px, 55 Roman (400) */}
                <p className="flex-1 text-base font-normal leading-5 tracking-normal text-texto">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <a
            href="#contato"
            className="flex min-h-10 items-center justify-center gap-2.5 rounded-md border border-azul-claro-plus bg-wt px-5 py-2.5 text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus hover:bg-bg-light-clean"
          >
            {t.ctaLabel}
            <Image className="object-contain" src="/assets/shared/arrow-side-blue.svg" alt="" width={9} height={9} />
          </a>
        </div>

        <div className="flex h-[380px] shrink-0 items-end justify-end pb-10">
          <Image
            src="/assets/robotica/fybot-full.png"
            alt={t.robotImageAlt}
            width={309}
            height={380}
            className="h-full w-auto object-cover"
          />
        </div>

        <div className="flex min-w-[200px] flex-col items-start justify-center gap-[30px] pb-10">
          {specLabels.map((label, i) => (
            <div key={label} className="flex items-center gap-5">
              <Image src={SPEC_ICONS[i]} alt="" width={30} height={30} className="shrink-0 object-contain" />
              <div className="flex flex-col items-start gap-2.5 whitespace-nowrap text-texto">
                <span className="text-lg font-bold leading-[22px] tracking-normal">{SPEC_VALUES[i]}</span>
                <span className="text-base font-normal leading-5 tracking-normal">{label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-[285px] min-w-[200px] flex-col items-start gap-5 border-l-[0.5px] border-border-line-bd pb-10 pl-10">
          <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl">
            <Image
              src="/assets/robotica/video-thumb-bg.png"
              alt=""
              fill
              className="object-cover"
            />
            <Image
              src="/assets/robotica/fybot-thumb.png"
              alt={t.videoThumbAlt}
              width={200}
              height={200}
              className="relative z-10 h-[70%] w-auto object-cover"
            />
            <Image
              src="/assets/robotica/icon-play.svg"
              alt=""
              width={85}
              height={85}
              className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
          <h3 className="w-full text-lg font-bold leading-[22px] tracking-normal text-texto">
            {t.videoTitle}
          </h3>
          <p className="w-full text-base font-normal leading-5 tracking-normal text-texto">
            {t.videoDescription}
          </p>
          <a
            href="#contato"
            className="flex items-center gap-1.5 text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus hover:opacity-80"
          >
            {t.watchLabel}
            <Image className="object-contain" src="/assets/shared/arrow-side-blue.svg" alt="" width={9} height={9} />
          </a>
        </div>
      </div>
    </Section>
  );
}
