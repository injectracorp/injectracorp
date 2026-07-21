import Image from "next/image";
import Section from "@/components/layout/Section";

// Conteúdo exato extraído via Figma MCP (get_design_context, node 7223:5968).
// O título é idêntico ao da seção de Benefícios (Beneficios.tsx) no arquivo
// Figma de origem — mantido como está no design.
const ETAPAS = [
  {
    number: 1,
    icon: "/assets/representantes/icon-cadastro.svg",
    title: "Cadastro",
    description: "Preencha o formulário completo e envie seus dados.",
  },
  {
    number: 2,
    icon: "/assets/representantes/icon-avaliacao.svg",
    title: "Avaliação",
    description: "Nosso time avaliará seu perfil e potencial para sua região.",
  },
  {
    number: 3,
    icon: "/assets/capacidade/checkin.svg",
    title: "Aprovação",
    description: "Você será aprovado e formalmente integrado ao programa.",
  },
  {
    number: 4,
    icon: "/assets/representantes/icon-treinamento.svg",
    title: "Treinamento",
    description: "Receba treinamentos técnicos e comerciais completos.",
  },
  {
    number: 5,
    icon: "/assets/representantes/icon-atuacao.svg",
    title: "Atuação",
    description:
      "Comece a representar e levar tecnologia Injectra para sua região.",
  },
];

export default function ComoFunciona() {
  return (
    <Section innerClassName="gap-5" className="bg-bg-cinza">
      <div className="flex w-full flex-col items-start gap-5">
        {/* TÍTULO 32 — 32px/39px, 95 Black (800) */}
        <h2 className="text-2xl font-extrabold leading-[30px] tracking-normal text-dark-blue sm:text-[32px] sm:leading-[39px]">
          Benefícios de ser um representante Injectra
        </h2>
        <span
          className="h-[2px] w-[60px] rounded-full"
          style={{ background: "var(--gradient-brand)" }}
        />
      </div>

      <div className="flex w-full flex-wrap items-stretch justify-center gap-5">
        {ETAPAS.map((etapa) => (
          <div
            key={etapa.number}
            className="relative flex min-h-[201px] min-w-[180px] flex-1 flex-col items-center justify-center gap-5 rounded-2xl bg-wt px-5 py-[30px]"
          >
            <span className="absolute left-[10px] top-[10px] flex size-6 items-center justify-center rounded-full bg-azul-claro-plus text-base font-bold leading-5 tracking-normal text-wt">
              {etapa.number}
            </span>
            <Image src={etapa.icon} alt="" width={40} height={40} />
            {/* Texto BK 18 — 18px/22px, 85 Heavy (700) */}
            <span className="text-center text-lg font-bold leading-[22px] tracking-normal text-prime-ip">
              {etapa.title}
            </span>
            {/* Desc 14 — 14px/16px, 55 Roman (400) */}
            <p className="text-center text-sm font-normal leading-4 tracking-normal text-texto">
              {etapa.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
