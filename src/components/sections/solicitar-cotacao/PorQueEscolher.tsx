import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7270:8373).
const RAZOES = [
  {
    icon: "/assets/solicitar-cotacao/icon-chat.svg",
    title: "Atendimento Consultivo",
    description: "Entendemos seu projeto para entregar a melhor solução.",
  },
  {
    icon: "/assets/fale-com-especialista/icon-personalizacao.svg",
    title: "Projeto sob medida",
    description: "Cada detalhe é desenvolvido para suas necessidades.",
  },
  {
    icon: "/assets/solicitar-cotacao/icon-lamp-ideia.svg",
    title: "Resposta rápida",
    description: "Agilidade no retorno e propostas personalizadas.",
  },
  {
    icon: "/assets/footer/icon-headset.svg",
    title: "Suporte Técnico",
    description: "Acompanhamento especializado antes, durante e pós-venda.",
  },
  {
    icon: "/assets/solicitar-cotacao/icon-brain.svg",
    title: "Soluções Integradas",
    description: "Máquinas, robótica e plataforma AI conectadas para máxima eficiência.",
  },
  {
    icon: "/assets/solicitar-cotacao/icon-pessoa-global.svg",
    title: "Presença nas Américas",
    description: "Atendimento local e suporte em toda a América.",
  },
];

export default function PorQueEscolher() {
  return (
    <Section innerClassName="gap-10">
      <div className="flex w-full flex-col items-start gap-5">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="w-full text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          Porque escolher a Injectra?
        </h2>
        <span
          className="h-0.5 w-[60px] rounded-full"
          style={{ background: "var(--gradient-injectra)" }}
        />
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-5">
        {RAZOES.map((razao) => (
          <div key={razao.title} className="flex min-w-[180px] flex-1 flex-col items-center justify-center gap-5">
            <Image src={razao.icon} alt="" width={40} height={40} className="object-contain" />
            {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
            <h3 className="min-h-[35px] w-full text-center text-lg font-bold leading-[22px] tracking-normal text-prime-ip">
              {razao.title}
            </h3>
            {/* Desc 14 — 14px/16px, 55 Roman (400) */}
            <p className="w-full text-center text-sm font-normal leading-4 tracking-normal text-texto">
              {razao.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
