import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7274:8602).
const ITEMS = [
  {
    icon: "/assets/suporte/icon-qualidade-garantida-white.svg",
    title: "Qualidade Garantida",
  },
  {
    icon: "/assets/suporte/icon-entrega-rapida.svg",
    title: "Entrega Rápida",
  },
  {
    icon: "/assets/suporte/icon-compatibilidade-total.svg",
    title: "Compatibilidade Total",
  },
];

export default function Pecas() {
  return (
    <Section>
      <div className="flex w-full flex-wrap items-center justify-center gap-10 overflow-hidden rounded-2xl bg-dark-blue p-10">
        <div className="w-[280px] shrink-0">
          <Image
            src="/assets/suporte/pecas-produto.png"
            alt="Peças originais Injectra"
            width={280}
            height={174}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="flex min-w-px max-w-[400px] flex-1 flex-col items-start gap-10">
          <div className="flex w-full min-w-[210px] flex-col items-start gap-5 text-wt">
            {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
            <h2 className="w-full text-[26px] font-bold leading-[28px]">
              Peças originais Injectra
            </h2>
            {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
            <p className="w-full text-lg font-normal leading-[22px]">
              Máxima qualidade e durabilidade para o seu equipamento. Solicite
              agora suas peças de reposição originais.
            </p>
          </div>
          <a
            href="#"
            className="flex min-h-[30px] min-w-[200px] items-center justify-center gap-2.5 rounded-md border border-wt px-5 py-[15px] text-sm font-bold leading-[17px] text-wt transition-opacity hover:opacity-90"
          >
            <Image src="/assets/suporte/icon-carrinho-compras.svg" alt="" width={18} height={18} />
            Solicitar peças
            <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
          </a>
        </div>
        <div className="flex flex-1 items-center">
          {ITEMS.map((item, index) => (
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
