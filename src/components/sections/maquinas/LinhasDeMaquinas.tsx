import Image from "next/image";
import Link from "@/components/LocaleLink";
import Section from "@/components/layout/Section";
import { getMachineLine } from "@/data/machineModels";
import { getMachinePhoto } from "@/data/machinePhotos";
import type { Dictionary } from "@/lib/i18n/dictionary";

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
type MachineText = {
  name: string;
  description: string;
};

// Cor e linha acompanham a linha correspondente em dict.maquinas.linhasDeMaquinas.machines
// (mesma ordem/índice). A rota é resolvida em runtime a partir do primeiro
// modelo cadastrado em machineModels.ts para cada linha.
const MACHINE_META: { color: string; lineSlug: string }[] = [
  { color: "var(--color-azul-claro-plus)", lineSlug: "prime-ip" },
  { color: "var(--color-speed-is)", lineSlug: "speed-is" },
  { color: "var(--color-velocity-iv)", lineSlug: "velocity-iv" },
  { color: "var(--color-form-if)", lineSlug: "form-if" },
  { color: "var(--color-neo-ex-ie)", lineSlug: "neo-ex-ie" },
  { color: "var(--color-atlas-ia)", lineSlug: "atlas-ia" },
  { color: "var(--color-hydro-ih)", lineSlug: "hydro-ih" },
  { color: "var(--color-titan-it)", lineSlug: "titan-it" },
  { color: "var(--color-max-im)", lineSlug: "max-im" },
  { color: "var(--color-equora-iq)", lineSlug: "equora-iq" },
];

export default function LinhasDeMaquinas({ dict }: { dict: Dictionary }) {
  const t = dict.maquinas.linhasDeMaquinas;
  return (
    <Section innerClassName="gap-5">
      <div className="flex flex-col gap-5 text-dark-blue">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal sm:text-[32px] sm:leading-[39px]">
          {t.title}
        </h2>
        {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
        <p className="text-lg font-normal leading-[22px] tracking-normal">
          {t.subtitle}
        </p>
      </div>

      <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
        {t.machines.map((machine: MachineText, i: number) => {
          const meta = MACHINE_META[i];
          const photo = getMachinePhoto(machine.name);
          const line = getMachineLine(meta.lineSlug);
          const firstModel = line?.models[0];
          const href = firstModel ? `/maquinas/${meta.lineSlug}/${firstModel.slug}` : "#";
          return (
          <div
            key={machine.name}
            className="flex min-w-[264px] flex-1 flex-col items-center gap-5 rounded-2xl border border-border-line-bd bg-wt px-5 py-10"
          >
            {/* Subtítulo BK 20 — 20px/22px, 85 Heavy (700) */}
            <span
              className="w-full text-center text-xl font-bold leading-[22px] tracking-normal"
              style={{ color: meta.color }}
            >
              {machine.name}
            </span>
            {/* Slot com altura mínima fixa (120px) para que fotos com aspect
                ratio diferentes não desalinhem os cards. */}
            <div className="flex min-h-[120px] w-full max-w-[300px] shrink-0 items-center justify-center">
              <Image
                src={photo?.src ?? "/assets/shared/machine-photo.webp"}
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
              href={href}
              className="mt-auto flex w-full max-w-[220px] min-h-[30px] items-center justify-center gap-2.5 rounded-md border bg-wt px-[15px] py-2.5 text-base font-bold leading-[normal] transition-opacity hover:opacity-90"
              style={{ borderColor: meta.color, color: meta.color }}
            >
              {t.ctaVerModelos}
              <ArrowIcon />
            </Link>
          </div>
          );
        })}
      </div>
    </Section>
  );
}
