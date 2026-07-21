import Section from "@/components/layout/Section";
import type { MachineLineDetail, ModelSpecs } from "@/data/machineModels";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7237:8410).
// Diferente do comparativo da página /maquinas (que compara linhas entre si),
// aqui a tabela é a ficha técnica vertical do modelo selecionado.

export default function Comparativo({
  line,
  specs,
}: {
  line: MachineLineDetail;
  specs: ModelSpecs;
}) {
  const rows: { label: string; value: string; header?: boolean }[] = [
    { label: "Série", value: line.shortName, header: true },
    { label: "Modelo", value: specs.modeloLabel },
    { label: "Força de fechamento", value: specs.forcaTonelagem },
    { label: "Distância entre colunas (Tie Bar)", value: specs.tieBar },
    { label: "Tecnologia", value: specs.tecnologia },
    { label: "Aplicações indicadas", value: specs.aplicacoesIndicadas },
    { label: "Configuração comercial", value: specs.configuracaoComercial },
    { label: "Suporte", value: specs.suporte },
  ];

  return (
    <Section innerClassName="gap-5">
      <div className="flex flex-col items-start gap-5">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          Comparativo entre as linhas
        </h2>
        {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
        <p className="text-lg font-normal leading-[22px] tracking-normal text-dark-blue">
          Encontre rapidamente a linha ideal para sua necessidade.
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
