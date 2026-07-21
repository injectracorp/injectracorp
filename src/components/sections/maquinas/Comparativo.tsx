import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7110:3277 / 7152:3792).
type Column = {
  name: string;
  color: string;
  aplicacao: string;
  acionamento: string;
  tonelagem: string;
  destaque: string;
};

const COLUMNS: Column[] = [
  {
    name: "Prime",
    color: "var(--color-prime-ip)",
    aplicacao: "Geral",
    acionamento: "Hidráulica",
    tonelagem: "60 - 1.000 t",
    destaque: "Precisão e Versatilidade",
  },
  {
    name: "Speed",
    color: "var(--color-speed-is)",
    aplicacao: "Alta Velocidade",
    acionamento: "Hidráulica",
    tonelagem: "70 - 800 t",
    destaque: "Ciclos rápidos e eficiência",
  },
  {
    name: "Velocity",
    color: "var(--color-velocity-iv)",
    aplicacao: "Alta Produfividade",
    acionamento: "Hidráulica",
    tonelagem: "80 - 500 t",
    destaque: "Velocidade Extrema",
  },
  {
    name: "Form",
    color: "var(--color-form-if)",
    aplicacao: "Peças Técnicas Precisas",
    acionamento: "Hidráulica",
    tonelagem: "100 - 800 t",
    destaque: "Alta Precisão",
  },
  {
    name: "Neo",
    color: "var(--color-neo-ex-ie)",
    aplicacao: "Energia e Alta Precisão",
    acionamento: "100% Elétrica",
    tonelagem: "60 - 350 t",
    destaque: "Eficiência energética e precisão",
  },
  {
    name: "Altas",
    color: "var(--color-atlas-ia)",
    aplicacao: "Grandes peças e embalagens",
    acionamento: "Hidráulica",
    tonelagem: "400 - 4.000 t",
    destaque: "Robustez para grandes peças",
  },
  {
    name: "Hydro",
    color: "var(--color-hydro-ih)",
    aplicacao: "Aplicações Pesadas",
    acionamento: "Hidráulica",
    tonelagem: "180 - 3.000 t",
    destaque: "Força para aplicações exigentes",
  },
  {
    name: "Titan",
    color: "var(--color-titan-it)",
    aplicacao: "Moldes Robustos",
    acionamento: "Hidráulica",
    tonelagem: "650 - 4.000 t",
    destaque: "Grandes tonelagens",
  },
  {
    name: "Max",
    color: "var(--color-max-im)",
    aplicacao: "Grandes Peças e Alta Exigência",
    acionamento: "Hidráulica",
    tonelagem: "800 - 5.000 t",
    destaque: "Máxima Capacidade",
  },
  {
    name: "Equora",
    color: "var(--color-equora-iq)",
    aplicacao: "Aplicações Exigentes e Versáteis",
    acionamento: "Híbrida",
    tonelagem: "100 - 2.000 t",
    destaque: "Equilíbrio em força e eficiência",
  },
];

const ROWS: { label: string; key: keyof Omit<Column, "name" | "color"> }[] = [
  { label: "Aplicação", key: "aplicacao" },
  { label: "Acionamento", key: "acionamento" },
  { label: "Faixa de Tonelagem", key: "tonelagem" },
  { label: "Destaque", key: "destaque" },
];

export default function Comparativo() {
  return (
    <Section innerClassName="gap-5" className="bg-bg-cinza">
      <div className="flex flex-col items-start gap-5">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          Comparativo entre as linhas
        </h2>
        {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
        <p className="text-lg font-normal leading-[22px] tracking-normal text-dark-blue">
          Encontre rapidamente a linha ideal para sua necessidade.
        </p>
        <span
          className="h-0.5 w-[60px] rounded-full"
          style={{ background: "var(--gradient-brand)" }}
        />
      </div>

      <div className="w-full overflow-x-auto rounded-2xl border-[0.3px] border-border-line-bd bg-wt">
        <div className="flex w-full min-w-[1230px]">
          {/* Coluna fixa com os rótulos das linhas */}
          <div className="flex w-[170px] shrink-0 flex-col border-r-[0.3px] border-border-line-bd">
            <div className="flex h-20 items-center border-b-[0.3px] border-border-line-bd py-5 pl-5 pr-2.5" />
            {ROWS.map((row) => (
              <div
                key={row.key}
                className="flex min-h-20 items-center border-b-[0.3px] border-border-line-bd py-2.5 pl-5 pr-2.5 last:border-b-0"
              >
                {/* Label 14 — 14px/17px, 85 Heavy (700) */}
                <span className="text-sm font-bold leading-[17px] tracking-normal text-texto">
                  {row.label}
                </span>
              </div>
            ))}
          </div>

          {/* Colunas por linha de máquina */}
          {COLUMNS.map((col) => (
            <div
              key={col.name}
              className="flex flex-1 flex-col border-r-[0.3px] border-border-line-bd last:border-r-0"
            >
              <div className="flex h-20 items-center justify-center border-b-[0.3px] border-border-line-bd p-2.5">
                {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
                <span
                  className="text-center text-base font-bold leading-5 tracking-normal"
                  style={{ color: col.color }}
                >
                  {col.name}
                </span>
              </div>
              {ROWS.map((row) => (
                <div
                  key={row.key}
                  className="flex min-h-20 items-center justify-center border-b-[0.3px] border-border-line-bd p-2.5 text-center last:border-b-0"
                >
                  {/* Desc 14 — 14px/16px, 55 Roman (400) */}
                  <span className="text-sm font-normal leading-4 tracking-normal text-texto">
                    {col[row.key]}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
