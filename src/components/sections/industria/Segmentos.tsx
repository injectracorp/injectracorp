import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7174:3546).
// As fotos dos segmentos ainda não existem no Figma — os cards usam um
// retângulo cinza (#9a9a9a) como placeholder de imagem, igual ao design.
const SEGMENTOS = [
  {
    icon: "/assets/industria/icon-automotiva.svg",
    title: "Automotiva",
    description:
      "Soluções completas para injeção plástica, componentes, acabamentos e automação e processos.",
  },
  {
    icon: "/assets/industria/icon-embalagens.svg",
    title: "Embalagens",
    description:
      "Máquinas e alta velocidade e precisão para embalagens plásticas e sistema de automação.",
  },
  {
    icon: "/assets/industria/icon-medico.svg",
    title: "Médico",
    description:
      "Equipamentos para produção de peças médicas com máximas precisão e rastreabilidade.",
  },
  {
    icon: "/assets/industria/icon-consumo.svg",
    title: "Consumo",
    description:
      "Soluções para produtos de uso diário com alta eficiência, qualidade e competitividade.",
  },
  {
    icon: "/assets/industria/icon-eletronicos.svg",
    title: "Eletrônicos",
    description: "Injeção de precisão para componentes eletrônicos e automação de montagem.",
  },
  {
    icon: "/assets/industria/icon-construcao.svg",
    title: "Consturção",
    description:
      "Soluções robustas para peças técnicas, tubos conexões e materiais de construção.",
  },
  {
    icon: "/assets/industria/icon-logistica.svg",
    title: "Logística",
    description: "Sistemas e soluções para otimizar processos, armazenagem e movimentação.",
  },
  {
    icon: "/assets/industria/icon-outros-segmentos.svg",
    title: "Outros Segmentos",
    description:
      "Atendemos diversos segmentos industriais com soluções sob medida e alta tecnologia.",
  },
];

export default function Segmentos() {
  return (
    <Section innerClassName="gap-5">
      <div className="flex flex-col items-start gap-5">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          Nossos Segmentos e Atuação
        </h2>
        <span
          className="h-0.5 w-[60px] rounded-full"
          style={{ background: "var(--gradient-brand)" }}
        />
      </div>

      <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
        {SEGMENTOS.map((segmento) => (
          <div
            key={segmento.title}
            className="relative flex min-w-[320px] flex-1 flex-col items-center overflow-hidden rounded-2xl bg-wt pb-10 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)]"
          >
            <div className="h-[250px] w-full shrink-0 bg-[#9a9a9a]" />
            <div className="flex w-full flex-col items-start justify-center gap-5 px-5 pt-[50px]">
              {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
              <span className="w-full text-lg font-bold leading-[22px] tracking-normal text-azul-claro-plus">
                {segmento.title}
              </span>
              {/* Texto menor 16 — 16px/20px, 55 Roman (400) */}
              <p className="min-h-[55px] w-full text-base font-normal leading-5 tracking-normal text-texto">
                {segmento.description}
              </p>
              <a
                href="#solucoes"
                className="flex items-center gap-1.5 text-sm font-bold leading-[17px] tracking-normal text-azul-claro-plus hover:opacity-80"
              >
                Ver soluções
                <Image className="object-contain" src="/assets/shared/arrow-side-blue.svg" alt="" width={9} height={9} />
              </a>
            </div>
            <span className="absolute left-5 top-[220px] flex size-[60px] items-center justify-center rounded-full bg-wt p-4 shadow-[2px_2px_6px_0px_rgba(76,95,224,0.25)]">
              <Image src={segmento.icon} alt="" width={30} height={30} />
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
