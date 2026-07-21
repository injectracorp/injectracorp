import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";
import { getMachinePhoto } from "@/data/machinePhotos";

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

// Conteúdo exato extraído via Figma MCP (get_metadata + get_design_context, node 7011:2371).
const MACHINES: Machine[] = [
  {
    name: "PRIME",
    color: "var(--color-prime-ip)",
    icon: "/assets/machines/icon-prime.svg",
    description: "Alta precisão e versatilidade para aplicações gerais.",
    variants: [],
  },
  {
    name: "SPEED",
    color: "var(--color-speed-is)",
    icon: "/assets/machines/icon-speed.svg",
    description: "Ciclos rápidos e máxima eficiência para alta produtividade.",
    variants: [],
  },
  {
    name: "VELOCITY",
    color: "var(--color-velocity-iv)",
    icon: "/assets/machines/icon-velocity.svg",
    description:
      "Ultra alta velocidade e ciclos extremamente rápidos para máxima produtividade.",
    variants: [],
  },
  {
    name: "FORM",
    color: "var(--color-form-if)",
    icon: "/assets/machines/icon-form.svg",
    description:
      "Soluções otimizadas para peças técnicas com alta precisão e acabamento.",
    variants: [],
  },
  {
    name: "NEO",
    color: "var(--color-neo-ex-ie)",
    icon: "/assets/machines/icon-neo.svg",
    description:
      "Linha elétrica de alta precisão, repetibilidade e eficiência energética.",
    variants: [],
  },
  {
    name: "ATLAS",
    color: "var(--color-atlas-ia)",
    icon: "/assets/machines/icon-atlas.svg",
    description:
      "Especializada em caixas plásticas, palets e peças de grande porte. Estrutura robusta e alto desempenho.",
    variants: [],
  },
  {
    name: "HYDRO",
    color: "var(--color-hydro-ih)",
    icon: "/assets/machines/icon-hydro.svg",
    description:
      "Sistema hidráulico de alta potência para aplicações exigentes e peças de grandes dimensões.",
    variants: [],
  },
  {
    name: "TITAN",
    color: "var(--color-titan-it)",
    icon: "/assets/machines/icon-titan.svg",
    description:
      "Potência extrema para moldes grandes e aplicações industriais de alta exigência.",
    variants: [],
  },
  {
    name: "MAX",
    color: "var(--color-max-im)",
    icon: "/assets/machines/icon-max.svg",
    description: "Máxima capacidade e robustez para os maiores desafios da indústria.",
    variants: [],
  },
  {
    name: "EQUORA",
    color: "var(--color-equora-iq)",
    icon: "/assets/machines/icon-equora.svg",
    description: "Híbrida, entregando alta eficiência energética e robustez.",
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
        <Link
          href="/maquinas"
          className="flex shrink-0 items-center gap-1.5 text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus hover:opacity-80"
        >
          Ver todas as máquinas
          <Image className="object-contain" src="/assets/shared/arrow-side-blue.svg" alt="" width={9} height={9} />
        </Link>
      </div>

      {/* Largura fixa de 264px por card, igual ao Figma (5 cards por fileira,
          2 fileiras) e centralizados; não usam flex-1 para não esticar de
          forma desigual quando a última linha tem menos itens. */}
      <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
        {MACHINES.map((machine) => {
          const photo = getMachinePhoto(machine.name);
          return (
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
                style={{ background: machine.color }}
              />
            </div>
            {/* Slot com altura mínima fixa (120px, igual ao Figma) para que
                fotos com aspect ratio diferentes não desalinhem os cards. */}
            <div className="flex min-h-[120px] w-full max-w-[300px] shrink-0 items-center justify-center">
              <Image
                src={photo?.src ?? "/assets/shared/machine-photo.png"}
                alt={machine.name}
                width={photo?.width ?? 300}
                height={photo?.height ?? 112}
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="flex w-full items-center gap-[15px]">
              <Image src={machine.icon} alt="" width={30} height={30} className="shrink-0 object-contain" />
              {/* Label 14 — 14px/17px, 85 Heavy (700) */}
              <p className="flex-1 text-sm font-bold leading-[17px] tracking-normal text-texto">
                {machine.description}
              </p>
            </div>
          </div>
          );
        })}
      </div>
    </Section>
  );
}
