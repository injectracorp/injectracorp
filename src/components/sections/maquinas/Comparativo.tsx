import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context + get_screenshot, node 7110:3277).
type Column = {
  name: string;
  color: string;
  badge?: string;
  sistema: string;
  forca: string;
  aplicacao: string;
  eficiencia: number;
  personalizacao: string;
  tecnologia: string;
};

const COLUMNS: Column[] = [
  {
    name: "Prime IP",
    color: "var(--color-prime-ip)",
    sistema: "Hidráulica",
    forca: "50 - 1.000 t",
    aplicacao: "Geral",
    eficiencia: 5,
    personalizacao: "Alta",
    tecnologia: "Servo Control",
  },
  {
    name: "Speed IS",
    color: "var(--color-speed-is)",
    sistema: "Hidráulica",
    forca: "80 - 1.200 t",
    aplicacao: "Alta Produtividade",
    eficiencia: 0,
    personalizacao: "Alta",
    tecnologia: "Fast Cycle",
  },
  {
    name: "Velocity IV",
    color: "var(--color-velocity-iv)",
    sistema: "Hidráulica",
    forca: "80 - 1.000 t",
    aplicacao: "Ultra Alta Velocidade",
    eficiencia: 5,
    personalizacao: "Alta",
    tecnologia: "Ultra Speed System",
  },
  {
    name: "Form IF",
    color: "var(--color-form-if)",
    sistema: "Hidráulica",
    forca: "100 - 1.300 t",
    aplicacao: "Peças Técnicas",
    eficiencia: 2,
    personalizacao: "Alta",
    tecnologia: "Precision Mold",
  },
  {
    name: "Neo EX IE",
    color: "var(--color-neo-ex-ie)",
    badge: "100% ELÉTRICA",
    sistema: "Elétrica",
    forca: "50 - 1.000 t",
    aplicacao: "Precisão e Eficiência",
    eficiencia: 5,
    personalizacao: "Muito Alta",
    tecnologia: "100% Elétrica",
  },
  {
    name: "Altas IA",
    color: "var(--color-atlas-ia)",
    sistema: "Hidráulica",
    forca: "300 - 3.500 t",
    aplicacao: "Grandes Volumes",
    eficiencia: 1,
    personalizacao: "Alta",
    tecnologia: "Heavy Duty Structure",
  },
  {
    name: "Hydro IH",
    color: "var(--color-hydro-ih)",
    sistema: "Hidráulica",
    forca: "200 - 5.000 t",
    aplicacao: "Alta Potência",
    eficiencia: 5,
    personalizacao: "Alta",
    tecnologia: "High Power System",
  },
  {
    name: "Titan IT",
    color: "var(--color-titan-it)",
    sistema: "Hidráulica",
    forca: "400 - 6.500 t",
    aplicacao: "Moldes Grandes",
    eficiencia: 0,
    personalizacao: "Alta",
    tecnologia: "Extra Large Mold",
  },
  {
    name: "Max IM",
    color: "var(--color-max-im)",
    sistema: "Hidráulica",
    forca: "500 - 10.000 t",
    aplicacao: "Máxima Capacidade",
    eficiencia: 0,
    personalizacao: "Muito Alta",
    tecnologia: "Super Performance",
  },
];

const ROWS: { label: string; key: keyof Column; stars?: boolean }[] = [
  { label: "Sistema", key: "sistema" },
  { label: "Força de Fechamento", key: "forca" },
  { label: "Aplicação Principal", key: "aplicacao" },
  { label: "Eficiência Energética", key: "eficiencia", stars: true },
  { label: "Personalização", key: "personalizacao" },
  { label: "Tecnologia Exclusiva", key: "tecnologia" },
];

function Stars({ count, color }: { count: number; color: string }) {
  return (
    <div className="flex items-center justify-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 12 12" width={12} height={12} fill={i < count ? color : "#d5d9de"}>
          <path d="M6 0l1.76 3.57 3.94.57-2.85 2.78.67 3.93L6 8.97 2.48 10.85l.67-3.93L.3 4.14l3.94-.57L6 0z" />
        </svg>
      ))}
    </div>
  );
}

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

      <div className="w-full overflow-x-auto rounded-2xl border-[0.5px] border-border-line-bd bg-wt">
        <div className="flex w-full min-w-[1080px]">
          {/* Coluna fixa com os rótulos das linhas */}
          <div className="flex w-[180px] shrink-0 flex-col border-r-[0.5px] border-border-line-bd">
            <div className="flex h-20 items-center border-b-[0.5px] border-border-line-bd p-5" />
            {ROWS.map((row) => (
              <div
                key={row.key}
                className="flex min-h-[60px] items-center border-b-[0.5px] border-border-line-bd px-5 py-2.5 last:border-b-0"
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
              className="flex flex-1 flex-col border-r-[0.5px] border-border-line-bd last:border-r-0"
            >
              <div className="flex h-20 flex-col items-center justify-center gap-2.5 border-b-[0.5px] border-border-line-bd px-5 py-2.5">
                {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
                <span
                  className="text-center text-base font-bold leading-5 tracking-normal"
                  style={{ color: col.color }}
                >
                  {col.name}
                </span>
                {col.badge && (
                  <span
                    className="flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-bold leading-[10px] tracking-normal text-wt"
                    style={{ backgroundColor: col.color }}
                  >
                    <Image src="/assets/maquinas/raio.svg" alt="" width={9} height={9} />
                    {col.badge}
                  </span>
                )}
              </div>
              {ROWS.map((row) => (
                <div
                  key={row.key}
                  className="flex min-h-[60px] items-center justify-center border-b-[0.5px] border-border-line-bd px-5 py-2.5 text-center last:border-b-0"
                >
                  {row.stars ? (
                    <Stars count={col.eficiencia} color={col.color} />
                  ) : (
                    // Desc 14 — 14px/16px, 55 Roman (400)
                    <span className="text-sm font-normal leading-4 tracking-normal text-texto">
                      {col[row.key]}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
