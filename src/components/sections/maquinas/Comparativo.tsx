import Section from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7110:3277 / 7152:3792).
// A cor de cada coluna acompanha a linha correspondente no dict.maquinas.comparativo.columns
// (mesma ordem/índice); o texto (nome, aplicação, acionamento etc.) vive no dicionário.
const COLUMN_COLORS = [
  "var(--color-prime-ip)",
  "var(--color-speed-is)",
  "var(--color-velocity-iv)",
  "var(--color-form-if)",
  "var(--color-neo-ex-ie)",
  "var(--color-atlas-ia)",
  "var(--color-hydro-ih)",
  "var(--color-titan-it)",
  "var(--color-max-im)",
  "var(--color-equora-iq)",
];

type ColumnText = {
  name: string;
  aplicacao: string;
  acionamento: string;
  tonelagem: string;
  destaque: string;
};

export default function Comparativo({ dict }: { dict: Dictionary }) {
  const t = dict.maquinas.comparativo;
  const rows: { label: string; key: keyof Omit<ColumnText, "name"> }[] = [
    { label: t.rows[0], key: "aplicacao" },
    { label: t.rows[1], key: "acionamento" },
    { label: t.rows[2], key: "tonelagem" },
    { label: t.rows[3], key: "destaque" },
  ];

  return (
    <Section innerClassName="gap-5" className="bg-bg-cinza">
      <div className="flex flex-col items-start gap-5">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          {t.title}
        </h2>
        {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
        <p className="text-lg font-normal leading-[22px] tracking-normal text-dark-blue">
          {t.subtitle}
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
            {rows.map((row) => (
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
          {t.columns.map((col: ColumnText, i: number) => (
            <div
              key={col.name}
              className="flex flex-1 flex-col border-r-[0.3px] border-border-line-bd last:border-r-0"
            >
              <div className="flex h-20 items-center justify-center border-b-[0.3px] border-border-line-bd p-2.5">
                {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
                <span
                  className="text-center text-base font-bold leading-5 tracking-normal"
                  style={{ color: COLUMN_COLORS[i] }}
                >
                  {col.name}
                </span>
              </div>
              {rows.map((row) => (
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
