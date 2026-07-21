import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7256:6430).
const APLICACOES = [
  { icon: "/assets/robotica/icon-injecao-plastica.svg", title: "Injeção Plástica", description: "Remoção de peças e alimentação." },
  { icon: "/assets/robotica/icon-manuseio.svg", title: "Manuseio", description: "Pick & Place de alta velocidade" },
  { icon: "/assets/robotica/icon-montagem.svg", title: "Montagem", description: "Montagem e inserção de componentes" },
  { icon: "/assets/robotica/icon-inspecao.svg", title: "Inspeção", description: "Visão inteligente e controle de qualidade." },
  { icon: "/assets/robotica/icon-paletizacao-app.svg", title: "Paletização", description: "Formação de camadas e paletização." },
  { icon: "/assets/robotica/icon-embalagem.svg", title: "Embalagem", description: "Encartuchamento e embalagens." },
  { icon: "/assets/robotica/icon-logistica-interna.svg", title: "Logística Interna", description: "Movimentação e transporte autônomo." },
];

export default function Aplicacoes() {
  return (
    <Section innerClassName="gap-10">
      <div className="flex flex-col items-start gap-5">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          Aplicações em Diferentes Setores
        </h2>
        <span
          className="h-0.5 w-[60px] rounded-full"
          style={{ background: "var(--gradient-brand)" }}
        />
      </div>

      <div className="flex w-full flex-wrap items-start justify-center gap-5">
        {APLICACOES.map((aplicacao) => (
          <div
            key={aplicacao.title}
            className="flex min-w-[180px] flex-1 flex-col items-center justify-center gap-5"
          >
            <Image className="object-contain" src={aplicacao.icon} alt="" width={40} height={40} />
            {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
            <span className="w-full text-center text-lg font-bold leading-[22px] tracking-normal text-prime-ip">
              {aplicacao.title}
            </span>
            {/* Desc 14 — 14px/16px, 55 Roman (400) */}
            <p className="w-full text-center text-sm font-normal leading-4 tracking-normal text-texto">
              {aplicacao.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
