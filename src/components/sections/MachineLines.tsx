import Image from "next/image";
import Section from "@/components/layout/Section";

// Cada linha (ex.: PRIME - IP) representa uma família de máquinas com variações/modelos
// internos (ex.: tonelagens ou capacidades diferentes dentro da mesma linha). A UI ainda
// não expõe isso — `variants` só existe para já ter onde colocar essa lista quando os
// dados reais chegarem, sem precisar redesenhar a estrutura do card depois.
type MachineVariant = {
  name: string;
  description?: string;
};

type Machine = {
  name: string;
  color: string;
  icon: string;
  description: string;
  variants: MachineVariant[];
};

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7011:2371).
const MACHINES: Machine[] = [
  {
    name: "PRIME - IP",
    color: "var(--color-prime-ip)",
    icon: "/assets/machines/icon-prime.svg",
    description: "Alta precisão e versatilidade para aplicações gerais.",
    variants: [],
  },
  {
    name: "SPEED - IS",
    color: "var(--color-speed-is)",
    icon: "/assets/machines/icon-speed.svg",
    description: "Ciclos rápidos e máxima eficiência para alta produtividade.",
    variants: [],
  },
  {
    name: "VELOCITY - IV",
    color: "var(--color-velocity-iv)",
    icon: "/assets/machines/icon-velocity.svg",
    description:
      "Ultra alta velocidade e ciclos extremamente rápidos para máxima produtividade.",
    variants: [],
  },
  {
    name: "FORM - IF",
    color: "var(--color-form-if)",
    icon: "/assets/machines/icon-form.svg",
    description:
      "Soluções otimizadas para peças técnicas com alta precisão e acabamento.",
    variants: [],
  },
  {
    name: "NEO EX - IE",
    color: "var(--color-neo-ex-ie)",
    icon: "/assets/machines/icon-neo.svg",
    description:
      "Linha elétrica de alta precisão, repetibilidade e eficiência energética.",
    variants: [],
  },
  {
    name: "ATLAS - IA",
    color: "var(--color-atlas-ia)",
    icon: "/assets/machines/icon-atlas.svg",
    description:
      "Especializada em caixas plásticas, palets e peças de grande porte. Estrutura robusta e alto desempenho.",
    variants: [],
  },
  {
    name: "HYDRO - IH",
    color: "var(--color-hydro-ih)",
    icon: "/assets/machines/icon-hydro.svg",
    description:
      "Sistema hidráulico de alta potência para aplicações exigentes e peças de grandes dimensões.",
    variants: [],
  },
  {
    name: "TITAN - IT",
    color: "var(--color-titan-it)",
    icon: "/assets/machines/icon-titan.svg",
    description:
      "Potência extrema para moldes grandes e aplicações industriais de alta exigência.",
    variants: [],
  },
  {
    name: "MAX - IM",
    color: "var(--color-max-im)",
    icon: "/assets/machines/icon-max.svg",
    description: "Máxima capacidade e robustez para os maiores desafios da indústria.",
    variants: [],
  },
];

export default function MachineLines() {
  return (
    <Section innerClassName="gap-5">
      <div className="flex w-full flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-1 text-dark-blue">
          {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
          <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal sm:text-[32px] sm:leading-[39px]">
            Nossas Linhas de Máquinas
          </h2>
          {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
          <p className="text-lg font-normal leading-[22px] tracking-normal">
            Soluções completas para os setores mais exigentes da indústria.
          </p>
        </div>
        {/* Label 14 — 14px/17px, 85 Heavy (700) */}
        <a
          href="#maquinas"
          className="flex shrink-0 items-center gap-1.5 text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus hover:opacity-80"
        >
          Ver todas as máquinas
          <Image src="/assets/machines/arrow-side.svg" alt="" width={9} height={9} />
        </a>
      </div>

      {/* Cards com largura fixa (264px, igual ao Figma) e centralizados —
          não usam flex-1 para não esticar de forma desigual quando a última
          linha do wrap tem menos itens que as demais. */}
      <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
        {MACHINES.map((machine) => (
          <div
            key={machine.name}
            className="flex w-[264px] flex-none flex-col items-center gap-5 rounded-2xl bg-bg-cinza px-[15px] py-[30px]"
          >
            <div className="flex w-full flex-col items-center gap-5">
              {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
              <span
                className="text-lg font-bold leading-[22px] tracking-normal"
                style={{ color: machine.color }}
              >
                {machine.name}
              </span>
              <span
                className="h-[2px] w-[60px] rounded-full"
                style={{ background: "var(--gradient-brand)" }}
              />
            </div>
            <Image
              src="/assets/machines/machine-photo.png"
              alt={machine.name}
              width={300}
              height={112}
              className="h-auto w-full max-w-[300px]"
            />
            <div className="flex w-full items-center gap-[15px]">
              <Image src={machine.icon} alt="" width={30} height={30} className="shrink-0" />
              {/* Label 14 — 14px/17px, 85 Heavy (700) */}
              <p className="flex-1 text-sm font-bold leading-[17px] tracking-normal text-texto">
                {machine.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
