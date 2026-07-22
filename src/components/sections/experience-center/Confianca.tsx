import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7191:3842).
const ICONS = [
  "/assets/footer/usa-flag.svg",
  "/assets/shared/icon-presenca-americas.svg",
  "/assets/shared/icon-experiencia-anos.svg",
  "/assets/shared/icon-suporte-247.svg",
  "/assets/shared/icon-sustentabilidade.svg",
];

export default function Confianca({ dict }: { dict: Dictionary }) {
  const items: { title: string; description: string }[] = dict.experienceCenter.confianca.items;

  return (
    <Section>
      <div className="flex w-full flex-wrap items-center justify-center gap-5 rounded-2xl bg-bg-cinza px-5 py-10">
        {items.map((item, index) => (
          <div
            key={item.title}
            className="flex min-w-[180px] flex-1 items-center justify-center gap-5"
          >
            <Image src={ICONS[index]} alt="" width={40} height={40} className="shrink-0 object-contain" />
            <div className="flex flex-1 flex-col items-start gap-2.5 text-xs">
              {/* Label 12 — 12px/13px, 85 Heavy (700) */}
              <span className="font-bold leading-[13px] tracking-normal text-dark-blue">
                {item.title}
              </span>
              {/* Desc 12 — 12px/14px, 55 Roman (400) */}
              <span className="font-normal leading-[14px] tracking-normal text-texto">
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
