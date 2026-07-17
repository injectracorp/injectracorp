import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7202:4575).
const SOLUCOES = [
  {
    icon: "/assets/plataforma-ai/icon-dashboard-cloud.svg",
    title: "Dashboard Cloud",
    description:
      "Acompanhe todos os indicadores dea sua produção em tempo real, de qualquer lugar e dispositivo.",
  },
  {
    icon: "/assets/plataforma-ai/icon-app-mobile.svg",
    title: "App Mobile",
    description:
      "Tenha o controle da sua produção na palma da mão. Monitore, receba alertas e tome ações em qualquer lugar.",
  },
  {
    icon: "/assets/plataforma-ai/icon-iot-industrial.svg",
    title: "IoT Industrial",
    description:
      "Conecte máquinas, sensores e dispositivos para coleta de dados em tempo real com máxima segurança.",
  },
  {
    icon: "/assets/plataforma-ai/icon-oee.svg",
    title: "OEE",
    description:
      "Monitore Disponibilidade, Performance e Qualidade em tempo real, aumentando a eficiência da sua operação.",
  },
  {
    icon: "/assets/plataforma-ai/icon-analiticas.svg",
    title: "Analíticas",
    description:
      "Transforme dados em insights valiosos com análises avançadas e relatórios personalizados.",
  },
  {
    icon: "/assets/plataforma-ai/icon-manutencao-preditiva.svg",
    title: "Manutenção Preditiva",
    description:
      "Antecipe falhas e reduza paradas não programadas com algoritmos de IA e Machine Learning.",
  },
  {
    icon: "/assets/plataforma-ai/icon-alertas-inteligentes.svg",
    title: "Alertas Inteligentes",
    description:
      "Receba alertas críticos e recomendações inteligentes para agir antes que problemas impactem sua produção.",
  },
  {
    icon: "/assets/plataforma-ai/icon-atualizacoes-ota.svg",
    title: "Atualizações OTA",
    description:
      "Atualizações remotas de software e firmware garantem sua plataforma sempre atual e segura.",
  },
  {
    icon: "/assets/plataforma-ai/icon-injectra-ai.svg",
    title: "Injectra AI",
    description:
      "Inteligência Artificial aplicada à indústria afim de otimizar processos, qualidade e produtividade de forma contínua.",
  },
];

export default function Solucoes() {
  return (
    <Section innerClassName="gap-5">
      <div className="flex w-full flex-col items-start gap-5">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          Soluções que impulsionam sua indústria
        </h2>
        <span
          className="h-[2px] w-[60px] rounded-full"
          style={{ background: "var(--gradient-brand)" }}
        />
      </div>

      <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
        {SOLUCOES.map((item) => (
          <div
            key={item.title}
            className="flex min-w-[240px] flex-1 flex-col items-center gap-5 rounded-2xl bg-bg-cinza px-5 py-[30px]"
          >
            <Image src={item.icon} alt="" width={40} height={40} />
            <div className="flex w-full flex-col items-center gap-[15px]">
              {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
              <h3 className="min-h-[25px] w-full text-center text-lg font-bold leading-[22px] tracking-normal text-gradient-brand">
                {item.title}
              </h3>
              <span
                className="h-[3px] w-10 rounded-full"
                style={{ background: "var(--gradient-brand)" }}
              />
              {/* Texto menor 16 — 16px/20px, 55 Roman (400) */}
              <p className="min-h-[95px] w-full text-center text-base font-normal leading-5 tracking-normal text-texto">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
