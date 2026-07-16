import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, nodes 7151:3144 e 7168:3695).
// Mesmos dados/textos da seção "Nossas Linhas de Máquinas" da HOME (MachineLines.tsx),
// aqui reorganizados em tira seletora + grid "Selecione o modelo".
type Machine = {
  name: string;
  color: string;
  category: "Hidráulica" | "Elétrica";
  description: string;
  badge?: string;
};

const MACHINES: Machine[] = [
  {
    name: "PRIME - IP",
    color: "var(--color-prime-ip)",
    category: "Hidráulica",
    description: "Alta precisão e versatilidade para aplicações gerais.",
  },
  {
    name: "SPEED - IS",
    color: "var(--color-speed-is)",
    category: "Hidráulica",
    description: "Ciclos rápidos e máxima eficiência para alta produtividade.",
  },
  {
    name: "VELOCITY - IV",
    color: "var(--color-velocity-iv)",
    category: "Hidráulica",
    description:
      "Ultra alta velocidade e ciclos extremamente rápidos para máxima produtividade.",
  },
  {
    name: "FORM - IF",
    color: "var(--color-form-if)",
    category: "Hidráulica",
    description:
      "Soluções otimizadas para peças técnicas com alta precisão e acabamento.",
  },
  {
    name: "NEO EX - IE",
    color: "var(--color-neo-ex-ie)",
    category: "Elétrica",
    description:
      "Linha elétrica de alta precisão, repetibilidade e eficiência energética.",
    badge: "100% ELÉTRICA",
  },
  {
    name: "ATLAS - IA",
    color: "var(--color-atlas-ia)",
    category: "Hidráulica",
    description:
      "Especializada em caixas plásticas, palets e peças de grande porte. Estrutura robusta e alto desempenho.",
  },
  {
    name: "HYDRO - IH",
    color: "var(--color-hydro-ih)",
    category: "Hidráulica",
    description:
      "Sistema hidráulico de alta potência para aplicações exigentes e peças de grandes dimensões.",
  },
  {
    name: "TITAN - IT",
    color: "var(--color-titan-it)",
    category: "Hidráulica",
    description:
      "Potência extrema para moldes grandes e aplicações industriais de alta exigência.",
  },
  {
    name: "MAX - IM",
    color: "var(--color-max-im)",
    category: "Hidráulica",
    description: "Máxima capacidade e robustez para os maiores desafios da indústria.",
  },
];

function ArrowButton() {
  return (
    <span
      className="flex size-[30px] shrink-0 items-center justify-center rounded-lg border"
      style={{ borderColor: "var(--color-azul-claro-minus)" }}
    >
      <Image src="/assets/maquinas/arrow-right.svg" alt="" width={15} height={10} />
    </span>
  );
}

export default function Seletor() {
  return (
    <Section innerClassName="gap-10">
      <div className="flex w-full flex-col gap-10">
        {/* Cabeçalho + tira seletora */}
        <div className="flex flex-col gap-5">
          <div className="flex w-full items-center justify-between gap-5">
            {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
            <h2 className="flex-1 text-[26px] font-bold leading-[28px] tracking-normal text-dark-blue">
              LINHAS DE MÁQUINAS
            </h2>
            {/* Label 14 — 14px/17px, 85 Heavy (700) */}
            <a
              href="#todas-maquinas"
              className="flex shrink-0 items-center gap-1.5 text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus hover:opacity-80"
            >
              Ver todas as máquinas
              <Image src="/assets/maquinas/arrow-side-blue.svg" alt="" width={9} height={9} />
            </a>
          </div>

          <div className="flex w-full flex-wrap items-stretch justify-center gap-2.5">
            {MACHINES.map((machine) => (
              <div
                key={machine.name}
                className="flex min-w-[140px] flex-1 flex-col items-center justify-center gap-5 rounded-2xl border border-border-line-bd bg-wt px-[15px] py-5"
              >
                <Image
                  src="/assets/machines/machine-photo.png"
                  alt={machine.name}
                  width={150}
                  height={56}
                  className="h-auto w-full max-w-[150px]"
                />
                <div className="flex w-full flex-col gap-2.5">
                  {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
                  <span
                    className="text-base font-bold leading-5 tracking-normal"
                    style={{ color: machine.color }}
                  >
                    {machine.name}
                  </span>
                  <div className="flex w-full items-center justify-between gap-2.5">
                    {/* Label 14 — 14px/17px, 85 Heavy (700) */}
                    <span
                      className="flex-1 text-sm font-bold leading-[17px] tracking-normal"
                      style={{ color: machine.color }}
                    >
                      {machine.category}
                    </span>
                    <ArrowButton />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selecione o modelo */}
        <div className="flex w-full flex-col gap-10">
          {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
          <h3 className="text-[26px] font-bold leading-[28px] tracking-normal text-dark-blue">
            Selecione o modelo
          </h3>
          <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
            {MACHINES.map((machine) => (
              <div
                key={machine.name}
                className="flex min-w-[370px] flex-1 flex-col items-center justify-center gap-10 rounded-2xl bg-bg-cinza px-5 py-10"
              >
                <Image
                  src="/assets/machines/machine-photo.png"
                  alt={machine.name}
                  width={300}
                  height={112}
                  className="h-auto w-full max-w-[300px]"
                />
                <div className="flex w-full flex-col items-start gap-2.5">
                  <div className="flex w-full items-center gap-2.5">
                    {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
                    <span
                      className="flex-1 text-lg font-bold leading-[22px] tracking-normal"
                      style={{ color: machine.color }}
                    >
                      {machine.name}
                    </span>
                    {machine.badge && (
                      <span
                        className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs font-bold leading-[13px] tracking-normal text-wt"
                        style={{ backgroundColor: machine.color }}
                      >
                        <Image src="/assets/maquinas/raio.svg" alt="" width={11} height={11} />
                        {machine.badge}
                      </span>
                    )}
                  </div>
                  {/* Label 14 — 14px/17px, 85 Heavy (700) */}
                  <span
                    className="w-full text-sm font-bold leading-[17px] tracking-normal"
                    style={{ color: machine.color }}
                  >
                    {machine.category}
                  </span>
                  <div className="flex w-full items-center gap-[15px]">
                    {/* Label 14 — 14px/17px, 85 Heavy (700) */}
                    <p className="flex-1 text-sm font-bold leading-[17px] tracking-normal text-texto">
                      {machine.description}
                    </p>
                    <ArrowButton />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
