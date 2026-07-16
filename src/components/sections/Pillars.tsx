import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7008:2551).
const PILLARS = [
  {
    label: "Máquinas",
    description: "Máquinas de injeção de alta performance para diversas aplicações.",
    icon: "/assets/pillars/machine.svg",
    bg: "bg-[#eef5fd]",
  },
  {
    label: "Robótica",
    description: "Soluções que aumentam a produtividade e reduzem tempos de ciclo.",
    icon: "/assets/pillars/robotica.svg",
    bg: "bg-[#f3faf3]",
  },
  {
    label: "IA",
    description: "Inteligência Artificial que transforma dados em decisões inteligentes.",
    icon: "/assets/pillars/ia.svg",
    bg: "bg-[#f6f3fc]",
  },
  {
    label: "IoT",
    description: "Dispositivos conectados e sensores para total visibilidade.",
    icon: "/assets/pillars/iot.svg",
    bg: "bg-[#f1fbfc]",
  },
  {
    label: "Software",
    description: "Software industrial poderoso para gerenciar toda a operação.",
    icon: "/assets/pillars/software.svg",
    bg: "bg-[#fef7ef]",
  },
  {
    label: "Serviços",
    description: "Suporte completo da instalação à evolução contínua.",
    icon: "/assets/pillars/servicos.svg",
    bg: "bg-[#f6f3fe]",
  },
];

export default function Pillars() {
  return (
    <Section innerClassName="gap-5">
      <div className="flex w-full flex-col items-center gap-5 text-center">
        {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
        <span className="text-lg font-normal leading-[22px] tracking-normal text-dark-blue">
          NÓS NÃO CONSTRUÍMOS APENAS MÁQUINAS
        </span>
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="max-w-3xl text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          Construímos<span className="text-gradient-brand"> Plataformas Industriais Inteligentes.</span>
        </h2>
        <span
          className="h-[2px] w-[60px] rounded-full"
          style={{ background: "var(--gradient-brand)" }}
        />
      </div>

      {/* Cards com largura fixa (216.67px, igual ao Figma) e centralizados —
          não usam flex-1 para não esticar de forma desigual quando a última
          linha do wrap tem menos itens que as demais. */}
      <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
        {PILLARS.map((pillar) => (
          <div
            key={pillar.label}
            className={`flex min-h-[235px] w-[216.67px] flex-none flex-col items-center justify-center gap-5 rounded-2xl px-5 py-[30px] ${pillar.bg}`}
          >
            <Image src={pillar.icon} alt="" width={60} height={60} />
            {/* Subtítulo BK 20 — 20px/22px, 85 Heavy (700) */}
            <span className="text-gradient-navy text-xl font-bold leading-[22px] tracking-normal">
              {pillar.label}
            </span>
            {/* Desc 14 — 14px/16px, 55 Roman (400) */}
            <p className="text-center text-sm font-normal leading-4 tracking-normal text-texto">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
