import Image from "next/image";
import Link from "@/components/LocaleLink";
import Section from "@/components/layout/Section";
import type { MachineModel } from "@/data/machineModels";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7243:9583).
// A tira de selos é a mesma da INDÚSTRIA (TrustBar.tsx), EXPERIENCE CENTER
// (Confianca.tsx), CATÁLOGOS (CTA.tsx) e REPRESENTANTES (CTA.tsx).
// O ícone de cada item acompanha o item correspondente em
// dict.maquinas.modelo.ctaConfigurar.trustItems (mesma ordem/índice).
const TRUST_ICONS = [
  "/assets/footer/usa-flag.svg",
  "/assets/shared/icon-presenca-americas.svg",
  "/assets/shared/icon-experiencia-anos.svg",
  "/assets/shared/icon-suporte-247.svg",
  "/assets/shared/icon-sustentabilidade.svg",
];

export default function CtaConfigurar({ model, dict }: { model: MachineModel; dict: Dictionary }) {
  const t = dict.maquinas.modelo.ctaConfigurar;
  // Figma usa o nome do modelo sem espaços ao redor do hífen nesta chamada
  // específica ("Prime IP-60?"), diferente do H1/breadcrumb ("Prime IP - 60").
  const shortLabel = model.name.replace(" - ", "-");
  const title = t.titleTemplate.replace("{model}", shortLabel);

  return (
    <Section innerClassName="gap-10">
      <div className="flex w-full flex-wrap items-center gap-5 rounded-2xl bg-bg-cinza p-10">
        <span className="flex size-[110px] shrink-0 items-center justify-center rounded-full border-[0.5px] border-azul-claro-plus p-1">
          <span className="flex size-full items-center justify-center rounded-full bg-azul-claro-plus p-7">
            <Image src="/assets/maquinas/icon-chat-configurar.svg" alt="" width={30} height={30} />
          </span>
        </span>
        <div className="flex min-w-[200px] flex-1 flex-col items-start gap-5">
          {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
          <h2 className="w-full text-[26px] font-bold leading-[28px] tracking-normal text-dark-blue">
            {title}
          </h2>
          {/* Texto menor 16 — 16px/20px, 55 Roman (400) */}
          <p className="w-full text-base font-normal leading-5 tracking-normal text-texto">
            {t.description}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <Link
            href="/solicitar-cotacao"
            className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md bg-azul-claro-plus px-[15px] py-2.5 text-base font-bold leading-[normal] text-wt transition-opacity hover:opacity-90"
          >
            {t.ctaCotacao}
            <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
          </Link>
          <Link
            href="/fale-com-especialista"
            className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border border-azul-claro-plus bg-wt px-[15px] py-2.5 text-base font-bold leading-[normal] text-azul-claro-plus transition-colors hover:bg-bg-light-clean"
          >
            {t.ctaEspecialista}
            <Image className="object-contain" src="/assets/shared/arrow-side-blue-light.svg" alt="" width={9} height={9} />
          </Link>
        </div>
      </div>

      <div className="flex w-full flex-wrap items-center justify-center gap-5 rounded-2xl bg-bg-cinza px-5 py-10">
        {t.trustItems.map((item: { title: string; description: string }, i: number) => (
          <div key={item.title} className="flex min-w-[180px] flex-1 items-center gap-5">
            <Image src={TRUST_ICONS[i]} alt="" width={40} height={40} className="shrink-0 object-contain" />
            <div className="flex flex-1 flex-col items-start gap-2.5">
              {/* Label 12 — 12px/13px, 85 Heavy (700) */}
              <span className="w-full text-xs font-bold leading-[13px] tracking-normal text-dark-blue">
                {item.title}
              </span>
              {/* Desc 12 — 12px/14px, 55 Roman (400) */}
              <p className="w-full text-xs font-normal leading-[14px] tracking-normal text-texto">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
