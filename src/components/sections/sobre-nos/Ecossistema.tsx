import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7262:8850).
const ITEM_ICONS = [
  "/assets/sobre-nos/icon-machine.svg",
  "/assets/sobre-nos/icon-braco-robo.svg",
  "/assets/sobre-nos/icon-iot.svg",
  "/assets/sobre-nos/icon-ia.svg",
  "/assets/sobre-nos/icon-mobile.svg",
  "/assets/sobre-nos/icon-analytics-cloud.svg",
  "/assets/sobre-nos/icon-plataforma.svg",
  "/assets/footer/icon-headset.svg",
];

export default function Ecossistema({ dict }: { dict: Dictionary }) {
  const t = dict.sobreNos.ecossistema;
  return (
    <Section className="bg-bg-cinza" innerClassName="gap-5">
      <div className="flex w-full flex-col items-start gap-5">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          {t.title}
        </h2>
        <span
          className="h-0.5 w-[60px] rounded-full"
          style={{ background: "var(--gradient-injectra)" }}
        />
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-5">
        {t.items.map((item: { title: string; description: string }, i: number) => (
          <div
            key={item.title}
            className="flex min-w-[280px] flex-1 items-center gap-5 rounded-2xl bg-wt px-5 py-[30px]"
          >
            <Image src={ITEM_ICONS[i]} alt="" width={50} height={50} className="shrink-0 object-contain" />
            <div className="flex flex-1 flex-col items-start">
              {/* Subtítulo BK 20 — 20px/22px, 85 Heavy (700) */}
              <span className="min-h-[35px] w-full text-xl font-bold leading-[22px] tracking-normal text-azul-claro-plus">
                {item.title}
              </span>
              {/* Texto menor 16 — 16px/20px, 55 Roman (400) */}
              <p className="min-h-[45px] w-full text-base font-normal leading-5 tracking-normal text-texto">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
