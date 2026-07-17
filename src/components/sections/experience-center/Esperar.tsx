import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7199:4497).
const ITEMS = [
  { icon: "/assets/experience-center/icon-atendimento-personalizado.svg", label: "Atendimento personalizado" },
  { icon: "/assets/experience-center/icon-solucoes-adaptadas.svg", label: "Soluções adaptadas para sua necessidade" },
  { icon: "/assets/experience-center/icon-tecnologia-ultima-geracao.svg", label: "Tecnologia de última geração" },
  { icon: "/assets/experience-center/icon-ambiente-moderno.svg", label: "Ambiente moderno e interativo" },
  { icon: "/assets/experience-center/icon-resultados-reais.svg", label: "Resultados reais comprovados" },
];

export default function Esperar() {
  return (
    <Section className="bg-bg-cinza" innerClassName="gap-10">
      <h2 className="w-full text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
        O que você pode esperar
      </h2>

      <div className="flex w-full flex-wrap items-start justify-center gap-10">
        {ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex min-w-[180px] flex-1 flex-col items-center gap-5"
          >
            <Image src={item.icon} alt="" width={50} height={50} />
            {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
            <span className="min-h-[35px] w-full text-center text-lg font-bold leading-[22px] tracking-normal text-dark-blue">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
