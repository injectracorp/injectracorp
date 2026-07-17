import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7186:4146).
const RAZOES = [
  {
    icon: "/assets/industria/icon-tecnologia-avancada.svg",
    title: "Tecnologia Avançada",
    description: "Máquinas elétricas e hidráulicas de última geração.",
  },
  {
    icon: "/assets/industria/icon-automacao-inteligente.svg",
    title: "Automação Inteligente",
    description: "Robótica e sistemas integrados para máxima eficiência.",
  },
  {
    icon: "/assets/industria/icon-suporte-especializado.svg",
    title: "Suporte Especializado",
    description: "Equipe técnica com experiência no seu segmento.",
  },
  {
    icon: "/assets/industria/icon-desempenho-comprovado.svg",
    title: "Desempenho Comprovado",
    description: "Mais produtividade, qualidade e redução de custos.",
  },
];

export default function PorQueEscolher() {
  return (
    <Section className="bg-bg-cinza" innerClassName="gap-10">
      {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
      <h2 className="w-full text-[32px] font-extrabold leading-[39px] tracking-normal text-dark-blue">
        Porque escolhe a Injectra para sua indústria?
      </h2>
      <div className="flex w-full flex-wrap items-center justify-center gap-10">
        {RAZOES.map((razao) => (
          <div
            key={razao.title}
            className="flex min-w-[180px] flex-1 items-center gap-5"
          >
            <Image src={razao.icon} alt="" width={50} height={50} className="shrink-0" />
            <div className="flex flex-1 flex-col items-start gap-[15px]">
              {/* Texto Menor BK 16 — 16px/20px, 85 Heavy (700) */}
              <span className="w-full text-base font-bold leading-5 tracking-normal text-dark-blue">
                {razao.title}
              </span>
              {/* Desc 14 — 14px/16px, 55 Roman (400) */}
              <p className="w-full text-sm font-normal leading-4 tracking-normal text-texto">
                {razao.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
