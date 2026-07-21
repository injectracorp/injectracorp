import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7262:8850).
const ITENS = [
  {
    icon: "/assets/sobre-nos/icon-machine.svg",
    title: "Máquinas",
    description: "Injetoras de alta precisão e desempenho superior.",
  },
  {
    icon: "/assets/sobre-nos/icon-braco-robo.svg",
    title: "Robô Neo",
    description: "Robótica colaborativa e soluções de automação.",
  },
  {
    icon: "/assets/sobre-nos/icon-iot.svg",
    title: "IoT Industrial",
    description: "Conectividade e monitoramento em tempo real.",
  },
  {
    icon: "/assets/sobre-nos/icon-ia.svg",
    title: "Injectra AI",
    description: "Inteligência Artificial aplicada à industria.",
  },
  {
    icon: "/assets/sobre-nos/icon-mobile.svg",
    title: "App Mobile",
    description: "Controle e acompanhamento de onde você estiver.",
  },
  {
    icon: "/assets/sobre-nos/icon-analytics-cloud.svg",
    title: "Cloud & Analytics",
    description: "Dados seguros e análises para decisões estratégicas.",
  },
  {
    icon: "/assets/sobre-nos/icon-plataforma.svg",
    title: "Experience Center",
    description: "Ambiente imersivo para testes, treinamentos e inovação.",
  },
  {
    icon: "/assets/footer/icon-headset.svg",
    title: "Suporte Técnico",
    description: "Especialistas prontos para apoiar sua operação.",
  },
];

export default function Ecossistema() {
  return (
    <Section className="bg-bg-cinza" innerClassName="gap-5">
      <div className="flex w-full flex-col items-start gap-5">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          Nosso Ecossistema
        </h2>
        <span
          className="h-0.5 w-[60px] rounded-full"
          style={{ background: "var(--gradient-injectra)" }}
        />
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-5">
        {ITENS.map((item) => (
          <div
            key={item.title}
            className="flex min-w-[280px] flex-1 items-center gap-5 rounded-2xl bg-wt px-5 py-[30px]"
          >
            <Image src={item.icon} alt="" width={50} height={50} className="shrink-0 object-contain" />
            <div className="flex flex-1 flex-col items-start">
              {/* Subtítulo BK 20 — 20px/22px, 85 Heavy (700) */}
              <span className="min-h-[35px] w-full text-xl font-bold leading-[22px] tracking-normal text-azul-claro-plus">
                {item.title}
              </span>
              {/* Texto menor 16 — 16px/20px, 55 Roman (400) */}
              <p className="min-h-[45px] w-full text-base font-normal leading-5 tracking-normal text-texto">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
