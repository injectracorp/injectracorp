import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7260:8603).
const PILAR_ICONS = [
  "/assets/sobre-nos/icon-machine.svg",
  "/assets/sobre-nos/icon-braco-robo.svg",
  "/assets/sobre-nos/icon-ia.svg",
  "/assets/footer/icon-headset.svg",
];

export default function QuemSomos({ dict }: { dict: Dictionary }) {
  const t = dict.sobreNos.quemSomos;
  return (
    <Section innerClassName="gap-10" direction="row">
      <div className="flex min-w-[350px] max-w-[380px] flex-1 flex-col items-start gap-5 text-dark-blue">
        {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
        <h2 className="w-full text-2xl font-bold leading-7 tracking-normal">{t.title}</h2>
        {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
        <div className="w-full text-lg font-normal leading-[22px] tracking-normal">
          <p className="mb-2.5">
            {t.paragraph1}
          </p>
          <p>
            {t.paragraph2}
          </p>
        </div>
      </div>
      <div className="flex min-w-[350px] flex-[1_0_0] flex-wrap items-center gap-5">
        {t.pilares.map((pilar: { title: string; description: string }, i: number) => (
          <div
            key={pilar.title}
            className="flex min-h-[235px] min-w-[180px] flex-1 flex-col items-center justify-center gap-5 rounded-2xl bg-bg-cinza px-5 py-[30px]"
          >
            <Image src={PILAR_ICONS[i]} alt="" width={40} height={40} className="object-contain" />
            {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
            <span className="min-h-[35px] w-full text-center text-lg font-bold leading-[22px] tracking-normal text-prime-ip">
              {pilar.title}
            </span>
            {/* Desc 14 — 14px/16px, 55 Roman (400) */}
            <p className="min-h-[45px] w-full text-center text-sm font-normal leading-4 tracking-normal text-texto">
              {pilar.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
