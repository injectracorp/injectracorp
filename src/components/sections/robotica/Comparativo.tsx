import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7259:7139).
type Rating = { type: "stars"; value: number };
type Text = { type: "text"; value: string };
type Cell = Rating | Text;

type Row = {
  solucao: string;
  velocidade: Cell;
  precisao: Cell;
  flexibilidade: Cell;
  cargaUtil: Cell;
  aplicacoes: Cell;
  integracaoAi: Cell;
};

const stars = (value: number): Rating => ({ type: "stars", value });
const text = (value: string): Text => ({ type: "text", value });

const ROWS: Row[] = [
  {
    solucao: "Robô Humanoide Neo",
    velocidade: stars(5),
    precisao: stars(5),
    flexibilidade: stars(4),
    cargaUtil: text("10+ kg"),
    aplicacoes: text("Interação, inspeção, assistência"),
    integracaoAi: text("Nativa"),
  },
  {
    solucao: "Robôs Cartesianos",
    velocidade: stars(5),
    precisao: stars(5),
    flexibilidade: stars(4),
    cargaUtil: text("Até 50kg"),
    aplicacoes: text("Pick & place, manuseio"),
    integracaoAi: text("Total"),
  },
  {
    solucao: "Células Robotizadas",
    velocidade: stars(4),
    precisao: stars(5),
    flexibilidade: stars(4),
    cargaUtil: text("Até 200kg"),
    aplicacoes: text("Processos automatizados"),
    integracaoAi: text("Total"),
  },
  {
    solucao: "Paletização",
    velocidade: stars(4),
    precisao: stars(4),
    flexibilidade: stars(3),
    cargaUtil: text("Até 500kg"),
    aplicacoes: text("Paletização, despalatização"),
    integracaoAi: text("Total"),
  },
  {
    solucao: "Automação Inteligente",
    velocidade: stars(4),
    precisao: stars(4),
    flexibilidade: stars(5),
    cargaUtil: text("Variável"),
    aplicacoes: text("Integração de processos"),
    integracaoAi: text("Total"),
  },
  {
    solucao: "Integração com IA",
    velocidade: stars(5),
    precisao: stars(5),
    flexibilidade: stars(5),
    cargaUtil: text("Ilimitada"),
    aplicacoes: text("Monitoramento e decisões"),
    integracaoAi: text("Nativa"),
  },
];

const COLUMNS: { label: string; key: keyof Omit<Row, "solucao">; width: string }[] = [
  { label: "Velocidade", key: "velocidade", width: "w-[138px]" },
  { label: "Precisão", key: "precisao", width: "w-[138px]" },
  { label: "Flexibilidade", key: "flexibilidade", width: "w-[138px]" },
  { label: "Carga Útil", key: "cargaUtil", width: "w-[138px]" },
  { label: "Aplicações", key: "aplicacoes", width: "w-[220px]" },
  { label: "Integração AI", key: "integracaoAi", width: "w-[138px]" },
];

function Cell({ cell }: { cell: Cell }) {
  if (cell.type === "text") {
    return (
      <span className="text-center text-xs font-normal leading-[14px] tracking-normal text-texto">
        {cell.value}
      </span>
    );
  }
  return (
    <div className="flex items-center gap-[5px]">
      {Array.from({ length: 5 }, (_, i) => (
        <Image
          key={i}
          src={i < cell.value ? "/assets/robotica/icon-star-filled.svg" : "/assets/robotica/icon-star-outline.svg"}
          alt=""
          width={12}
          height={12}
        />
      ))}
    </div>
  );
}

export default function Comparativo() {
  return (
    <Section innerClassName="gap-5">
      <div className="flex flex-col items-start gap-5">
        {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
        <h2 className="text-2xl font-bold leading-7 tracking-normal text-dark-blue">
          Comparativo: Qual solução é ideal para sua necessidade?
        </h2>
        <span
          className="h-0.5 w-[60px] rounded-full"
          style={{ background: "var(--gradient-brand)" }}
        />
      </div>

      <div className="flex w-full flex-col items-stretch gap-2.5 lg:flex-row lg:items-start">
        <div className="w-full overflow-x-auto rounded-2xl border-[0.3px] border-border-line-bd bg-wt">
          <div className="flex w-full min-w-[1110px]">
            {/* Coluna fixa com os nomes das soluções */}
            <div className="flex w-[200px] shrink-0 flex-col border-r-[0.3px] border-border-line-bd">
              <div className="flex h-[50px] items-center border-b-[0.3px] border-border-line-bd px-5 py-2.5">
                {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
                <span className="text-base font-bold leading-5 tracking-normal text-dark-blue">
                  Solução
                </span>
              </div>
              {ROWS.map((row) => (
                <div
                  key={row.solucao}
                  className="flex min-h-[42px] items-center border-b-[0.3px] border-border-line-bd px-5 py-2.5 last:border-b-0"
                >
                  {/* Label 12 — 12px/13px, 85 Heavy (700) */}
                  <span className="text-xs font-bold leading-[13px] tracking-normal text-texto">
                    {row.solucao}
                  </span>
                </div>
              ))}
            </div>

            {/* Colunas por critério */}
            {COLUMNS.map((col) => (
              <div key={col.key} className={`flex flex-1 min-w-[120px] flex-col border-r-[0.3px] border-border-line-bd last:border-r-0 ${col.width}`}>
                <div className="flex h-[50px] items-center justify-center border-b-[0.3px] border-border-line-bd p-2.5">
                  {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
                  <span className="text-center text-base font-bold leading-5 tracking-normal text-dark-blue">
                    {col.label}
                  </span>
                </div>
                {ROWS.map((row) => (
                  <div
                    key={row.solucao}
                    className="flex min-h-[42px] items-center justify-center border-b-[0.3px] border-border-line-bd p-2.5 last:border-b-0"
                  >
                    <Cell cell={row[col.key]} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex min-h-full min-w-[260px] max-w-[280px] flex-1 flex-col items-start gap-5 rounded-2xl bg-bg-cinza p-5">
          <Image src="/assets/representantes/icon-pessoas.svg" alt="" width={40} height={40} />
          <div className="flex flex-col items-start gap-5">
            {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
            <h3 className="text-base font-bold leading-5 tracking-normal text-prime-ip">
              Precisa de ajuda para escolher?
            </h3>
            <span
              className="h-0.5 w-[60px] rounded-full"
              style={{ background: "linear-gradient(156deg, var(--color-azul-claro) 6%, var(--color-magenta-claro) 93%)" }}
            />
          </div>
          {/* Desc 14 — 14px/16px, 55 Roman (400) */}
          <p className="text-sm font-normal leading-4 tracking-normal text-texto">
            Nossa equipe de especialistas vai indicar a melhor solução para sua operação.
          </p>
          <Link
            href="/fale-com-especialista"
            className="flex w-full items-center justify-center gap-2.5 rounded-md border border-azul-claro-plus bg-wt px-5 py-2.5 text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus hover:bg-bg-light-clean"
          >
            Falar com Especialista
            <Image className="object-contain" src="/assets/shared/arrow-side-blue.svg" alt="" width={9} height={9} />
          </Link>
        </div>
      </div>
    </Section>
  );
}
