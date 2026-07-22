import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7272:8156).
// Ícones permanecem no componente; title/description vêm de dict.suporte.solucoes.items.
const SOLUCAO_ICONS = [
  "/assets/footer/icon-headset.svg",
  "/assets/suporte/icon-garantia-shield.svg",
  "/assets/suporte/icon-manuais-book.svg",
  "/assets/suporte/icon-downloads-cloud.svg",
  "/assets/representantes/icon-avaliacao.svg",
  "/assets/suporte/icon-pecas-container.svg",
];

export default function Solucoes({ dict }: { dict: Dictionary }) {
  const t = dict.suporte.solucoes;
  const solucoes = t.items.map((item: { title: string; description: string }, index: number) => ({
    icon: SOLUCAO_ICONS[index],
    title: item.title,
    description: item.description,
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
        {solucoes.map((item: { icon: string; title: string; description: string }) => (
          <div
            key={item.title}
            className="flex min-h-[235px] min-w-[180px] flex-1 flex-col items-center justify-center gap-5 rounded-2xl bg-bg-cinza px-5 py-[30px]"
          >
            <Image className="object-contain" src={item.icon} alt="" width={40} height={40} />
            {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
            <span className="min-h-[35px] text-center text-lg font-bold leading-[22px] tracking-normal text-prime-ip">
              {item.title}
            </span>
            {/* Desc 14 — 14px/16px, 55 Roman (400) */}
            <p className="min-h-[60px] text-center text-sm font-normal leading-4 tracking-normal text-texto">
              {item.description}
            </p>
            <a href="#" className="flex items-center gap-[5px]">
              {/* Label 14 — 14px/17px, 85 Heavy (700) */}
              <span className="text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus">
                {t.accessLabel}
              </span>
              <Image className="object-contain" src="/assets/shared/arrow-side-blue.svg" alt="" width={9} height={9} />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
