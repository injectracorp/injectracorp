import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7222:8066).
const CARD_ICONS = [
  "/assets/fale-com-especialista/icon-consultoria-comercial.svg",
  "/assets/fale-com-especialista/icon-consultoria-tecnica.svg",
  "/assets/fale-com-especialista/icon-engenharia-aplicacao.svg",
  "/assets/fale-com-especialista/icon-agendamento-reuniao.svg",
];

type Props = {
  dict: Dictionary;
};

export default function Banner({ dict }: Props) {
  const t = dict.faleComEspecialista.hero;
  const cards = t.cards as { title: string; description: string }[];

  return (
    <div
      className="relative flex w-full min-h-[calc(100vh-80px)] flex-col bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/fale-com-especialista/banner-bg.webp)" }}
    >
      <Section innerClassName="flex-1 gap-10" className="flex-1 py-10">
        <div className="flex w-full flex-1 flex-col items-center gap-10 lg:flex-row">
          <div className="flex w-full min-w-[280px] max-w-[540px] flex-1 flex-col items-start gap-[30px]">
            <div className="flex flex-col items-start gap-5">
              {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
              <span className="text-base font-bold leading-5 tracking-normal text-gradient-brand">
                {t.eyebrow}
              </span>
              <span
                className="h-[3px] w-10 rounded-full"
                style={{ background: "var(--gradient-brand)" }}
              />
            </div>
            {/* TÍTULO 48 — 48px/55px, 95 Black (800) */}
            <h1 className="text-4xl font-extrabold leading-[42px] tracking-normal text-dark-blue sm:text-[48px] sm:leading-[55px]">
              {t.titlePrefix}{" "}
              <span className="text-azul-claro-plus">{t.titleHighlight}</span>
            </h1>
            {/* Subtítulo BK 20 — 20px/22px, 85 Heavy (700) */}
            <p className="text-xl font-bold leading-[22px] tracking-normal text-texto">
              {t.subtitle}
            </p>
            {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
            <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
              {t.body}
            </p>
            <div className="flex w-full flex-wrap items-center gap-5">
              <a
                href="#contato"
                className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md bg-azul-claro-plus px-[15px] py-2.5 text-base font-bold leading-[normal] text-wt transition-opacity hover:opacity-90"
              >
                {t.ctaSchedule}
                <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
              </a>
              <a
                href="#contato"
                className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border border-verde-pvc bg-wt px-[15px] py-2.5 text-base font-bold leading-[normal] text-texto transition-colors hover:bg-bg-light-clean"
              >
                <Image
                  src="/assets/fale-com-especialista/icon-whatsapp.svg"
                  alt=""
                  width={18}
                  height={18}
                />
                {t.ctaWhatsapp}
                <Image className="object-contain"
                  src="/assets/fale-com-especialista/icon-arrow-dark.svg"
                  alt=""
                  width={9}
                  height={9}
                />
              </a>
            </div>
          </div>

          {/* Espaço reservado à direita — máquina + globo já fazem parte da
              imagem de fundo full-bleed da seção. */}
          <div className="hidden min-h-[280px] min-w-[280px] flex-1 lg:block" />
        </div>

        <div className="flex w-full flex-wrap items-stretch justify-center gap-10">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="flex min-h-[235px] min-w-[180px] flex-1 flex-col items-center justify-center gap-5 rounded-2xl bg-wt px-5 py-[30px] shadow-[3px_3px_1.5px_0px_rgba(0,0,0,0.1)]"
            >
              <div className="flex size-[70px] items-center justify-center rounded-lg bg-bg-light-clean p-[15px]">
                <Image src={CARD_ICONS[index]} alt="" width={30} height={30} />
              </div>
              {/* Subtítulo BK 20 — 20px/22px, 85 Heavy (700) */}
              <span className="text-center text-xl font-bold leading-[22px] tracking-normal text-prime-ip">
                {card.title}
              </span>
              {/* Desc 14 — 14px/16px, 55 Roman (400) */}
              <p className="text-center text-sm font-normal leading-4 tracking-normal text-texto">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
