import Image from "next/image";
import Link from "@/components/LocaleLink";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

const EXPERIENCE_ICONS = [
  "/assets/capacidade/icon-tecnologia.svg",
  "/assets/capacidade/icon-demonstracoes.svg",
  "/assets/capacidade/icon-testes.svg",
  "/assets/capacidade/icon-treinamentos.svg",
  "/assets/capacidade/icon-eventos.svg",
];

function Checklist({ items }: { items: string[] }) {
  return (
    <div className="flex w-full max-w-[250px] min-w-[200px] flex-col items-start gap-1.5">
      {items.map((item) => (
        <div key={item} className="flex w-full items-center gap-2.5">
          <Image src="/assets/capacidade/checkin.svg" alt="" width={14} height={14} />
          {/* Texto menor 16 — 16px/20px, 55 Roman (400) */}
          <p className="flex-1 text-base font-normal leading-5 tracking-normal text-texto">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Capacidade({ dict }: { dict: Dictionary }) {
  const t = dict.home.capacidade;
  const experienceItems = t.experienceItems.map((item: { label: string }, i: number) => ({
    icon: EXPERIENCE_ICONS[i],
    label: item.label,
  }));
  return (
    <Section innerClassName="gap-5" className="bg-bg-cinza">
      <div className="flex w-full flex-col gap-5 lg:flex-row">
        {/* Robótica Neo */}
        <div
          className="relative flex min-h-[400px] flex-1 flex-wrap items-center justify-center gap-5 overflow-hidden rounded-2xl bg-cover bg-center px-5 pt-5"
          style={{ backgroundImage: "url(/assets/capacidade/panel-neo-bg.webp)" }}
        >
          <div className="flex max-w-[280px] min-w-[200px] flex-1 flex-col items-start gap-5 self-stretch pb-5">
            {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
            <h3 className="flex min-h-[60px] items-center text-2xl font-extrabold leading-[30px] tracking-normal text-gradient-brand sm:min-h-[78px] sm:text-[32px] sm:leading-[39px]">
              {t.roboticaNeo.title}
            </h3>
            {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
            <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
              {t.roboticaNeo.description}
            </p>
            <Checklist items={t.roboticaNeo.items} />
            {/* Label 14 — 14px/17px, 85 Heavy (700) */}
            <a
              href="#robotica-neo"
              className="mt-auto flex items-center gap-2.5 rounded-md bg-azul-claro-plus px-[15px] py-2.5 text-sm font-bold leading-[17px] tracking-normal text-wt transition-opacity hover:opacity-90"
            >
              {t.roboticaNeo.cta}
              <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
            </a>
          </div>
          <div className="flex h-[380px] flex-1 items-end justify-end self-end">
            <Image
              src="/assets/capacidade/robot-photo.webp"
              alt={t.roboticaNeo.photoAlt}
              width={420}
              height={392}
              className="h-auto w-full max-w-[420px]"
            />
          </div>
        </div>

        {/* Plataforma Injectra AI */}
        <div
          className="relative flex min-h-[400px] flex-1 flex-wrap items-center justify-center gap-5 overflow-hidden rounded-2xl bg-cover bg-center px-5 py-2.5"
          style={{ backgroundImage: "url(/assets/shared/panel-gradient-bg.webp)" }}
        >
          <div className="flex max-w-[280px] min-w-[200px] flex-1 flex-col items-start gap-5 py-2.5">
            {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
            <h3 className="text-2xl font-extrabold leading-[30px] tracking-normal text-azul-claro-plus sm:text-[32px] sm:leading-[39px]">
              {t.plataformaAi.title}
            </h3>
            <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
              {t.plataformaAi.description}
            </p>
            <Checklist items={t.plataformaAi.items} />
            <Link
              href="/plataforma-ai"
              className="flex items-center gap-2.5 rounded-md bg-azul-claro-plus px-[15px] py-2.5 text-sm font-bold leading-[17px] tracking-normal text-wt transition-opacity hover:opacity-90"
            >
              {t.plataformaAi.cta}
              <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
            </Link>
          </div>
          <div className="flex h-[351px] flex-1 items-center justify-center">
            <Image
              src="/assets/capacidade/tablet-phone-photo.webp"
              alt={t.plataformaAi.photoAlt}
              width={420}
              height={347}
              className="h-auto w-full max-w-[420px]"
            />
          </div>
        </div>
      </div>

      {/* Experience Center */}
      <div
        className="relative flex w-full flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl bg-cover bg-center p-5 lg:flex-row lg:flex-wrap"
        style={{ backgroundImage: "url(/assets/shared/panel-gradient-bg.webp)" }}
      >
        <div className="relative aspect-[360/176] w-full overflow-hidden rounded-xl lg:w-[360px]">
          <Image
            src="/assets/capacidade/building-photo.webp"
            alt={t.experienceCenter.photoAlt}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex min-w-[300px] flex-1 flex-col items-start gap-5">
          <div className="flex w-full flex-wrap items-center justify-center gap-5">
            <div className="flex min-w-[200px] flex-1 flex-col items-start gap-5 text-dark-blue">
              {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
              <h3 className="text-[26px] font-bold leading-[28px] tracking-normal">
                {t.experienceCenter.title}
              </h3>
              <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
                {t.experienceCenter.description}
              </p>
            </div>
            <Link
              href="/experience-center"
              className="flex shrink-0 items-center gap-1.5 text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus hover:opacity-80"
            >
              {t.experienceCenter.cta}
              <Image className="object-contain" src="/assets/shared/arrow-side-blue.svg" alt="" width={9} height={9} />
            </Link>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-5">
            {experienceItems.map((item: { icon: string; label: string }) => (
              <div key={item.label} className="flex min-w-[120px] flex-1 items-center gap-2.5">
                <Image src={item.icon} alt="" width={30} height={30} className="shrink-0" />
                <span className="flex-1 text-sm font-normal leading-[17px] tracking-normal text-dark-blue">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
