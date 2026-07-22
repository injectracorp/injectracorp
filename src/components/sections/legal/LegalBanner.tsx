import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Chave usada por cada página institucional/legal que reaproveita este par
// de componentes para localizar seu próprio recorte em dict.legal.<page>.
export type LegalPageKey =
  | "compliance"
  | "cookies"
  | "privacyPolicy"
  | "termsOfUse"
  | "warrantySupport";

type LegalBannerProps = {
  dict: Dictionary;
  page: LegalPageKey;
};

// Banner compacto e centralizado para páginas institucionais/legais,
// reaproveitando o mesmo idioma visual dos banners de seção (eyebrow com
// gradiente + barra + título dark-blue) usado em industria/maquinas/suporte.
export default function LegalBanner({ dict, page }: LegalBannerProps) {
  const t = dict.legal[page].banner;
  const lastUpdated = dict.legal.shared.lastUpdated;

  return (
    <div className="flex w-full flex-col items-center bg-bg-light-clean">
      <Section className="py-16" innerClassName="flex-col items-center">
        <div className="flex max-w-[760px] flex-col items-center gap-5 text-center">
          <div className="flex flex-col items-center gap-2.5">
            <span className="text-base font-bold leading-5 tracking-normal text-gradient-brand">
              {t.eyebrow}
            </span>
            <span
              className="h-[3px] w-10 rounded-full"
              style={{ background: "var(--gradient-brand)" }}
            />
          </div>
          <h1 className="text-4xl font-extrabold leading-[42px] tracking-normal text-dark-blue sm:text-[48px] sm:leading-[55px]">
            {t.titleMain} <span className="text-azul-claro">{t.titleHighlight}</span>
          </h1>
          <p className="max-w-[620px] text-xl font-normal leading-[26px] tracking-normal text-texto">
            {t.subtitle}
          </p>
          <p className="text-sm font-normal leading-4 tracking-normal text-texto-sem-destaque-2">
            {lastUpdated}
          </p>
        </div>
      </Section>
    </div>
  );
}
