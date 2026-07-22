import Image from "next/image";
import Link from "@/components/LocaleLink";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7262:9741).
// Valores numéricos (não traduzíveis) permanecem no componente; os rótulos
// e descrições vêm do dicionário na mesma ordem.
const PERFORMANCE_STATS_VALUES = ["+18,6%", "92.4%", "95.2%"];

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
      style={{ backgroundImage: "url(/assets/contato/banner-bg.png)" }}
    >
      <div className="absolute inset-0 bg-white/35" />
      <Section innerClassName="flex-1 gap-10" className="relative flex-1 p-0">
        <div className="flex w-full flex-1 flex-col items-stretch gap-10 lg:flex-row">
          <div className="flex w-full min-w-[280px] max-w-[520px] flex-1 flex-col items-start justify-center gap-10">
            <div className="flex flex-col items-start gap-5">
              <span className="text-base font-bold leading-5 tracking-normal text-gradient-injectra">
                {t.eyebrow}
              </span>
              <span
                className="h-[3px] w-10 rounded-full"
                style={{ background: "var(--gradient-injectra)" }}
              />
            </div>
            <h1 className="text-4xl font-extrabold leading-[42px] tracking-normal text-dark-blue sm:text-[48px] sm:leading-[55px]">
              {t.titlePrefix}
              <span className="text-[#1441e8]">{t.titleHighlight}</span>
            </h1>
            <p className="text-xl font-normal leading-[26px] tracking-normal text-texto">
              {t.description}
            </p>
            <div className="flex w-full flex-wrap items-center gap-5">
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

          <div className="flex w-full flex-1 flex-col gap-5 min-w-[280px] sm:flex-row sm:items-stretch">
            <div className="relative flex flex-1 min-w-[280px] flex-col gap-5 overflow-hidden rounded-2xl px-5 py-[30px]">
              <div className="absolute inset-0 bg-white/80 mix-blend-soft-light" />
              <div className="relative flex flex-col items-start gap-5">
                <span className="text-xl font-bold leading-[22px] tracking-normal text-gradient-injectra">
                  {t.atendimento.title}
                </span>
                <p className="text-base font-normal leading-5 tracking-normal text-texto">
                  {t.atendimento.description}
                </p>
              </div>
              <div className="relative flex flex-col items-start justify-center gap-5">
                {t.atendimento.items.map((item: string) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <Image src="/assets/contato/icon-check.svg" alt="" width={14} height={14} />
                    <span className="flex-1 text-base font-normal leading-5 tracking-normal text-texto">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex flex-1 min-w-[280px] flex-col gap-5 overflow-hidden rounded-2xl px-5 py-[30px]">
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
              <div className="relative flex w-full items-center justify-center gap-2.5">
                <div className="relative aspect-[2201/1685] w-[57.14%] overflow-hidden rounded-xl border-[0.5px] border-border-line-bd">
                  <Image
                    src="/assets/contato/chart-crescimento-producao.png"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[1539/1686] w-[39.94%] overflow-hidden rounded-xl border-[0.5px] border-border-line-bd">
                  <Image
                    src="/assets/contato/chart-unidades-ativas.png"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
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
