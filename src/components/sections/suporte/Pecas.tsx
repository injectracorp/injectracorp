import Image from "next/image";
import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7274:8602).
// Ícones permanecem no componente; title vem de dict.suporte.pecas.items.
const ITEM_ICONS = [
  "/assets/suporte/icon-qualidade-garantida-white.svg",
  "/assets/suporte/icon-entrega-rapida.svg",
  "/assets/suporte/icon-compatibilidade-total.svg",
];

export default function Pecas({ dict }: { dict: Dictionary }) {
  const t = dict.suporte.pecas;
  const items = t.items.map((item: { title: string }, index: number) => ({
    icon: ITEM_ICONS[index],
    title: item.title,
  }));

  return (
    <Section>
      <div className="flex w-full flex-wrap items-center justify-center gap-10 overflow-hidden rounded-2xl bg-dark-blue p-10">
        <div className="w-[280px] shrink-0">
          <Image
            src="/assets/suporte/pecas-produto.png"
            alt={t.imageAlt}
            width={280}
            height={174}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="flex min-w-px max-w-[400px] flex-1 flex-col items-start gap-10">
          <div className="flex w-full min-w-[210px] flex-col items-start gap-5 text-wt">
            {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
            <h2 className="w-full text-[26px] font-bold leading-[28px]">
              {t.title}
            </h2>
            {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
            <p className="w-full text-lg font-normal leading-[22px]">
              {t.description}
            </p>
          </div>
          <a
            href="#"
            className="flex min-h-[30px] min-w-[200px] items-center justify-center gap-2.5 rounded-md border border-wt px-5 py-[15px] text-sm font-bold leading-[17px] text-wt transition-opacity hover:opacity-90"
          >
            <Image src="/assets/suporte/icon-carrinho-compras.svg" alt="" width={18} height={18} />
            {t.requestPartsLabel}
            <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
          </a>
        </div>
        <div className="flex flex-1 items-center">
          {items.map((item: { icon: string; title: string }, index: number) => (
            <div
              key={item.title}
              className={`flex h-[173px] flex-1 flex-col items-center justify-center gap-5 px-5 py-2.5 ${
                index > 0 ? "border-l border-wt" : ""
              }`}
            >
              <Image src={item.icon} alt="" width={40} height={40} />
              {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
              <span className="min-h-[35px] text-center text-lg font-bold leading-[22px] text-wt">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
