import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7259:6970).
const ETAPAS = [
  { photo: "/assets/robotica/photo-maquina-titan.png", title: "Máquinas Injectra", description: "Injetoras hidráulicas e elétricas." },
  { photo: "/assets/robotica/photo-robo-automacao.png", title: "Robôs e Automação", description: "Cartesianos Neo e células robotizadas." },
  { photo: "/assets/robotica/photo-esteira.png", title: "Transporte e Esteiras", description: "Movimentação Inteligente" },
  { photo: "/assets/robotica/photo-pallet.png", title: "Paletização", description: "Organização e empilhamento." },
  { photo: "/assets/robotica/photo-tablet-ai.png", title: "Plataforma Injectra AI", description: "Monitoramento e controle em tempo real." },
];

export default function Integracao() {
  return (
    <Section className="bg-bg-cinza" innerClassName="gap-10">
      <div className="flex w-full flex-col items-start gap-5">
        {/* TÍTULO 26 — 26px/28px, 85 Heavy (700) */}
        <h2 className="text-2xl font-bold leading-7 tracking-normal text-dark-blue">
          Integração Completa com a Indústria
        </h2>
        {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
        <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
          Soluções que se conectam perfeitamente ao seu processo produtivo.
        </p>
      </div>

      <div className="flex w-full flex-wrap items-start justify-center gap-10">
        <div className="flex flex-1 flex-wrap items-start justify-center gap-5">
          {ETAPAS.map((etapa, i) => (
            <div key={etapa.title} className="flex items-start gap-5">
              <div className="flex min-w-[160px] flex-1 flex-col items-center gap-2.5">
                <div className="flex h-[140px] w-full items-center justify-center rounded-2xl bg-wt p-2.5">
                  <Image
                    src={etapa.photo}
                    alt={etapa.title}
                    width={168}
                    height={120}
                    className="h-auto max-h-[120px] w-auto object-cover"
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-2.5 text-center">
                  {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
                  <span className="w-full text-base font-bold leading-5 tracking-normal text-azul-claro-plus">
                    {etapa.title}
                  </span>
                  {/* Desc 14 — 14px/16px, 55 Roman (400) */}
                  <span className="w-full text-sm font-normal leading-4 tracking-normal text-texto">
                    {etapa.description}
                  </span>
                </div>
              </div>
              {i < ETAPAS.length - 1 && (
                <Image
                  src="/assets/robotica/arrow-connect.svg"
                  alt=""
                  width={25}
                  height={11}
                  className="mt-[65px] hidden shrink-0 sm:block"
                />
              )}
            </div>
          ))}
        </div>

        <div className="relative flex min-h-[200px] min-w-[260px] flex-col items-start gap-5 overflow-hidden rounded-2xl px-5 py-[30px]">
          <Image
            src="/assets/robotica/card-bg-tudo-conectado.png"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark-blue/50" />
          <div className="relative z-10 flex flex-col items-start gap-5">
            {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
            <h3 className="text-lg font-bold leading-[22px] tracking-normal text-wt">
              Tudo conectado.
            </h3>
            <span className="h-0.5 w-[60px] rounded-full bg-wt" />
          </div>
          {/* Label 14 — 14px/17px, 85 Heavy (700) */}
          <p className="relative z-10 text-sm font-bold leading-[17px] tracking-normal text-wt">
            Monitoramento, dados e decisões em tempo real para máxima eficiência.
          </p>
          <a
            href="/plataforma-ai"
            className="relative z-10 flex min-h-10 items-center justify-center gap-2.5 rounded-md border-[0.5px] border-wt px-[15px] py-2.5 text-sm font-bold leading-[17px] tracking-normal text-wt transition-opacity hover:opacity-90"
          >
            Conheça a Plataforma AI
            <Image className="object-contain" src="/assets/shared/arrow-side-white.svg" alt="" width={9} height={9} />
          </a>
        </div>
      </div>
    </Section>
  );
}
