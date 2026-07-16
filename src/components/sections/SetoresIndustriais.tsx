import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7113:3844).
const SETORES = [
  { label: "Automotivo", image: "/assets/setores/automotivo.png" },
  { label: "Embalagens", image: "/assets/setores/embalagens.png" },
  { label: "Médico", image: "/assets/setores/medico.png" },
  { label: "Construção", image: "/assets/setores/construcao.png" },
  { label: "Eletrônicos", image: "/assets/setores/eletronicos.png" },
  { label: "Utilidades Domésticas", image: "/assets/setores/utilidades-domesticas.png" },
  { label: "Logística", image: "/assets/setores/logistica.png" },
];

export default function SetoresIndustriais() {
  return (
    <Section innerClassName="gap-5">
      {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
      <h2 className="w-full text-[26px] font-bold leading-[28px] tracking-normal text-dark-blue">
        Soluções para os principais setores
      </h2>
      {/* Cards com largura fixa (157.5px, igual ao Figma) e centralizados —
          não usam flex-1 para não esticar de forma desigual quando a última
          linha do wrap tem menos itens que as demais. */}
      <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
        {SETORES.map((setor) => (
          <div
            key={setor.label}
            className="flex w-[157.5px] flex-none flex-col items-center gap-2.5 rounded-xl bg-bg-cinza p-5"
          >
            <div className="flex h-[120px] w-full items-center justify-center overflow-hidden">
              <Image
                src={setor.image}
                alt={setor.label}
                width={117}
                height={100}
                className="h-auto max-h-[120px] w-auto max-w-[117px] object-contain"
              />
            </div>
            {/* Label 14 — 14px/17px, 85 Heavy (700) */}
            <span className="text-center text-sm font-bold leading-[17px] tracking-normal text-dark-blue">
              {setor.label}
            </span>
          </div>
        ))}
        <div className="flex w-[157.5px] flex-none flex-col items-center gap-2.5 rounded-xl bg-bg-cinza p-5">
          <div className="flex h-[120px] w-full items-center justify-center">
            <span className="flex h-[70px] w-[70px] items-center justify-center rounded-full border border-border-line-bd bg-wt">
              <Image src="/assets/setores/mais-icon.svg" alt="" width={40} height={8} />
            </span>
          </div>
          <span className="text-center text-sm font-bold leading-[17px] tracking-normal text-dark-blue">
            E muito mais...
          </span>
        </div>
      </div>
    </Section>
  );
}
