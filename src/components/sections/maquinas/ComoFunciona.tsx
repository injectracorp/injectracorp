import Image from "next/image";
import Section from "@/components/layout/Section";
import { getMachinePhoto } from "@/data/machinePhotos";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7237:9310).
// A ilustração à direita é um mockup estático do Figma: a lista lateral e os
// botões duplicados de "Falar com Especialista" repetem o texto placeholder
// "Prime IP - X" tal como está no design (não é conteúdo real/funcional).
const SIDEBAR_ITEMS_COUNT = 14;

const SPEC_ICONS = [
  "/assets/maquinas/icon-peso-fechamento.svg",
  "/assets/maquinas/icon-tie-bar.svg",
  "/assets/maquinas/icon-alta-precisao.svg",
  "/assets/maquinas/icon-suporte-tecnico.svg",
];

export default function ComoFunciona({ dict }: { dict: Dictionary }) {
  const t = dict.maquinas.comoFunciona;
  const primePhoto = getMachinePhoto("Prime");
  return (
    <Section innerClassName="gap-5" direction="row">
      <div className="flex w-full min-w-[280px] max-w-[450px] flex-1 flex-col items-start gap-5 self-start text-dark-blue">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal sm:text-[32px] sm:leading-[39px]">
          {t.title}
        </h2>
        {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
        <p className="text-lg font-normal leading-[22px] tracking-normal">
          {t.description}
        </p>
      </div>

      <div className="flex min-w-[280px] flex-1 gap-5 self-start">
        {/* Lista lateral (mockup ilustrativo) */}
        <div className="flex max-w-[180px] flex-1 flex-col overflow-hidden rounded-2xl border border-border-line-bd">
          {Array.from({ length: SIDEBAR_ITEMS_COUNT }).map((_, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-3 py-2.5 text-xs font-bold leading-4 tracking-normal ${
                i === 0
                  ? "bg-azul-claro-plus text-wt"
                  : "border-b border-border-line-bd text-texto last:border-b-0"
              }`}
            >
              <span className="flex-1">{t.sidebarItemLabel}</span>
              <ArrowIcon />
            </div>
          ))}
        </div>

        {/* Painel de detalhe (mockup ilustrativo) */}
        <div className="flex min-w-0 flex-1 flex-col gap-5 pt-3">
          <div className="flex flex-col gap-5">
            {/* TÍTULO 32 — escala reduzida no mockup original (30.86px) */}
            <h3 className="text-[26px] font-extrabold leading-[30px] tracking-normal text-dark-blue">
              {t.detailTitle}
            </h3>
            <p className="text-sm font-normal leading-4 tracking-normal text-texto">
              {t.detailDescription}
            </p>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="flex items-center gap-1.5 rounded-md bg-azul-claro-plus px-2.5 py-1.5 text-xs font-bold leading-3 tracking-normal text-wt">
                {t.ctaCatalogos}
                <ArrowIcon />
              </span>
              <span className="flex items-center gap-1.5 rounded-md border border-azul-claro bg-wt px-2.5 py-1.5 text-xs font-bold leading-3 tracking-normal text-azul-claro">
                <Image src="/assets/shared/mail-icon.svg" alt="" width={12} height={12} />
                {t.ctaEspecialista}
                <ArrowIcon />
              </span>
              <span className="flex items-center gap-1.5 rounded-md border border-azul-claro bg-wt px-2.5 py-1.5 text-xs font-bold leading-3 tracking-normal text-azul-claro">
                <Image src="/assets/shared/mail-icon.svg" alt="" width={12} height={12} />
                {t.ctaEspecialista}
                <ArrowIcon />
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center py-3">
            <Image
              src={primePhoto?.src ?? "/assets/shared/machine-photo.png"}
              alt={t.detailTitle}
              width={primePhoto?.width ?? 500}
              height={primePhoto?.height ?? 187}
              className="h-auto w-full max-w-[500px] object-contain"
            />
          </div>

          <div className="flex w-full flex-wrap items-center justify-center gap-y-5 rounded-[10px] border border-border-line-bd bg-wt py-5">
            {t.specs.map((spec: { title: string; subtitle?: string }, i: number) => (
              <div
                key={spec.title}
                className="flex flex-1 min-w-[110px] items-center justify-center gap-2.5 border-x border-border-line-bd px-2.5"
              >
                <Image src={SPEC_ICONS[i]} alt="" width={26} height={26} className="shrink-0 object-contain" />
                <div className="flex flex-col items-start gap-1.5 whitespace-nowrap text-dark-blue">
                  <span className="text-xs font-bold leading-3 tracking-normal">{spec.title}</span>
                  {spec.subtitle && (
                    <span className="text-[10px] font-normal leading-3 tracking-normal">
                      {spec.subtitle}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 11.2 8.83675" width={9} height={9} fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M0.6 3.81838C0.268629 3.81838 0 4.08701 0 4.41838C0 4.74975 0.268629 5.01838 0.6 5.01838V4.41838V3.81838ZM11.0243 4.84264C11.2586 4.60833 11.2586 4.22843 11.0243 3.99411L7.20589 0.175736C6.97157 -0.0585785 6.59167 -0.0585785 6.35736 0.175736C6.12304 0.410051 6.12304 0.78995 6.35736 1.02426L9.75147 4.41838L6.35736 7.81249C6.12304 8.0468 6.12304 8.4267 6.35736 8.66102C6.59167 8.89533 6.97157 8.89533 7.20589 8.66102L11.0243 4.84264ZM0.6 4.41838V5.01838H10.6V4.41838V3.81838H0.6V4.41838Z"
        fill="currentColor"
      />
    </svg>
  );
}
