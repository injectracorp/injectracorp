import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7110:3291).
const TECNOLOGIAS = [
  {
    icon: "/assets/maquinas/icon-servo-drive.svg",
    title: "Servo Drive Inteligente",
    description: "Controle preciso de movimentos para máxima repetibilidade.",
  },
  {
    icon: "/assets/maquinas/icon-hidraulica-avancada.svg",
    title: "Hidráulica Avançada",
    description: "Sistemas hidráulicos de alto desempenho e eficiência.",
  },
  {
    icon: "/assets/maquinas/icon-injecao-precisao.svg",
    title: "Injeção de Alta Precisão",
    description: "Controle avançado de injeção para peças com qualidade superior.",
  },
  {
    icon: "/assets/maquinas/icon-eficiencia-energetica.svg",
    title: "Eficiência Energética",
    description: "Tecnologias que reduzem o consumo e aumentam a sustentabilidade.",
  },
  {
    icon: "/assets/maquinas/icon-conectividade-total.svg",
    title: "Conectividade Total",
    description: "Máquinas conectadas à Injectra AI para gestão inteligente.",
  },
  {
    icon: "/assets/maquinas/icon-seguranca-integrada.svg",
    title: "Segurança Integrada",
    description: "Sistemas completos de segurança para operador e processo.",
  },
];

export default function Tecnologias() {
  return (
    <Section innerClassName="gap-10">
      <div className="flex w-full flex-col items-start gap-5">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          Tecnologias Injectra
        </h2>
        {/* Texto Padrão 18 — 18px/22px, 55 Roman (400) */}
        <p className="text-lg font-normal leading-[22px] tracking-normal text-texto">
          Inovação que transforma performance em resultados.
        </p>
      </div>

      <div className="flex w-full flex-wrap items-start justify-center gap-5">
        {TECNOLOGIAS.map((item) => (
          <div
            key={item.title}
            className="flex min-w-[180px] flex-1 flex-col items-center gap-5"
          >
            <div className="flex w-full items-center gap-5">
              <Image src={item.icon} alt="" width={40} height={40} className="shrink-0" />
              {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
              <span className="flex-1 text-base font-bold leading-5 tracking-normal text-dark-blue">
                {item.title}
              </span>
            </div>
            {/* Desc 14 — 14px/16px, 55 Roman (400) */}
            <p className="w-full text-sm font-normal leading-4 tracking-normal text-texto">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
