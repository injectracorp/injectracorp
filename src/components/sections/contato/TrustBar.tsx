import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7262:9003) —
// mesma tira de selos usada em outras páginas (ver industria/TrustBar.tsx).
const ITEMS_ICONS = [
  "/assets/footer/usa-flag.svg",
  "/assets/shared/icon-presenca-americas.svg",
  "/assets/shared/icon-experiencia-anos.svg",
  "/assets/shared/icon-suporte-247.svg",
  "/assets/shared/icon-sustentabilidade.svg",
];

export default function TrustBar({ dict }: { dict: Dictionary }) {
  const t = dict.contato.trustBar;
  return (
    <Section>
      <div className="flex w-full flex-wrap items-center justify-center gap-5 rounded-2xl bg-bg-cinza px-5 py-10">
        {t.items.map((item: { title: string; subtitle: string }, index: number) => (
          <div key={item.title} className="flex min-w-[180px] flex-1 items-center gap-5">
            <Image src={ITEMS_ICONS[index]} alt="" width={40} height={40} className="shrink-0 object-contain" />
            <div className="flex flex-1 flex-col items-start gap-2.5">
              <span className="w-full text-xs font-bold leading-[13px] tracking-normal text-dark-blue">
                {item.title}
              </span>
              <p className="w-full text-xs font-normal leading-[14px] tracking-normal text-texto">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
