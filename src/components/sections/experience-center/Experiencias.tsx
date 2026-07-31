import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7191:3805).
// Slot de imagem aspect-[4/3] (300/225 no Figma) preenchido por foto real
// (object-cover); badge do ícone ancorado ao bottom do slot (mesma técnica
// validada em industria/Segmentos.tsx) para ficar sempre centrado na
// transição imagem/conteúdo, mesmo com a altura do slot variando de forma
// responsiva.
const ICONS = [
  "/assets/experience-center/icon-card-demonstracoes.svg",
  "/assets/experience-center/icon-card-testes.svg",
  "/assets/experience-center/icon-card-showroom.svg",
  "/assets/experience-center/icon-card-treinamentos.svg",
  "/assets/experience-center/icon-card-validacao.svg",
];
const IMAGES = [
  "/assets/experience-center/card-demonstracoes.webp",
  "/assets/experience-center/card-testes.webp",
  "/assets/experience-center/card-showroom.webp",
  "/assets/experience-center/card-treinamentos.webp",
  "/assets/experience-center/card-validacao.webp",
];

export default function Experiencias({ dict }: { dict: Dictionary }) {
  const t = dict.experienceCenter.experiencias;
  const items: { title: string; description: string }[] = t.items;

  return (
    <Section innerClassName="gap-5">
      <div className="flex w-full flex-col items-start gap-5">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          {t.title}
        </h2>
        <span
          className="h-[2px] w-[60px] rounded-full"
          style={{ background: "var(--gradient-brand)" }}
        />
      </div>

      <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
        {items.map((item, index) => (
          <div
            key={item.title}
            className="flex min-w-[260px] flex-1 flex-col items-center gap-[50px] overflow-hidden rounded-2xl bg-wt pb-[30px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)]"
          >
            <div className="relative aspect-[4/3] w-full shrink-0 bg-bg-cinza">
              <Image
                src={IMAGES[index]}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 260px, 100vw"
                className="object-cover"
              />
              <span className="absolute -bottom-[30px] left-5 flex size-[60px] shrink-0 items-center justify-center rounded-full bg-wt p-4 shadow-[2px_2px_6px_0px_rgba(76,95,224,0.25)]">
                <Image src={ICONS[index]} alt="" width={30} height={30} />
              </span>
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-5 px-5">
              {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
              <h3 className="min-h-[25px] w-full text-lg font-bold leading-[22px] tracking-normal text-azul-claro-plus">
                {item.title}
              </h3>
              {/* Texto menor 16 — 16px/20px, 55 Roman (400) */}
              <p className="min-h-[95px] w-full text-base font-normal leading-5 tracking-normal text-texto">
                {item.description}
              </p>
              <div className="flex items-center gap-[5px]">
                {/* Label 14 — 14px/17px, 85 Heavy (700) */}
                <span className="text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus">
                  {t.saibaMais}
                </span>
                <Image className="object-contain" src="/assets/shared/arrow-side-blue-light.svg" alt="" width={9} height={9} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
