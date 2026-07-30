import Image from "next/image";
import Link from "@/components/LocaleLink";
import Section from "@/components/layout/Section";
import { getMachineLine } from "@/data/machineModels";
import { getMachinePhoto } from "@/data/machinePhotos";
import type { Dictionary } from "@/lib/i18n/dictionary";

// A cor do botão "Ver Modelos" muda por linha de máquina — a seta precisa
// acompanhar via currentColor, então é um SVG inline (não um asset <img> fixo).
// Mesmo ícone usado em maquinas/LinhasDeMaquinas.tsx.
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
  variants: MachineVariant[];
  lineSlug: string;
};

// Conteúdo exato extraído via Figma MCP (get_metadata + get_design_context, node 7011:2371).
// Descrições (traduzíveis) vivem em dict.home.machineLines.items, na mesma ordem.
// lineSlug segue o mesmo mapeamento de maquinas/LinhasDeMaquinas.tsx, usado para
// montar o link do botão "Ver Modelos" (primeiro modelo cadastrado da linha).
const MACHINES: Machine[] = [
  {
    name: "PRIME",
    color: "var(--color-prime-ip)",
    icon: "/assets/machines/icon-prime.svg",
    variants: [],
    lineSlug: "prime-ip",
  },
  {
    name: "SPEED",
    color: "var(--color-speed-is)",
    icon: "/assets/machines/icon-speed.svg",
    variants: [],
    lineSlug: "speed-is",
  },
  {
    name: "VELOCITY",
    color: "var(--color-velocity-iv)",
    icon: "/assets/machines/icon-velocity.svg",
    variants: [],
    lineSlug: "velocity-iv",
  },
  {
    name: "FORM",
    color: "var(--color-form-if)",
    icon: "/assets/machines/icon-form.svg",
    variants: [],
    lineSlug: "form-if",
  },
  {
    name: "NEO",
    color: "var(--color-neo-ex-ie)",
    icon: "/assets/machines/icon-neo.svg",
    variants: [],
    lineSlug: "neo-ex-ie",
  },
  {
    name: "ATLAS",
    color: "var(--color-atlas-ia)",
    icon: "/assets/machines/icon-atlas.svg",
    variants: [],
    lineSlug: "atlas-ia",
  },
  {
    name: "HYDRO",
    color: "var(--color-hydro-ih)",
    icon: "/assets/machines/icon-hydro.svg",
    variants: [],
    lineSlug: "hydro-ih",
  },
  {
    name: "TITAN",
    color: "var(--color-titan-it)",
    icon: "/assets/machines/icon-titan.svg",
    variants: [],
    lineSlug: "titan-it",
  },
  {
    name: "MAX",
    color: "var(--color-max-im)",
    icon: "/assets/machines/icon-max.svg",
    variants: [],
    lineSlug: "max-im",
  },
  {
    name: "EQUORA",
    color: "var(--color-equora-iq)",
    icon: "/assets/machines/icon-equora.svg",
    variants: [],
    lineSlug: "equora-iq",
  },
];

export default function MachineLines({ dict }: { dict: Dictionary }) {
  const t = dict.home.machineLines;
  // Mesmo rótulo do botão "Ver Modelos" da página MÁQUINAS (dict.maquinas.linhasDeMaquinas) —
  // reaproveitado em vez de duplicado, já que é o mesmo botão/link em ambas as páginas.
  const ctaVerModelos = dict.maquinas.linhasDeMaquinas.ctaVerModelos;
  return (
    <Section innerClassName="gap-5">
      <div className="flex w-full flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-1 text-dark-blue">
          {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
          <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal sm:text-[32px] sm:leading-[39px]">
            {t.title}
          </h2>
          {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
          <p className="text-lg font-normal leading-[22px] tracking-normal">
            {t.subtitle}
          </p>
        </div>
        {/* Label 14 — 14px/17px, 85 Heavy (700) */}
        <Link
          href="/maquinas"
          className="flex shrink-0 items-center gap-1.5 text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus hover:opacity-80"
        >
          {t.viewAllLabel}
          <Image className="object-contain" src="/assets/shared/arrow-side-blue.svg" alt="" width={9} height={9} />
        </Link>
      </div>

      {/* Sem largura máxima nos cards — só a mínima (264px, igual ao Figma) —
          para crescerem de forma responsiva e quebrar linha livremente. */}
      <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
        {MACHINES.map((machine, index) => {
          const photo = getMachinePhoto(machine.name);
          const description = t.items[index].description;
          const line = getMachineLine(machine.lineSlug);
          const firstModel = line?.models[0];
          const href = firstModel ? `/maquinas/${machine.lineSlug}/${firstModel.slug}` : "#";
          return (
          <div
            key={machine.name}
            className="flex min-w-[264px] flex-1 flex-col items-center gap-5 rounded-2xl bg-bg-cinza px-[15px] py-[30px]"
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
                src={photo?.src ?? "/assets/shared/machine-photo.webp"}
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
                {description}
              </p>
            </div>
            <Link
              href={href}
              className="mt-auto flex min-h-[30px] items-center justify-center gap-2.5 rounded-md border bg-wt px-[15px] py-2.5 text-base font-bold leading-[normal] transition-opacity hover:opacity-90"
              style={{ borderColor: machine.color, color: machine.color }}
            >
              {ctaVerModelos}
              <ArrowIcon />
            </Link>
          </div>
          );
        })}
      </div>
    </Section>
  );
}
