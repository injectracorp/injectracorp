import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";
import { getMachinePhoto } from "@/data/machinePhotos";

// A cor do botão "Ver Modelos" muda por linha de máquina — a seta precisa
// acompanhar via currentColor, então é um SVG inline (não um asset <img> fixo).
function ArrowIcon() {
  return (
    <svg viewBox="0 0 11.2 8.83675" width={9} height={9} fill="none" aria-hidden="true">
      <path
        d="M0.6 3.81838C0.268629 3.81838 0 4.08701 0 4.41838C0 4.74975 0.268629 5.01838 0.6 5.01838V4.41838V3.81838ZM11.0243 4.84264C11.2586 4.60833 11.2586 4.22843 11.0243 3.99411L7.20589 0.175736C6.97157 -0.0585785 6.59167 -0.0585785 6.35736 0.175736C6.12304 0.410051 6.12304 0.78995 6.35736 1.02426L9.75147 4.41838L6.35736 7.81249C6.12304 8.0468 6.12304 8.4267 6.35736 8.66102C6.59167 8.89533 6.97157 8.89533 7.20589 8.66102L11.0243 4.84264ZM0.6 4.41838V5.01838H10.6V4.41838V3.81838H0.6V4.41838Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7168:3695 — "Frame 240/Variante 2").
// Substitui a antiga tira seletora + grid "Selecione o modelo": agora é um único
// grid de 10 cards (9 linhas + EQUORA - IQ, a nova linha híbrida).
type Machine = {
  name: string;
  color: string;
  description: string;
  /** Rota da primeira máquina com specs reais na linha — "#" enquanto a
   * linha não tiver dados de modelo cadastrados em machineModels.ts. */
  href: string;
};

const MACHINES: Machine[] = [
  {
    name: "PRIME",
    color: "var(--color-azul-claro-plus)",
    description: "Alta precisão e versatilidade para aplicações gerais.",
    href: "/maquinas/prime-ip/60",
  },
  {
    name: "SPEED",
    color: "var(--color-speed-is)",
    description: "Ciclos rápidos e máxima eficiência.",
    href: "#",
  },
  {
    name: "VELOCITY",
    color: "var(--color-velocity-iv)",
    description: "Ultra alta velocidade e produtividade extrema.",
    href: "#",
  },
  {
    name: "FORM",
    color: "var(--color-form-if)",
    description: "Soluções para peças técnicas com alta precisão.",
    href: "#",
  },
  {
    name: "NEO",
    color: "var(--color-neo-ex-ie)",
    description: "Linha 100% elétrica com alta repetibilidade e eficiência energética.",
    href: "#",
  },
  {
    name: "ATLAS",
    color: "var(--color-atlas-ia)",
    description: "Especializada em caixas plásticas, pallets e peças de grande porte.",
    href: "#",
  },
  {
    name: "HYDRO",
    color: "var(--color-hydro-ih)",
    description: "Potência hidráulica para aplicações exigentes.",
    href: "#",
  },
  {
    name: "TITAN",
    color: "var(--color-titan-it)",
    description: "Grandes toneladas para moldes robustos e alta exigência.",
    href: "#",
  },
  {
    name: "MAX",
    color: "var(--color-max-im)",
    description: "Máxima capacidade e robustez para os maiores desafios.",
    href: "#",
  },
  {
    name: "EQUORA",
    color: "var(--color-equora-iq)",
    description: "Equilíbrio entre força, eficiência e economia com tecnologia híbrida.",
    href: "#",
  },
];

export default function LinhasDeMaquinas() {
  return (
    <Section innerClassName="gap-5">
      <div className="flex flex-col gap-5 text-dark-blue">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal sm:text-[32px] sm:leading-[39px]">
          Nossas Linhas de Máquinas
        </h2>
        {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
        <p className="text-lg font-normal leading-[22px] tracking-normal">
          Encontre rapidamente a linha ideal para sua necessidade.
        </p>
      </div>

      <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
        {MACHINES.map((machine) => {
          const photo = getMachinePhoto(machine.name);
          return (
          <div
            key={machine.name}
            className="flex min-w-[264px] flex-1 flex-col items-center gap-5 rounded-2xl border border-border-line-bd bg-wt px-5 py-10"
          >
            {/* Subtítulo BK 20 — 20px/22px, 85 Heavy (700) */}
            <span
              className="w-full text-center text-xl font-bold leading-[22px] tracking-normal"
              style={{ color: machine.color }}
            >
              {machine.name}
            </span>
            {/* Slot com altura mínima fixa (120px) para que fotos com aspect
                ratio diferentes não desalinhem os cards. */}
            <div className="flex min-h-[120px] w-full max-w-[300px] shrink-0 items-center justify-center">
              <Image
                src={photo?.src ?? "/assets/shared/machine-photo.png"}
                alt={machine.name}
                width={photo?.width ?? 300}
                height={photo?.height ?? 112}
                className="h-auto w-full object-contain"
              />
            </div>
            {/* Label 14 — 14px/17px, 85 Heavy (700) */}
            <p className="min-h-11 w-full text-center text-sm font-bold leading-[17px] tracking-normal text-texto">
              {machine.description}
            </p>
            <Link
              href={machine.href}
              className="flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border bg-wt px-[15px] py-2.5 text-base font-bold leading-[normal] transition-opacity hover:opacity-90"
              style={{ borderColor: machine.color, color: machine.color }}
            >
              Ver Modelos
              <ArrowIcon />
            </Link>
          </div>
          );
        })}
      </div>
    </Section>
  );
}
