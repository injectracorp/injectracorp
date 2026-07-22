import Section from "@/components/layout/Section";
import type { MachineLineDetail, ModelSpecs } from "@/data/machineModels";
import type { Dictionary } from "@/lib/i18n/dictionary";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7237:8410).
// Diferente do comparativo da página /maquinas (que compara linhas entre si),
// aqui a tabela é a ficha técnica vertical do modelo selecionado.
// `modeloLabel`/`tecnologia` vêm de `specs` (machineModels.ts, atrelados à
// identidade do modelo); os demais valores vivem em
// dict.maquinas.modelo.especificacoes[line.slug] — este componente só recebe
// `line`/`specs`, sem o slug do modelo, por isso a ficha não é aninhada por modelo.

export default function Comparativo({
  line,
  specs,
  dict,
}: {
  line: MachineLineDetail;
  specs: ModelSpecs;
  dict: Dictionary;
}) {
  const t = dict.maquinas.modelo.comparativo;
  const ficha = dict.maquinas.modelo.especificacoes[line.slug];

  const rows: { label: string; value: string; header?: boolean }[] = [
    { label: t.rows.serie, value: line.shortName, header: true },
    { label: t.rows.modelo, value: specs.modeloLabel },
    { label: t.rows.forcaFechamento, value: ficha.forcaTonelagem },
    { label: t.rows.tieBar, value: ficha.tieBar },
    { label: t.rows.tecnologia, value: specs.tecnologia },
    { label: t.rows.aplicacoesIndicadas, value: ficha.aplicacoesIndicadas },
    { label: t.rows.configuracaoComercial, value: ficha.configuracaoComercial },
    { label: t.rows.suporte, value: ficha.suporte },
  ];

  return (
    <Section innerClassName="gap-5">
      <div className="flex flex-col items-start gap-5">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          {t.title}
        </h2>
        {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
        <p className="text-lg font-normal leading-[22px] tracking-normal text-dark-blue">
          {t.subtitle}
        </p>
        <span className="h-0.5 w-[60px] rounded-full" style={{ background: "var(--gradient-brand)" }} />
      </div>

      <div className="flex w-full overflow-hidden rounded-2xl border-[0.3px] border-border-line-bd bg-wt">
        <div className="flex w-full max-w-[280px] flex-1 flex-col border-r-[0.3px] border-border-line-bd">
          {rows.map((row) => (
            <div
              key={row.label}
              className={`flex items-center border-b-[0.3px] border-border-line-bd px-5 last:border-b-0 ${
                row.header ? "min-h-[60px] py-5" : "min-h-10 py-2.5"
              }`}
            >
              {/* Label 14 — 14px/17px, 85 Heavy (700) */}
              <span className="text-sm font-bold leading-[17px] tracking-normal text-texto">
                {row.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-1 flex-col">
          {rows.map((row) => (
            <div
              key={row.label}
              className={`flex items-center border-b-[0.3px] border-border-line-bd px-5 last:border-b-0 ${
                row.header ? "min-h-[60px] py-5" : "min-h-10 py-2.5"
              }`}
            >
              {row.header ? (
                // Texto Menor BK 16 — 16px/20px, 85 Heavy (700)
                <span
                  className="text-base font-bold leading-5 tracking-normal"
                  style={{ color: line.color }}
                >
                  {row.value}
                </span>
              ) : (
                // Desc 14 — 14px/16px, 55 Roman (400)
                <span className="text-sm font-normal leading-4 tracking-normal text-texto">
                  {row.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
