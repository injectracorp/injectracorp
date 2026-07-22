import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7223:5921).
const BENEFICIOS_ICONS = [
  "/assets/representantes/icon-comissoes.svg",
  "/assets/representantes/icon-produtos-qualidade.svg",
  "/assets/footer/icon-headset.svg",
  "/assets/representantes/icon-marketing.svg",
  "/assets/representantes/icon-marca-global.svg",
  "/assets/footer/icon-scale-graphic.svg",
];

export default function Beneficios({ dict }: { dict: Dictionary }) {
  const t = dict.representantes.beneficios;
  const beneficios = BENEFICIOS_ICONS.map((icon: string, index: number) => ({
    icon,
    title: t.items[index].title,
    description: t.items[index].description,
  }));

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
        {beneficios.map((item) => (
          <div
            key={item.title}
            className="flex min-h-[235px] min-w-[180px] flex-1 flex-col items-center justify-center gap-5 rounded-2xl bg-bg-cinza px-5 py-[30px]"
          >
            <Image className="object-contain" src={item.icon} alt="" width={40} height={40} />
            {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
            <span className="text-center text-lg font-bold leading-[22px] tracking-normal text-prime-ip">
              {item.title}
            </span>
            {/* Desc 14 — 14px/16px, 55 Roman (400) */}
            <p className="text-center text-sm font-normal leading-4 tracking-normal text-texto">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
