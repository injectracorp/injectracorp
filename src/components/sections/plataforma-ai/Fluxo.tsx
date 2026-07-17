import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7202:4602).
const ETAPAS = [
  {
    image: "/assets/shared/machine-photo.png",
    title: "Máquinas Injectra",
    description: "Dados em tempo real",
  },
  {
    icon: "/assets/plataforma-ai/icon-sensores-dispositivos.svg",
    title: "Sensores & Dispositivos",
    description: "Coleta de dados",
  },
  {
    icon: "/assets/plataforma-ai/icon-plataforma-ai-cloud.svg",
    title: "Plataforma AI Cloud",
    description: "Processamento e IA",
  },
  {
    icon: "/assets/plataforma-ai/icon-dashboards-relatorios.svg",
    title: "Dashboards & Relatórios",
    description: "Visualização e análise",
  },
  {
    icon: "/assets/plataforma-ai/icon-acoes-decisoes.svg",
    title: "Ações & Decisões",
    description: "Resultados e eficiência",
  },
];

export default function Fluxo() {
  return (
    <Section className="bg-bg-cinza" innerClassName="gap-5">
      <div className="flex w-full flex-col items-start gap-5">
        {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
        <h2 className="text-[26px] font-bold leading-[28px] tracking-normal text-dark-blue">
          Agende sua experiência agora
        </h2>
        {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
        <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
          Viva a tecnologia Injectra na prática e descubra como podemos levar
          sua produção para o próximo nível.
        </p>
      </div>

      <div className="flex w-full flex-wrap items-start justify-center gap-5">
        {ETAPAS.map((etapa, index) => (
          <div key={etapa.title} className="flex flex-1 items-center gap-5">
            {index > 0 && (
              <Image
                src="/assets/plataforma-ai/arrow-flow.svg"
                alt=""
                width={50}
                height={11}
                className="hidden shrink-0 sm:block"
              />
            )}
            <div className="flex min-w-[160px] flex-1 flex-col items-center gap-[30px]">
              <div className="flex h-[100px] w-[160px] items-center justify-center">
                {etapa.image ? (
                  <Image src={etapa.image} alt="" width={160} height={60} className="h-auto w-full" />
                ) : (
                  <Image src={etapa.icon!} alt="" width={40} height={40} />
                )}
              </div>
              <div className="flex flex-col items-center gap-5 text-center">
                {/* Subtítulo BK 20 — 20px/22px, 85 Heavy (700) */}
                <span className="text-xl font-bold leading-[22px] tracking-normal text-azul-claro-plus">
                  {etapa.title}
                </span>
                {/* Desc 14 — 14px/16px, 55 Roman (400) */}
                <span className="text-sm font-normal leading-4 tracking-normal text-texto">
                  {etapa.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
